(this["webpackJsonpreact-use-please-stay-example"]=this["webpackJsonpreact-use-please-stay-example"]||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(7),o=n.n(i),s=n(4),r=n(2),l=n(3),m=n(6),j=n(0);function d(e){var t=e.code,n=e.language;return Object(j.jsx)(m.a,Object(l.a)(Object(l.a)({},m.b),{},{code:t,language:n,children:function(e){var t=e.className,n=e.style,a=e.tokens,c=e.getLineProps,i=e.getTokenProps;return Object(j.jsx)("pre",{className:t,style:Object(l.a)(Object(l.a)({},n),{},{padding:"1rem"}),children:a.map((function(e,t){return Object(j.jsx)("div",Object(l.a)(Object(l.a)({},c({line:e,key:t})),{},{children:e.map((function(e,t){return Object(j.jsx)("span",Object(l.a)({},i({token:e,key:t})))}))}))}))})}}))}var p=function(){var e=Object(a.useState)(["Whoa! Redux Favicon?!","React App"]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(1e3),o=Object(s.a)(i,2),l=o[0],m=o[1],p=Object(a.useState)(r.AnimationType.LOOP),b=Object(s.a)(p,2),u=b[0],h=b[1],O=Object(a.useState)(["https://redux.js.org/img/favicon/favicon.ico"]),f=Object(s.a)(O,2),x=f[0],y=f[1],g=Object(a.useState)(!1),v=Object(s.a)(g,2),C=v[0],k=v[1];Object(r.usePleaseStay)({titles:n,interval:l,animationType:u,faviconLinks:x,alwaysRunAnimations:C});var N="usePleaseStay({\n    titles: [\n      ".concat(n.map((function(e){return'"'.concat(e,'"')})).join(",\n      "),"\n    ],\n    interval: ").concat(l,",\n    animationType: Animation.").concat(u,",\n    faviconLinks: [\n      ").concat(x.map((function(e){return'"'.concat(e,'"')})).join(",\n      "),"\n    ],\n    alwaysRunAnimations: ").concat(C.toString(),"\n})");return Object(j.jsxs)("div",{className:"container my-5",children:[Object(j.jsx)("h1",{children:"usePleaseStay"}),Object(j.jsx)("p",{children:"Copy and paste this code right into your component:"}),Object(j.jsx)(d,{code:N,language:"tsx"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(e){if(window.clipboardData&&window.clipboardData.setData)return window.clipboardData.setData("Text",e);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var t=document.createElement("textarea");t.textContent=e,t.style.position="fixed",document.body.appendChild(t),t.select();try{return document.execCommand("copy")}catch(n){return console.warn("Copy to clipboard failed.",n),!1}finally{document.body.removeChild(t)}}}(N)},children:"Copy"}),Object(j.jsx)("h2",{children:"Options"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("pre",{className:"font-weight-bold",children:"titles"}),Object(j.jsx)("small",{children:"(Comma separated)"}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){return c(e.target.value.split(","))}})}),Object(j.jsx)("pre",{className:"font-weight-bold",children:"interval"}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{className:"form-control",value:l,type:"number",onChange:function(e){var t=parseInt(e.target.value);t&&m(t)}})}),Object(j.jsx)("pre",{className:"font-weight-bold",children:"animationType"}),Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{id:"loop",className:"form-check-input",checked:u===r.AnimationType.LOOP,onChange:function(){return h(r.AnimationType.LOOP)},type:"radio",value:r.AnimationType.LOOP,name:"animationType"})," ",Object(j.jsx)("label",{className:"form-check-label",htmlFor:"loop",children:Object(j.jsx)("pre",{className:"mb-0 mr-5",children:"AnimationType.LOOP"})}),Object(j.jsx)("input",{id:"cascade",className:"form-check-input",checked:u===r.AnimationType.CASCADE,onChange:function(){return h(r.AnimationType.CASCADE)},type:"radio",value:r.AnimationType.CASCADE,name:"animationType"})," ",Object(j.jsx)("label",{className:"form-check-label",htmlFor:"cascade",children:Object(j.jsx)("pre",{className:"mb-0 mx-1",children:"AnimationType.CASCADE"})})]}),Object(j.jsx)("pre",{className:"font-weight-bold",children:"faviconLinks"}),Object(j.jsx)("small",{children:"(Comma separated)"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("textarea",{id:"faviconLinks",className:"form-control",value:x,onChange:function(e){return y(e.target.value.split(","))}}),Object(j.jsx)("p",{children:"Try some of these:"}),Object(j.jsx)("p",{children:"Redux Favicon: https://redux.js.org/img/favicon/favicon.ico"}),Object(j.jsx)("p",{children:"Gatsby Favicon: https://www.gatsbyjs.com/favicon-32x32.png"}),Object(j.jsx)("p",{children:"Electron Favicon: https://www.electronjs.org/images/favicon.b7a59262df48d6563400baf5671da548.ico"})]}),Object(j.jsx)("pre",{className:"font-weight-bold",children:"alwaysRunAnimations"}),Object(j.jsxs)("div",{className:"form-check form-check-inline",children:[Object(j.jsx)("input",{id:"animationType",className:"form-check-input",onChange:function(){return k(!C)},type:"checkbox",checked:C,name:"animationType"}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"animationType",children:Object(j.jsx)("pre",{className:"mb-0 mr-5",children:C.toString()})})]})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};n(13);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.12b08db3.chunk.js.map