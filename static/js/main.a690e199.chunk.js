(this["webpackJsonpmulti-apps-project"]=this["webpackJsonpmulti-apps-project"]||[]).push([[0],{14:function(e,c,t){e.exports={wrapper:"BrowserTabs_wrapper__k55x2",browser:"BrowserTabs_browser__3ZlNl",tabs:"BrowserTabs_tabs__21qw9",tab:"BrowserTabs_tab__2Ezd3",isActive:"BrowserTabs_isActive__VU58d","address-bar":"BrowserTabs_address-bar__1NWZM",viewport:"BrowserTabs_viewport__1FQmR",highlight:"BrowserTabs_highlight__1nLAJ"}},155:function(e,c,t){},156:function(e,c,t){"use strict";t.r(c);var n=t(49),r=t(0),s=t(1),a=t.n(s),i=t(22),o=t.n(i),j=(t(77),t(50),t(2)),l=t(20),b=t(24),u=t.n(b),d=function(e){var c=Object(s.useState)({left:0,top:0,opacity:0}),t=Object(j.a)(c,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:u.a.bgc,onMouseMove:function(e){a({left:e.nativeEvent.layerX-5,top:e.nativeEvent.layerY-5})},onMouseOut:function(){a({opacity:0})},children:[Object(r.jsx)("div",{className:u.a.highlight,style:n}),Object(r.jsx)("hr",{}),Object(r.jsxs)(l.b,{activeClassName:u.a.isActive,to:e.to,children:[" ",e.title," "]})]})},O=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(d,{to:"/home",title:"Home page"}),Object(r.jsx)(d,{to:"/pomodoro_timer",title:"Pomodoro Timer"}),Object(r.jsx)(d,{to:"/just_timer",title:"Just Timer"}),Object(r.jsx)(d,{to:"/markdown_editor",title:"Markdown Editor"}),Object(r.jsx)(d,{to:"/browser_tabs",title:"Browser Tabs"}),Object(r.jsx)(d,{to:"/paper_rock_scissors",title:"RPS  \u270a \ud83e\udd1a \ud83d\udd96"}),Object(r.jsx)(d,{to:"/infinite_image_gallery",title:"Infinite Gallery"}),Object(r.jsx)(d,{to:"/trivia",title:"Trivia"}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:u.a.moving_boxes_link,children:Object(r.jsx)("a",{target:"_blank",href:"https://antonrufus.github.io/moving-boxes/",children:"Moving boxes"})})]})},m=t(4),h=t(28),x=t.n(h),_=t(21),p=function(e){return e.toString().padStart(2,"0")},v=function(){var e=Object(s.useState)("Let the countdown begin!"),c=Object(j.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(1500),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(s.useState)(!1),u=Object(j.a)(b,2),d=u[0],O=u[1],m=Object(s.useRef)(null),h=Object(_.b)();function v(){n("Ready to go one more round?"),clearInterval(m.current),m.current=null,O(!1),l(1500)}var f=p(Math.floor(o/60)),g=p(Math.floor(o-60*f));return Object(r.jsxs)("div",{className:x.a.wrapper,children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("div",{className:x.a.input,children:!d&&Object(r.jsx)("input",{min:"0",max:"1500",value:o,type:"number",onChange:function(e){return l(e.target.value)}})}),Object(r.jsxs)("div",{className:x.a.timer,children:[Object(r.jsx)("span",{children:f}),Object(r.jsx)("span",{children:":"}),Object(r.jsx)("span",{children:g})]}),Object(r.jsxs)("div",{className:x.a.buttons,children:[!d&&Object(r.jsx)("button",{style:{backgroundColor:"green"},onClick:function(){null===m.current&&(n("Started!"),O(!0),m.current=setInterval((function(){l((function(e){return e>=1?e-1:(v(),h.show("Time is over"),0)}))}),1e3))},children:"Start"}),d&&Object(r.jsx)("button",{style:{backgroundColor:"orange"},onClick:function(){null!=m.current&&(clearInterval(m.current),m.current=null,n("Stopped!"),O(!1))},children:"Stop"}),Object(r.jsx)("button",{style:{backgroundColor:"red"},onClick:v,children:"Reset"})]})]})},f=t(66),g=t.n(f),w=t(36),S=t.n(w),N=function(){var e=Object(s.useState)("# Enter your text."),c=Object(j.a)(e,2),t=c[0],n=c[1];return Object(r.jsxs)("div",{className:S.a.wrapper,children:[Object(r.jsxs)("div",{className:S.a.instructions,children:[Object(r.jsx)("div",{children:"use '>' for `blockquote`, 'double Enter' for paragraph and '-' for `list`"}),Object(r.jsx)("hr",{})]}),Object(r.jsx)("textarea",{onChange:function(e){n(e.target.value)},value:t}),Object(r.jsx)(g.a,{className:S.a.preview,source:t})]})},C=t(16),k=t.n(C),y=function(e){return e.toString().padStart(2,"0")},T=function(){var e=Object(s.useState)("Timer is ready to go!"),c=Object(j.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(0),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(s.useState)(0),u=Object(j.a)(b,2),d=u[0],O=u[1],m=Object(s.useState)(0),h=Object(j.a)(m,2),x=h[0],p=h[1],v=Object(s.useState)(0),f=Object(j.a)(v,2),g=f[0],w=f[1],S=Object(s.useState)(!1),N=Object(j.a)(S,2),C=N[0],T=N[1],M=Object(s.useState)(!1),E=Object(j.a)(M,2),I=E[0],P=E[1],A=Object(s.useRef)(null),R=Object(_.b)();function q(){n("Ready to go one more round?"),clearInterval(A.current),A.current=null,T(!1),P(!1),l(0),O(0),p(0),w(0)}var B=Math.floor(o/3600),z=y(B),G=Math.floor(o/60-60*B),L=y(G),Y=Math.floor(o-3600*B-60*G),J=y(Y);return Object(r.jsxs)("div",{className:k.a.wrapper,children:[Object(r.jsx)("h2",{children:t}),!I&&Object(r.jsxs)("div",{className:k.a.inputBlock,children:[Object(r.jsxs)("div",{className:k.a.timeSet,children:[Object(r.jsx)("span",{children:"hours: "}),Object(r.jsx)("input",{min:"0",max:"23",defaultValue:B,type:"number",onChange:function(e){return O(e.target.value)}})]}),Object(r.jsxs)("div",{className:k.a.timeSet,children:[Object(r.jsx)("span",{children:"minutes: "}),Object(r.jsx)("input",{min:"0",max:"59",defaultValue:G,type:"number",onChange:function(e){return p(e.target.value)}})]}),Object(r.jsxs)("div",{className:k.a.timeSet,children:[Object(r.jsx)("span",{children:"seconds: "}),Object(r.jsx)("input",{min:"0",max:"59",defaultValue:Y,type:"number",onChange:function(e){return w(e.target.value)}})]}),Object(r.jsx)("button",{className:k.a.buttonSum,onClick:function(){var e=Number(3600*d)+Number(60*x)+Number(g);l(e)},children:"Set / Reset"})]}),Object(r.jsxs)("div",{className:k.a.timer,children:[Object(r.jsx)("span",{children:z}),Object(r.jsx)("span",{children:":"}),Object(r.jsx)("span",{children:L}),Object(r.jsx)("span",{children:":"}),Object(r.jsx)("span",{children:J})]}),Object(r.jsxs)("div",{className:k.a.buttons,children:[!C&&Object(r.jsx)("button",{style:{backgroundColor:"green"},onClick:function(){null===A.current&&(n("Started!"),T(!0),P(!0),A.current=setInterval((function(){l((function(e){return e>=1?e-1:(q(),R.show("Time is over"),0)}))}),1e3))},children:"Start"}),C&&Object(r.jsx)("button",{style:{backgroundColor:"orange"},onClick:function(){null!=A.current&&(clearInterval(A.current),A.current=null,n("Stopped!"),T(!1),P(!0))},children:"Stop"}),Object(r.jsx)("button",{style:{backgroundColor:"red"},onClick:q,children:"Reset"})]})]})},M=t(14),E=t.n(M),I=function(e){var c=Object(s.useState)({left:0,opacity:0}),t=Object(j.a)(c,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:E.a.tab,onMouseMove:function(e){a({left:e.nativeEvent.layerX-75})},onMouseOut:function(){a({opacity:0})},children:[Object(r.jsx)("div",{className:E.a.highlight,style:n}),e.children]})},P=function(e){return Object(r.jsx)(I,{children:Object(r.jsx)(l.b,{to:e.to,exact:e.exact,activeClassName:E.a.isActive,children:e.name})})},A=function(){return Object(r.jsxs)("div",{className:E.a.tabs,children:[Object(r.jsx)(P,{to:"/browser_tabs/",exact:!0,name:"Home"}),Object(r.jsx)(P,{to:"/browser_tabs/about",exact:!1,name:"About"}),Object(r.jsx)(P,{to:"/browser_tabs/features",exact:!1,name:"Features"})]})},R=function(){return Object(r.jsx)("div",{children:"I am the home page"})},q=function(){return Object(r.jsx)("div",{children:"I am the about page"})},B=function(){return Object(r.jsx)("div",{children:"I am the features page"})},z=function(){return Object(r.jsxs)(m.d,{children:[Object(r.jsxs)(m.b,{exact:!0,path:"/browser_tabs",children:["   ",Object(r.jsx)(R,{}),"          "]}),Object(r.jsxs)(m.b,{path:"/browser_tabs/about",children:["          ",Object(r.jsx)(q,{}),"         "]}),Object(r.jsxs)(m.b,{path:"/browser_tabs/features",children:["       ",Object(r.jsx)(B,{}),"      "]})]})},G=function(){return Object(r.jsx)("div",{className:E.a.wrapper,children:Object(r.jsxs)("div",{className:E.a.browser,children:[Object(r.jsx)(A,{}),Object(r.jsx)("div",{className:E.a.viewport,children:Object(r.jsx)(z,{})})]})})},L=t(67),Y=t(71);function J(){var e=Object(L.a)(["\n        transition-duration: 0.7s;\n        text-align: center;\n        border-radius: 10px;\n        background-color: ",";\n        font-size: ",";\n        padding: ",";\n        @media (max-width: 1200px) {\n        margin: 1vmax;\n        font-size:  3vmax;\n        padding: 10vmax;\n        }\n        @media (max-width: 905px) {\n        padding: 8vmax;\n        }\n        @media (max-width: 605px) {\n        padding: 5vmax;\n        }\n"]);return J=function(){return e},e}var H=function(){var e=Object(s.useState)("#282c34"),c=Object(j.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)("4vmax"),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(s.useState)("22vmax"),u=Object(j.a)(b,2),d=u[0],O=u[1],m=function(e,c,t){n(e),l(c),O(t)},h=Object(Y.a)(J(),t,o,d);return Object(r.jsx)("div",{className:h,children:Object(r.jsx)("div",{onMouseEnter:function(){return m("#3a3b47","6vmax","9vmax")},onMouseOut:function(){return m("#282c34","4vmax","22vmax")},children:"Hi There!"})})},Q=t(8),F=t.n(Q),W=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M94.981,94.567c-0.245-0.509-5.859-12.124-12.284-18.428c0.765-0.985,1.207-2.247,0.757-3.747   c-0.538-1.789-1.891-2.775-3.809-2.775c-1.045,0-1.893,0.299-2.042,0.355c-0.099,0.043-0.484,0.212-1.086,0.482   c-1.971-2.958-16.715-25.14-18.348-29.271c-0.947-2.397-1.652-6.599-2.335-10.663c-0.573-3.412-1.166-6.94-1.914-9.449   C52.409,15.996,48.14,6.454,42.824,6.573c-1.534,0.041-2.259,0.738-2.598,1.316c-1.134,1.937,0.379,5.147,2.169,8.545   c0.199,0.377,0.378,0.719,0.524,1.01c0.585,1.172,1.229,3.498,1.214,4.49c-0.792-0.579-2.003-2.687-2.996-4.415   c-1.231-2.144-2.627-4.573-4.218-6.241c-0.467-0.49-0.943-1.006-1.422-1.526c-3.148-3.413-6.406-6.943-9.189-5.377   c-0.852,0.478-1.417,1.192-1.635,2.066c-0.444,1.779,0.68,3.6,0.867,3.882c0.075,0.094,7.505,9.508,9.713,13.896   c0.086,0.285,0.03,1.036-0.1,1.524c-0.743-0.788-1.908-1.836-3.358-3.141c-2.543-2.288-6.025-5.42-9.104-8.89   c-2.833-3.192-5.352-4.674-7.489-4.397c-1.397,0.179-2.289,1.089-2.663,1.702c-0.827,0.841-1.233,1.796-1.207,2.839   c0.048,1.981,1.68,4.309,5.134,7.326c4.477,3.911,11.268,10.975,11.735,12.917c-0.557-0.094-2.075-0.833-6.108-4.546l-0.268-0.246   c-0.822-0.753-10.877-8.228-14.577-6.113c-1.256,0.719-1.981,1.985-1.99,3.474C5.242,29.047,7,31.565,9.842,33.238   c0.884,0.52,2.134,1.205,3.578,1.994c4.334,2.372,10.884,5.955,13.661,8.593c0.688,0.653,1.073,1.108,1.29,1.408   c-1.037-0.132-6.05-0.785-9.001-1.374c-1.82-0.364-6.2-0.992-7.605,1.01c-0.678,0.967-0.55,2.237,0.38,3.773   c4.479,7.399,20.344,5.726,22.619,5.442c3.738,1.585,14.561,18.151,20.699,28.544c-0.458,0.444-0.857,0.878-1.164,1.297   c-0.662,0.904-1.104,3.312-0.356,4.787c0.441,0.87,1.229,1.349,2.218,1.349c0.61,0,1.279-0.178,2.046-0.546   c0.339-0.163,0.773-0.377,1.273-0.627c0.82,1.11,2.576,3.226,6.3,7.652c0.198,0.235,0.481,0.356,0.767,0.356   c0.227,0,0.455-0.077,0.643-0.234c0.423-0.355,0.478-0.986,0.122-1.409c-2.326-2.765-4.866-5.83-6.016-7.284   c6.181-3.158,17.521-9.152,18.507-9.673c0.43-0.176,0.935-0.442,1.435-0.79c6.2,6.046,11.884,17.805,11.942,17.927   C93.351,95.791,93.708,96,94.081,96c0.145,0,0.292-0.031,0.432-0.099C95.011,95.662,95.221,95.065,94.981,94.567z M48.47,67.743   c-9.659-14.517-12.4-15.359-13.301-15.637c-0.139-0.043-0.285-0.056-0.43-0.034c-0.167,0.023-16.836,2.223-20.883-4.465   c-0.536-0.885-0.585-1.401-0.454-1.589c0.445-0.634,2.946-0.722,5.576-0.198c3.358,0.671,9.093,1.392,9.32,1.42   c0.8,0.112,1.795-0.062,2.195-0.892c0.596-1.233-0.693-2.701-2.033-3.974c-2.966-2.817-9.389-6.332-14.08-8.897   c-1.421-0.778-2.653-1.451-3.523-1.963c-2.669-1.571-3.608-3.587-3.6-4.836c0.003-0.543,0.176-1.288,0.983-1.75   c1.85-1.059,9.881,3.697,12.232,5.852l0.265,0.243c3.575,3.292,6.312,5.405,8.065,5.039c0.582-0.123,1.038-0.5,1.283-1.062   c1.43-3.276-11.743-14.835-12.305-15.325c-2.919-2.551-4.417-4.526-4.45-5.869c-0.013-0.526,0.204-0.975,0.704-1.457   c0.072-0.069,0.142-0.165,0.19-0.253c0.016-0.028,0.398-0.706,1.262-0.802c0.808-0.092,2.629,0.274,5.708,3.744   c3.154,3.554,6.685,6.73,9.263,9.05c1.506,1.355,2.696,2.426,3.362,3.157c1.099,1.204,2.072,0.688,2.344,0.5   c1.188-0.816,1.337-3.501,0.899-4.375c-2.32-4.619-9.643-13.896-9.896-14.208c-0.207-0.323-0.754-1.428-0.552-2.238   c0.053-0.213,0.181-0.529,0.673-0.806c1.408-0.79,4.49,2.55,6.741,4.989c0.487,0.528,0.971,1.052,1.445,1.55   c1.424,1.494,2.756,3.812,3.931,5.857c1.606,2.796,2.875,5.005,4.401,5.468c1.041,0.315,1.631-0.216,1.836-0.459   c1.457-1.726-0.907-6.922-0.933-6.973c-0.151-0.303-0.338-0.658-0.544-1.049c-0.861-1.635-2.878-5.464-2.212-6.602   c0.12-0.204,0.431-0.314,0.924-0.328c3.619-0.083,7.494,7.587,9.128,13.071c0.713,2.391,1.295,5.857,1.857,9.209   c0.7,4.166,1.423,8.473,2.448,11.066c1.685,4.267,15.772,25.487,18.366,29.379c-4.466,2.076-12.921,6.23-17.68,9.998   C55.976,79.586,52.441,73.712,48.47,67.743z M79.009,76.459c-0.033,0.013-0.065,0.028-0.098,0.045   c-0.154,0.081-13.568,7.174-19.56,10.209c-0.001,0-0.001,0-0.002,0.001c-0.001,0-0.001,0.001-0.001,0.001   c-0.828,0.419-1.517,0.763-2.006,0.998c-0.602,0.288-0.975,0.349-1.181,0.349c-0.256,0-0.346-0.083-0.43-0.246   c-0.384-0.74-0.074-2.345,0.182-2.708c3.734-5.094,22.303-13.22,22.431-13.277c0.006-0.002,0.605-0.213,1.303-0.213   c1.028,0,1.612,0.417,1.893,1.352c0.323,1.075-0.261,1.926-0.948,2.519c-0.011,0.011-0.026,0.015-0.036,0.026   c-0.003,0.003-0.003,0.007-0.006,0.01C79.854,76.109,79.072,76.433,79.009,76.459z"})})})},U=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M95.065,78.958c-0.043-0.054-4.279-5.472-6.366-9.246c-1.019-1.841-2.15-2.779-3.245-3.688   c-1.312-1.088-2.552-2.115-3.583-4.891c-0.028-0.076-0.08-0.134-0.123-0.198c0.151-0.796,0.216-1.503,0.166-2.082   c-0.292-3.376-2.57-3.74-3.536-3.74c-1.446,0-2.78,0.692-2.927,0.771c-0.157,0.085-0.289,0.209-0.382,0.361l-1.036,1.699   C57.944,47.55,46.943,37.678,42.192,29.348c-0.18-2.947-1.495-20.248-7.617-22.953c-1.506-0.664-3.122-0.441-4.813,0.647   c-1.345-1.934-3.614-4.155-6.568-3.164c-1.099,0.369-1.931,1.107-2.405,2.136c-0.626,1.356-0.563,3.017-0.321,4.394   c-1.562-0.63-3.549-0.724-5.5,0.841c-2.075,1.665-1.878,4.125-1.154,6.18c-0.46-0.243-0.892-0.424-1.246-0.49   c-1.509-0.284-3.76,0.436-4.952,2.324c-0.671,1.062-1.383,3.136,0.054,6.28c-0.562-0.083-1.102-0.035-1.537,0.242   c-1.294,0.821-2.18,2.373-2.37,4.153c-0.255,2.392,0.759,4.846,2.856,6.912c5.691,5.605,11.706,10.876,22.612,13.788   c2.277,1.758,27.873,21.541,33.088,26.226c-0.955,1.156-2.481,3.377-2.016,5.328c0.188,0.79,0.782,1.855,2.541,2.448   c1.276,0.431,2.353,0.64,3.288,0.64c0.474,0,0.893-0.068,1.291-0.165c1.966,0.223,6.856,1.296,8.133,3.884   c1.914,3.884,5.723,6.973,5.885,7.102c0.185,0.148,0.405,0.221,0.625,0.221c0.293,0,0.583-0.128,0.78-0.374   c0.346-0.43,0.277-1.06-0.153-1.405c-0.035-0.029-3.622-2.936-5.344-6.428c-1.317-2.67-4.846-3.955-7.311-4.546   c0.613-0.612,1.185-1.349,1.805-2.15l0.296-0.382c1.858-2.389,6.704-10.945,8.801-17.144c1.029,1.837,2.186,2.8,3.237,3.672   c0.996,0.826,1.937,1.606,2.772,3.117c2.165,3.914,6.364,9.285,6.542,9.512c0.197,0.251,0.491,0.383,0.788,0.383   c0.216,0,0.433-0.069,0.616-0.213C95.33,80.021,95.406,79.393,95.065,78.958z M29.936,48.755   C19.38,45.979,13.547,40.866,8.021,35.424c-1.654-1.628-2.46-3.501-2.271-5.274c0.148-1.388,0.847-2.292,1.388-2.646   c0.337-0.07,1.493,0.389,2.39,0.952c0.407,0.255,0.937,0.185,1.263-0.165c0.327-0.351,0.359-0.883,0.078-1.271   c-1.999-2.745-2.554-5.12-1.563-6.689c0.686-1.085,2.035-1.586,2.895-1.425c0.607,0.113,2.44,1.358,3.79,2.446   c0.393,0.317,0.961,0.292,1.324-0.06c0.363-0.352,0.406-0.918,0.102-1.321c-0.038-0.05-3.749-5.112-1.197-7.161   c2.556-2.054,4.938,0.329,5.199,0.604c0.328,0.354,0.861,0.421,1.267,0.164c0.407-0.258,0.572-0.769,0.394-1.216   c-0.389-0.976-1.233-3.87-0.473-5.511c0.249-0.537,0.638-0.879,1.225-1.077c2.057-0.691,3.836,1.614,4.771,3.173l3.51,9.558   c0.191,0.519,0.766,0.787,1.283,0.594c0.519-0.19,0.784-0.765,0.594-1.283l-2.82-7.678c0.059-0.211,0.065-0.439-0.028-0.657   C31.119,9.427,31,9.153,30.796,8.757c1.12-0.735,2.099-0.918,2.971-0.532c4.408,1.947,6.145,16.158,6.442,21.469   c0.009,0.152,0.052,0.3,0.126,0.433c4.921,8.787,15.915,18.719,32.657,29.527l-9.497,15.581   c-5.981-5.293-32.024-25.395-33.203-26.304C30.187,48.849,30.065,48.789,29.936,48.755z M70.561,79.807l-0.299,0.386   c-1.656,2.141-2.459,3.087-4.13,3.087c-0.715,0-1.582-0.175-2.649-0.534c-1.077-0.363-1.195-0.855-1.233-1.017   c-0.292-1.219,1.34-3.374,2.176-4.227c0.054-0.055,0.102-0.115,0.141-0.181l10.626-17.434c0.001-0.001,0.002-0.002,0.003-0.003   c0.001-0.001,0.001-0.002,0.001-0.003l1.426-2.34c0.354-0.155,1.068-0.427,1.756-0.427c0.447,0,1.378,0,1.544,1.913   C80.29,63.263,72.948,76.736,70.561,79.807z"})})})},Z=function(){return Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 100 100",children:Object(r.jsx)("g",{children:Object(r.jsx)("path",{d:"M95.047,89.961c-0.075-0.16-1.893-3.973-4.829-6.491c-2.822-2.42-3.351-4.154-3.316-4.617   c0.068-0.894-0.353-1.794-0.693-2.366c0.375-0.838,0.543-1.939,0.431-3.444c-0.149-2.016-1.426-3.172-3.502-3.172   c-0.254,0-0.51,0.022-0.764,0.052c-3.638-3.758-23.082-24.435-25.593-27.107c-0.199-9.314-4.703-17.33-8.897-21.759   c-1.498-1.582-3.044-2.245-4.6-1.969c-1.962,0.347-3.311,2.149-3.975,3.271c-1.399-0.537-2.69-0.548-3.851-0.037   c-1.074,0.474-1.829,1.324-2.339,2.133c-1.983-3.591-4.913-7.685-7.544-11.362c-1.272-1.779-2.475-3.459-3.49-4.967   c-2.103-3.123-3.879-3.251-5-2.807c-1.678,0.664-2.491,3.04-2.198,4.843c0.351,2.16,2.819,5.784,5.677,9.98   c0.766,1.125,1.553,2.28,2.318,3.437c1.184,1.789,2.337,3.332,3.265,4.571c0.244,0.327,0.498,0.666,0.738,0.992   c-1.973-1.114-4.936-2.968-7.312-4.454c-1.956-1.224-3.979-2.489-5.604-3.455c-3.241-1.928-5.571-2.458-7.125-1.62   c-0.932,0.502-1.478,1.476-1.537,2.742c-0.142,3.055,4.681,6.604,6.761,7.987c2.422,1.611,7.53,4.712,11.854,7.305   c-1.005-0.074-1.893,0.032-2.521,0.418c-0.649,0.399-1.022,1.062-1.05,1.867c-0.118,3.454,2.88,6.274,8.912,8.382   c3.769,1.318,7.503,1.922,8.416,2.058c8.085,4.849,14.371,15.392,18.969,23.105c0.548,0.918,1.071,1.792,1.581,2.635   c-0.517,0.666-1.166,1.779-0.926,3.003c0.209,1.064,1.01,1.887,2.372,2.454c0.386,0.996,1.636,1.901,3.041,2.911   c0.72,0.518,1.464,1.053,1.773,1.408c1.33,1.525,3.577,7.225,4.331,9.292c0.147,0.405,0.531,0.657,0.939,0.657   c0.114,0,0.229-0.02,0.343-0.061c0.519-0.189,0.786-0.763,0.597-1.282c-0.29-0.796-2.889-7.84-4.702-9.92   c-0.461-0.53-1.264-1.107-2.113-1.719c-0.263-0.189-0.605-0.435-0.946-0.693c0.376,0.018,0.767,0.03,1.193,0.03   c5.7,0,14.53-1.643,17.146-2.532l0.398-0.135c1.183-0.4,2.262-0.77,3.116-1.363c0.072,0.198,0.125,0.389,0.114,0.539   c-0.125,1.676,1.373,4.025,4.008,6.284c2.606,2.234,4.307,5.792,4.323,5.827c0.171,0.361,0.53,0.573,0.905,0.573   c0.143,0,0.288-0.031,0.426-0.096C95.068,91.056,95.282,90.461,95.047,89.961z M38.528,48.549   c-0.114-0.067-0.241-0.111-0.372-0.129c-4.455-0.606-15.978-3.3-15.803-8.42c0.006-0.175,0.049-0.201,0.098-0.231   c1.024-0.63,5.378,0.647,8.802,2.235c0.486,0.224,1.058,0.03,1.306-0.442c0.248-0.472,0.082-1.055-0.377-1.326   c-0.144-0.085-14.439-8.521-19.005-11.559c-3.518-2.34-5.932-4.902-5.87-6.229c0.025-0.553,0.189-0.914,0.487-1.074   c0.306-0.167,1.588-0.542,5.154,1.578c1.605,0.955,3.619,2.214,5.565,3.432c9.154,5.727,10.043,6.094,10.929,5.568   c0.306-0.181,0.513-0.474,0.583-0.824c0.179-0.896-0.54-1.856-2.275-4.177c-0.912-1.219-2.047-2.736-3.199-4.477   c-0.771-1.164-1.562-2.327-2.333-3.459c-2.496-3.664-5.076-7.453-5.356-9.175c-0.169-1.042,0.324-2.41,0.96-2.662   c0.463-0.187,1.392,0.263,2.605,2.064c1.032,1.532,2.242,3.223,3.523,5.014c3.049,4.261,6.505,9.091,8.323,12.914   c0.18,0.378,0.573,0.604,0.995,0.565c0.417-0.038,0.767-0.334,0.875-0.739c0.006-0.021,0.599-2.178,2.131-2.848   c0.822-0.359,1.836-0.226,3.016,0.395c0.247,0.13,0.537,0.151,0.799,0.058c0.263-0.092,0.475-0.291,0.585-0.546   c0.301-0.696,1.49-2.739,2.959-3c0.855-0.145,1.794,0.313,2.799,1.375c3.991,4.216,8.282,11.893,8.355,20.795   c0.002,0.251,0.099,0.493,0.271,0.677c0.875,0.931,19.692,20.948,25.069,26.567c-0.41,0.145-0.73,0.28-0.887,0.351L59.95,75.089   c-0.51-0.843-1.034-1.717-1.582-2.636C53.628,64.502,47.135,53.612,38.528,48.549z M81.037,77.632l-0.402,0.137   c-2.44,0.83-11.088,2.425-16.501,2.425c-2.054,0-3.07-0.227-3.562-0.415c-0.54-0.209-1.205-0.56-1.303-1.044   c-0.101-0.507,0.36-1.205,0.709-1.603l19.797-4.382c0.073-0.017,0.145-0.041,0.212-0.073c0.018-0.008,1.726-0.807,3.151-0.807   c1.174,0,1.447,0.505,1.508,1.32c0.101,1.363-0.011,2.191-0.408,2.773c-0.021,0.03-0.049,0.055-0.067,0.087   C83.634,76.751,82.642,77.09,81.037,77.632z"})})})},V=(t(155),[{id:1,name:"rock",component:U,losesTo:2},{id:2,name:"paper",component:W,losesTo:3},{id:3,name:"scissors",component:Z,losesTo:1}]),D=function(){var e=Object(s.useState)(0),c=Object(j.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(0),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(s.useState)(0),u=Object(j.a)(b,2),d=u[0],O=u[1],m=Object(s.useState)(null),h=Object(j.a)(m,2),x=h[0],_=h[1],p=Object(s.useState)(null),v=Object(j.a)(p,2),f=v[0],g=v[1],w=Object(s.useState)(null),S=Object(j.a)(w,2),N=S[0],C=S[1];Object(s.useEffect)((function(){T()}),[]);var k=function(e){var c=V.find((function(c){return c.id===e}));_(c),c.losesTo===f.id?(l((function(e){return e+1})),C("lose")):f.losesTo===c.id?(n((function(e){return e+1})),C("win")):c.id===c.id&&(O((function(e){return e+1})),C("draw"))},y=function(e){var c=e.component;return Object(r.jsx)(c,{})},T=function(){C(null);var e=V[Math.floor(Math.random()*V.length)];g(e)};return Object(r.jsxs)("div",{className:F.a.wrapper,children:[Object(r.jsxs)("div",{className:F.a.info,children:[Object(r.jsx)("h2",{children:"Rock. Paper. Scissors"}),Object(r.jsxs)("div",{className:F.a.wins_losses,children:[Object(r.jsxs)("div",{className:F.a.wins,children:[Object(r.jsx)("span",{className:F.a.number,children:t}),Object(r.jsx)("span",{className:F.a.text,children:1===t?"Win":"Wins"})]}),Object(r.jsxs)("div",{className:F.a.losses,children:[Object(r.jsx)("span",{className:F.a.number,children:o}),Object(r.jsx)("span",{className:F.a.text,children:1===o?"Loss":"Losses"})]}),Object(r.jsxs)("div",{className:F.a.draws,children:[Object(r.jsx)("span",{className:F.a.number,children:d}),Object(r.jsx)("span",{className:F.a.text,children:1===d?"Draw":"Draws"})]})]})]}),N&&Object(r.jsx)("div",{className:"game_state ".concat(N),onClick:function(){return T()},children:Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"game_state_content",children:[Object(r.jsx)("p",{children:y(x)}),"win"===N&&Object(r.jsx)("p",{children:"Congrats! You won!"}),"lose"===N&&Object(r.jsx)("p",{children:"Sorry! You lost!"}),"draw"===N&&Object(r.jsx)("p",{children:"Oh! You drew!"}),Object(r.jsx)("p",{children:y(f)})]}),Object(r.jsx)("button",{children:"Play again"})]})}),Object(r.jsxs)("div",{className:F.a.choices,children:[Object(r.jsx)("div",{children:"You"}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:"Computer"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{className:F.a.rock,onClick:function(){return k(1)},children:Object(r.jsx)(U,{})}),Object(r.jsx)("button",{className:F.a.paper,onClick:function(){return k(2)},children:Object(r.jsx)(W,{})}),Object(r.jsx)("button",{className:F.a.scissors,onClick:function(){return k(3)},children:Object(r.jsx)(Z,{})})]}),Object(r.jsx)("div",{className:F.a.vs,children:"vs"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:F.a.computer_choice,children:"?"})})]})]})},X=t(27),K=t(29),$=t.n(K),ee=t(68),ce="bYRYecx0nTuGZUD7pF-vfW7v0XcxajNz2pETgpDwvlI",te=function(){var e=Object(s.useState)([]),c=Object(j.a)(e,2),t=c[0],n=c[1],a=Object(s.useState)(1),i=Object(j.a)(a,2),o=i[0],l=i[1],b=Object(s.useState)(""),u=Object(j.a)(b,2),d=u[0],O=u[1];Object(s.useEffect)((function(){m()}),[o]);var m=function(){var e="https://api.unsplash.com/photos?";d&&(e="https://api.unsplash.com/search/photos?query=".concat(d,"&count=14")),e+="&page=".concat(o),e+="&per_page=12",e+="&client_id=".concat(ce),console.log(e),fetch(e).then((function(e){return e.json()})).then((function(e){var c,t=null!==(c=e.results)&&void 0!==c?c:e;n(1===o?t:function(e){return[].concat(Object(X.a)(e),Object(X.a)(t))})}))};return Object(r.jsxs)("div",{className:$.a.wrapper,children:[Object(r.jsx)("h1",{children:"Unsplash Image Gallery!"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(1),m()},children:[Object(r.jsx)("input",{type:"text",placeholder:"Search Unsplash...",value:d,onChange:function(e){return O(e.target.value)}}),Object(r.jsx)("button",{children:"Search"})]}),Object(r.jsx)(ee.a,{dataLength:t.length,next:function(){return l((function(e){return e+1}))},hasMore:!0,loader:Object(r.jsx)("h4",{children:"Loading..."}),children:Object(r.jsx)("div",{className:$.a.image_grid,children:t.map((function(e,c){return Object(r.jsx)("a",{target:"_blank",href:e.links.html,className:$.a.image,rel:"noopener noreferrer",children:Object(r.jsx)("img",{src:e.urls.regular,alt:e.alt_description})},c)}))})})]})},ne=t(5),re=t.n(ne),se=[{id:"any",name:"Any Category"},{id:9,name:"General Knowledge"},{id:16,name:"Entertainment: Board Games"},{id:10,name:"Entertainment: Books"},{id:32,name:"Entertainment: Cartoon &amp; Animations"},{id:29,name:"Entertainment: Comics"},{id:11,name:"Entertainment: Film"},{id:31,name:"Entertainment: Japanese Anime &amp; Manga"},{id:12,name:"Entertainment: Music"},{id:13,name:"Entertainment: Musicals &amp; Theatres"},{id:14,name:"Entertainment: Television"},{id:15,name:"Entertainment: Video Games"},{id:17,name:"Science &amp; Nature"},{id:18,name:"Science: Computers"},{id:30,name:"Science: Gadgets"},{id:19,name:"Science: Mathematics"},{id:27,name:"Animals"},{id:25,name:"Art"},{id:26,name:"Celebrities"},{id:22,name:"Geography"},{id:23,name:"History"},{id:20,name:"Mythology"},{id:24,name:"Politics"},{id:21,name:"Sports"},{id:28,name:"Vehicles"}];function ae(e){var c=e.chooseCategory,t=e.category;return Object(r.jsxs)("div",{className:re.a.category_selector,children:[Object(r.jsx)("p",{children:"Select Category"}),Object(r.jsx)("select",{value:t,onChange:function(e){return c(e.target.value)},children:se.map((function(e,c){return Object(r.jsx)("option",{value:e.id,dangerouslySetInnerHTML:{__html:e.name}},c)}))})]})}function ie(e){var c=e.isCorrect,t=Object(s.useState)(0),n=Object(j.a)(t,2),a=n[0],i=n[1],o=Object(s.useState)(0),l=Object(j.a)(o,2),b=l[0],u=l[1],d=Object(_.b)();return Object(s.useEffect)((function(){null!==c&&(c?u((function(e){return e+1})):i((function(e){return e+1})))}),[c]),Object(s.useEffect)((function(){10===a&&d.show("Keep pushing \ud83e\udd26\u200d\u2642\ud83e\udd37")}),[a]),Object(s.useEffect)((function(){10===b&&d.show("Good job \ud83e\udd2a\ud83d\udca5\ud83d\udcaa")}),[b]),Object(r.jsxs)("div",{className:re.a.scoreboard,children:[Object(r.jsxs)("div",{className:re.a.wrong,children:[Object(r.jsx)("strong",{children:a}),Object(r.jsx)("span",{children:"wrong"})]}),Object(r.jsxs)("div",{className:re.a.correct,children:[Object(r.jsx)("strong",{children:b}),Object(r.jsx)("span",{children:"correct"})]})]})}var oe=t(69),je=t.n(oe);function le(e){var c=e.question,t=e.answerQuestion,n=je()([].concat(Object(X.a)(c.incorrect_answers),[c.correct_answer]));return Object(r.jsxs)("div",{className:re.a.question,children:[Object(r.jsx)("h2",{dangerouslySetInnerHTML:{__html:c.question}}),Object(r.jsx)("br",{}),n.map((function(e,c){return Object(r.jsx)("button",{dangerouslySetInnerHTML:{__html:e},onClick:function(){return t(e)}},c)}))]})}function be(e){var c=e.isCorrect,t=e.correctAnswer,n=e.handleNextQuestion;return Object(r.jsxs)("div",{className:re.a.result_modal,children:[Object(r.jsx)("div",{className:re.a.overlay}),Object(r.jsxs)("div",{className:re.a.result_modal_content,children:[c&&Object(r.jsx)("div",{className:re.a.is_correct,children:Object(r.jsxs)("h3",{children:["\ud83d\udc4a\ud83d\udc4a\ud83d\udc4a",Object(r.jsx)("br",{}),"YOU WON!"]})}),!c&&Object(r.jsxs)("div",{className:re.a.is_wrong,children:[Object(r.jsxs)("h3",{children:["\ud83d\ude1f\ud83d\ude22\ud83d\ude1f",Object(r.jsx)("br",{}),"YOU LOST!"]}),Object(r.jsxs)("div",{className:re.a.correct_answer,children:[Object(r.jsx)("small",{children:"The correct answer was:"}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("strong",{dangerouslySetInnerHTML:{__html:t}})]})]}),Object(r.jsx)("button",{onClick:n,children:"Go to next question \ud83d\udc49"})]})]})}var ue=function(){var e=Object(s.useState)(null),c=Object(j.a)(e,2),t=c[0],n=c[1],r=Object(s.useState)("any"),a=Object(j.a)(r,2),i=a[0],o=a[1],l=Object(s.useCallback)((function(){var e="https://opentdb.com/api.php?amount=1";"any"!==i&&(e+="&category=".concat(i)),fetch(e).then((function(e){return e.json()})).then((function(e){return n(e.results[0])}))}),[i]);return Object(s.useEffect)((function(){l()}),[l,i]),{question:t,getQuestion:l,selectedCategory:i,setSelectedCategory:o}},de=function(){var e=ue(),c=e.question,t=e.getQuestion,n=e.selectedCategory,a=e.setSelectedCategory,i=Object(s.useState)(null),o=Object(j.a)(i,2),l=o[0],b=o[1],u=function(){b(null),t()};return Object(r.jsx)("div",{className:re.a.wrapper,children:Object(r.jsxs)("div",{className:re.a.app,children:[null!==l&&Object(r.jsx)(be,{isCorrect:l,correctAnswer:c.correct_answer,handleNextQuestion:u}),Object(r.jsxs)("div",{className:re.a.question_header,children:[Object(r.jsx)(ae,{chooseCategory:a,category:n}),Object(r.jsx)(ie,{isCorrect:l})]}),Object(r.jsx)("div",{className:re.a.question_main,children:c&&Object(r.jsx)(le,{question:c,answerQuestion:function(e){var t=e===c.correct_answer;b(t)}})}),Object(r.jsx)("div",{className:re.a.question_footer,children:Object(r.jsx)("button",{onClick:u,children:"Go to next question"})})]})})},Oe=function(){return Object(r.jsxs)(m.d,{children:[Object(r.jsxs)(m.b,{exact:!0,path:"/",children:["           ",Object(r.jsx)(m.a,{to:"/home"}),"        "]}),Object(r.jsxs)(m.b,{path:"/home",children:["                    ",Object(r.jsx)(H,{}),"                         "]}),Object(r.jsxs)(m.b,{path:"/pomodoro_timer",children:["          ",Object(r.jsx)(v,{}),"                "]}),Object(r.jsxs)(m.b,{path:"/just_timer",children:["              ",Object(r.jsx)(T,{}),"                    "]}),Object(r.jsxs)(m.b,{path:"/markdown_editor",children:["         ",Object(r.jsx)(N,{}),"               "]}),Object(r.jsxs)(m.b,{path:"/browser_tabs",children:["            ",Object(r.jsx)(G,{}),"                  "]}),Object(r.jsxs)(m.b,{path:"/paper_rock_scissors",children:["     ",Object(r.jsx)(D,{}),"            "]}),Object(r.jsxs)(m.b,{path:"/infinite_image_gallery",children:["  ",Object(r.jsx)(te,{}),"         "]}),Object(r.jsxs)(m.b,{path:"/trivia",children:["                  ",Object(r.jsx)(de,{}),"                       "]})]})};var me=function(){return Object(r.jsxs)("div",{className:"App_header",children:[Object(r.jsx)("div",{className:"Nav_bar",children:Object(r.jsx)(O,{})}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)(Oe,{})})]})},he=t(70),xe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,159)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,s=c.getLCP,a=c.getTTFB;t(e),n(e),r(e),s(e),a(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(_.a,Object(n.a)(Object(n.a)({template:he.a},{position:"bottom center",timeout:5e3,offset:"1px",transition:"scale"}),{},{children:Object(r.jsx)(me,{})}))})}),document.getElementById("root")),xe()},16:function(e,c,t){e.exports={wrapper:"JustTimer_wrapper__34m8I",timer:"JustTimer_timer__3S6Vf",buttons:"JustTimer_buttons__1ZbIm",buttonSum:"JustTimer_buttonSum__17oAN",timeSetBlock:"JustTimer_timeSetBlock__10EPp",timeSet:"JustTimer_timeSet__2MHpZ"}},24:function(e,c,t){e.exports={highlight:"Creator_highlight__26fkX",bgc:"Creator_bgc__14bWE",isActive:"Creator_isActive__2pJc4",moving_boxes_link:"Creator_moving_boxes_link__2A1SR"}},28:function(e,c,t){e.exports={wrapper:"PomodoroTimer_wrapper__1wmEO",input:"PomodoroTimer_input__3vVKj",timer:"PomodoroTimer_timer__1s4sb",buttons:"PomodoroTimer_buttons__3GXoC"}},29:function(e,c,t){e.exports={wrapper:"InfiniteImageGallery_wrapper__2A0ZY",error:"InfiniteImageGallery_error__APe80",image_grid:"InfiniteImageGallery_image_grid__1HYQ5",image:"InfiniteImageGallery_image__2gzzT"}},36:function(e,c,t){e.exports={wrapper:"MarkdownEditor_wrapper__1ip6g",instructions:"MarkdownEditor_instructions__3CaAN",preview:"MarkdownEditor_preview__g3x7F"}},5:function(e,c,t){e.exports={wrapper:"Trivia_wrapper__WAz4d",app:"Trivia_app__1b7Ys",streak_checker:"Trivia_streak_checker__2YZnS",question_header:"Trivia_question_header__2TEUB",category_selector:"Trivia_category_selector__1K163",scoreboard:"Trivia_scoreboard__2SIPQ",wrong:"Trivia_wrong__3zmAJ",correct:"Trivia_correct__1u_zd",result_modal:"Trivia_result_modal__c1Qkc",overlay:"Trivia_overlay__2Gf0W",result_modal_content:"Trivia_result_modal_content__3MMQ9",is_correct:"Trivia_is_correct__2H4lC",is_wrong:"Trivia_is_wrong__2Wp4A",correct_answer:"Trivia_correct_answer__1qKP2",question_main:"Trivia_question_main__1UZ7b",question:"Trivia_question__1bueF",question_footer:"Trivia_question_footer__1YbAj"}},50:function(e,c,t){},77:function(e,c,t){},8:function(e,c,t){e.exports={wrapper:"PaperRockScissors_wrapper__3AaIm",info:"PaperRockScissors_info__1nhyd",wins_losses:"PaperRockScissors_wins_losses__1qaha",wins:"PaperRockScissors_wins__zMYsm",losses:"PaperRockScissors_losses__1BiNq",draws:"PaperRockScissors_draws__2aEtd",number:"PaperRockScissors_number__3LWeL",text:"PaperRockScissors_text__2L_me",choices:"PaperRockScissors_choices__3j_TU",vs:"PaperRockScissors_vs__3BDl2",rock:"PaperRockScissors_rock__2ZtST",paper:"PaperRockScissors_paper__3msrg",scissors:"PaperRockScissors_scissors__2dk9v",computer_choice:"PaperRockScissors_computer_choice__2XS3d"}}},[[156,1,2]]]);
//# sourceMappingURL=main.a690e199.chunk.js.map