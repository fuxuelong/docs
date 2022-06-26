---
title: Eureka基础知识
prev:
  text: Rest微服务工程构建
  link: /microservice/build/Rest微服务工程构建.md
next:
  text: 回到首页
  link: /README.md
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