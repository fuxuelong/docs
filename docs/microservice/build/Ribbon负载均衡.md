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

Ribbon属于进程内负载均衡，将LB逻辑集成到消费方，消费方从服务注册中心获知有哪些地址可用，然后自己再从这些地址中选择出一个合适的服务器。  Ribbon只是一个类库， 集成于消费方进程 ，消费方通过它来获取到服务提供方的地址。  

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

