(this["webpackJsonpra8-1"]=this["webpackJsonpra8-1"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(11),a(2)),s=a.n(i),l=a(5),u=a(1);a(13);function m(e){var t=e.data;return r.a.createElement("ul",null,t.map((function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return a=t.id,void e.onClickItem(a);var a},className:t.active?"active":""},t.name)})))}function d(e){var t=e.data;return r.a.createElement("div",{id:t.id,className:"details"},r.a.createElement("img",{alt:t.name,src:t.avatar}),r.a.createElement("p",{className:"name"},t.name),r.a.createElement("p",null,"City: ",t.details.city),r.a.createElement("p",null,"Company: ",t.details.company),r.a.createElement("p",null,"Position: ",t.details.position))}var f=function(){var e="https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/",t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),f=Object(u.a)(i,2),p=f[0],v=f[1],h=Object(n.useState)({state:o,itemUrl:"".concat(e,"users.json")}),E=Object(u.a)(h,2),b=E[0],k=E[1],w=Object(n.useState)(!1),j=Object(u.a)(w,2),g=j[0],O=j[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,fetch(b.itemUrl);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error(t.statusText);case 7:return e.next=9,t.json();case 9:a=e.sent,b.state(a),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:return e.prev=16,O(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[1,13,16,19]])})));return function(){return e.apply(this,arguments)}})()()}),[b]),r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("p",{className:"loading"},"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430"),r.a.createElement(m,{data:c,onClickItem:function(t){t!==p.id&&(o((function(e){return e.map((function(e){var a=!1;return e.id===t&&(a=!0),{id:e.id,name:e.name,active:a}}))})),k({state:v,itemUrl:"".concat(e).concat(t,".json")}))}}),p.id&&r.a.createElement(d,{data:p}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.8dae12ec.chunk.js.map