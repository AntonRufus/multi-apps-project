(this["webpackJsonpmulti-apps-project"]=this["webpackJsonpmulti-apps-project"]||[]).push([[0],{12:function(e,t,r){e.exports={wrapper:"BrowserTabs_wrapper__k55x2",browser:"BrowserTabs_browser__3ZlNl",tabs:"BrowserTabs_tabs__21qw9",tab:"BrowserTabs_tab__2Ezd3",isActive:"BrowserTabs_isActive__VU58d","address-bar":"BrowserTabs_address-bar__1NWZM",viewport:"BrowserTabs_viewport__1FQmR",highlight:"BrowserTabs_highlight__1nLAJ"}},14:function(e,t,r){e.exports={wrapper:"JustTimer_wrapper__34m8I",timer:"JustTimer_timer__3S6Vf",buttons:"JustTimer_buttons__1ZbIm",buttonSum:"JustTimer_buttonSum__17oAN",timeSetBlock:"JustTimer_timeSetBlock__10EPp",timeSet:"JustTimer_timeSet__2MHpZ"}},146:function(e,t,r){"use strict";r.r(t);var n=r(43),c=r(1),s=r(0),a=r.n(s),o=r(19),i=r.n(o),j=(r(67),r(44),r(6)),b=r(18),u=r(29),l=r.n(u),d=function(e){var t=Object(s.useState)({left:0,top:0,opacity:0}),r=Object(j.a)(t,2),n=r[0],a=r[1];return Object(c.jsxs)("div",{className:l.a.bgc,onMouseMove:function(e){a({left:e.nativeEvent.layerX-5,top:e.nativeEvent.layerY-5})},onMouseOut:function(){a({opacity:0})},children:[Object(c.jsx)("div",{className:l.a.highlight,style:n}),Object(c.jsx)("hr",{}),Object(c.jsxs)(b.b,{activeClassName:l.a.isActive,to:e.to,children:[" ",e.title," "]})]})},O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(d,{to:"/home",title:"Home page"}),Object(c.jsx)(d,{to:"/pomodoro_timer",title:"Pomodoro Timer"}),Object(c.jsx)(d,{to:"/just_timer",title:"Just Timer"}),Object(c.jsx)(d,{to:"/markdown_editor",title:"Markdown Editor"}),Object(c.jsx)(d,{to:"/browser_tabs",title:"Browser Tabs"}),Object(c.jsx)("hr",{})]})},h=r(3),x=r(23),m=r.n(x),p=r(21),_=function(e){return e.toString().padStart(2,"0")},v=function(){var e=Object(s.useState)("Let the countdown begin!"),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(1500),o=Object(j.a)(a,2),i=o[0],b=o[1],u=Object(s.useState)(!1),l=Object(j.a)(u,2),d=l[0],O=l[1],h=Object(s.useRef)(null),x=Object(p.b)();function v(){n("Ready to go one more round?"),clearInterval(h.current),h.current=null,O(!1),b(1500)}var f=_(Math.floor(i/60)),g=_(Math.floor(i-60*f));return Object(c.jsxs)("div",{className:m.a.wrapper,children:[Object(c.jsx)("h2",{children:r}),Object(c.jsx)("div",{className:m.a.input,children:!d&&Object(c.jsx)("input",{min:"0",max:"1500",value:i,type:"number",onChange:function(e){return b(e.target.value)}})}),Object(c.jsxs)("div",{className:m.a.timer,children:[Object(c.jsx)("span",{children:f}),Object(c.jsx)("span",{children:":"}),Object(c.jsx)("span",{children:g})]}),Object(c.jsxs)("div",{className:m.a.buttons,children:[!d&&Object(c.jsx)("button",{style:{backgroundColor:"green"},onClick:function(){null===h.current&&(n("Started!"),O(!0),h.current=setInterval((function(){b((function(e){return e>=1?e-1:(v(),x.show("Time is over"),0)}))}),1e3))},children:"Start"}),d&&Object(c.jsx)("button",{style:{backgroundColor:"orange"},onClick:function(){null!=h.current&&(clearInterval(h.current),h.current=null,n("Stopped!"),O(!1))},children:"Stop"}),Object(c.jsx)("button",{style:{backgroundColor:"red"},onClick:v,children:"Reset"})]})]})},f=r(59),g=r.n(f),w=r(30),S=r.n(w),N=function(){var e=Object(s.useState)("# Enter your text."),t=Object(j.a)(e,2),r=t[0],n=t[1];return Object(c.jsxs)("div",{className:S.a.wrapper,children:[Object(c.jsxs)("div",{className:S.a.instructions,children:[Object(c.jsx)("div",{children:"use '>' for `blockquote`, 'double Enter' for paragraph and '-' for `list`"}),Object(c.jsx)("hr",{})]}),Object(c.jsx)("textarea",{onChange:function(e){n(e.target.value)},value:r}),Object(c.jsx)(g.a,{className:S.a.preview,source:r})]})},C=r(14),k=r.n(C),T=function(e){return e.toString().padStart(2,"0")},y=function(){var e=Object(s.useState)("Timer is ready to go!"),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(s.useState)(0),o=Object(j.a)(a,2),i=o[0],b=o[1],u=Object(s.useState)(0),l=Object(j.a)(u,2),d=l[0],O=l[1],h=Object(s.useState)(0),x=Object(j.a)(h,2),m=x[0],_=x[1],v=Object(s.useState)(0),f=Object(j.a)(v,2),g=f[0],w=f[1],S=Object(s.useState)(!1),N=Object(j.a)(S,2),C=N[0],y=N[1],M=Object(s.useState)(!1),B=Object(j.a)(M,2),E=B[0],I=B[1],A=Object(s.useRef)(null),J=Object(p.b)();function P(){n("Ready to go one more round?"),clearInterval(A.current),A.current=null,y(!1),I(!1),b(0),O(0),_(0),w(0)}var R=Math.floor(i/3600),F=T(R),V=Math.floor(i/60-60*R),H=T(V),L=Math.floor(i-3600*R-60*V),X=T(L);return Object(c.jsxs)("div",{className:k.a.wrapper,children:[Object(c.jsx)("h2",{children:r}),!E&&Object(c.jsxs)("div",{className:k.a.inputBlock,children:[Object(c.jsxs)("div",{className:k.a.timeSet,children:[Object(c.jsx)("span",{children:"hours: "}),Object(c.jsx)("input",{min:"0",max:"23",defaultValue:R,type:"number",onChange:function(e){return O(e.target.value)}})]}),Object(c.jsxs)("div",{className:k.a.timeSet,children:[Object(c.jsx)("span",{children:"minutes: "}),Object(c.jsx)("input",{min:"0",max:"59",defaultValue:V,type:"number",onChange:function(e){return _(e.target.value)}})]}),Object(c.jsxs)("div",{className:k.a.timeSet,children:[Object(c.jsx)("span",{children:"seconds: "}),Object(c.jsx)("input",{min:"0",max:"59",defaultValue:L,type:"number",onChange:function(e){return w(e.target.value)}})]}),Object(c.jsx)("button",{className:k.a.buttonSum,onClick:function(){var e=Number(3600*d)+Number(60*m)+Number(g);b(e)},children:"Set / Reset"})]}),Object(c.jsxs)("div",{className:k.a.timer,children:[Object(c.jsx)("span",{children:F}),Object(c.jsx)("span",{children:":"}),Object(c.jsx)("span",{children:H}),Object(c.jsx)("span",{children:":"}),Object(c.jsx)("span",{children:X})]}),Object(c.jsxs)("div",{className:k.a.buttons,children:[!C&&Object(c.jsx)("button",{style:{backgroundColor:"green"},onClick:function(){null===A.current&&(n("Started!"),y(!0),I(!0),A.current=setInterval((function(){b((function(e){return e>=1?e-1:(P(),J.show("Time is over"),0)}))}),1e3))},children:"Start"}),C&&Object(c.jsx)("button",{style:{backgroundColor:"orange"},onClick:function(){null!=A.current&&(clearInterval(A.current),A.current=null,n("Stopped!"),y(!1),I(!0))},children:"Stop"}),Object(c.jsx)("button",{style:{backgroundColor:"red"},onClick:P,children:"Reset"})]})]})},M=r(12),B=r.n(M),E=function(e){var t=Object(s.useState)({left:0,opacity:0}),r=Object(j.a)(t,2),n=r[0],a=r[1];return Object(c.jsxs)("div",{className:B.a.tab,onMouseMove:function(e){a({left:e.nativeEvent.layerX-75})},onMouseOut:function(){a({opacity:0})},children:[Object(c.jsx)("div",{className:B.a.highlight,style:n}),e.children]})},I=function(e){return Object(c.jsx)(E,{children:Object(c.jsx)(b.b,{to:e.to,exact:e.exact,activeClassName:B.a.isActive,children:e.name})})},A=function(){return Object(c.jsxs)("div",{className:B.a.tabs,children:[Object(c.jsx)(I,{to:"/browser_tabs/",exact:!0,name:"Home"}),Object(c.jsx)(I,{to:"/browser_tabs/about",exact:!1,name:"About"}),Object(c.jsx)(I,{to:"/browser_tabs/features",exact:!1,name:"Features"})]})},J=function(){return Object(c.jsx)("div",{children:"I am the home page"})},P=function(){return Object(c.jsx)("div",{children:"I am the about page"})},R=function(){return Object(c.jsx)("div",{children:"I am the features page"})},F=function(){return Object(c.jsxs)(h.d,{children:[Object(c.jsxs)(h.b,{exact:!0,path:"/browser_tabs",children:["   ",Object(c.jsx)(J,{}),"          "]}),Object(c.jsxs)(h.b,{path:"/browser_tabs/about",children:["          ",Object(c.jsx)(P,{}),"         "]}),Object(c.jsxs)(h.b,{path:"/browser_tabs/features",children:["       ",Object(c.jsx)(R,{}),"      "]})]})},V=function(){return Object(c.jsx)("div",{className:B.a.wrapper,children:Object(c.jsxs)("div",{className:B.a.browser,children:[Object(c.jsx)(A,{}),Object(c.jsx)("div",{className:B.a.viewport,children:Object(c.jsx)(F,{})})]})})},H=r(60),L=r.n(H);var X=function(){return Object(c.jsx)("div",{className:L.a.home,children:"Hi There!"})},Z=function(){return Object(c.jsxs)(h.d,{children:[Object(c.jsxs)(h.b,{exact:!0,path:"/",children:[" ",Object(c.jsx)(h.a,{to:"/home"})," "]}),Object(c.jsxs)(h.b,{path:"/home",children:[" ",Object(c.jsx)(X,{})," "]}),Object(c.jsxs)(h.b,{path:"/pomodoro_timer",children:[" ",Object(c.jsx)(v,{})," "]}),Object(c.jsxs)(h.b,{path:"/just_timer",children:[" ",Object(c.jsx)(y,{})," "]}),Object(c.jsxs)(h.b,{path:"/markdown_editor",children:[" ",Object(c.jsx)(N,{})," "]}),Object(c.jsxs)(h.b,{path:"/browser_tabs",children:[" ",Object(c.jsx)(V,{})," "]})]})};var q=function(){return Object(c.jsxs)("div",{className:"App_header",children:[Object(c.jsx)("div",{className:"Nav_bar",children:Object(c.jsx)(O,{})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsx)(Z,{})})]})},W=r(61),z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,149)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(b.a,{children:Object(c.jsx)(p.a,Object(n.a)(Object(n.a)({template:W.a},{position:"bottom center",timeout:5e3,offset:"1px",transition:"scale"}),{},{children:Object(c.jsx)(q,{})}))})}),document.getElementById("root")),z()},23:function(e,t,r){e.exports={wrapper:"PomodoroTimer_wrapper__1wmEO",input:"PomodoroTimer_input__3vVKj",timer:"PomodoroTimer_timer__1s4sb",buttons:"PomodoroTimer_buttons__3GXoC"}},29:function(e,t,r){e.exports={highlight:"Creator_highlight__26fkX",bgc:"Creator_bgc__14bWE",isActive:"Creator_isActive__2pJc4"}},30:function(e,t,r){e.exports={wrapper:"MarkdownEditor_wrapper__1ip6g",instructions:"MarkdownEditor_instructions__3CaAN",preview:"MarkdownEditor_preview__g3x7F"}},44:function(e,t,r){},60:function(e,t,r){e.exports={home:"Home_home__2cxgi"}},67:function(e,t,r){}},[[146,1,2]]]);
//# sourceMappingURL=main.f7f162b2.chunk.js.map