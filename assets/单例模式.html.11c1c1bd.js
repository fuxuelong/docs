import{_ as t,r as c,o,a as l,d as n,b as a,w as p,F as u,e as i,f as e}from"./app.98d1b083.js";const r={},k=n("div",{class:"custom-container info"},[n("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),n("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),d={class:"table-of-contents"},b=e("\u997F\u6C49\u5F0F"),m=e("\u61D2\u6C49\u5F0F"),w=e("\u53CC\u91CD\u68C0\u67E5"),y=e("\u9759\u6001\u5185\u90E8\u7C7B"),g=e("\u679A\u4E3E"),h=i(`<hr><h1 id="\u9002\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u573A\u666F" aria-hidden="true">#</a> \u9002\u7528\u573A\u666F</h1><p>\u5355\u4F8B\u6A21\u5F0F\u6307\u7684\u662F\u5982\u679C<strong>\u4E00\u4E2A\u7C7B\u53EA\u5141\u8BB8\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF08\u5B9E\u4F8B\uFF09\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u7C7B\u5C31\u662F\u4E2A\u5355\u4F8B\u7C7B,\u8FD9\u4E2A\u552F\u4E00\u6027\u6307\u7684\u662F\u8FDB\u7A0B\u4E2D\u552F\u4E00\u7684\uFF0C\u8DE8\u8FDB\u7A0B\u5219\u4E0D\u552F\u4E00\uFF0C\u7EBF\u7A0B\u552F\u4E00\u53EF\u4EE5\u4F7F\u7528ThreadLocal\u5B9E\u73B0</strong>\u3002\u5728\u4E1A\u52A1\u6982\u5FF5\u4E0A\uFF0C\u6709\u4E9B\u6570\u636E\u5728\u7CFB\u7EDF\u4E2D\u53EA\u5E94\u8BE5\u4FDD\u5B58\u4E00\u4EFD\uFF0C\u5C31\u6BD4\u8F83\u9002\u5408\u9002\u7528\u5355\u4F8B\u6A21\u5F0F\uFF0C\u6BD4\u5982\u914D\u7F6E\u4FE1\u606F\u7C7B\uFF1B\u9664\u6B64\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5355\u4F8B\u6A21\u5F0F\u89E3\u51B3\u8D44\u6E90\u8BBF\u95EE\u51B2\u7A81\u7684\u95EE\u9898\u3002</p><ul><li>\u65E0\u72B6\u6001\u7684\u5DE5\u5177\u7C7B\uFF0C\u5982\u65E5\u671F\u65F6\u95F4\u3001\u6570\u636E\u7EDF\u8BA1</li><li>\u5168\u5C40\u7684\u4FE1\u606F\u7C7B</li></ul><h1 id="\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> \u5B9E\u73B0\u65B9\u5F0F</h1><h2 id="\u997F\u6C49\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u997F\u6C49\u5F0F" aria-hidden="true">#</a> \u997F\u6C49\u5F0F</h2><p>\u4E0D\u652F\u6301\u5EF6\u8FDF\u52A0\u8F7D\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u7C7B\u52A0\u8F7D\u65F6\u52A0\u8F7D\u5E76\u4FDD\u8BC1\u5B9E\u4F8B\u7684\u552F\u4E00\u6027</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Singleton1</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u79C1\u6709\u6784\u9020\u65B9\u6CD5</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u9759\u6001\u83B7\u53D6\u5B9E\u4F8B</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton1</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E1A\u52A1\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u61D2\u6C49\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u61D2\u6C49\u5F0F" aria-hidden="true">#</a> \u61D2\u6C49\u5F0F</h2><p>\u652F\u6301\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u4E0D\u652F\u6301\u9AD8\u5E76\u53D1\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton2</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u9759\u6001\u53D8\u91CF\u662F\u4FDD\u8BC1\u5B9E\u4F8B\u521D\u59CB\u5316\u540E\u4E00\u76F4\u5B58\u5728\u7684\u5173\u952E</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton2</span> INSTANCE<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u5E76\u7528 Synchronized\u52A0\u9501\u4FDD\u8BC1\u7EBF\u7A0B\u7684\u5B89\u5168\uFF0C\u901A\u8FC7\u5224\u65AD\u5B9E\u4F8B\u63A7\u5236\u552F\u4E00\u6027</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">synchronized</span> <span class="token class-name">Singleton2</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>INSTANCE <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E1A\u52A1\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="\u53CC\u91CD\u68C0\u67E5" tabindex="-1"><a class="header-anchor" href="#\u53CC\u91CD\u68C0\u67E5" aria-hidden="true">#</a> \u53CC\u91CD\u68C0\u67E5</h2><p>\u65E2\u652F\u6301\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u4E5F\u652F\u6301\u9AD8\u5E76\u53D1\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton3</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u9759\u6001\u53D8\u91CF\u662F\u4FDD\u8BC1\u80FD\u591F\u8FDE\u7EED\u4FDD\u5B58\u5BF9\u8C61\u5B9E\u4F8B\u7684\u5173\u952E,volatile\u9632\u6B62\u91CD\u6392\u5E8F\u5BFC\u81F4new\u51FA\u6765\u540E\u8FD8\u6CA1\u88AB\u521D\u59CB\u5316\u5C31\u88AB\u7ADE\u4E89\u4E86</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton3</span> INSTANCE<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u53CC\u91CD\u68C0\u67E5</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton3</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>INSTANCE <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u7C7B\u7EA7\u522B\u7684\u9501</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton3</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>INSTANCE <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E1A\u52A1\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h2 id="\u9759\u6001\u5185\u90E8\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u5185\u90E8\u7C7B" aria-hidden="true">#</a> \u9759\u6001\u5185\u90E8\u7C7B</h2><p>\u65E2\u652F\u6301\u5EF6\u8FDF\u52A0\u8F7D\uFF0C\u4E5F\u652F\u6301\u9AD8\u5E76\u53D1\uFF0C\u5B9E\u73B0\u4E5F\u76F8\u5BF9\u7B80\u5355\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton4</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// \u9759\u6001\u5185\u90E8\u7C7B\u63A7\u5236\u552F\u4E00\u6027\u548C\u7EBF\u7A0B\u5B89\u5168,\u79C1\u6709\u5316\u63A7\u5236\u4E0D\u8981\u88AB\u5916\u90E8\u8BBF\u95EE</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton4</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton4</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E1A\u52A1\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u679A\u4E3E" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E" aria-hidden="true">#</a> \u679A\u4E3E</h2><p>\u5229\u7528\u679A\u4E3E\u7684\u7684\u7279\u6027\uFF0C\u65E2\u4FDD\u8BC1\u4E86\u7EBF\u7A0B\u5B89\u5168\uFF0C\u53C8\u4FDD\u8BC1\u4E86\u5B9E\u4F8B\u7684\u552F\u4E00\u6027\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton5</span> <span class="token punctuation">{</span>
    INSTANCE<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicLong</span> id <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicLong</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u4E1A\u52A1\u65B9\u6CD5</span>
    <span class="token keyword">public</span> <span class="token keyword">long</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,20);function v(f,S){const s=c("RouterLink");return o(),l(u,null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(s,{to:"#\u997F\u6C49\u5F0F"},{default:p(()=>[b]),_:1})]),n("li",null,[a(s,{to:"#\u61D2\u6C49\u5F0F"},{default:p(()=>[m]),_:1})]),n("li",null,[a(s,{to:"#\u53CC\u91CD\u68C0\u67E5"},{default:p(()=>[w]),_:1})]),n("li",null,[a(s,{to:"#\u9759\u6001\u5185\u90E8\u7C7B"},{default:p(()=>[y]),_:1})]),n("li",null,[a(s,{to:"#\u679A\u4E3E"},{default:p(()=>[g]),_:1})])])]),h],64)}var N=t(r,[["render",v]]);export{N as default};
