(this["webpackJsonpasoul-button"]=this["webpackJsonpasoul-button"]||[]).push([[0],{115:function(t,e,c){},116:function(t,e,c){},191:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),a=c(31),s=c.n(a),l=(c(115),c(40)),o=(c(116),c(194)),r=c(196),b=c(73),j=c(76),u=c(197),h=c(193),d=c(198),O=c(199),x=c(200),p=c(201),f=c(195),g=c(6);function m(t){var e=Object(n.useState)(!1),c=Object(l.a)(e,2),i=(c[0],c[1]),a=function(){t.audioPanel.currentSrc===t.src&&i(!1)};return Object(g.jsx)("div",{style:{marginLeft:"5px"},children:Object(g.jsx)(j.a,{onClick:function(){t.audioPanel.pause(),t.audioPanel.currentTime=0;var e=new Audio(t.src);t.updateAudio(e),e.addEventListener("ended",a),e.play(),console.log("start")},shape:"round",type:"",children:(t.playState,t.audioTitle)})})}function k(t){var e=Object(n.useState)(Array(t.config.audios.length).fill(!1)),c=Object(l.a)(e,2);c[0],c[1];return Object(g.jsx)(f.a,{title:t.config.sectionName,style:{marginTop:"2vh",marginLeft:"2vw",marginRight:"2vw"},children:Object(g.jsx)("div",{style:{display:"flex"},children:t.config.audios.map((function(e){return Object(g.jsx)(m,{audioTitle:e.title,src:"/assets/"+t.config.directoryName+"/"+e.src,audioPanel:t.audioPanel,updateAudio:t.updateAudio},e.title)}))})})}function y(){return Object(g.jsxs)(f.a,{style:{marginTop:"2vh",marginLeft:"2vw",marginRight:"2vw",height:"80vh"},children:[Object(g.jsx)("h2",{children:"A-Soul \u6309\u94ae"}),Object(g.jsx)("p",{children:"A-Soul\u662f\u4e50\u534e\u5a31\u4e50\u9996\u4e2a\u865a\u62df\u5076\u50cf\u4f01\u5212\uff0c\u7531\u4e94\u4f4d\u5c0f\u59d0\u59d0\u5411\u665a\uff0c\u8d1d\u62c9\uff0c\u73c8\u4e50\uff0c\u5609\u7136\uff0c\u4e43\u7433\u7ec4\u6210\u3002\u672c\u9879\u76ee\u6536\u5f55\u4e86\u4f01\u5212\u76f4\u64ad\u6216\u89c6\u9891\u4f5c\u54c1\u4e2d\u4e00\u4e9b\u6709\u8da3\u7684\u97f3\u9891\u5207\u7247\uff0c\u4f9b\u7c89\u4e1d\u8fdb\u884c\u53c2\u8003\u3002"}),Object(g.jsx)(h.a,{}),Object(g.jsxs)("p",{children:["\u7531asoul-button devTeam\u6ee1\u6000\u7231\u610f\u5730\u91c7\u7528Reactjs+antd\u5f00\u53d1\uff0c\u6258\u7ba1\u4e8eGithub Pages\u3002 \u7075\u611f\u6765\u81ea",Object(g.jsx)("a",{href:"https://github.com/LionelChen/imi-button",children:"imi-button"}),"\u9879\u76ee\uff0c\u6309\u7167GPLv3\u5f00\u6e90\u3002"]}),Object(g.jsx)(h.a,{}),Object(g.jsx)("h3",{children:"\u60f3\u8981\u6dfb\u52a0\u97f3\u9891\uff1f"}),Object(g.jsxs)("p",{children:["\u67e5\u770b",Object(g.jsx)("a",{href:"https://github.com/asoulbutton/asoulbutton.github.io",target:"_blank",children:"asoul-button\u7684Github Pages\u4ed3\u5e93"}),"\uff0c \u97f3\u9891\u6587\u4ef6\u6309\u7167assets/directoryName/fileName.*\u7684\u7ed3\u6784\u5b58\u50a8\uff0c \u6587\u4ef6\u5730\u5740\u914d\u7f6e\u5b58\u50a8\u5728config.json\u4e2d\u3002 \u5982\u679c\u60f3\u8981\u6dfb\u52a0\u4e00\u4e2a\u7c7b\u522b\uff0c\u5219\u5728sections\u6570\u7ec4\u4e2d\u6dfb\u52a0\u4e00\u4e2a\u65b0\u5bf9\u8c61\uff0c \u5e76\u6ce8\u660e\u5176directoryName\uff08\u76ee\u5f55\u540d\uff09\u548csectionName\uff08\u5b9e\u9645\u5728\u9875\u9762\u4e0a\u663e\u793a\u7684\u7c7b\u522b\u540d\uff09\uff0c \u7136\u540e\u5728\u5176audios\u6570\u7ec4\u4e2d\u6dfb\u52a0\u82e5\u5e72\u63cf\u8ff0\u97f3\u9891\u4fe1\u606f\u7684\u5bf9\u8c61\u3002 audios\u6570\u7ec4\u4e2d\u5b58\u50a8\u7684\u5bf9\u8c61\u9700\u8981\u6ce8\u660e\u4e24\u4e2a\u5c5e\u6027\uff1atitle\u548csrc\u3002 title\u662f\u97f3\u9891\u5728\u9875\u9762\u4e0a\u5bf9\u5e94\u6309\u94ae\u663e\u793a\u7684\u540d\u79f0\uff0csrc\u662f\u6587\u4ef6\u540d\u3002"]}),Object(g.jsx)("p",{children:"\u6dfb\u52a0\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u63d0\u4ea4pull request\u3002"}),Object(g.jsx)(h.a,{}),Object(g.jsx)("h3",{children:"\u60f3\u8981\u8d21\u732e\u4ee3\u7801\uff1f"}),Object(g.jsxs)("p",{children:["\u67e5\u770b",Object(g.jsx)("a",{href:"https://github.com/asoulbutton/asoulbutton-src",target:"_blank",children:"asoul-button\u7684\u6e90\u4ee3\u7801\u4ed3\u5e93"}),"\uff0c \u6240\u6709\u4ee3\u7801\u6309\u7167GPLv3\u5f00\u6e90\u3002\u6b22\u8fcestar\uff0cfork\uff0c\u63d0issue\u3002"]})]})}var v=c(56),A=c(19);var w=function(){var t=Object(n.useState)(!1),e=Object(l.a)(t,2),c=e[0],i=e[1],a=Object(n.useState)(null),s=Object(l.a)(a,2),f=s[0],m=s[1],w=(o.a.Header,o.a.Content),P=o.a.Footer,S=Object(n.useState)(new Audio),_=Object(l.a)(S,2),C=_[0],L=_[1],B=function(t){L(t)},T=function(){i(!1)};return Object(n.useEffect)((function(){console.log("loading data"),fetch("config.json").then((function(t){return console.log(t),t.json()})).then((function(t){console.log(t),m(t)})).catch((function(t){console.log(t)}))}),[]),Object(g.jsx)(v.a,{children:Object(g.jsxs)(o.a,{children:[Object(g.jsx)(r.a,{backIcon:Object(g.jsx)(d.a,{}),title:Object(g.jsx)(v.b,{to:"/",children:Object(g.jsx)("span",{style:{color:"black"},children:"A-soul\u6309\u94ae"})}),extra:[Object(g.jsx)(b.a,{placement:"bottom",title:"\u7f55\u89c1\u6a21\u5f0f\uff08\u6682\u672a\u5f00\u653e\uff09",children:Object(g.jsx)(j.a,{shape:"circle",icon:Object(g.jsx)(O.a,{})})},"language"),Object(g.jsx)(b.a,{placement:"bottom",title:"\u5f00\u6e90\u4ed3\u5e93",children:Object(g.jsx)(j.a,{shape:"circle",href:"https://github.com/asoulbutton/asoulbutton-src",target:"_blank",icon:Object(g.jsx)(x.a,{})})},"github")],onBack:function(){i((function(t){return!t}))}}),Object(g.jsx)(w,{children:Object(g.jsxs)(A.c,{children:[Object(g.jsx)(A.a,{path:"/about",children:Object(g.jsx)(y,{})}),Object(g.jsx)(A.a,{path:"/",children:Object(g.jsx)("div",{style:{minHeight:"720px"},children:f?f.sections.map((function(t){return Object(g.jsx)(k,{config:t,audioPanel:C,updateAudio:B})})):Object(g.jsx)("div",{})})})]})}),Object(g.jsxs)(P,{style:{textAlign:"center"},children:["Made with ",Object(g.jsx)(p.a,{})," by asoul-button team"]}),Object(g.jsxs)(u.a,{title:"A-soul\u6309\u94ae",placement:"left",visible:c,closable:!1,onClose:T,children:[Object(g.jsx)(j.a,{type:"text",block:!0,style:{textAlign:"left"},onClick:T,children:Object(g.jsx)(v.b,{to:"/",children:"\u4e3b\u9875"})}),Object(g.jsx)(j.a,{type:"text",block:!0,style:{textAlign:"left"},onClick:T,children:Object(g.jsx)(v.b,{to:"/about",children:"\u5173\u4e8e"})}),Object(g.jsx)(h.a,{children:"\u94fe\u63a5"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/672346917",children:"\u5411\u665a\u5927\u9b54\u738b B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/672353429",children:"\u8d1d\u62c9Kira B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/351609538",children:"\u73c8\u4e50Carol B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/672328094",children:"\u5609\u7136\u4eca\u5929\u5403\u4ec0\u4e48 B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/672342685",children:"\u4e43\u7433Queen B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://space.bilibili.com/703007996",children:"A-SOUL_Official B\u7ad9"}),Object(g.jsx)(j.a,{type:"link",target:"_blank",href:"https://www.douban.com/group/a-soul/",children:"\u8c46\u74e3\u9b42\u7ec4"})]})]})})},P=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,202)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;c(t),n(t),i(t),a(t),s(t)}))};c(190);s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),P()}},[[191,1,2]]]);
//# sourceMappingURL=main.ed785b55.chunk.js.map