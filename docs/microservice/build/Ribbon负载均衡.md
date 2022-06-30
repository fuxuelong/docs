---
title: Ribbon负载均衡
prev:
  text: Consul基础知识
  link: /microservice/build/Consul基础知识.md
next:
  text: 服务调用OpenFeign
  link: /microservice/build/服务调用OpenFeign.md
---
::: info
文章介绍:
:::
[[toc]]

#  Ribbon负载均衡

## 一、Ribbon简介

### 1、是什么？

Spring Cloud Ribbon是基于Netflix Ribbon实现的一套客户端负载均衡的工具 。  

### 2、替代方案

目前Ribbon已经进入维护模式，未来Spring Cloud LoadBalancer可以作为替换，但是目前Ribbon已经大量使用，一时半会不会消失

### 3、和nginx负载均衡的区别

Nginx数据集中式负载均衡，即在服务的消费方和提供方之间使用独立的LB设施(可以是硬件，如F5, 也可以是软件，如nginx), 由该设施负责把访问请求通过某种策略转发至服务的提供方； 

Ribbon属于进程内负载均衡，将LB逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后自己再从这些地址中选择出一个合适的服务器。  Ribbon只是一个类库， 集成于**消费方**进程 ，消费方通过它来获取到服务提供方的地址。  注意是集成于消费方，即接口调用方。

### 4、工作原理

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/Ribbon工作原理.jpg)

Ribbon在工作时分成两步 

第一步先选择 EurekaServer ,它优先选择在同一个区域内负载较少的server. 

第二步再根据用户指定的策略，在从server取到的服务注册列表中选择一个地址。 

其中Ribbon提供了多种策略：比如轮询、随机和根据响应时间加权。 

## 二、Ribbon使用

 spring-cloud-starter-netflix-eureka-client中已经集成Ribbon，不必再单独引入依赖，不过也可单独引入，依赖为

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId> 
    <artifactId>spring-cloud-starter-netflix-ribbon</artifactId> 
</dependency> 
```

## 三、负载均衡策略

### 1、Ribbon核心组件IRule 

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/Ribbon负载均衡实现.jpg)

IRule接口是提供获取有效服务的方法，改接口主要实现类有：

RoundRibbonRule：轮询（**出厂默认**）

RandomRule：随机

RetryRule：重试

BestAvaliableRule：过滤熔断的，然后选择并发量最小的服务

AvailabilityFiteringRule:先过滤掉故障实例，再选择并发较小的实例 

ZoneAvoidanceRule :默认规则,复合判断server所在区域的性能和server的可用性选择服务器 

### 2、修改负载均衡策略

以将策略由轮询改为随机为例

**配置规则类**

官方文档明确给出了警告： 

这个自定义配置类不能放在@ComponentScan所扫描的当前包下以及子包下， 

否则我们自定义的这个配置类就会被所有的Ribbon客户端所共享，达不到特殊化定制的目的了。 

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/Ribbon替换规则警告.jpg)

上图意思是指，Ribbon规则不能放在能被@ComponentScan扫描的**当前包及其子包下**，@ComponentScan在启动类的@SpringBootApplication注解中集成，通过@SpringBootApplication可以进入查看：

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/@ComponentScan.jpg)

所以启动类所在的包及其子包下都不能放置Ribbon规则类，启动类所在的包路径为com.atguigu.springcloud，所以新建包路径com.atguigu.myrule，在包下创建配置类MySelfRule：

```java
/**
 * Ribbon规则类
 * 
 * @author fxl
 * @date 2022/6/27
 */
@Configuration
public class MySelfRule {
    @Bean
    public IRule myrule() {
        return new RandomRule();
    }
}
```

**启动类上添加@RibbonClient 注解**

```java
@RibbonClient(name = "CLOUD-PROVIDER-PAYMENT", configuration = MySelfRule.class)
```

**测试**

访问http://localhost/consumer/payment/get/1接口，可见随机访问支付微服务

## 四、默认负载均衡规则原理

### 1、轮询规则算法

负载均衡算法：rest接口第几次请求数 % 服务器集群总数量 = 实际调用服务器位置下标  ，每次服务重启动后rest接口计数从1开始。  

```java
List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PROVIDER-PAYMENT"); #获取所有实例
```

 如：   List [0]  instances  = 127.0.0.1:8002 

　　　List [1]  instances  = 127.0.0.1:8001 

8001+ 8002 组合成为集群，它们共计2台机器，集群总数为2， 按照轮询算法原理： 

 当总请求数为1时： 1 % 2 =1 对应下标位置为1 ，则获得服务地址为127.0.0.1:8001 

当总请求数位2时： 2 % 2 =0 对应下标位置为0 ，则获得服务地址为127.0.0.1:8002 

当总请求数位3时： 3 % 2 =1 对应下标位置为1 ，则获得服务地址为127.0.0.1:8001 

当总请求数位4时： 4 % 2 =0 对应下标位置为0 ，则获得服务地址为127.0.0.1:8002 

如此类推...... 

## 五、RoundRibbonRule规则源码分析

参考三.1中的架构图分析源码

**IRule接口**

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.netflix.loadbalancer;

public interface IRule {
    Server choose(Object var1);

    void setLoadBalancer(ILoadBalancer var1);

    ILoadBalancer getLoadBalancer();
}
```

