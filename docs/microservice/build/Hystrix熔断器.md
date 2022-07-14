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

## 二、Hystrix重要概念

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

## 三、Hystrix案例

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

### 5、如何使用Hystrix解决

要求：

 对方服务(8001)超时了，调用者(80)不能一直卡死等待，必须有服务降级 

对方服务(8001)down机了，调用者(80)不能一直卡死等待，必须有服务降级 

对方服务(8001)OK，调用者(80)自己出故障或有自我要求（自己的等待时间小于服务提供者），自己处理降级 



### 6、服务降级(服务提供端)

当其中一个服务提供方的接口出现问题时，能够将提供一个处理接口返回提示：

修改服务提供方接口：添加**降级配置****@HystrixCommand**

同时在启动类中添加@EnableCircuitBreaker激活

在接口中分别制造两个异常，报错和超时，

```java


    // @HystrixCommand注解表示，当paymentInfo_TimeOut接口超过3000ms未响应时，用paymentInfo_TimeOutHandler接口处理请求
    @HystrixCommand(fallbackMethod = "paymentInfo_TimeOutHandler", commandProperties = {
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "3000")})
    @GetMapping("/payment/hystrix/timeout/{id}")
    public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
        int i = 10/0;
        try {
            TimeUnit.SECONDS.sleep(5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        String result = paymentService.paymentInfo_TimeOut(id);
        log.info("****result: " + result);
        return result;
    }

    public String paymentInfo_TimeOutHandler(Integer id) {
        return "/( ㄒ o ㄒ )/ 调用支付接口超时或异常:" + "当前线程池名字 " + Thread.currentThread().getName();
    }
```

无论超时还是报错，最后都会由paymentInfo_TimeOutHandler接口进行处理

fallback方法进行处理时，是新发起了一个线程

::: danger

在配置fallback方法时，参数和返回值必须与原接口保持一致， 要不会报找不到paymentInfo_TimeOutHandler的错误

:::

### 7、服务降级 配置方法1

一般情况下服务降级的配置都在服务调用端

修改yml文件

```yaml
feign:
  hystrix:
    enabled: true
```

启动类添加@EnableHystrix

修改业务方法

```yaml

    @HystrixCommand(fallbackMethod = "paymentTimeOutFallbackMethod", commandProperties = {
            @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds", value = "1500")})
    @GetMapping(value = "/consumer/payment/hystrix/timeout/{id}")
    public String paymentInfo_TimeOut(@PathVariable("id") Integer id) {
        return paymentFeignService.paymentInfo_TimeOut(id);
    }

    public String paymentTimeOutFallbackMethod(Integer id) {
        return "我是消费者 80, 对方支付系统繁忙请 10 秒钟后再试或者自己运行出错请检查自己,o(╥﹏╥)o" ;
    }
```

::: danger

上述配置后，发下@HystrixProperty中的value不管配置多大，即时服务提供者cloud-provider-hystrix-payment8001 中的paymentInfo_TimeOut接口中的接口已经调通，最终都会进入fallback接口。

最后在yaml文件中加入如下配置问题才解决：

```yaml

ribbon:
  # 指的是建立连接后从服务器读取到可用资源所用的时间
  ReadTimeout: 5000
  # 指的是建立连接所用的时间，适用于网络状况正常的情况下 , 两端连接所用的时间
  ConnectTimeout: 5000
  MaxAutoRetries: 2 #同一台实例最大重试次数,不包括首次调用
  MaxAutoRetriesNextServer: 2 #更换实例大的次数
#超时时间配置，此处全局超时配置时间大于@HystrixProperty配置时间后，@HystrixProperty注解中的超时才生效
hystrix:
  command:
    default:
      execution:
        isolation:
          thread:
            timeoutInMilliseconds: 300000
```

首先，此时通过openFeign调用接口，超时时间由ribbon和Hystrix共同控制，时间先到者负责报出超时异常；因为ribbon默认超时时间为1秒，所有此处应该配置ribbon的超时时间，否则ribbon会报超时

其次，Hystrix的HystrixProperty中的value配置小于yml中的timeoutInMilliseconds全局超时配置时间中的配置时，value配置才管用

hystrix超时时间的配置原则：= (1 + MaxAutoRetries + MaxAutoRetriesNextServer*MaxAutoRetries) * ReadTimeout，其中MaxAutoRetries为ribbon的最大重试次数，默认为0，MaxAutoRetriesNextServer为切换实例的重试次数，默认为0

如果Hystrix的超时时间比ribbon还小，那么ribbon的重试策略就无意义了。

:::

### 8、服务降级 配置方法2

#### controller层配置@DefaultProperties(defaultFallback="paymentTimeOutFallbackMethod")

#### 方法上要添加@HystrixCommand

### 9、服务降级 配置方法3

进一步解耦

在feign接口类上配置统一的服务降级处理类

比如feign接口类为PaymentFeignClientService；

首先在添加PaymentFallbackService 类，实现PaymentFeignClientService

```java
@Component
public class PaymentFallbackService implements PaymentFeignService {
    @Override
    public String paymentInfo_OK(Integer id) {
        return " 服务调用失败，提示来自： cloud-consumer-feign-order80" ;
    }

    @Override
    public String paymentInfo_TimeOut(Integer id) {
        return " 服务调用失败，提示来自： cloud-consumer-feign-order80" ;
    }
}
```

然后PaymentFeignService接口上的@FeignClient注解配置

