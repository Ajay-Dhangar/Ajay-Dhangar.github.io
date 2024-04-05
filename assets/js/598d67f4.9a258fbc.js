"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[26292],{67044:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var o=l(17624),s=l(4552);const t={id:"modules-in-js",title:"Modules in JavaScript",sidebar_label:"Modules",sidebar_position:37,tags:["JavaScript","Modules","ES6","ES2015","ES6 Features","ES2015 Features","ES6 Tutorials","ES2015 Tutorials","ES6 Tutorial","ES2015 Tutorial","ES6 Modules","ES2015 Modules","Modules in JavaScript","Modules in ES6","Modules in ES2015","JavaScript Modules","ES6 Modules Tutorial","ES2015 Modules Tutorial","Modules Tutorial","Modules in JavaScript Tutorial","Modules in ES6 Tutorial","Modules in ES2015 Tutorial","JavaScript Modules Tutorial","ES6 Modules Example","ES2015 Modules Example","Modules Example","Modules in JavaScript Example","Modules in ES6 Example","Modules in ES2015 Example","JavaScript Modules Example","ES6 Modules Syntax","ES2015 Modules Syntax","Modules Syntax","Modules in JavaScript Syntax","Modules in ES6 Syntax","Modules in ES2015 Syntax","JavaScript Modules Syntax","ES6 Modules Syntax Example","ES2015 Modules Syntax Example","Modules Syntax Example","Modules in JavaScript Syntax Example","Modules in ES6 Syntax Example","Modules in ES2015 Syntax Example","JavaScript Modules Syntax Example","ES6 Modules Syntax Tutorial","ES2015 Modules Syntax Tutorial","Modules Syntax Tutorial","Modules in JavaScript Syntax Tutorial","Modules in ES6 Syntax Tutorial","Modules in ES2015 Syntax Tutorial","JavaScript Modules Syntax Tutorial","ES6 Modules Syntax Example Tutorial","ES2015 Modules Syntax Example Tutorial","Modules Syntax Example Tutorial","Modules in JavaScript Syntax Example Tutorial","Modules in ES6 Syntax Example Tutorial","Modules in ES2015 Syntax Example Tutorial","JavaScript Modules Syntax Example Tutorial"],description:"In this tutorial, you will learn about modules in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to organize your code into reusable pieces."},n=void 0,r={id:"javascript/modules-in-js",title:"Modules in JavaScript",description:"In this tutorial, you will learn about modules in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to organize your code into reusable pieces.",source:"@site/docs/javascript/modules-js.md",sourceDirName:"javascript",slug:"/javascript/modules-in-js",permalink:"/code-harbor-hub/docs/javascript/modules-in-js",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/modules-js.md",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Modules",permalink:"/code-harbor-hub/docs/tags/modules"},{label:"ES6",permalink:"/code-harbor-hub/docs/tags/es-6"},{label:"ES2015",permalink:"/code-harbor-hub/docs/tags/es-2015"},{label:"ES6 Features",permalink:"/code-harbor-hub/docs/tags/es-6-features"},{label:"ES2015 Features",permalink:"/code-harbor-hub/docs/tags/es-2015-features"},{label:"ES6 Tutorials",permalink:"/code-harbor-hub/docs/tags/es-6-tutorials"},{label:"ES2015 Tutorials",permalink:"/code-harbor-hub/docs/tags/es-2015-tutorials"},{label:"ES6 Tutorial",permalink:"/code-harbor-hub/docs/tags/es-6-tutorial"},{label:"ES2015 Tutorial",permalink:"/code-harbor-hub/docs/tags/es-2015-tutorial"},{label:"ES6 Modules",permalink:"/code-harbor-hub/docs/tags/es-6-modules"},{label:"ES2015 Modules",permalink:"/code-harbor-hub/docs/tags/es-2015-modules"},{label:"Modules in JavaScript",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script"},{label:"Modules in ES6",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6"},{label:"Modules in ES2015",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015"},{label:"JavaScript Modules",permalink:"/code-harbor-hub/docs/tags/java-script-modules"},{label:"ES6 Modules Tutorial",permalink:"/code-harbor-hub/docs/tags/es-6-modules-tutorial"},{label:"ES2015 Modules Tutorial",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-tutorial"},{label:"Modules Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-tutorial"},{label:"Modules in JavaScript Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-tutorial"},{label:"Modules in ES6 Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-tutorial"},{label:"Modules in ES2015 Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-tutorial"},{label:"JavaScript Modules Tutorial",permalink:"/code-harbor-hub/docs/tags/java-script-modules-tutorial"},{label:"ES6 Modules Example",permalink:"/code-harbor-hub/docs/tags/es-6-modules-example"},{label:"ES2015 Modules Example",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-example"},{label:"Modules Example",permalink:"/code-harbor-hub/docs/tags/modules-example"},{label:"Modules in JavaScript Example",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-example"},{label:"Modules in ES6 Example",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-example"},{label:"Modules in ES2015 Example",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-example"},{label:"JavaScript Modules Example",permalink:"/code-harbor-hub/docs/tags/java-script-modules-example"},{label:"ES6 Modules Syntax",permalink:"/code-harbor-hub/docs/tags/es-6-modules-syntax"},{label:"ES2015 Modules Syntax",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-syntax"},{label:"Modules Syntax",permalink:"/code-harbor-hub/docs/tags/modules-syntax"},{label:"Modules in JavaScript Syntax",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-syntax"},{label:"Modules in ES6 Syntax",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-syntax"},{label:"Modules in ES2015 Syntax",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-syntax"},{label:"JavaScript Modules Syntax",permalink:"/code-harbor-hub/docs/tags/java-script-modules-syntax"},{label:"ES6 Modules Syntax Example",permalink:"/code-harbor-hub/docs/tags/es-6-modules-syntax-example"},{label:"ES2015 Modules Syntax Example",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-syntax-example"},{label:"Modules Syntax Example",permalink:"/code-harbor-hub/docs/tags/modules-syntax-example"},{label:"Modules in JavaScript Syntax Example",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-syntax-example"},{label:"Modules in ES6 Syntax Example",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-syntax-example"},{label:"Modules in ES2015 Syntax Example",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-syntax-example"},{label:"JavaScript Modules Syntax Example",permalink:"/code-harbor-hub/docs/tags/java-script-modules-syntax-example"},{label:"ES6 Modules Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/es-6-modules-syntax-tutorial"},{label:"ES2015 Modules Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-syntax-tutorial"},{label:"Modules Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-syntax-tutorial"},{label:"Modules in JavaScript Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-syntax-tutorial"},{label:"Modules in ES6 Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-syntax-tutorial"},{label:"Modules in ES2015 Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-syntax-tutorial"},{label:"JavaScript Modules Syntax Tutorial",permalink:"/code-harbor-hub/docs/tags/java-script-modules-syntax-tutorial"},{label:"ES6 Modules Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/es-6-modules-syntax-example-tutorial"},{label:"ES2015 Modules Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/es-2015-modules-syntax-example-tutorial"},{label:"Modules Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-syntax-example-tutorial"},{label:"Modules in JavaScript Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-java-script-syntax-example-tutorial"},{label:"Modules in ES6 Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-6-syntax-example-tutorial"},{label:"Modules in ES2015 Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/modules-in-es-2015-syntax-example-tutorial"},{label:"JavaScript Modules Syntax Example Tutorial",permalink:"/code-harbor-hub/docs/tags/java-script-modules-syntax-example-tutorial"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:171117097e4,sidebarPosition:37,frontMatter:{id:"modules-in-js",title:"Modules in JavaScript",sidebar_label:"Modules",sidebar_position:37,tags:["JavaScript","Modules","ES6","ES2015","ES6 Features","ES2015 Features","ES6 Tutorials","ES2015 Tutorials","ES6 Tutorial","ES2015 Tutorial","ES6 Modules","ES2015 Modules","Modules in JavaScript","Modules in ES6","Modules in ES2015","JavaScript Modules","ES6 Modules Tutorial","ES2015 Modules Tutorial","Modules Tutorial","Modules in JavaScript Tutorial","Modules in ES6 Tutorial","Modules in ES2015 Tutorial","JavaScript Modules Tutorial","ES6 Modules Example","ES2015 Modules Example","Modules Example","Modules in JavaScript Example","Modules in ES6 Example","Modules in ES2015 Example","JavaScript Modules Example","ES6 Modules Syntax","ES2015 Modules Syntax","Modules Syntax","Modules in JavaScript Syntax","Modules in ES6 Syntax","Modules in ES2015 Syntax","JavaScript Modules Syntax","ES6 Modules Syntax Example","ES2015 Modules Syntax Example","Modules Syntax Example","Modules in JavaScript Syntax Example","Modules in ES6 Syntax Example","Modules in ES2015 Syntax Example","JavaScript Modules Syntax Example","ES6 Modules Syntax Tutorial","ES2015 Modules Syntax Tutorial","Modules Syntax Tutorial","Modules in JavaScript Syntax Tutorial","Modules in ES6 Syntax Tutorial","Modules in ES2015 Syntax Tutorial","JavaScript Modules Syntax Tutorial","ES6 Modules Syntax Example Tutorial","ES2015 Modules Syntax Example Tutorial","Modules Syntax Example Tutorial","Modules in JavaScript Syntax Example Tutorial","Modules in ES6 Syntax Example Tutorial","Modules in ES2015 Syntax Example Tutorial","JavaScript Modules Syntax Example Tutorial"],description:"In this tutorial, you will learn about modules in JavaScript, a new feature introduced in ES6 (ES2015) that allows you to organize your code into reusable pieces."},sidebar:"javascript",previous:{title:"Classes",permalink:"/code-harbor-hub/docs/javascript/classes-in-js"},next:{title:"JSON",permalink:"/code-harbor-hub/docs/javascript/json-in-javascript"}},i={},d=[{value:"Modules in JavaScript",id:"modules-in-javascript",level:2},{value:"Default Exports",id:"default-exports",level:2},{value:"Multiple Exports and Imports in a Single Statement",id:"multiple-exports-and-imports-in-a-single-statement",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const a={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.M)(),...e.components},{TabItem:l,Tabs:t}=a;return l||p("TabItem",!0),t||p("Tabs",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.p,{children:["In JavaScript, modules are a new feature introduced in ",(0,o.jsx)("mark",{children:"ES6 (ES2015)"})," that allows you to organize your code into reusable pieces. Modules are a way to split your code into separate files and import/export the parts you need."]}),"\n",(0,o.jsx)(a.p,{children:"In this tutorial, you will learn about modules in JavaScript with the help of examples."}),"\n",(0,o.jsx)(a.h2,{id:"modules-in-javascript",children:"Modules in JavaScript"}),"\n",(0,o.jsx)(a.p,{children:"The syntax for importing and exporting modules in JavaScript is as follows:"}),"\n",(0,o.jsxs)(t,{defaultValue:"module1",values:[{label:"module1.js",value:"module1"},{label:"module2.js",value:"module2"},{label:"module3.js",value:"module3"},{label:"app.js",value:"app"}],children:[(0,o.jsx)(l,{value:"module1",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting a variable\nexport const PI = 3.14159;\n"})})}),(0,o.jsx)(l,{value:"module2",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting a function\nexport function add(a, b) {\n    return a + b;\n}\n"})})}),(0,o.jsx)(l,{value:"module3",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting a class\nexport class Person {\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    greet() {\n        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n    }\n}\n"})})}),(0,o.jsx)(l,{value:"app",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:'// Importing a variable\nimport { PI } from "./module1.js";\n\n// Importing a function\nimport { add } from "./module2.js";\n\n// Importing a class\nimport { Person } from "./module3.js";\n\nconsole.log(PI); // Output: 3.14159\n\nconsole.log(add(5, 3)); // Output: 8\n\nconst john = new Person("John", 30);\n\nconsole.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.\n'})})})]}),"\n",(0,o.jsxs)(a.p,{children:["In the example above, we have three modules: ",(0,o.jsx)(a.code,{children:"module1.js"}),", ",(0,o.jsx)(a.code,{children:"module2.js"}),", and ",(0,o.jsx)(a.code,{children:"module3.js"}),", each exporting a variable, a function, and a class, respectively. The ",(0,o.jsx)(a.code,{children:"app.js"})," file imports these modules and uses the exported values."]}),"\n",(0,o.jsx)(a.p,{children:"Here's a breakdown of the example:"}),"\n",(0,o.jsxs)(a.ol,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"module1.js"})," exports a variable ",(0,o.jsx)(a.code,{children:"PI"})," with the value ",(0,o.jsx)(a.code,{children:"3.14159"}),"."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"module2.js"})," exports a function ",(0,o.jsx)(a.code,{children:"add"})," that takes two parameters and returns their sum."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"module3.js"})," exports a class ",(0,o.jsx)(a.code,{children:"Person"})," with a constructor that initializes the ",(0,o.jsx)(a.code,{children:"name"})," and ",(0,o.jsx)(a.code,{children:"age"})," properties and a ",(0,o.jsx)(a.code,{children:"greet"})," method that returns a greeting message."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"app.js"})," imports the exported values from the modules and uses them in the code."]}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["When you run ",(0,o.jsx)(a.code,{children:"app.js"}),", you will see the following output:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",metastring:'title="Output"',children:"3.14159\n8\nHello, my name is John and I am 30 years old.\n"})}),"\n",(0,o.jsx)(a.p,{children:"This is how you can use modules in JavaScript to organize your code into reusable pieces."}),"\n",(0,o.jsx)(a.h2,{id:"default-exports",children:"Default Exports"}),"\n",(0,o.jsxs)(a.p,{children:["In addition to named exports, you can also use default exports in JavaScript modules. A default export is a single value that is exported from a module and can be imported without using curly braces ",(0,o.jsx)(a.code,{children:"{}"}),"."]}),"\n",(0,o.jsx)(a.p,{children:"Here's an example of using default exports in JavaScript modules:"}),"\n",(0,o.jsxs)(t,{defaultValue:"module1",values:[{label:"module1.js",value:"module1"},{label:"module2.js",value:"module2"},{label:"app.js",value:"app"}],children:[(0,o.jsx)(l,{value:"module1",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Default export\nconst PI = 3.14159;\n\nexport default PI;\n"})})}),(0,o.jsx)(l,{value:"module2",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Default export\nexport default function add(a, b) {\n    return a + b;\n}\n"})})}),(0,o.jsx)(l,{value:"app",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:'// Importing a default export\nimport PI from "./module1.js";\n\n// Importing a default export\nimport add from "./module2.js";\n\nconsole.log(PI); // Output: 3.14159\n\nconsole.log(add(5, 3)); // Output: 8\n'})})})]}),"\n",(0,o.jsxs)(a.p,{children:["In this example, we have two modules: ",(0,o.jsx)(a.code,{children:"module1.js"})," and ",(0,o.jsx)(a.code,{children:"module2.js"}),", each exporting a single value using default exports. The ",(0,o.jsx)(a.code,{children:"app.js"})," file imports these default exports without using curly braces ",(0,o.jsx)(a.code,{children:"{}"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:["When you run ",(0,o.jsx)(a.code,{children:"app.js"}),", you will see the following output:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",metastring:'title="Output"',children:"3.14159\n8\n"})}),"\n",(0,o.jsx)(a.p,{children:"This is how you can use default exports in JavaScript modules."}),"\n",(0,o.jsx)(a.h2,{id:"multiple-exports-and-imports-in-a-single-statement",children:"Multiple Exports and Imports in a Single Statement"}),"\n",(0,o.jsxs)(a.p,{children:["You can also export and import multiple values in a single statement using the ",(0,o.jsx)(a.code,{children:"export"})," and ",(0,o.jsx)(a.code,{children:"import"})," keywords."]}),"\n",(0,o.jsx)(a.p,{children:"Here's an example of exporting and importing multiple values in a single statement:"}),"\n",(0,o.jsxs)(t,{defaultValue:"module1",values:[{label:"module1.js",value:"module1"},{label:"module2.js",value:"module2"},{label:"app.js",value:"app"}],children:[(0,o.jsx)(l,{value:"module1",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting multiple values\nexport const PI = 3.14159;\nexport const E = 2.71828;\n"})})}),(0,o.jsx)(l,{value:"module2",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting multiple values\nexport function add(a, b) {\n    return a + b;\n}\n\nexport function subtract(a, b) {\n    return a - b;\n}\n"})})}),(0,o.jsx)(l,{value:"app",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:'// Importing multiple values\nimport { PI, E } from "./module1.js";\n\n// Importing multiple values\nimport { add, subtract } from "./module2.js";\n\nconsole.log(PI); // Output: 3.14159\nconsole.log(E); // Output: 2.71828\n\nconsole.log(add(5, 3)); // Output: 8\n\nconsole.log(subtract(5, 3)); // Output: 2\n'})})})]}),"\n",(0,o.jsxs)(a.p,{children:["In this example, we have two modules: ",(0,o.jsx)(a.code,{children:"module1.js"})," and ",(0,o.jsx)(a.code,{children:"module2.js"}),", each exporting multiple values using the ",(0,o.jsx)(a.code,{children:"export"})," keyword. The ",(0,o.jsx)(a.code,{children:"app.js"})," file imports these multiple values in a single statement using the ",(0,o.jsx)(a.code,{children:"import"})," keyword."]}),"\n",(0,o.jsxs)(a.p,{children:["When you run ",(0,o.jsx)(a.code,{children:"app.js"}),", you will see the following output:"]}),"\n",(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",metastring:'title="Output"',children:"3.14159\n2.71828\n8\n2\n"})}),"\n",(0,o.jsx)(a.p,{children:"This is how you can export and import multiple values in a single statement in JavaScript modules."}),"\n",(0,o.jsxs)(a.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,o.jsxs)(a.p,{children:["You can also use the ",(0,o.jsx)(a.code,{children:"export * from 'module'"})," syntax to re-export all named exports from another module. This can be useful when you want to aggregate exports from multiple modules into a single module."]}),(0,o.jsx)(a.p,{children:"For example:"}),(0,o.jsxs)(t,{defaultValue:"module1",values:[{label:"module1.js",value:"module1"},{label:"module2.js",value:"module2"},{label:"module.js",value:"module"},{label:"app.js",value:"app"}],children:[(0,o.jsx)(l,{value:"module1",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting a variable\nexport const PI = 3.14159;\n"})})}),(0,o.jsx)(l,{value:"module2",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:"// Exporting a variable\nexport const E = 2.71828;\n"})})}),(0,o.jsx)(l,{value:"module",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:'// Re-exporting named exports\nexport * from "./module1.js";\nexport * from "./module2.js";\n'})})}),(0,o.jsx)(l,{value:"app",children:(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-js",children:'// Importing re-exported values\nimport { PI, E } from "./module.js";\n\nconsole.log(PI); // Output: 3.14159\nconsole.log(E); // Output: 2.71828\n'})})})]}),(0,o.jsxs)(a.p,{children:["In this example, we have two modules ",(0,o.jsx)(a.code,{children:"module1.js"})," and ",(0,o.jsx)(a.code,{children:"module2.js"}),", each exporting a variable. The ",(0,o.jsx)(a.code,{children:"module.js"})," file re-exports the named exports from ",(0,o.jsx)(a.code,{children:"module1.js"})," and ",(0,o.jsx)(a.code,{children:"module2.js"}),". The ",(0,o.jsx)(a.code,{children:"app.js"})," file imports the re-exported values from ",(0,o.jsx)(a.code,{children:"module.js"}),"."]}),(0,o.jsxs)(a.p,{children:["When you run ",(0,o.jsx)(a.code,{children:"app.js"}),", you will see the following output:"]}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-bash",metastring:'title="Output"',children:"3.14159\n2.71828\n"})}),(0,o.jsx)(a.p,{children:"This is how you can re-export named exports from other modules in JavaScript."})]}),"\n",(0,o.jsxs)(a.admonition,{type:"important",children:[(0,o.jsx)(a.p,{children:"When using modules in JavaScript, you need to be aware of the module system you are using. Common module systems include CommonJS, AMD, and ES6 modules. ES6 modules are the standard module system in modern JavaScript applications."}),(0,o.jsxs)(a.p,{children:["If you are using a module in html file, you can use the ",(0,o.jsx)(a.code,{children:'type="module"'})," attribute in the ",(0,o.jsx)(a.code,{children:"<script>"})," tag to indicate that the script is a module."]}),(0,o.jsx)(a.p,{children:"For example:"}),(0,o.jsx)(a.pre,{children:(0,o.jsx)(a.code,{className:"language-html",metastring:'title="index.html"',children:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Module Example</title>\n    <script type="module" src="app.js"><\/script>\n</head>\n<body>\n    \x3c!-- Your HTML content here --\x3e\n</body>\n</html>\n'})}),(0,o.jsxs)(a.p,{children:["In this example, the ",(0,o.jsx)(a.code,{children:'type="module"'})," attribute in the ",(0,o.jsx)(a.code,{children:"<script>"})," tag indicates that the ",(0,o.jsx)(a.code,{children:"app.js"})," script is a module."]})]}),"\n",(0,o.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(a.p,{children:"Modules in JavaScript provide a way to organize your code into reusable pieces. You can export and import variables, functions, classes, and other values between modules to create a modular and maintainable codebase."})]})}function c(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function p(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,a,l)=>{l.d(a,{I:()=>r,M:()=>n});var o=l(11504);const s={},t=o.createContext(s);function n(e){const a=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(t.Provider,{value:a},e.children)}}}]);