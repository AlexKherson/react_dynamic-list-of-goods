(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{57:function(t,n,o){},63:function(t,n,o){"use strict";o.r(n);var e=o(43),c=o.n(e),r=o(14),a=o(0),i=(o(57),o(82)),s=o(84),u=o(81),d=o(3),l=function(t){var n=t.goods;return Object(d.jsx)(s.a,{sx:{width:"100%",bgcolor:"background.paper"},children:n.map((function(t){return Object(d.jsx)(u.a,{"data-cy":"good",style:{color:"".concat(t.color)},children:t.name},t.id)}))})};function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var b=function(){var t=Object(a.useState)([]),n=Object(r.a)(t,2),o=n[0],e=n[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Dynamic list of Goods"}),Object(d.jsx)(i.a,{type:"button",color:"success","data-cy":"all-button",onClick:function(){f().then((function(t){return e(t)}))},children:"Load all goods"}),Object(d.jsx)(i.a,{type:"button","data-cy":"first-five-button",onClick:function(){f().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){return e(t)}))},children:"Load 5 first goods"}),Object(d.jsx)(i.a,{type:"button",color:"warning","data-cy":"red-button",onClick:function(){f().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){return e(t)}))},children:"Load red goods"}),Object(d.jsx)(l,{goods:o})]})};c.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.d6af0b3d.chunk.js.map