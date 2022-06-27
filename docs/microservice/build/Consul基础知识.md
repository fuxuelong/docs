---
title: Consul基础知识
prev:
  text: Zookeeper基础知识
  link: /microservice/build/Zookeeper基础知识.md
next:
  text: Ribbon负载均衡
  link: /microservice/build/Ribbon负载均衡.md
---
::: info
文章介绍:
:::
[[toc]]

#  Consul基础知识

## 一、Consul简介

### 1、是什么？

Consul 是一套开源的分布式服务发现和配置管理系统，由 HashiCorp 公司 用 Go 语言开发  

提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之Consul提供了一种完整的服务网格解决方案。 

它具有很多优点。包括： 基于 raft 协议，比较简洁； 支持健康检查, 同时支持 HTTP 和 DNS 协议 支持跨数据中心的 WAN 集群 提供图形界面 跨平台，支持 Linux、Mac、Windows 

 ## 二、安装和启动

### 1、mac安装consul

```shell
brew tap hashicorp/tap
brew install hashicorp/tap/consul
```

###  2、启动consul

```shell
consul agent -dev
```

启动后默认端口为8500，访问http://localhost:8500/

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/consul启动.jpg)

### 3、新建服务注册进consul

创建cloud-providerconsul-payment8006

yml配置

```yaml
server:
  port: 8006
spring:
  application:
    name: consul-provider-payment
  cloud:
    consul:
      host: localhost
      port: 8500
      discovery:
        service-name: ${spring.application.name}
```

pom依赖需要

```xml

        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-consul-discovery</artifactId>
        </dependency>
```

启动类需要加上注解@EnableDiscoveryClient

启动后 

![图](https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/注册成功后.jpg)

服务提供者注册成功后再将服务消费者注册进consul，cloud-consumer-order80

::: warning
服务注册进consul之后服务名不会自动转为大写
:::

### 4、思考：eureka、Zookeeper、Consul的异同点

| 组件名    | 语言 | CAP  | 服务健康检查 | 对外暴露接口 | Spring Cloud集成 |
| --------- | ---- | ---- | ------------ | ------------ | ---------------- |
| Eureka    | Java | AP   | 可配支持     | Http         | 已集成           |
| Consul    | Go   | CP   | 支持         | Http/DNS     | 已集成           |
| Zookeeper | Java | CP   | 支持         | 客户端       | 已集成           |

