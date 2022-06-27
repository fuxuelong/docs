---
title: Ribbon负载均衡
prev:
  text: Consul基础知识
  link: /microservice/build/Consul基础知识.md
next:
  text: 回到首页
  link: /README.md
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
@RibbonClient(name = "CLOUD-PAYMENT-SERVICE", configuration = MySelfRule.class)
```

**测试**

访问http://localhost/consumer/payment/get/1接口，可见随机访问支付微服务

## 四、默认负载均衡规则原理