```java
@Component
@FeignClient(value = "CLOUD-PROVIDER-HYSTRIX-PAYMENT",fallback = PaymentFallbackService.class)
public interface PaymentFeignService {
    @GetMapping(value = "/payment/hystrix/ok/{id}")
    String paymentInfo_OK(@PathVariable("id") Integer id);

    @GetMapping(value = "/payment/hystrix/timeout/{id}")
    String paymentInfo_TimeOut(@PathVariable("id") Integer id);
}
```

最后配置YML文件

```yml
feign:
  hystrix:
    enabled: true #在feign中开启hystrix
```

::: tip

以上三种降级方法配置的优先级：1>2>3

:::

### 10、服务熔断概念

熔断机制是应对雪崩效应的一种微服务链路保护机制。当扇出链路的某个微服务出错不可用或者响应时间太长时， 

会进行服务的降级，进而熔断该节点微服务的调用，快速返回错误的响应信息。 

当检测到该节点微服务调用响应正常后，恢复调用链路 。 

在Spring Cloud框架里，熔断机制通过Hystrix实现。Hystrix会监控微服务间调用的状况， 

当失败的调用到一定阈值，缺省是5秒内20次调用失败，就会启动熔断机制。熔断机制的注解是@HystrixCommand。 

### 11、服务熔断案例

修改cloud-provider-hystrix-payment8001微服务

添加paymentCircuitBreaker 和paymentCircuitBreaker_fallback 到PaymentServiceImpl类中

```java

    //========= 服务熔断
    @HystrixCommand(fallbackMethod = "paymentCircuitBreaker_fallback",
            commandProperties = {
                    @HystrixProperty(name = "circuitBreaker.enabled", value = "true"),// 是否开启断路器
                    @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold", value = "10"),//请求次数
                    @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds", value = "10000"),//时间窗口期
                    @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage", value = "60"),})//失败率达到多少后跳闸,在此处指的是十次里面有6次失败就熔断
    public String paymentCircuitBreaker(@PathVariable("id") Integer id) {
        if (id < 0) {
            throw new RuntimeException("******id 不能负数 ");
        }
        String serialNumber = IdUtil.simpleUUID();
        return Thread.currentThread().getName() + "\t" + "调用成功，流水号 :" + serialNumber;
    }

    public String paymentCircuitBreaker_fallback(@PathVariable("id") String id) {
        return "id 不能负数，请稍后再试， /( ㄒ o ㄒ )/~~  id: " + id;
    }
```

controller层调用

```java
@GetMapping("/payment/circuit/{id}")
    public String paymentCircuitBreaker(@PathVariable("id") Integer id) {
        String result = paymentService.paymentCircuitBreaker(id);
        log.info("******result:" + result);
        return result;
    }
```

实验现象。使用http://localhost:8001/payment/circuit/{id}进行测试

正常情况下，id为整数时一切正常，当id为负数时，调用超过一定次数后，即时id改为正数，接口仍然进入paymentCircuitBreaker_fallback方法，此时Hystrix熔断

### 12、熔断总结

断路器什么情况下起作用：

涉及到断路器的三个重要参数： 快照时间窗、请求总数阀值、错误百分比阀值。 

1：快照时间窗：断路器确定是否打开需要统计一些请求和错误数据，而统计的时间范围就是快照时间窗，默认为最近的10秒。 

2：请求总数阀值：在快照时间窗内，必须满足请求总数阀值才有资格熔断。默认为20，意味着在10秒内，如果该hystrix命令的调用次数不足20次，即使所有的请求都超时或其他原因失败，断路器都不会打开。 

3：错误百分比阀值：当请求总数在快照时间窗内超过了阀值，比如发生了30次调用，如果在这30次调用中，有15次发生了超时异常，也就是超过50%的错误百分比，在默认设定50%阀值情况下，这时候就会将断路器打开。 

## 四、Hystrix仪表盘

### 1、项目构建

新建cloud-consumer-hystrix-dashboard9001 

POM中 添加

```xml
<dependencies>
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-hystrix-dashboard</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <scope>runtime</scope>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
```

YML

```yaml
server:
  port: 9001
```

启动类中添加注解

```java
@SpringBootApplication
@EnableHystrixDashboard
```

所有被监控项目（8001/8002/8003）都需要监控依赖配置：

```xml

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```

启动9001项目，访问http://localhost:9001/hystrix

在被监控项目启动类中添加配置：如果不加改配置会出现Unable to connect to Command Metric Stream. 

```java

/**
 * @author fxl
 * @date 2022/5/25
 */
@SpringBootApplication
@EnableEurekaClient
@EnableDiscoveryClient
@EnableCircuitBreaker
public class PaymentHystrixMain8001 {
    public static void main(String[] args) {
        SpringApplication.run(PaymentHystrixMain8001.class, args);
    }

    /*** 此配置是为了服务监控而配置，与服务容错本身无关， springcloud 升级后的坑
     *ServletRegistrationBean 因为 springboot 的默认路径不是 "/hystrix.stream" ，  * 只要在自己的项目里配置上下面的 servlet 就可以了  */
    @Bean
    public ServletRegistrationBean getServlet() {
        HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
        ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
        registrationBean.setLoadOnStartup(1);
        registrationBean.addUrlMappings("/hystrix.stream");
        registrationBean.setName("HystrixMetricsStreamServlet");
        return registrationBean;
    }
}
```