**RoundRobinRule类**

```java
//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by Fernflower decompiler)
//

package com.netflix.loadbalancer;

import com.netflix.client.config.IClientConfig;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RoundRobinRule extends AbstractLoadBalancerRule {
    private AtomicInteger nextServerCyclicCounter;
    private static final boolean AVAILABLE_ONLY_SERVERS = true;
    private static final boolean ALL_SERVERS = false;
    private static Logger log = LoggerFactory.getLogger(RoundRobinRule.class);

    public RoundRobinRule() {//不指定负载均衡算法
        this.nextServerCyclicCounter = new AtomicInteger(0);
    }

    public RoundRobinRule(ILoadBalancer lb) {//指定负载均衡算法
        this();
        this.setLoadBalancer(lb);
    }

    public Server choose(ILoadBalancer lb, Object key) {
        if (lb == null) {
            log.warn("no load balancer");
            return null;
        } else {
            Server server = null;
            int count = 0;

            while(true) {
                if (server == null && count++ < 10) {
                    List<Server> reachableServers = lb.getReachableServers();//获取活着的服务
                    List<Server> allServers = lb.getAllServers();//获取所有服务
                    int upCount = reachableServers.size();
                    int serverCount = allServers.size();
                    if (upCount != 0 && serverCount != 0) {
                        int nextServerIndex = this.incrementAndGetModulo(serverCount);//
                        server = (Server)allServers.get(nextServerIndex);
                        if (server == null) {
                            Thread.yield();
                        } else {
                            if (server.isAlive() && server.isReadyToServe()) {
                                return server;
                            }

                            server = null;
                        }
                        continue;
                    }

                    log.warn("No up servers available from load balancer: " + lb);
                    return null;
                }

                if (count >= 10) {
                    log.warn("No available alive servers after 10 tries from load balancer: " + lb);
                }

                return server;
            }
        }
    }

    private int incrementAndGetModulo(int modulo) {
        int current;
        int next;
        do {
            current = this.nextServerCyclicCounter.get();
            next = (current + 1) % modulo;
        } while(!this.nextServerCyclicCounter.compareAndSet(current, next));

        return next;
    }

    public Server choose(Object key) {
        return this.choose(this.getLoadBalancer(), key);
    }

    public void initWithNiwsConfig(IClientConfig clientConfig) {
    }
}

```

## 六、手写一个负载均衡算法

###  1、修改8001/8002项目，添加payment/lb接口

```java
@GetMapping("/payment/lb")
    public String lb() {
        return serverport;
    }
```

### 2、LoadBalancer接口

将RestTemplate上的@LoadBalanced注解去掉

```javva
@Configuration
public class ApplicationContextConfig {
    @Bean
//    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```



在服务调用方添加LoadBalancer接口

```java
/**
 * @author fxl
 * @date 2022/6/28
 */
public interface LoadBalancer {
    ServiceInstance instances(List<ServiceInstance> serviceInstances);
}
```

添加MyLb类实现LoadBalancer接口

```java

/**
 * @author fxl
 * @date 2022/6/28
 */
@Component
public class MyLb implements LoadBalancer {
    //原子操作类，多线程情况下使用
    AtomicInteger atomicInteger = new AtomicInteger(0);

    public int getAndIncrement() {
        int current;
        int next;
        //自选锁，获取当前应该调用的服务的角标
        do {
            current = atomicInteger.get();
            next = current > 2147483647 ? 0 : current + 1;//2147483647为最大整形值
        } while (!this.atomicInteger.compareAndSet(current, next));//比较并交换
        System.out.println("********next" + next);
        return next;
    }

    @Override
    public ServiceInstance instances(List<ServiceInstance> serviceInstances) {
        int index = getAndIncrement() % serviceInstances.size();
        return serviceInstances.get(index);
    }
}
```

调用服务接口时

```java
@GetMapping("/consumer/payment/lb")
public String lb() {
    List<ServiceInstance> instances = discoveryClient.getInstances("CLOUD-PROVIDER-PAYMENT");
    if (instances == null || instances.size() <= 0) {
        return null;
    }
    ServiceInstance serviceInstance = loadBalancer.instances(instances);
    URI uri = serviceInstance.getUri();
    return restTemplate.getForObject(uri + "/payment/lb", String.class);
}
```

## 七、思考：Ribbon是如何将微服务名转换为IP：Port进行调用的

源码分析：

通过断点可以看到restTemplate中有一个拦截器LoadBalancerInterceptor，

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/LoadBalancerInterceptor.jpg)

进入该拦截器，查看intercept方法，进入loadBalancer.execute方法

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/intercept.jpg)

通过LoadBalancerClient接口找到实现类RibbonLoadBalancerClient中的execute方法

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/execute.jpg)

然后进入getLoadBalancer方法

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/getLoadBalancer.jpg)

然后一路追溯，getLoadBalancer -->.....-->getInstance,在getInstance方法中可以看见查询出了所有有效的微服务

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/getInstance.jpg)



