"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[69552],{38616:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var t=a(17624),o=a(4552);const n={id:"ternary-operator-in-javascript",title:"Ternary Operator in JavaScript",sidebar_label:"Ternary Operator",sidebar_position:8,tags:["JavaScript","Operators","Ternary Operator","Conditional Operator","Conditional Expression","Ternary Operator Syntax","Ternary Operator Example","ECMAScript 1","ES1"],description:"What is the ternary operator in JavaScript? Learn about the ternary operator, its syntax, and how to use it to write concise conditional expressions in JavaScript."},i=void 0,s={id:"javascript/operators/ternary-operator-in-javascript",title:"Ternary Operator in JavaScript",description:"What is the ternary operator in JavaScript? Learn about the ternary operator, its syntax, and how to use it to write concise conditional expressions in JavaScript.",source:"@site/docs/javascript/operators/ternary-operators-js.md",sourceDirName:"javascript/operators",slug:"/javascript/operators/ternary-operator-in-javascript",permalink:"/code-harbor-hub/docs/javascript/operators/ternary-operator-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/operators/ternary-operators-js.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Operators",permalink:"/code-harbor-hub/docs/tags/operators"},{label:"Ternary Operator",permalink:"/code-harbor-hub/docs/tags/ternary-operator"},{label:"Conditional Operator",permalink:"/code-harbor-hub/docs/tags/conditional-operator"},{label:"Conditional Expression",permalink:"/code-harbor-hub/docs/tags/conditional-expression"},{label:"Ternary Operator Syntax",permalink:"/code-harbor-hub/docs/tags/ternary-operator-syntax"},{label:"Ternary Operator Example",permalink:"/code-harbor-hub/docs/tags/ternary-operator-example"},{label:"ECMAScript 1",permalink:"/code-harbor-hub/docs/tags/ecma-script-1"},{label:"ES1",permalink:"/code-harbor-hub/docs/tags/es-1"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1708855615e3,sidebarPosition:8,frontMatter:{id:"ternary-operator-in-javascript",title:"Ternary Operator in JavaScript",sidebar_label:"Ternary Operator",sidebar_position:8,tags:["JavaScript","Operators","Ternary Operator","Conditional Operator","Conditional Expression","Ternary Operator Syntax","Ternary Operator Example","ECMAScript 1","ES1"],description:"What is the ternary operator in JavaScript? Learn about the ternary operator, its syntax, and how to use it to write concise conditional expressions in JavaScript."},sidebar:"javascript",previous:{title:"Bitwise Operator",permalink:"/code-harbor-hub/docs/javascript/operators/bitwise-operator-in-javascript"},next:{title:"Type Operator",permalink:"/code-harbor-hub/docs/javascript/operators/type-operator-in-javascript"}},l={},c=[{value:"Syntax of Ternary Operator",id:"syntax-of-ternary-operator",level:2},{value:"Example of Ternary Operator",id:"example-of-ternary-operator",level:2}];function p(e){const r={admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["In JavaScript, the ternary operator (",(0,t.jsx)(r.code,{children:"? :"}),") is a conditional operator that takes three operands and returns a value based on a condition. It is a shorthand for the ",(0,t.jsx)(r.code,{children:"if...else"})," statement."]}),"\n",(0,t.jsx)(r.mermaid,{value:"---\ntitle: Ternary Operator in JavaScript\n---\n\nclassDiagram\n    class TernaryOperation {\n        condition\n        trueValue\n        falseValue\n        result\n        perform()\n    }\n\n    class TernaryOperator {\n        perform(): (condition ? trueValue : falseValue)\n    }\n\n    TernaryOperation <|-- TernaryOperator"}),"\n",(0,t.jsx)(r.h2,{id:"syntax-of-ternary-operator",children:"Syntax of Ternary Operator"}),"\n",(0,t.jsx)(r.p,{children:"The syntax of the ternary operator is as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{3} title="Ternary Operator Syntax" showLineNumbers',children:"let result = (condition) ? trueValue : falseValue;\n"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"condition"}),": A boolean expression that evaluates to ",(0,t.jsx)(r.code,{children:"true"})," or ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"trueValue"}),": The value to be returned if the ",(0,t.jsx)(r.code,{children:"condition"})," is ",(0,t.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"falseValue"}),": The value to be returned if the ",(0,t.jsx)(r.code,{children:"condition"})," is ",(0,t.jsx)(r.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"result"}),": The value returned based on the ",(0,t.jsx)(r.code,{children:"condition"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["The ",(0,t.jsx)(r.code,{children:"trueValue"})," and ",(0,t.jsx)(r.code,{children:"falseValue"})," can be of any data type."]}),"\n",(0,t.jsx)(r.li,{children:"The parentheses around the entire ternary operation are optional."}),"\n",(0,t.jsx)(r.li,{children:"The ternary operator can be used as an expression or as part of an assignment statement."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example-of-ternary-operator",children:"Example of Ternary Operator"}),"\n",(0,t.jsx)(r.p,{children:"The following example demonstrates the usage of the ternary operator:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",metastring:'{2} title="Ternary Operator Example" showLineNumbers',children:'let age = 20;\nlet message = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote";\nconsole.log(message); // Output: You are eligible to vote\n'})}),"\n",(0,t.jsxs)(r.p,{children:["In this example, the ternary operator checks if the ",(0,t.jsx)(r.code,{children:"age"})," is greater than or equal to ",(0,t.jsx)(r.code,{children:"18"}),". If the condition is ",(0,t.jsx)(r.code,{children:"true"}),", it returns the message ",(0,t.jsx)(r.code,{children:'"You are eligible to vote"'}),", otherwise it returns the message ",(0,t.jsx)(r.code,{children:'"You are not eligible to vote".'})]}),"\n",(0,t.jsx)(r.admonition,{title:"\ud83d\udcdd Note",type:"info",children:(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["The ternary operator is a concise way to write simple conditional expressions, but it is recommended to use the ",(0,t.jsx)(r.code,{children:"if...else"})," statement for complex conditions to improve readability."]}),"\n",(0,t.jsx)(r.li,{children:"The ternary operator can also be used as part of an assignment statement to assign the result to a variable."}),"\n",(0,t.jsx)(r.li,{children:"It is also known as the conditional operator."}),"\n",(0,t.jsx)(r.li,{children:"It is introduced in ECMAScript 1 (1997)."}),"\n"]})}),"\n",(0,t.jsx)(r.p,{children:"In this guide, you have learned about the ternary operator in JavaScript and how to use it to write concise conditional expressions. You have also seen the syntax and an example of the ternary operator. Now, you can use the ternary operator to write simple conditional expressions in your JavaScript code."}),"\n",(0,t.jsx)(r.p,{children:"Happy learning! \ud83c\udf89"})]})}function d(e={}){const{wrapper:r}={...(0,o.M)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4552:(e,r,a)=>{a.d(r,{I:()=>s,M:()=>i});var t=a(11504);const o={},n=t.createContext(o);function i(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);