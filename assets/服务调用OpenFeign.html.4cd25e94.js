import{_ as p,r as o,o as l,a as i,d as n,b as s,w as e,F as c,e as r,f as t}from"./app.98d1b083.js";const u={},d=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u6587\u7AE0\u4ECB\u7ECD:")],-1),g={class:"table-of-contents"},k=t("\u4E00\u3001OpenFeign\u7B80\u4ECB"),b=t("1\u3001\u662F\u4EC0\u4E48\uFF1F"),m=t("2\u3001\u80FD\u505A\u4EC0\u4E48"),h=t("3\u3001Feign\u548COpenFeign\u533A\u522B"),_=t("\u4E8C\u3001OpenFeign\u4F7F\u7528"),f=t("1\u3001\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0@EnableFeignClients\u6CE8\u89E3"),v=t("2\u3001\u4E1A\u52A1\u7C7B"),F=t("3\u3001\u63A7\u5236\u5C42controller"),y=t("\u4E09\u3001OpenFeign\u8D85\u65F6\u63A7\u5236"),x=t("1\u3001\u8D85\u65F6\u6F14\u793A"),C=t("2\u3001\u914D\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4"),w=t("## \u56DB\u3001OpenFeign\u65E5\u5FD7\u6253\u5370"),R=t("1\u3001\u65E5\u5FD7\u7EA7\u522B"),S=t("2\u3001\u914D\u7F6E\u65E5\u5FD7Bean"),O=t("3.yml\u914D\u7F6E"),L=r(`<h1 id="\u670D\u52A1\u8C03\u7528openfeign" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u8C03\u7528openfeign" aria-hidden="true">#</a> \u670D\u52A1\u8C03\u7528OpenFeign</h1><h2 id="\u4E00\u3001openfeign\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001openfeign\u7B80\u4ECB" aria-hidden="true">#</a> \u4E00\u3001OpenFeign\u7B80\u4ECB</h2><h3 id="_1\u3001\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1\u3001\u662F\u4EC0\u4E48\uFF1F</h3><p>Feign\u662F\u4E00\u4E2A\u58F0\u660E\u5F0FWebService\u5BA2\u6237\u7AEF\u3002\u4F7F\u7528Feign\u80FD\u8BA9\u7F16\u5199Web Service\u5BA2\u6237\u7AEF\u66F4\u52A0\u7B80\u5355\u3002</p><p>\u5B83\u7684\u4F7F\u7528\u65B9\u6CD5\u662F \u5B9A\u4E49\u4E00\u4E2A\u670D\u52A1\u63A5\u53E3\u7136\u540E\u5728\u4E0A\u9762\u6DFB\u52A0\u6CE8\u89E3 \u3002Feign\u4E5F\u652F\u6301\u53EF\u62D4\u63D2\u5F0F\u7684\u7F16\u7801\u5668\u548C\u89E3\u7801\u5668\u3002Spring Cloud\u5BF9Feign\u8FDB\u884C\u4E86\u5C01\u88C5\uFF0C\u4F7F\u5176\u652F\u6301\u4E86Spring MVC\u6807\u51C6\u6CE8\u89E3\u548CHttpMessageConverters\u3002Feign\u53EF\u4EE5\u4E0EEureka\u548CRibbon\u7EC4\u5408\u4F7F\u7528\u4EE5\u652F\u6301\u8D1F\u8F7D\u5747\u8861</p><h3 id="_2\u3001\u80FD\u505A\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u80FD\u505A\u4EC0\u4E48" aria-hidden="true">#</a> 2\u3001\u80FD\u505A\u4EC0\u4E48</h3><p>Feign\u65E8\u5728\u4F7F\u7F16\u5199Java Http\u5BA2\u6237\u7AEF\u53D8\u5F97\u66F4\u5BB9\u6613\u3002</p><p>\u524D\u9762\u5728\u4F7F\u7528Ribbon+RestTemplate\u65F6\uFF0C\u5229\u7528RestTemplate\u5BF9http\u8BF7\u6C42\u7684\u5C01\u88C5\u5904\u7406\uFF0C\u5F62\u6210\u4E86\u4E00\u5957\u6A21\u7248\u5316\u7684\u8C03\u7528\u65B9\u6CD5\u3002\u4F46\u662F\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u7531\u4E8E\u5BF9\u670D\u52A1\u4F9D\u8D56\u7684\u8C03\u7528\u53EF\u80FD\u4E0D\u6B62\u4E00\u5904\uFF0C \u5F80\u5F80\u4E00\u4E2A\u63A5\u53E3\u4F1A\u88AB\u591A\u5904\u8C03\u7528\uFF0C\u6240\u4EE5\u901A\u5E38\u90FD\u4F1A\u9488\u5BF9\u6BCF\u4E2A\u5FAE\u670D\u52A1\u81EA\u884C\u5C01\u88C5\u4E00\u4E9B\u5BA2\u6237\u7AEF\u7C7B\u6765\u5305\u88C5\u8FD9\u4E9B\u4F9D\u8D56\u670D\u52A1\u7684\u8C03\u7528\u3002 \u6240\u4EE5\uFF0CFeign\u5728\u6B64\u57FA\u7840\u4E0A\u505A\u4E86\u8FDB\u4E00\u6B65\u5C01\u88C5\uFF0C\u7531\u4ED6\u6765\u5E2E\u52A9\u6211\u4EEC\u5B9A\u4E49\u548C\u5B9E\u73B0\u4F9D\u8D56\u670D\u52A1\u63A5\u53E3\u7684\u5B9A\u4E49\u3002\u5728Feign\u7684\u5B9E\u73B0\u4E0B\uFF0C \u6211\u4EEC\u53EA\u9700\u521B\u5EFA\u4E00\u4E2A\u63A5\u53E3\u5E76\u4F7F\u7528\u6CE8\u89E3\u7684\u65B9\u5F0F\u6765\u914D\u7F6E\u5B83(\u4EE5\u524D\u662FDao\u63A5\u53E3\u4E0A\u9762\u6807\u6CE8Mapper\u6CE8\u89E3,\u73B0\u5728\u662F\u4E00\u4E2A\u5FAE\u670D\u52A1\u63A5\u53E3\u4E0A\u9762\u6807\u6CE8\u4E00\u4E2AFeign\u6CE8\u89E3\u5373\u53EF) \uFF0C\u5373\u53EF\u5B8C\u6210\u5BF9\u670D\u52A1\u63D0\u4F9B\u65B9\u7684\u63A5\u53E3\u7ED1\u5B9A\uFF0C\u7B80\u5316\u4E86\u4F7F\u7528Spring cloud Ribbon\u65F6\uFF0C\u81EA\u52A8\u5C01\u88C5\u670D\u52A1\u8C03\u7528\u5BA2\u6237\u7AEF\u7684\u5F00\u53D1\u91CF\u3002</p><h3 id="_3\u3001feign\u548Copenfeign\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3\u3001feign\u548Copenfeign\u533A\u522B" aria-hidden="true">#</a> 3\u3001Feign\u548COpenFeign\u533A\u522B</h3><table><thead><tr><th>Feign</th><th>OpenFeign</th></tr></thead><tbody><tr><td>Feign\u662FSpring Cloud\u7EC4\u4EF6\u4E2D\u7684\u4E00\u4E2A\u8F7B\u91CF\u7EA7RESTful\u7684HTTP\u670D\u52A1\u5BA2\u6237\u7AEF\uFF0CFeign\u5185\u7F6E\u4E86Ribbon\uFF0C\u7528\u6765\u505A\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861\uFF0C\u53BB\u8C03\u7528\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1\u3002Feign\u7684\u4F7F\u7528\u65B9\u5F0F\u662F\uFF1A\u4F7F\u7528Feign\u7684\u6CE8\u89E3\u5B9A\u4E49\u63A5\u53E3\uFF0C\u8C03\u7528\u8FD9\u4E2A\u63A5\u53E3\uFF0C\u5C31\u53EF\u4EE5\u8C03\u7528\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\u7684\u670D\u52A1</td><td>OpenFeign\u662FSpring Cloud \u5728Feign\u7684\u57FA\u7840\u4E0A\u652F\u6301\u4E86SpringMVC\u7684\u6CE8\u89E3\uFF0C\u5982@RequesMapping\u7B49\u7B49\u3002OpenFeign\u7684@FeignClient\u53EF\u4EE5\u89E3\u6790SpringMVC\u7684@RequestMapping\u6CE8\u89E3\u4E0B\u7684\u63A5\u53E3\uFF0C\u5E76\u901A\u8FC7\u52A8\u6001\u4EE3\u7406\u7684\u65B9\u5F0F\u4EA7\u751F\u5B9E\u73B0\u7C7B\uFF0C\u5B9E\u73B0\u7C7B\u4E2D\u505A\u8D1F\u8F7D\u5747\u8861\u5E76\u8C03\u7528\u5176\u4ED6\u670D\u52A1\u3002</td></tr><tr><td>spring-cloud-starter- feign</td><td>spring-cloud-starter- openfeign</td></tr></tbody></table><h2 id="\u4E8C\u3001openfeign\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001openfeign\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001OpenFeign\u4F7F\u7528</h2><h3 id="_1\u3001\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0-enablefeignclients\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0-enablefeignclients\u6CE8\u89E3" aria-hidden="true">#</a> 1\u3001\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0@EnableFeignClients\u6CE8\u89E3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2\u3001\u4E1A\u52A1\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E1A\u52A1\u7C7B" aria-hidden="true">#</a> 2\u3001\u4E1A\u52A1\u7C7B</h3><p>\u4E1A\u52A1\u903B\u8F91\u63A5\u53E3+@FeignClient\u914D\u7F6E\u8C03\u7528provider\u670D\u52A1</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;CLOUD-PROVIDER-PAYMENT&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentFeignService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/payment/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommontResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3\u3001\u63A7\u5236\u5C42controller" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u63A7\u5236\u5C42controller" aria-hidden="true">#</a> 3\u3001\u63A7\u5236\u5C42controller</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderController</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentFeignService</span> paymentFeignService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/consumer/payment/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommontResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentFeignService<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u4E09\u3001openfeign\u8D85\u65F6\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001openfeign\u8D85\u65F6\u63A7\u5236" aria-hidden="true">#</a> \u4E09\u3001OpenFeign\u8D85\u65F6\u63A7\u5236</h2><h3 id="_1\u3001\u8D85\u65F6\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u8D85\u65F6\u6F14\u793A" aria-hidden="true">#</a> 1\u3001\u8D85\u65F6\u6F14\u793A</h3><p>\u8D85\u65F6\u9519\u8BEF</p><p><img src="https://raw.githubusercontent.com/fuxuelong/docs/master/docs/microservice/build/pic/feign\u8D85\u65F6\u62A5\u9519.jpg" alt="\u56FE" loading="lazy"></p><h3 id="_2\u3001\u914D\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u914D\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4" aria-hidden="true">#</a> 2\u3001\u914D\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4</h3><p>openFeign\u9ED8\u8BA4\u7B49\u5F85\u4E00\u79D2\u949F</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u8BBE\u7F6E feign \u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4(OpenFeign\u9ED8\u8BA4\u652F\u6301 ribbon )</span>
<span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4</span>
  <span class="token key atrule">ReadTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
  <span class="token comment"># \u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B , \u4E24\u7AEF\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4</span>
  <span class="token key atrule">ConnectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u56DB\u3001openfeign\u65E5\u5FD7\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001openfeign\u65E5\u5FD7\u6253\u5370" aria-hidden="true">#</a> ## \u56DB\u3001OpenFeign\u65E5\u5FD7\u6253\u5370</h3><p>Feign \u63D0\u4F9B\u4E86\u65E5\u5FD7\u6253\u5370\u529F\u80FD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6765\u8C03\u6574\u65E5\u5FD7\u7EA7\u522B\uFF0C\u4ECE\u800C\u4E86\u89E3 Feign \u4E2D Http \u8BF7\u6C42\u7684\u7EC6\u8282\u3002</p><p>\u8BF4\u767D\u4E86\u5C31\u662F \u5BF9Feign\u63A5\u53E3\u7684\u8C03\u7528\u60C5\u51B5\u8FDB\u884C\u76D1\u63A7\u548C\u8F93\u51FA</p><h3 id="_1\u3001\u65E5\u5FD7\u7EA7\u522B" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u65E5\u5FD7\u7EA7\u522B" aria-hidden="true">#</a> 1\u3001\u65E5\u5FD7\u7EA7\u522B</h3><p>NONE\uFF1A\u9ED8\u8BA4\u7684\uFF0C\u4E0D\u663E\u793A\u4EFB\u4F55\u65E5\u5FD7\uFF1B</p><p>BASIC\uFF1A\u4EC5\u8BB0\u5F55\u8BF7\u6C42\u65B9\u6CD5\u3001URL\u3001\u54CD\u5E94\u72B6\u6001\u7801\u53CA\u6267\u884C\u65F6\u95F4\uFF1B</p><p>HEADERS\uFF1A\u9664\u4E86 BASIC \u4E2D\u5B9A\u4E49\u7684\u4FE1\u606F\u4E4B\u5916\uFF0C\u8FD8\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u5934\u4FE1\u606F\uFF1B</p><p>FULL\uFF1A\u9664\u4E86 HEADERS \u4E2D\u5B9A\u4E49\u7684\u4FE1\u606F\u4E4B\u5916\uFF0C\u8FD8\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6B63\u6587\u53CA\u5143\u6570\u636E\u3002</p><h3 id="_2\u3001\u914D\u7F6E\u65E5\u5FD7bean" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u914D\u7F6E\u65E5\u5FD7bean" aria-hidden="true">#</a> 2\u3001\u914D\u7F6E\u65E5\u5FD7Bean</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Logger</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> fxl
 * <span class="token keyword">@date</span> 2022/6/29
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">feignLoggerLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span>FULL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_3-yml\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-yml\u914D\u7F6E" aria-hidden="true">#</a> 3.yml\u914D\u7F6E</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  level<span class="token punctuation">:</span>
       <span class="token comment"># feign \u65E5\u5FD7\u4EE5\u4EC0\u4E48\u7EA7\u522B\u76D1\u63A7\u54EA\u4E2A\u63A5\u53E3</span>
    <span class="token key atrule">com.atguigu.springcloud.service.PaymentFeignService</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,37);function j(E,P){const a=o("RouterLink");return l(),i(c,null,[d,n("nav",g,[n("ul",null,[n("li",null,[s(a,{to:"#\u4E00\u3001openfeign\u7B80\u4ECB"},{default:e(()=>[k]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#_1\u3001\u662F\u4EC0\u4E48"},{default:e(()=>[b]),_:1})]),n("li",null,[s(a,{to:"#_2\u3001\u80FD\u505A\u4EC0\u4E48"},{default:e(()=>[m]),_:1})]),n("li",null,[s(a,{to:"#_3\u3001feign\u548Copenfeign\u533A\u522B"},{default:e(()=>[h]),_:1})])])]),n("li",null,[s(a,{to:"#\u4E8C\u3001openfeign\u4F7F\u7528"},{default:e(()=>[_]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#_1\u3001\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6DFB\u52A0-enablefeignclients\u6CE8\u89E3"},{default:e(()=>[f]),_:1})]),n("li",null,[s(a,{to:"#_2\u3001\u4E1A\u52A1\u7C7B"},{default:e(()=>[v]),_:1})]),n("li",null,[s(a,{to:"#_3\u3001\u63A7\u5236\u5C42controller"},{default:e(()=>[F]),_:1})])])]),n("li",null,[s(a,{to:"#\u4E09\u3001openfeign\u8D85\u65F6\u63A7\u5236"},{default:e(()=>[y]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#_1\u3001\u8D85\u65F6\u6F14\u793A"},{default:e(()=>[x]),_:1})]),n("li",null,[s(a,{to:"#_2\u3001\u914D\u7F6Efeign\u5BA2\u6237\u7AEF\u8D85\u65F6\u65F6\u95F4"},{default:e(()=>[C]),_:1})]),n("li",null,[s(a,{to:"#\u56DB\u3001openfeign\u65E5\u5FD7\u6253\u5370"},{default:e(()=>[w]),_:1})]),n("li",null,[s(a,{to:"#_1\u3001\u65E5\u5FD7\u7EA7\u522B"},{default:e(()=>[R]),_:1})]),n("li",null,[s(a,{to:"#_2\u3001\u914D\u7F6E\u65E5\u5FD7bean"},{default:e(()=>[S]),_:1})]),n("li",null,[s(a,{to:"#_3-yml\u914D\u7F6E"},{default:e(()=>[O]),_:1})])])])])]),L],64)}var B=p(u,[["render",j]]);export{B as default};
