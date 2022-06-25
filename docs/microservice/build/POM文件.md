---
title: pom文件
prev:
  text: 微服务架构理论
  link: /microservice/theory/微服务架构理论.md
next:
  text: Rest微服务工程构建
  link: /microservice/build/Rest微服务工程构建.md
---
::: info
文章介绍:本章主要介绍Maven项目中的pom文件的相关知识
:::
[[toc]]

#  pom文件

## \<DependencyManagement/>和\<Dependencies/>标签 

**dependencyManagement**   

Maven 使用dependencyManagement 元素来提供了一种管理依赖版本号的方式。 

通常会在一个组织或者项目的最顶层的父POM 中看到dependencyManagement 元素。 

使用pom.xml 中的dependencyManagement 元素能让所有在子项目中引用一个依赖而不用显式的列出版本号。 

Maven 会沿着父子层次向上走，直到找到一个拥有dependencyManagement 元素的项目，然后它就会使用这个dependencyManagement 元素中指定的版本号。 

例如在父级工程中：

```xml

    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>5.1.2</version>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

那么在子工程中就可以不用指定版本号：

```xml
        <dependencies>
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
            </dependency>
        </dependencies>
```

这样做的好处就是：如果有多个子项目都引用同一样依赖，则可以避免在每个使用的子项目里都声明一个版本号，这样当想升级或切换到另一个版本时，只需要在顶层父容器里更新，而不需要一个一个子项目的修改 ；另外如果某个子项目需要另外的一个版本，只需要声明version就可。 

::: warning

- dependencyManagement里只是声明依赖， **并不实现引入** ，因此子项目需要显示的声明需要用的依赖。 
- 如果不在子项目中声明依赖，是不会从父项目中继承下来的；只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且version和scope都读取自父pom; 
- 如果子项目中指定了版本号，那么会使用子项目中指定的jar版本。 

:::

## \<scope/>标签

1. scope 包括 compile、test、provider、runtime、system
2. 默认compile，依赖参与项目的编译、运行、打包，都会参与；
3. test仅参与测试时候的编译、运行，不会打包进去项目中 例如：junit；
4. runtime参与项目的运行阶段，不会参与编译；
5. provider参与编译、运行、不会打包到项目中，其他设施会提供；

## \<optional/>标签

