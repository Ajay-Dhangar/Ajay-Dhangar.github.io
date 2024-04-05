"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[94860],{88176:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=r(17624),i=r(4552);const o={id:"strict-mode-in-javascript",title:"Strict Mode in JavaScript",sidebar_label:"Strict Mode",sidebar_position:33,tags:["JavaScript","Strict Mode","JavaScript Strict Mode","Strict Mode in JavaScript","Use Strict","Strict Mode Tutorial","Strict Mode Guide","Strict Mode Overview","Strict Mode Basics","Strict Mode Getting Started","Strict Mode Tutorial JavaScript","Strict Mode Guide JavaScript","Strict Mode Overview JavaScript","Strict Mode Basics JavaScript","Strict Mode Getting Started JavaScript"],description:"In this tutorial, we will learn about strict mode in JavaScript. Strict mode is a feature that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized."},s=void 0,a={id:"javascript/strict-mode-in-javascript",title:"Strict Mode in JavaScript",description:"In this tutorial, we will learn about strict mode in JavaScript. Strict mode is a feature that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized.",source:"@site/docs/javascript/strict.md",sourceDirName:"javascript",slug:"/javascript/strict-mode-in-javascript",permalink:"/code-harbor-hub/docs/javascript/strict-mode-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/strict.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Strict Mode",permalink:"/code-harbor-hub/docs/tags/strict-mode"},{label:"JavaScript Strict Mode",permalink:"/code-harbor-hub/docs/tags/java-script-strict-mode"},{label:"Strict Mode in JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-in-java-script"},{label:"Use Strict",permalink:"/code-harbor-hub/docs/tags/use-strict"},{label:"Strict Mode Tutorial",permalink:"/code-harbor-hub/docs/tags/strict-mode-tutorial"},{label:"Strict Mode Guide",permalink:"/code-harbor-hub/docs/tags/strict-mode-guide"},{label:"Strict Mode Overview",permalink:"/code-harbor-hub/docs/tags/strict-mode-overview"},{label:"Strict Mode Basics",permalink:"/code-harbor-hub/docs/tags/strict-mode-basics"},{label:"Strict Mode Getting Started",permalink:"/code-harbor-hub/docs/tags/strict-mode-getting-started"},{label:"Strict Mode Tutorial JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-tutorial-java-script"},{label:"Strict Mode Guide JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-guide-java-script"},{label:"Strict Mode Overview JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-overview-java-script"},{label:"Strict Mode Basics JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-basics-java-script"},{label:"Strict Mode Getting Started JavaScript",permalink:"/code-harbor-hub/docs/tags/strict-mode-getting-started-java-script"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711152967e3,sidebarPosition:33,frontMatter:{id:"strict-mode-in-javascript",title:"Strict Mode in JavaScript",sidebar_label:"Strict Mode",sidebar_position:33,tags:["JavaScript","Strict Mode","JavaScript Strict Mode","Strict Mode in JavaScript","Use Strict","Strict Mode Tutorial","Strict Mode Guide","Strict Mode Overview","Strict Mode Basics","Strict Mode Getting Started","Strict Mode Tutorial JavaScript","Strict Mode Guide JavaScript","Strict Mode Overview JavaScript","Strict Mode Basics JavaScript","Strict Mode Getting Started JavaScript"],description:"In this tutorial, we will learn about strict mode in JavaScript. Strict mode is a feature that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized."},sidebar:"javascript",previous:{title:"Scopes",permalink:"/code-harbor-hub/docs/javascript/scopes-in-javascript"},next:{title:"this Keyword",permalink:"/code-harbor-hub/docs/javascript/this-keyword-in-javascript"}},c={},d=[{value:"Why Use Strict Mode?",id:"why-use-strict-mode",level:2},{value:"Enabling Strict Mode",id:"enabling-strict-mode",level:2},{value:"Strict Mode Rules",id:"strict-mode-rules",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In JavaScript, strict mode is a feature that allows you to place a program or a function in a strict operating context. When strict mode is enabled, the JavaScript engine performs additional checks and enforces stricter rules on the code. This helps catch common coding errors and makes the code more secure and optimized."}),"\n",(0,n.jsx)(t.h2,{id:"why-use-strict-mode",children:"Why Use Strict Mode?"}),"\n",(0,n.jsx)(t.p,{children:"There are several reasons to use strict mode in JavaScript:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Catch Common Errors"}),": Strict mode helps catch common coding errors and unsafe actions that would otherwise go unnoticed. It throws errors for silent errors that would have been ignored in non-strict mode."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Prevent Global Variables"}),": In strict mode, assigning a value to an undeclared variable throws an error. This helps prevent accidental creation of global variables."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Optimize Code"}),": Strict mode enforces stricter rules on the code, which can help optimize the performance of the code and make it run faster."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improve Security"}),": Strict mode helps prevent certain actions that are considered unsafe or insecure in JavaScript. It makes the code more secure and less prone to vulnerabilities."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Future Compatibility"}),": Strict mode is a standard feature of ECMAScript 5 (ES5) and later versions. Using strict mode ensures that the code is compatible with modern JavaScript environments and future versions of the language."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Encourage Best Practices"}),": Strict mode encourages best practices and helps developers write cleaner, more maintainable code. It enforces stricter rules on variable declarations, function calls, and other aspects of the code."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enable New Features"}),": Some new features of JavaScript are only available in strict mode. Using strict mode allows you to take advantage of these features and write more modern and efficient code."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improve Debugging"}),": Strict mode helps identify and fix errors in the code more easily. It provides more informative error messages and warnings that can help developers debug the code effectively."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enhance Readability"}),": Strict mode makes the code more readable and self-explanatory by enforcing stricter rules on variable declarations, function calls, and other aspects of the code."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Prevent Silent Failures"}),": Strict mode helps prevent silent failures in the code by throwing errors for common coding errors and unsafe actions. This makes the code more robust and reliable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improve Performance"}),": Strict mode enforces stricter rules on the code, which can help optimize the performance of the code and make it run faster. It eliminates certain JavaScript features that are known to be slow or inefficient."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Reduce Bugs"}),": Strict mode helps reduce the likelihood of bugs and errors in the code by enforcing stricter rules and catching common coding errors. This can save time and effort in debugging and fixing issues in the code."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Enhance Code Quality"}),": Strict mode helps improve the quality of the code by enforcing stricter rules on variable declarations, function calls, and other aspects of the code. It encourages best practices and helps developers write cleaner, more maintainable code."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"enabling-strict-mode",children:"Enabling Strict Mode"}),"\n",(0,n.jsx)(t.p,{children:"Strict mode can be enabled at different levels in JavaScript:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Global Strict Mode"}),": To enable strict mode for the entire script, you can add the ",(0,n.jsx)(t.code,{children:'"use strict";'})," directive at the beginning of the script. This applies strict mode to the entire script and all functions defined within the script."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nfunction greet() {\n    message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined\n    console.log(message);\n}\n\ngreet();\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Function Strict Mode"}),": To enable strict mode for a specific function, you can add the ",(0,n.jsx)(t.code,{children:'"use strict";'})," directive at the beginning of the function. This applies strict mode only to the function in which it is defined."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'function greet() {\n    "use strict";\n\n    message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined\n    console.log(message);\n}\n\ngreet();\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Module Strict Mode"}),": In ECMAScript 6 (ES6) and later versions, you can use strict mode in modules by default. Modules are automatically in strict mode, so you don't need to add the ",(0,n.jsx)(t.code,{children:'"use strict";'})," directive explicitly."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'// app.js (module)\nfunction greet() {\n    message = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined\n    console.log(message);\n}\n\ngreet();\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"When strict mode is enabled, the JavaScript engine performs additional checks and enforces stricter rules on the code. It throws errors for common coding errors and unsafe actions that would otherwise go unnoticed in non-strict mode."}),"\n",(0,n.jsx)(t.h2,{id:"strict-mode-rules",children:"Strict Mode Rules"}),"\n",(0,n.jsx)(t.p,{children:"Strict mode enforces several rules on the code to catch common coding errors and make the code more secure and optimized. Some of the key rules enforced by strict mode include:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No Implicit Globals"}),": In strict mode, assigning a value to an undeclared variable throws an error. This helps prevent accidental creation of global variables."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nmessage = "Hello, World!"; // Error: Uncaught ReferenceError: message is not defined\nconsole.log(message);\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No Octal Literals"}),": In strict mode, octal literals (numbers with a leading zero) are not allowed. Octal literals are considered confusing and error-prone."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nlet num = 010; // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.\nconsole.log(num);\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"No Duplicate Parameters"}),": In strict mode, defining a function with duplicate parameters throws an error. This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nfunction greet(name, name) { // Error: Uncaught SyntaxError: Duplicate parameter name not allowed in this context\n    console.log("Hello, " + name);\n}\n\ngreet("Alice", "Bob");\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"this"})," in Global Context"]}),": In strict mode, the ",(0,n.jsx)(t.code,{children:"this"})," keyword in the global context is ",(0,n.jsx)(t.code,{children:"undefined"}),". This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nconsole.log(this); // Output: undefined\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"eval"})," and ",(0,n.jsx)(t.code,{children:"arguments"})]}),": In strict mode, the use of ",(0,n.jsx)(t.code,{children:"eval"})," and ",(0,n.jsx)(t.code,{children:"arguments"})," as variable names is not allowed. This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nlet eval = 10; // Error: Uncaught SyntaxError: Unexpected eval or arguments in strict mode\nlet arguments = 20; // Error: Uncaught SyntaxError: Unexpected eval or arguments in strict mode\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"with"})," Statement"]}),": In strict mode, the ",(0,n.jsx)(t.code,{children:"with"})," statement is not allowed. The ",(0,n.jsx)(t.code,{children:"with"})," statement is considered harmful and error-prone."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nlet person = { name: "Alice" };\nwith (person) { // Error: Uncaught SyntaxError: Strict mode code may not include a with statement\n    console.log(name);\n}\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"delete"})," on Non-configurable Properties"]}),": In strict mode, attempting to delete a non-configurable property throws an error. This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nlet obj = {};\nObject.defineProperty(obj, "name", {\n    value: "Alice",\n    configurable: false\n});\n\ndelete obj.name; // Error: Uncaught TypeError: Cannot delete property \'name\' of #<Object>\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"arguments.callee"})]}),": In strict mode, the ",(0,n.jsx)(t.code,{children:"arguments.callee"})," property is not allowed. This property is considered harmful and error-prone."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:"\"use strict\";\n\nfunction factorial(n) {\n    if (n <= 1) {\n        return 1;\n    } else {\n        return n * arguments.callee(n - 1); // Error: Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them\n    }\n}\n\nconsole.log(factorial(5));\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"this"})," in Functions"]}),": In strict mode, the ",(0,n.jsx)(t.code,{children:"this"})," keyword in functions is ",(0,n.jsx)(t.code,{children:"undefined"})," if the function is called without an explicit context. This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nfunction greet() {\n    console.log(this); // Output: undefined\n}\n\ngreet();\n'})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["No ",(0,n.jsx)(t.code,{children:"new"})," on Non-constructor Functions"]}),": In strict mode, calling a non-constructor function with the ",(0,n.jsx)(t.code,{children:"new"})," keyword throws an error. This helps prevent common coding errors and makes the code more secure."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",metastring:'title="app.js"',children:'"use strict";\n\nfunction greet() {\n    console.log("Hello, World!");\n}\n\nlet obj = new greet(); // Error: Uncaught TypeError: greet is not a constructor\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These are some of the key rules enforced by strict mode in JavaScript. By enabling strict mode, you can catch common coding errors and make the code more secure and optimized."}),"\n",(0,n.jsx)(t.admonition,{title:"\ud83d\udcda Learn More:",type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode",children:"Strict Mode (MDN Web Docs)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.w3schools.com/js/js_strict.asp",children:"Strict Mode in JavaScript (W3Schools)"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.amazon.com/Understanding-ECMAScript-Definitive-JavaScript-Developers/dp/1593277571",children:"Understanding ECMAScript 6: The Definitive Guide for JavaScript Developers"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742",children:"JavaScript: The Good Parts"})}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Strict mode is a feature in JavaScript that allows you to place a program or a function in a strict operating context. It helps catch common coding errors and makes the code more secure and optimized. By enabling strict mode, you can enforce stricter rules on the code, prevent common coding errors, and improve the quality and performance of the code. Strict mode is a standard feature of ECMAScript 5 (ES5) and later versions, and it is recommended to use strict mode in all JavaScript code to ensure compatibility with modern JavaScript environments and future versions of the language."})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>a,M:()=>s});var n=r(11504);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);