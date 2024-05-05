"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[10648],{74320:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});n(11504);var l=n(54596),t=n(65238),o=n(87320),s=n(17624);function c(){const{siteConfig:e}=(0,l.c)();return(0,s.jsxs)(t.c,{children:[(0,s.jsx)("h2",{children:"Site config"}),(0,s.jsx)(o.c,{src:e,collapseDepth:3})]})}},87320:(e,a,n)=>{n.d(a,{c:()=>O});var l=n(11504);const t=e=>"boolean"==typeof e||e instanceof Boolean,o=e=>"number"==typeof e||e instanceof Number,s=e=>"bigint"==typeof e||e instanceof BigInt,c=e=>!!e&&e instanceof Date,r=e=>"string"==typeof e||e instanceof String,u=e=>Array.isArray(e),i=e=>e instanceof Object&&null!==e;let d=1;const p=()=>d++;function m(e){let{field:a,value:n,data:t,lastElement:o,openBracket:s,closeBracket:c,level:r,style:u,shouldExpandNode:i,clickToExpandNode:d}=e;const m=(0,l.useRef)(!1),[b,_,h]=function(e){const[a,n]=(0,l.useState)(e());return[a,()=>n((e=>!e)),n]}((()=>i(r,n,a)));(0,l.useEffect)((()=>{m.current?h(i(r,n,a)):m.current=!0}),[i]);const x=b?u.collapseIcon:u.expandIcon,f=b?"collapse JSON":"expand JSON",E=function(){const e=(0,l.useRef)();return void 0===e.current&&(e.current=`:jsnvw:${p()}:`),e.current}(),N=r+1,g=t.length-1,k=e=>{" "===e.key&&(e.preventDefault(),_())};return(0,l.createElement)("div",{className:u.basicChildStyle,role:"list"},(0,l.createElement)("span",{className:x,onClick:_,onKeyDown:k,role:"button",tabIndex:0,"aria-label":f,"aria-expanded":b,"aria-controls":b?E:void 0}),a&&(d?(0,l.createElement)("span",{className:u.clickableLabel,onClick:_,onKeyDown:k,role:"button",tabIndex:-1},a,":"):(0,l.createElement)("span",{className:u.label},a,":")),(0,l.createElement)("span",{className:u.punctuation},s),b?(0,l.createElement)("div",{id:E},t.map(((e,a)=>(0,l.createElement)(v,{key:e[0]||a,field:e[0],value:e[1],style:u,lastElement:a===g,level:N,shouldExpandNode:i,clickToExpandNode:d})))):(0,l.createElement)("span",{className:u.collapsedContent,onClick:_,onKeyDown:k,role:"button",tabIndex:-1,"aria-hidden":!0,"aria-label":f,"aria-expanded":b}),(0,l.createElement)("span",{className:u.punctuation},c),!o&&(0,l.createElement)("span",{className:u.punctuation},","))}function b(e){let{field:a,value:n,style:l,lastElement:t,shouldExpandNode:o,clickToExpandNode:s,level:c}=e;return m({field:a,value:n,lastElement:t||!1,level:c,openBracket:"{",closeBracket:"}",style:l,shouldExpandNode:o,clickToExpandNode:s,data:Object.keys(n).map((e=>[e,n[e]]))})}function _(e){let{field:a,value:n,style:l,lastElement:t,level:o,shouldExpandNode:s,clickToExpandNode:c}=e;return m({field:a,value:n,lastElement:t||!1,level:o,openBracket:"[",closeBracket:"]",style:l,shouldExpandNode:s,clickToExpandNode:c,data:n.map((e=>[void 0,e]))})}function h(e){let{field:a,value:n,style:u,lastElement:i}=e,d=n,p=u.otherValue;return null===n?(d="null",p=u.nullValue):void 0===n?(d="undefined",p=u.undefinedValue):r(n)?(d=u.noQuotesForStringValues?n:`"${n}"`,p=u.stringValue):t(n)?(d=n?"true":"false",p=u.booleanValue):o(n)?(d=n.toString(),p=u.numberValue):s(n)?(d=`${n.toString()}n`,p=u.numberValue):d=c(n)?n.toISOString():n.toString(),""===a&&(a='""'),(0,l.createElement)("div",{className:u.basicChildStyle,role:"listitem"},a&&(0,l.createElement)("span",{className:u.label},a,":"),(0,l.createElement)("span",{className:p},d),!i&&(0,l.createElement)("span",{className:u.punctuation},","))}function v(e){const a=e.value;return u(a)?(0,l.createElement)(_,Object.assign({},e)):i(a)&&!c(a)?(0,l.createElement)(b,Object.assign({},e)):(0,l.createElement)(h,Object.assign({},e))}var x="_2bkNM";const f={container:"_2IvMF _GzYRV",basicChildStyle:x,label:"_1MGIk",clickableLabel:"_2YKJg _1MGIk _1MFti",nullValue:"_2T6PJ",undefinedValue:"_1Gho6",stringValue:"_vGjyY",booleanValue:"_3zQKs",numberValue:"_1bQdo",otherValue:"_1xvuR",punctuation:"_3uHL6 _3eOF8",collapseIcon:"_oLqym _f10Tu _1MFti _1LId0",expandIcon:"_2AXVT _f10Tu _1MFti _1UmXx",collapsedContent:"_2KJWg _1pNG9 _1MFti",noQuotesForStringValues:!1},E=()=>!0,N=e=>{let{data:a,style:n=f,shouldExpandNode:t=E,clickToExpandNode:o=!1}=e;return(0,l.createElement)("div",{className:n.container},(0,l.createElement)(v,{value:a,style:n,lastElement:!0,level:0,shouldExpandNode:t,clickToExpandNode:o}))},g="containerParaiso_cQJv",k="basicElementParaiso_QZsA",y="labelParaiso_wRN4",V="nullValueParaiso_AoA7",j="undefinedValueParaiso_FhTI",I="stringValueParaiso_V3BI",S="booleanValueParaiso_DtTx",C="numberValueParaiso_QJS7",P="otherValueParaiso_LEJn",T="punctuationParaiso_IgdH",D="expandIconParaiso_FXv1",F="collapseIconParaiso_vUhq",J="collapseContentParaiso_r7rr";var B=n(17624);const M={container:g,basicChildStyle:k,label:y,nullValue:V,undefinedValue:j,stringValue:I,booleanValue:S,numberValue:C,otherValue:P,punctuation:T,collapseIcon:F,expandIcon:D,collapsedContent:J};function O(e){let{src:a,collapseDepth:n}=e;return(0,B.jsx)(N,{data:a,shouldExpandNode:(e,a)=>Array.isArray(a)?a.length<5:void 0!==n&&e<n,style:M})}},65238:(e,a,n)=>{n.d(a,{c:()=>r});n(11504);var l=n(18300),t=n(45800);const o={container:"container_UJDL",nav:"nav_uyzg",navlink:"navlink_fkkq",active:"active_YJyX"};var s=n(17624);function c(e){let{to:a,children:n}=e;return(0,s.jsx)(t.c,{className:o.navlink,isNavLink:!0,to:a,exact:!0,activeStyle:{backgroundColor:"#363739"},children:n})}function r(e){let{children:a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.c,{children:[(0,s.jsx)("html",{lang:"en"}),(0,s.jsx)("title",{children:"Docusaurus debug panel"}),(0,s.jsx)("meta",{name:"robots",content:"noindex"})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("nav",{className:o.nav,children:[(0,s.jsx)(c,{to:"/__docusaurus/debug",children:"Config"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/metadata",children:"Metadata"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/registry",children:"Registry"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/routes",children:"Routes"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/content",children:"Content"}),(0,s.jsx)(c,{to:"/__docusaurus/debug/globalData",children:"Global data"})]}),(0,s.jsx)("main",{className:o.container,children:a})]})]})}}}]);