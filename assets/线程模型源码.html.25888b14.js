import{_ as a,r,o as t,a as h,d as e,b as i,w as l,F as s,e as d,f as n}from"./app.98d1b083.js";const c={},p=e("div",{class:"custom-container info"},[e("p",{class:"custom-container-title"},"\u76F8\u5173\u4FE1\u606F"),e("p",null,"\u6587\u7AE0\u4ECB\u7ECD")],-1),u={class:"table-of-contents"},_=n("\u6784\u5EFANioEventLoopGroup"),v=n("ServerBootStrap\u7ED1\u5B9A\u4E24\u4E2AGroup"),f=n("bind()\u7ED1\u5B9A\u7AEF\u53E3\u548C\u542F\u52A8\u670D\u52A1\u5668\uFF0C\u975E\u5E38\u91CD\u8981\uFF08\u5BF9NIO API\u7684\u5C01\u88C5\uFF09"),b=d('<hr><h1 id="\u670D\u52A1\u7AEF\u542F\u52A8\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u542F\u52A8\u539F\u7406" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u542F\u52A8\u539F\u7406</h1><p>\u5F02\u6B65\u7684\u6838\u5FC3\u5C31\u662F\u901A\u8FC7\u4E3B\u7EBF\u7A0B\u542F\u52A8\u8FC7\u4E2A\u540E\u53F0\u7EBF\u7A0B\uFF0C\u8FDB\u884C\u591A\u7EBF\u7A0B\u5904\u7406\u3002</p><h2 id="\u6784\u5EFAnioeventloopgroup" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFAnioeventloopgroup" aria-hidden="true">#</a> \u6784\u5EFANioEventLoopGroup</h2><p><strong>\u521D\u59CB\u5316\u4E24\u4E2AGroup\u7684\u6838\u5FC3\u53C2\u6570</strong>\u3002</p><ol><li>\u8BA1\u7B97\u7EBF\u7A0B\u6570\uFF0C\u672A\u6307\u5B9A\u7EBF\u7A0B\u6570\u4F7F\u7528 cpu\u6838\u5FC3\u6570*2</li><li>\u521D\u59CB\u5316\u4E00\u4E2A\u7EBF\u7A0B\u6C60</li><li>\u521D\u59CB\u5316\u4E00\u4E2A\u7EBF\u7A0B\u6C60\u6570\u7EC4\u7ED9children\u6210\u5458\u53D8\u91CF\uFF0C\u8FD9\u4E2A\u7EBF\u7A0B\u6C60\u7528\u4E8E\u521B\u5EFANioEventLoop\u5BF9\u8C61\u3002</li><li>\u4E3A\u6570\u7EC4\u6BCF\u4E2A\u5143\u7D20\u521B\u5EFANioEventLoop\u5BF9\u8C61 <ol><li>\u521D\u59CB\u5316LinkedBlockingQueue\u7684taskQueue\uFF0C\u4E5F\u5C31\u662F\u4E2A\u5185\u5B58\u6570\u636E\u961F\u5217</li><li>\u8C03\u7528JavaNIO\u7684API\uFF0C\u83B7\u53D6Selector\uFF08SelectorProvider.openSelector()\uFF09</li></ol></li><li>children\u8D4B\u503C\u4E3ANioEventLoop\uFF0C\u6BCF\u4E2ANioEventLoop\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9 <ol><li>\u7B2C\u4E09\u6B65\u4E2D\u521D\u59CB\u5316\u7684\u7EBF\u7A0B\u6C60</li><li>taskQueue</li><li>Selector</li></ol></li><li>\u6784\u9020chooser</li></ol><h2 id="serverbootstrap\u7ED1\u5B9A\u4E24\u4E2Agroup" tabindex="-1"><a class="header-anchor" href="#serverbootstrap\u7ED1\u5B9A\u4E24\u4E2Agroup" aria-hidden="true">#</a> ServerBootStrap\u7ED1\u5B9A\u4E24\u4E2AGroup</h2><p><strong>\u4E3B\u8981\u662F\u901A\u8FC7\u94FE\u5F0F\u7F16\u7A0B\u5BF9\u4E3B\u8981\u7684\u6210\u5458\u53D8\u91CF\u8FDB\u884C\u8D4B\u503C</strong>\u3002</p><ol><li>group()\u65B9\u6CD5\uFF1A\u5C06BoosGroup\u8D4B\u503C\u7ED9\u6210\u5458\u53D8\u91CF\uFF0CWorkGroup\u8D4B\u503C\u7ED9\u6210\u5458\u53D8\u91CF</li><li>channel()\u65B9\u6CD5\uFF1A\u6784\u5EFANioServerSocketChannel\u7684\u53CD\u5C04\u5DE5\u5382\uFF0C\u540E\u7EED\u901A\u8FC7\u53CD\u5C04\u521B\u5EFA</li><li>options()\u65B9\u6CD5\uFF1A\u5C06\u53C2\u6570\u653E\u5165options\u7684map\u4E2D\u5B58\u50A8\uFF0C\u5B58\u50A8\u76F8\u5173\u7684TCP\u53C2\u6570</li><li>channelHandler()\u65B9\u6CD5\uFF1A\u8D4B\u503CChannelHandler</li></ol><h2 id="bind-\u7ED1\u5B9A\u7AEF\u53E3\u548C\u542F\u52A8\u670D\u52A1\u5668-\u975E\u5E38\u91CD\u8981-\u5BF9nio-api\u7684\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#bind-\u7ED1\u5B9A\u7AEF\u53E3\u548C\u542F\u52A8\u670D\u52A1\u5668-\u975E\u5E38\u91CD\u8981-\u5BF9nio-api\u7684\u5C01\u88C5" aria-hidden="true">#</a> bind()\u7ED1\u5B9A\u7AEF\u53E3\u548C\u542F\u52A8\u670D\u52A1\u5668\uFF0C\u975E\u5E38\u91CD\u8981\uFF08\u5BF9NIO API\u7684\u5C01\u88C5\uFF09</h2><ol><li>initAndRegistry() <ol><li>\u521D\u59CB\u5316Channel <ol><li>\u5229\u7528\u7ED1\u5B9A\u7684NioServerSocketChannel\u7684\u53CD\u5C04\u5DE5\u5382\uFF0C\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6Channel\u5B9E\u4F8B\u3002 <ol><li>\u521D\u59CB\u5316\u65F6\u8C03\u7528SelectorProvider.openServerSocketChannel()\u83B7\u53D6Channel\u3002</li></ol></li><li>\u6CE8\u518COP_ACCEPT\u8FDE\u63A5\u4E8B\u4EF6\u5230Channel</li><li>\u8BBE\u7F6EChannel\u4E3A\u975E\u963B\u585E</li><li>\u521B\u5EFAChannelPipeline\uFF0C\u5E76\u4E14\u521D\u59CB\u5316head\u548Ctail</li></ol></li><li><h1 id="reactor\u7EBF\u7A0B\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#reactor\u7EBF\u7A0B\u6A21\u578B" aria-hidden="true">#</a> Reactor\u7EBF\u7A0B\u6A21\u578B</h1></li></ol></li></ol><h1 id="\u670D\u52A1\u7AEFchannel\u6CE8\u518C" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEFchannel\u6CE8\u518C" aria-hidden="true">#</a> \u670D\u52A1\u7AEFChannel\u6CE8\u518C</h1><h1 id="nio\u591A\u8DEF\u590D\u7528\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#nio\u591A\u8DEF\u590D\u7528\u5C01\u88C5" aria-hidden="true">#</a> NIO\u591A\u8DEF\u590D\u7528\u5C01\u88C5</h1>',13);function C(N,S){const o=r("RouterLink");return t(),h(s,null,[p,e("nav",u,[e("ul",null,[e("li",null,[i(o,{to:"#\u6784\u5EFAnioeventloopgroup"},{default:l(()=>[_]),_:1})]),e("li",null,[i(o,{to:"#serverbootstrap\u7ED1\u5B9A\u4E24\u4E2Agroup"},{default:l(()=>[v]),_:1})]),e("li",null,[i(o,{to:"#bind-\u7ED1\u5B9A\u7AEF\u53E3\u548C\u542F\u52A8\u670D\u52A1\u5668-\u975E\u5E38\u91CD\u8981-\u5BF9nio-api\u7684\u5C01\u88C5"},{default:l(()=>[f]),_:1})])])]),b],64)}var k=a(c,[["render",C]]);export{k as default};
