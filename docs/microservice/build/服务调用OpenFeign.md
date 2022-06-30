---
title: 服务调用OpenFeign
prev:
  text: Ribbon负载均衡
  link: /microservice/build/Ribbon负载均衡.md
next:
  text: Hystrix熔断器
  link: /microservice/build/Hystrix熔断器.md
---
::: info
文章介绍:
:::
[[toc]]

#  服务调用OpenFeign

## 一、OpenFeign简介

### 1、是什么？

Feign是一个声明式WebService客户端。使用Feign能让编写Web Service客户端更加简单。 

它的使用方法是 定义一个服务接口然后在上面添加注解 。Feign也支持可拔插式的编码器和解码器。Spring Cloud对Feign进行了封装，使其支持了Spring MVC标准注解和HttpMessageConverters。Feign可以与Eureka和Ribbon组合使用以支持负载均衡 

### 2、能做什么

Feign旨在使编写Java Http客户端变得更容易。 

前面在使用Ribbon+RestTemplate时，利用RestTemplate对http请求的封装处理，形成了一套模版化的调用方法。但是在实际开发中，由于对服务依赖的调用可能不止一处， 往往一个接口会被多处调用，所以通常都会针对每个微服务自行封装一些客户端类来包装这些依赖服务的调用。 所以，Feign在此基础上做了进一步封装，由他来帮助我们定义和实现依赖服务接口的定义。在Feign的实现下， 我们只需创建一个接口并使用注解的方式来配置它(以前是Dao接口上面标注Mapper注解,现在是一个微服务接口上面标注一个Feign注解即可) ，即可完成对服务提供方的接口绑定，简化了使用Spring cloud Ribbon时，自动封装服务调用客户端的开发量。 

### 3、Feign和OpenFeign区别

| Feign                                                        | OpenFeign                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Feign是Spring Cloud组件中的一个轻量级RESTful的HTTP服务客户端，Feign内置了Ribbon，用来做客户端负载均衡，去调用服务注册中心的服务。Feign的使用方式是：使用Feign的注解定义接口，调用这个接口，就可以调用服务注册中心的服务 | OpenFeign是Spring Cloud 在Feign的基础上支持了SpringMVC的注解，如@RequesMapping等等。OpenFeign的@FeignClient可以解析SpringMVC的@RequestMapping注解下的接口，并通过动态代理的方式产生实现类，实现类中做负载均衡并调用其他服务。 |
| spring-cloud-starter- feign                                  | spring-cloud-starter- openfeign                              |

## 二、OpenFeign使用

### 1、主启动类中添加@EnableFeignClients注解

```java
@EnableFeignClients
```

### 2、业务类

业务逻辑接口+@FeignClient配置调用provider服务 

```java
@Component
@FeignClient(value = "CLOUD-PROVIDER-PAYMENT")
public interface PaymentFeignService {
    @GetMapping(value = "/payment/get/{id}")
    CommontResult<Payment> getPaymentById(@PathVariable("id") Long id);
}

```

### 3、控制层controller

```java
@RestController
@Slf4j
public class OrderController {
    @Resource
    private PaymentFeignService paymentFeignService;

    @GetMapping(value = "/consumer/payment/get/{id}")
    public CommontResult<Payment> getPaymentById(@PathVariable("id") Long id) {
        return paymentFeignService.getPaymentById(id);
    }
}
```

## 三、OpenFeign超时控制

### 1、超时演示

超时错误

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/feign超时报错.jpg)

### 2、配置feign客户端超时时间

openFeign默认等待一秒钟

```yaml
# 设置 feign 客户端超时时间(OpenFeign默认支持 ribbon )
ribbon:
  # 指的是建立连接后从服务器读取到可用资源所用的时间
  ReadTimeout: 5000
  # 指的是建立连接所用的时间，适用于网络状况正常的情况下 , 两端连接所用的时间
  ConnectTimeout: 5000
```

### ## 四、OpenFeign日志打印

Feign 提供了日志打印功能，我们可以通过配置来调整日志级别，从而了解 Feign 中 Http 请求的细节。 

说白了就是 对Feign接口的调用情况进行监控和输出 

### 1、日志级别 

NONE：默认的，不显示任何日志； 

BASIC：仅记录请求方法、URL、响应状态码及执行时间； 

HEADERS：除了 BASIC 中定义的信息之外，还有请求和响应的头信息； 

FULL：除了 HEADERS 中定义的信息之外，还有请求和响应的正文及元数据。 

### 2、配置日志Bean

```java
package com.atguigu.springcloud.config;

import feign.Logger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


/**
 * @author fxl
 * @date 2022/6/29
 */
@Configuration
public class FeignConfig {
    @Bean
    Logger.Level feignLoggerLevel() {
        return Logger.Level.FULL;
    }
}
```

### 3.yml配置

```yaml
logging:
  level:
       # feign 日志以什么级别监控哪个接口
    com.atguigu.springcloud.service.PaymentFeignService: debug
```

