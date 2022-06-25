---
title: Rest微服务工程构建
prev:
  text: pom文件
  link: /microservice/build/pom文件.md
next:
  text: Eureka基础知识
  link: /microservice/build/Eureka基础知识.md
---
::: info
文章介绍:
:::
[[toc]]

#  Rest微服务工程构建

## 一 、创建父级工程**cloud2020** 

### 项目结构

|—cloud2020

|——cloud-api-commons

|——cloud-consumer-order80

|——cloud-provider-payment8001

## 二、创建子级module **cloud-provider-payment8001**

### 创建module

### 修改pom文件

### 创建修改yml文件

### 创建主启动类

主类中要添加<font color=#FF0000>  **@SpringBootApplication** </font>注解

### 业务代码

### RestTemplate

RestTemplate提供了多种便捷访问远程Http服务的方法，  

是一种简单便捷的访问restful服务模板类，是Spring提供的用于访问Rest服务的 客户端模板工具集 

## 三、抽取共用代码到Comment项目

###  糊涂工具包

```xml

    <dependency>
        <groupId>cn.hutool</groupId>
        <artifactId>hutool-all </artifactId>
        <version>5.1.0</version>
    </dependency>
```

### maven命令clean install 