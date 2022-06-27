---
title: Eureka基础知识
prev:
  text: Rest微服务工程构建
  link: /microservice/build/Rest微服务工程构建.md
next:
  text: Zookeeper基础知识
  link: /microservice/build/Zookeeper基础知识.md
---
::: info
文章介绍:
:::
[[toc]]

#  Eureka基础知识

## 一 、application.yml 

```yaml
server:
  port: 7001

eureka:
  instance:
    hostname: localhost #eureka服务端实例名称
  client:
    register-with-eureka: false #false表示不向注册中心注册自己
    fetch-registry: false #false表示我自己就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
    service-url:
      #设置与Eureka Server交互的地址查询服务和注册服务都需要依赖这个地址
      defaultzone: http:${eureka.instance.hostname}:${server.port}/eureka/

```



## 二、主启动类

```java
@SpringBootApplication
@EnableEurekaServer
public class EurekaMain7001 {
    public static void main(String[] args) {
        SpringApplication.run(EurekaMain7001.class, args);
    }
}
```

@EnableEurekaServer注解表示当前是注册中心

## 三、注册进注册中心

### 1、POM修改

引入依赖

```xml

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
```

### 2、修改yml文件，添加如下内容

```yaml
eureka:
  client:
    register-with-eureka: true #表示是否将自己注册进 EurekaServer 默认为 true 。
    fetchRegistry: true #是否从 EurekaServer 抓取已有的注册信息，默认为 true 。单节点无所谓，集群必须设置为 true 才能配合 ribbon 使用负载均衡
    service-url:
      defaultZone: http://localhost:7001/eureka
```

### 3、启动类中添加@@EnableEurekaClient注解

## 三、Eureka注册中心集群构建

### 1、原理

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/eureka服务集群原理图.jpg)

### 2、Eureka之间的相互注册

**修改映射配置添加进hosts文件** 

```
127.0.0.1  eureka7001.com 
127.0.0.1  eureka7002.com
```

**修改yaml文件**

```yaml
eureka:
  instance:
    hostname: eureka7002.com #eureka服务端实例名称
  client:
    register-with-eureka: false #false表示不向注册中心注册自己
    fetch-registry: false #false表示我自己就是注册中心，我的职责就是维护服务实例，并不需要去检索服务
    service-url:
      #设置与Eureka Server交互的地址查询服务和注册服务都需要依赖这个地址
      defaultzone: http:eureka7001.com:7001/eureka/
```

::: danger

配置Eureka集群互相注册时，出现无法互相注册的情况，解决了很久，犯了两个非常愚蠢的错误，一是将defaultZone的Z写成了小写，二是写注册地址是http://eureka7002.com:7002/eureka/写成了http:eureka7002.com:7002/eureka/

:::

###  3、Eureka客户端注册进服务中心

修改yml文件

```
defaultZone配置改为
defaultZone: http://eureka7001.com:7001/eureka,http://eureka7002.com:7002/eureka
```

::: tip

思考:如果要配置三个配置集群的eureka注册中心，改怎么配置？

只需要修改yml文件，将新增加的注册中心配置到defaultZone中即可，比如：

defualtZone: http:eureka7002.com:7002/eureka/,http:eureka7003.com:7003/eureka/

:::

## 三、Eureka客户端集群构建

以cloud-provider-payment8001支付中心为例，建立cloud-provider-payment8002

application name相同，端口不同

### 1、负载均衡调用

使用微服务名调用

cloud-consumer-order80调用cloud-provider-payment项目时，将写死的地址改为http://CLOUD-PROVIDER-PAYMENT

在RestTemplate上面加上@LoadBalanced注解，打开restTemplate的负载均衡功能

```java
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
```

## 四、actuator微服务信息完善

在eureka配置下面加

```
  instance:
    instance-id: payment8002 #修改注册中心中显示的实例名称
    prefer-ip-address: true #访问路径可以显示 IP 地址
```

修改前

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/actuator信息修改之前.jpg)

修改后

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/actuator信息修改之后.jpg)

## 五、服务发现Discovery

对于注册进eureka里面的微服务，可以通过服务发现来获得该服务的信息 

在启动类上加注解@EnableDiscoveryClient

使用：

```java

    @Autowired
    private DiscoveryClient discoveryClient;
    @GetMapping("/get/discovery")
    public Object discovery() {
        List<String> services = discoveryClient.getServices();
        List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PAYMENT-SERVICE");
        for (String element : services) {
            System.out.println(element);
        }
        for (ServiceInstance element : instances) {
            System.out.println(element.getInstanceId() + "\t" + element.getHost() + "\t" + element.getPort() + "\t"
                    + element.getUri());
        }
        return this.discoveryClient;
    }
```

## 六、Eureka自我保护

出现以下提示表示开启了Eureka自我保护,自我保护是指：某时刻某一个微服务不可用了，Eureka不会立刻清理，依旧会对该微服务的信息进行保存 

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/自我保护.jpg)

### 1、什么是自我保护？

默认情况下，如果EurekaServer在一定时间内没有接收到某个微服务实例的心跳，EurekaServer将会注销该实例（默认90秒）。但是当网络分区故障发生(延时、卡顿、拥挤)时，微服务与EurekaServer之间无法正常通信，以上行为可能变得非常危险了——因为微服务本身其实是健康的， 此时本不应该注销这个微服务 。Eureka通过“自我保护模式”来解决这个问题——当EurekaServer节点在短时间内丢失过多客户端时（可能发生了网络分区故障），那么这个节点就会进入自我保护模式。  

在自我保护模式中，Eureka Server会保护服务注册表中的信息，不再注销任何服务实例。 

它的设计哲学就是宁可保留错误的服务注册信息，也不盲目注销任何可能健康的服务实例 。

一句话讲解：好死不如赖活着 

综上，自我保护模式是一种应对网络异常的安全保护措施。它的架构哲学是宁可同时保留所有微服务（健康的微服务和不健康的微服务都会保留）也不盲目注销任何健康的微服务。使用自我保护模式，可以让Eureka集群更加的健壮、稳定。 

自我保护属于CAP里面的AP（高可用）分支

### 1、怎么关闭自我保护？

自我保护机制默认是开启的,Eureka client端默认配置：

```yaml
eureka:
 instance:
  lease-renewal-interval-in-seconds: 30 #Eureka 客户端向服务端发送心跳的时间间隔，单位为秒 ( 默认是 30 秒 )
  lease-expiration-duration-in-seconds: 90 #Eureka 服务端在收到最后一次心跳后等待时间上限，单位为秒 ( 默认是 90 秒 ) ，超时将剔除服务
```

修改如下，可以将自我保护模式关闭

```yaml
eureka:
 server:
    enable-self-preservation: false # 关闭自我保护机制，保证不可用服务被及时踢除
    eviction-interval-timer-in-ms: 20000 #
```

