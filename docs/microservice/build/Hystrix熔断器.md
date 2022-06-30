---
title: Hystrix熔断器
prev:
  text: 服务调用OpenFeign
  link: /microservice/build/服务调用OpenFeign.md
next:
  text: 回到首页
  link: /README.md
---
::: info
文章介绍:
:::
[[toc]]

#  Hystrix熔断器

## 一、Hystrix简介

### 1、是什么？

Hystrix是一个用于处理分布式系统的 延迟 和 容错 的开源库，在分布式系统里，许多依赖不可避免的会调用失败，比如超时、异常等，Hystrix能够保证在一个依赖出问题的情况下， 不会导致整体服务失败，避免级联故障，以提高分布式系统的弹性。 

“断路器”本身是一种开关装置，当某个服务单元发生故障之后，通过断路器的故障监控（类似熔断保险丝）， 向调用方返回一个符合预期的、可处理的备选响应（FallBack） ， 而不是长时间的等待或者抛出调用方无法处理的异常 ，这样就保证了服务调用方的线程不会被长时间、不必要地占用，从而避免了故障在分布式系统中的蔓延，乃至雪崩。

**目前Hystrix也已经进入的维护模式，不再更新**

### 2、能做什么

服务降级、服务熔断、接近实时监控

## 一、Hystrix重要概念

### 1、服务降级

服务降级概念：服务不可用时提供兜底解决方案

**哪些情况会导致服务降级？**

程序运行异常

超时

服务熔断

线程池/信号量打满也会导致服务降级

### 2、服务熔断

类比保险丝达到最大服务访问后，直接拒绝访问，拉闸限电，然后调用服务降级的方法并返回友好提示 

服务的降级->进而熔断->恢复调用链路 

### 3、服务限流

秒杀高并发等操作，严禁一窝蜂的过来拥挤，大家排队，一秒钟N个，有序进行 

### 一、Hystrix案例

新建cloud-provider-hystrix-payment8001 

### 1、POM

```xml

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix</artifactId>
        </dependency>
```

### 2、在service层中添加两个方法

一个用于验证正常情况，一个 用于验证超时

```java

/**
 * @author fxl
 * @date 2022/5/25
 */
@Service
public class PaymentServiceImpl implements PaymentService {
    /**
     * 正常访问，一切 OK
     *
     * @param id
     * @return
     */
    @Override
    public String paymentInfo_OK(Integer id) {
        return " 线程池 :" + Thread.currentThread().getName() + "paymentInfo_OK,id: " + id + " " + "O(∩_∩)O";
    }

    /**
     * 时访问，演示降级
     *
     * @param id
     * @return
     */
    @Override
    public String paymentInfo_TimeOut(Integer id) {
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return " 线程池 :" + Thread.currentThread().getName() + "paymentInfo_TimeOut,id: " + id + " " + "O(∩_∩)O ，耗费 3 秒 ";
    }
}
```

### 3、使用Jmeter压测测试

正常访问上述的ok接口时立马返回结果，访问timeout接口需要等待三秒。

使用Jmeter对timeout接口进行2万次的高并发访问

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/Jmeter.jpg)

并发访问后，访问ok接口也会等待

### 4、新建cloud-consumer-feign-hystrix-order80 

通过openFeign调用ok和time接口，正常情况下相应很快，但是当使用两万次压力测试访问timeout接口后，feign也出现等待甚至报超时错误

