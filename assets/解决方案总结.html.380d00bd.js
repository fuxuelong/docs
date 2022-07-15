import{_ as l,r as n,o as s,a as o,d as e,b as t,w as i,F as c,e as d,f as r}from"./app.98d1b083.js";const h={},u=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),e("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),_={class:"table-of-contents"},g=r("\u4EA7\u751F\u6D88\u606F\u79EF\u538B\u7684\u539F\u56E0\u53CA\u573A\u666F"),f=r("\u89E3\u51B3\u65B9\u6848"),b=d('<hr><h1 id="rabbitmq\u6D88\u606F\u9632\u4E22\u5931-\u6D88\u606F\u53EF\u9760" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u6D88\u606F\u9632\u4E22\u5931-\u6D88\u606F\u53EF\u9760" aria-hidden="true">#</a> RabbitMQ\u6D88\u606F\u9632\u4E22\u5931\uFF08\u6D88\u606F\u53EF\u9760\uFF09</h1><p>RabbitMQ\u4E0D\u5EFA\u8BAE\u7528\u4E8B\u52A1\u673A\u5236\uFF0C\u56E0\u4E3A\u5B98\u7F51\u5199\u7740\u8BF4\u5F00\u542F\u4E8B\u52A1\u673A\u5236\u4F1A\u5BFC\u81F4\u541E\u5410\u91CF\u964D\u4F4E250\u500D\u5DE6\u53F3\u3002\u89E3\u51B3\u65B9\u6848\u5982\u4E0B\uFF1A</p><ul><li><strong>\u6301\u4E45\u5316</strong><ul><li><strong>exchange\u6301\u4E45\u5316</strong></li><li><strong>queue\u6301\u4E45\u5316</strong></li><li><strong>message\u6301\u4E45\u5316</strong></li></ul></li><li><strong>\u751F\u4EA7\u8005\u6D88\u606F\u53EF\u9760\u6295\u9012confirm\u3002</strong></li><li><strong>\u6D88\u8D39\u8005\u7B7E\u6536\u786E\u8BA4ack</strong></li><li><strong>Broker\u9AD8\u53EF\u7528</strong></li></ul><h1 id="\u6D88\u606F\u79EF\u538B" tabindex="-1"><a class="header-anchor" href="#\u6D88\u606F\u79EF\u538B" aria-hidden="true">#</a> \u6D88\u606F\u79EF\u538B</h1><h2 id="\u4EA7\u751F\u6D88\u606F\u79EF\u538B\u7684\u539F\u56E0\u53CA\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4EA7\u751F\u6D88\u606F\u79EF\u538B\u7684\u539F\u56E0\u53CA\u573A\u666F" aria-hidden="true">#</a> \u4EA7\u751F\u6D88\u606F\u79EF\u538B\u7684\u539F\u56E0\u53CA\u573A\u666F</h2><ul><li>\u6D88\u8D39\u8005\u5B95\u673A</li><li>\u6D88\u8D39\u8005\u6D88\u8D39\u80FD\u529B\u4E0D\u8DB3</li></ul><h2 id="\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6848</h2><ul><li>\u53EF\u80FD\u7684\u60C5\u51B5\u4E0B\u8C03\u4F18\u6D88\u8D39\u7AEF\u9650\u6D41</li><li>\u4E0A\u7EBF\u66F4\u591A\u7684\u6D88\u8D39\u8005\uFF08Working Queue\uFF09</li><li>\u6700\u6B21\u7684\u60C5\u51B5\u53EF\u4EE5\u4E0A\u7EBF\u4E00\u90E8\u5206\u6D88\u8D39\u8005\uFF0C\u5C06\u6D88\u606F\u53D6\u51FA\u6765\u5B58\u5165\u6570\u636E\u5E93\u6216\u8005\u505A\u9884\u5904\u7406\u6682\u5B58\uFF0C\u540E\u7EED\u518D\u6162\u6162\u5904\u7406</li></ul><h1 id="\u9632\u6B62\u91CD\u590D\u6D88\u8D39" tabindex="-1"><a class="header-anchor" href="#\u9632\u6B62\u91CD\u590D\u6D88\u8D39" aria-hidden="true">#</a> \u9632\u6B62\u91CD\u590D\u6D88\u8D39</h1><p>\u5C06\u63A5\u53E3\u8BBE\u8BA1\u4E3A<strong>\u6D88\u606F\u5E42\u7B49</strong>\u7684\u63A5\u53E3\uFF1A</p><ul><li>\u6D88\u8D39\u8005\u4F7F\u7528\u4E50\u89C2\u9501</li><li>Redis\u9501\u7B49</li></ul>',12);function m(p,x){const a=n("RouterLink");return s(),o(c,null,[u,e("nav",_,[e("ul",null,[e("li",null,[t(a,{to:"#\u4EA7\u751F\u6D88\u606F\u79EF\u538B\u7684\u539F\u56E0\u53CA\u573A\u666F"},{default:i(()=>[g]),_:1})]),e("li",null,[t(a,{to:"#\u89E3\u51B3\u65B9\u6848"},{default:i(()=>[f]),_:1})])])]),b],64)}var R=l(h,[["render",m]]);export{R as default};
