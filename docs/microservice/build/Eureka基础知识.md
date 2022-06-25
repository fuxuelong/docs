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

### POM修改

引入依赖

```xml

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
```

### 修改yml文件，添加如下内容

```yaml
eureka:
  client:
    register-with-eureka: true #表示是否将自己注册进 EurekaServer 默认为 true 。
    fetchRegistry: true #是否从 EurekaServer 抓取已有的注册信息，默认为 true 。单节点无所谓，集群必须设置为 true 才能配合 ribbon 使用负载均衡
    service-url:
      defaultZone: http://localhost:7001/eureka
```

### 启动类中添加@@EnableEurekaClient注解

## 三、集群Eureka构建

### 原理

![理论图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/eureka服务集群原理图.jpg)



### 