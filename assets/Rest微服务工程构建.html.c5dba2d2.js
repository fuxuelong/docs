import{_ as l,r as o,o as c,a as p,d as a,b as e,w as s,F as d,e as r,f as t}from"./app.98d1b083.js";const i={},u=a("div",{class:"custom-container info"},[a("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),a("p",null,"\u6587\u7AE0\u4ECB\u7ECD:")],-1),h={class:"table-of-contents"},m=t("\u4E00 \u3001\u521B\u5EFA\u7236\u7EA7\u5DE5\u7A0Bcloud2020"),_=t("\u9879\u76EE\u7ED3\u6784"),g=t("\u4E8C\u3001\u521B\u5EFA\u5B50\u7EA7module cloud-provider-payment8001"),f=t("\u521B\u5EFAmodule"),k=t("\u4FEE\u6539pom\u6587\u4EF6"),b=t("\u521B\u5EFA\u4FEE\u6539yml\u6587\u4EF6"),v=t("\u521B\u5EFA\u4E3B\u542F\u52A8\u7C7B"),x=t("\u4E1A\u52A1\u4EE3\u7801"),y=t("RestTemplate"),R=t("\u4E09\u3001\u62BD\u53D6\u5171\u7528\u4EE3\u7801\u5230Comment\u9879\u76EE"),B=t("\u7CCA\u6D82\u5DE5\u5177\u5305"),C=t("maven\u547D\u4EE4clean install"),I=r(`<h1 id="rest\u5FAE\u670D\u52A1\u5DE5\u7A0B\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#rest\u5FAE\u670D\u52A1\u5DE5\u7A0B\u6784\u5EFA" aria-hidden="true">#</a> Rest\u5FAE\u670D\u52A1\u5DE5\u7A0B\u6784\u5EFA</h1><h2 id="\u4E00-\u3001\u521B\u5EFA\u7236\u7EA7\u5DE5\u7A0Bcloud2020" tabindex="-1"><a class="header-anchor" href="#\u4E00-\u3001\u521B\u5EFA\u7236\u7EA7\u5DE5\u7A0Bcloud2020" aria-hidden="true">#</a> \u4E00 \u3001\u521B\u5EFA\u7236\u7EA7\u5DE5\u7A0B<strong>cloud2020</strong></h2><h3 id="\u9879\u76EE\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u7ED3\u6784" aria-hidden="true">#</a> \u9879\u76EE\u7ED3\u6784</h3><p>|\u2014cloud2020</p><p>|\u2014\u2014cloud-api-commons</p><p>|\u2014\u2014cloud-consumer-order80</p><p>|\u2014\u2014cloud-provider-payment8001</p><p>|\u2014\u2014cloud-provider-payment8002</p><h2 id="\u4E8C\u3001\u521B\u5EFA\u5B50\u7EA7module-cloud-provider-payment8001" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u521B\u5EFA\u5B50\u7EA7module-cloud-provider-payment8001" aria-hidden="true">#</a> \u4E8C\u3001\u521B\u5EFA\u5B50\u7EA7module <strong>cloud-provider-payment8001</strong></h2><h3 id="\u521B\u5EFAmodule" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAmodule" aria-hidden="true">#</a> \u521B\u5EFAmodule</h3><h3 id="\u4FEE\u6539pom\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539pom\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539pom\u6587\u4EF6</h3><h3 id="\u521B\u5EFA\u4FEE\u6539yml\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4FEE\u6539yml\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA\u4FEE\u6539yml\u6587\u4EF6</h3><h3 id="\u521B\u5EFA\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA\u4E3B\u542F\u52A8\u7C7B</h3><p>\u4E3B\u7C7B\u4E2D\u8981\u6DFB\u52A0 <strong>@SpringBootApplication</strong> \u6CE8\u89E3</p><h3 id="\u4E1A\u52A1\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E1A\u52A1\u4EE3\u7801" aria-hidden="true">#</a> \u4E1A\u52A1\u4EE3\u7801</h3><h3 id="resttemplate" tabindex="-1"><a class="header-anchor" href="#resttemplate" aria-hidden="true">#</a> RestTemplate</h3><p>RestTemplate\u63D0\u4F9B\u4E86\u591A\u79CD\u4FBF\u6377\u8BBF\u95EE\u8FDC\u7A0BHttp\u670D\u52A1\u7684\u65B9\u6CD5\uFF0C</p><p>\u662F\u4E00\u79CD\u7B80\u5355\u4FBF\u6377\u7684\u8BBF\u95EErestful\u670D\u52A1\u6A21\u677F\u7C7B\uFF0C\u662FSpring\u63D0\u4F9B\u7684\u7528\u4E8E\u8BBF\u95EERest\u670D\u52A1\u7684 \u5BA2\u6237\u7AEF\u6A21\u677F\u5DE5\u5177\u96C6</p><h2 id="\u4E09\u3001\u62BD\u53D6\u5171\u7528\u4EE3\u7801\u5230comment\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u62BD\u53D6\u5171\u7528\u4EE3\u7801\u5230comment\u9879\u76EE" aria-hidden="true">#</a> \u4E09\u3001\u62BD\u53D6\u5171\u7528\u4EE3\u7801\u5230Comment\u9879\u76EE</h2><h3 id="\u7CCA\u6D82\u5DE5\u5177\u5305" tabindex="-1"><a class="header-anchor" href="#\u7CCA\u6D82\u5DE5\u5177\u5305" aria-hidden="true">#</a> \u7CCA\u6D82\u5DE5\u5177\u5305</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.hutool<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>hutool-all <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="maven\u547D\u4EE4clean-install" tabindex="-1"><a class="header-anchor" href="#maven\u547D\u4EE4clean-install" aria-hidden="true">#</a> maven\u547D\u4EE4clean install</h3>`,22);function N(T,V){const n=o("RouterLink");return c(),p(d,null,[u,a("nav",h,[a("ul",null,[a("li",null,[e(n,{to:"#\u4E00-\u3001\u521B\u5EFA\u7236\u7EA7\u5DE5\u7A0Bcloud2020"},{default:s(()=>[m]),_:1}),a("ul",null,[a("li",null,[e(n,{to:"#\u9879\u76EE\u7ED3\u6784"},{default:s(()=>[_]),_:1})])])]),a("li",null,[e(n,{to:"#\u4E8C\u3001\u521B\u5EFA\u5B50\u7EA7module-cloud-provider-payment8001"},{default:s(()=>[g]),_:1}),a("ul",null,[a("li",null,[e(n,{to:"#\u521B\u5EFAmodule"},{default:s(()=>[f]),_:1})]),a("li",null,[e(n,{to:"#\u4FEE\u6539pom\u6587\u4EF6"},{default:s(()=>[k]),_:1})]),a("li",null,[e(n,{to:"#\u521B\u5EFA\u4FEE\u6539yml\u6587\u4EF6"},{default:s(()=>[b]),_:1})]),a("li",null,[e(n,{to:"#\u521B\u5EFA\u4E3B\u542F\u52A8\u7C7B"},{default:s(()=>[v]),_:1})]),a("li",null,[e(n,{to:"#\u4E1A\u52A1\u4EE3\u7801"},{default:s(()=>[x]),_:1})]),a("li",null,[e(n,{to:"#resttemplate"},{default:s(()=>[y]),_:1})])])]),a("li",null,[e(n,{to:"#\u4E09\u3001\u62BD\u53D6\u5171\u7528\u4EE3\u7801\u5230comment\u9879\u76EE"},{default:s(()=>[R]),_:1}),a("ul",null,[a("li",null,[e(n,{to:"#\u7CCA\u6D82\u5DE5\u5177\u5305"},{default:s(()=>[B]),_:1})]),a("li",null,[e(n,{to:"#maven\u547D\u4EE4clean-install"},{default:s(()=>[C]),_:1})])])])])]),I],64)}var w=l(i,[["render",N]]);export{w as default};
