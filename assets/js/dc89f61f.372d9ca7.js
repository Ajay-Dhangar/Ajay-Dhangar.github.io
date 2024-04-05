"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[58016],{14192:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=n(17624),a=n(4552);const s={id:"object-datatypes-in-javascript",title:"Object Data Types in JavaScript",sidebar_label:"Object",sidebar_position:1,tags:["JavaScript","Data Types","Non-Primitive Data Types","Object","Object in JavaScript","Object data type","Object methods","Object properties","Object constructor","Creating objects in JavaScript","Accessing object properties","Modifying object properties","Adding object properties","Deleting object properties"],description:"What is the object data type in JavaScript? Learn about the object data type and how to create, access, modify, add, and delete object properties in JavaScript."},r=void 0,i={id:"javascript/datatypes/non-primitive-data-types/object-datatypes-in-javascript",title:"Object Data Types in JavaScript",description:"What is the object data type in JavaScript? Learn about the object data type and how to create, access, modify, add, and delete object properties in JavaScript.",source:"@site/docs/javascript/datatypes/non-primitive-data-types/object-js.mdx",sourceDirName:"javascript/datatypes/non-primitive-data-types",slug:"/javascript/datatypes/non-primitive-data-types/object-datatypes-in-javascript",permalink:"/code-harbor-hub/docs/javascript/datatypes/non-primitive-data-types/object-datatypes-in-javascript",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/javascript/datatypes/non-primitive-data-types/object-js.mdx",tags:[{label:"JavaScript",permalink:"/code-harbor-hub/docs/tags/java-script"},{label:"Data Types",permalink:"/code-harbor-hub/docs/tags/data-types"},{label:"Non-Primitive Data Types",permalink:"/code-harbor-hub/docs/tags/non-primitive-data-types"},{label:"Object",permalink:"/code-harbor-hub/docs/tags/object"},{label:"Object in JavaScript",permalink:"/code-harbor-hub/docs/tags/object-in-java-script"},{label:"Object data type",permalink:"/code-harbor-hub/docs/tags/object-data-type"},{label:"Object methods",permalink:"/code-harbor-hub/docs/tags/object-methods"},{label:"Object properties",permalink:"/code-harbor-hub/docs/tags/object-properties"},{label:"Object constructor",permalink:"/code-harbor-hub/docs/tags/object-constructor"},{label:"Creating objects in JavaScript",permalink:"/code-harbor-hub/docs/tags/creating-objects-in-java-script"},{label:"Accessing object properties",permalink:"/code-harbor-hub/docs/tags/accessing-object-properties"},{label:"Modifying object properties",permalink:"/code-harbor-hub/docs/tags/modifying-object-properties"},{label:"Adding object properties",permalink:"/code-harbor-hub/docs/tags/adding-object-properties"},{label:"Deleting object properties",permalink:"/code-harbor-hub/docs/tags/deleting-object-properties"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1709142715e3,sidebarPosition:1,frontMatter:{id:"object-datatypes-in-javascript",title:"Object Data Types in JavaScript",sidebar_label:"Object",sidebar_position:1,tags:["JavaScript","Data Types","Non-Primitive Data Types","Object","Object in JavaScript","Object data type","Object methods","Object properties","Object constructor","Creating objects in JavaScript","Accessing object properties","Modifying object properties","Adding object properties","Deleting object properties"],description:"What is the object data type in JavaScript? Learn about the object data type and how to create, access, modify, add, and delete object properties in JavaScript."},sidebar:"javascript",previous:{title:"Non Primitive Data Types",permalink:"/code-harbor-hub/docs/category/non-primitive-data-types-1"},next:{title:"Array",permalink:"/code-harbor-hub/docs/javascript/datatypes/non-primitive-data-types/array-datatypes-in-javascript"}},c={},d=[{value:"What is Object in JavaScript?",id:"what-is-object-in-javascript",level:2},{value:"Syntax of Object in JavaScript",id:"syntax-of-object-in-javascript",level:2},{value:"How to Create Objects in JavaScript?",id:"how-to-create-objects-in-javascript",level:2},{value:"Accessing Object Properties",id:"accessing-object-properties",level:2},{value:"Dot Notation",id:"dot-notation",level:3},{value:"Bracket Notation",id:"bracket-notation",level:3},{value:"Modifying Object Properties",id:"modifying-object-properties",level:2},{value:"Adding Object Properties",id:"adding-object-properties",level:2},{value:"Deleting Object Properties",id:"deleting-object-properties",level:2},{value:"What Can an Object Contain?",id:"what-can-an-object-contain",level:2},{value:"Object Methods",id:"object-methods",level:2},{value:"Object Constructor",id:"object-constructor",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Object"})," is a non-primitive data type in JavaScript. It represents a collection of key-value pairs, where the keys are strings (or symbols) and the values can be of any data type, including other objects."]}),"\n",(0,o.jsx)(t.mermaid,{value:"classDiagram\n    class Object {\n        Object()\n        toString(): string\n        hasOwnProperty(prop: string): boolean\n        isPrototypeOf(obj: Object): boolean\n        propertyIsEnumerable(prop: string): boolean\n    }\n    \n    class Function {\n        Function()\n        apply(thisArg: any, argsArray?: any[]): any\n        call(thisArg: any, ...args: any[]): any\n        bind(thisArg: any, ...args: any[]): any\n        toString(): string\n    }\n    \n    class Array {\n        Array()\n        length: number\n        concat(...items: ConcatArray<T>[]): T[]\n        push(...items: T[]): number\n        pop(): T | undefined\n        slice(start?: number, end?: number): T[]\n        splice(start: number, deleteCount?: number): T[]\n        indexOf(searchElement: T, fromIndex?: number): number\n    }\n    \n    class Date {\n        Date()\n        now(): number\n        toString(): string\n        getFullYear(): number\n        getMonth(): number\n        getDate(): number\n        getDay(): number\n        getHours(): number\n        getMinutes(): number\n        getSeconds(): number\n        getMilliseconds(): number\n    }\n    \n    Object <|-- Function\n    Object <|-- Array\n    Object <|-- Date\n"}),"\n",(0,o.jsx)(t.h2,{id:"what-is-object-in-javascript",children:"What is Object in JavaScript?"}),"\n",(0,o.jsxs)(t.p,{children:["In JavaScript, an ",(0,o.jsx)(t.code,{children:"Object"})," is a non-primitive data type that represents a collection of key-value pairs. It is used to store various keyed collections and more complex entities. An object can be created using the object literal syntax ",(0,o.jsx)(t.code,{children:"{}"})," or the ",(0,o.jsx)(t.code,{children:"Object"})," constructor."]}),"\n",(0,o.jsx)(t.h2,{id:"syntax-of-object-in-javascript",children:"Syntax of Object in JavaScript"}),"\n",(0,o.jsx)(t.p,{children:"The syntax for creating an object in JavaScript using the object literal syntax is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Object Literal Syntax"',children:"let object = {\n  key1: value1,\n  key2: value2,\n  // ...\n  keyN: valueN\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:"In the above syntax:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"object"})," is the name of the object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"key1"}),", ",(0,o.jsx)(t.code,{children:"key2"}),", and ",(0,o.jsx)(t.code,{children:"keyN"})," are the keys of the object."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"value1"}),", ",(0,o.jsx)(t.code,{children:"value2"}),", and ",(0,o.jsx)(t.code,{children:"valueN"})," are the values associated with the keys."]}),"\n",(0,o.jsxs)(t.li,{children:["The keys and values are separated by a colon (",(0,o.jsx)(t.code,{children:":"}),"), and the key-value pairs are separated by commas (",(0,o.jsx)(t.code,{children:","}),")."]}),"\n",(0,o.jsx)(t.li,{children:"The keys can be strings or symbols, and the values can be of any data type, including other objects."}),"\n",(0,o.jsxs)(t.li,{children:["The object literal syntax ",(0,o.jsx)(t.code,{children:"{}"})," is the most common way to create objects in JavaScript."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"how-to-create-objects-in-javascript",children:"How to Create Objects in JavaScript?"}),"\n",(0,o.jsxs)(t.p,{children:["You can create an ",(0,o.jsx)(t.code,{children:"Object"})," in JavaScript using the following syntax:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Creating Objects in JavaScript"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true\n};\n\nconsole.log(person); // Output: { name: 'John Doe', age: 30, isEmployed: true }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"person"})," object is created using the object literal syntax ",(0,o.jsx)(t.code,{children:"{}"}),". It contains three key-value pairs: ",(0,o.jsx)(t.code,{children:"name"}),", ",(0,o.jsx)(t.code,{children:"age"}),", and ",(0,o.jsx)(t.code,{children:"isEmployed"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"accessing-object-properties",children:"Accessing Object Properties"}),"\n",(0,o.jsxs)(t.p,{children:["You can access the properties of an object using the dot notation (",(0,o.jsx)(t.code,{children:"."}),") or the bracket notation (",(0,o.jsx)(t.code,{children:"[]"}),")."]}),"\n",(0,o.jsx)(t.h3,{id:"dot-notation",children:"Dot Notation"}),"\n",(0,o.jsxs)(t.p,{children:["You can access the properties of an object using the dot notation (",(0,o.jsx)(t.code,{children:"."}),") as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Accessing Object Properties using Dot Notation"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true\n};\n\nconsole.log(person.name); // Output: John Doe\nconsole.log(person.age); // Output: 30\nconsole.log(person.isEmployed); // Output: true\n"})}),"\n",(0,o.jsx)(t.h3,{id:"bracket-notation",children:"Bracket Notation"}),"\n",(0,o.jsxs)(t.p,{children:["You can also access the properties of an object using the bracket notation (",(0,o.jsx)(t.code,{children:"[]"}),") as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Accessing Object Properties using Bracket Notation"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true\n};\n\nconsole.log(person['name']); // Output: John Doe\nconsole.log(person['age']); // Output: 30\nconsole.log(person['isEmployed']); // Output: true\n"})}),"\n",(0,o.jsx)(t.h2,{id:"modifying-object-properties",children:"Modifying Object Properties"}),"\n",(0,o.jsxs)(t.p,{children:["You can modify the properties of an object using the assignment operator (",(0,o.jsx)(t.code,{children:"="}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Modifying Object Properties"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true\n};\n\nperson.age = 35;\n\nconsole.log(person.age); // Output: 35\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"age"})," property of the ",(0,o.jsx)(t.code,{children:"person"})," object is modified from ",(0,o.jsx)(t.code,{children:"30"})," to ",(0,o.jsx)(t.code,{children:"35"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"adding-object-properties",children:"Adding Object Properties"}),"\n",(0,o.jsxs)(t.p,{children:["You can add new properties to an object using the assignment operator (",(0,o.jsx)(t.code,{children:"="}),")."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Adding Object Properties"',children:"let person = {\n  name: 'Ajay Dhangar',\n  age: 23,\n  isEmployed: true\n};\n\nperson.city = 'Mandsaur';\n\nconsole.log(person.city); // Output: Mandsaur\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"city"})," property is added to the ",(0,o.jsx)(t.code,{children:"person"})," object with the value ",(0,o.jsx)(t.code,{children:"'Mandsaur'"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"deleting-object-properties",children:"Deleting Object Properties"}),"\n",(0,o.jsxs)(t.p,{children:["You can delete properties from an object using the ",(0,o.jsx)(t.code,{children:"delete"})," operator."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Deleting Object Properties"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true\n};\n\ndelete person.isEmployed;\n\nconsole.log(person); // Output: { name: 'John Doe', age: 30 }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"isEmployed"})," property is deleted from the ",(0,o.jsx)(t.code,{children:"person"})," object."]}),"\n",(0,o.jsx)(t.h2,{id:"what-can-an-object-contain",children:"What Can an Object Contain?"}),"\n",(0,o.jsx)(t.p,{children:"An object can contain properties and methods. Properties are key-value pairs, and methods are functions associated with the object."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Object Properties and Methods"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true,\n  greet: function() {\n    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n  }\n};\n\nconsole.log(person.name); // Output: John Doe\nconsole.log(person.age); // Output: 30\nconsole.log(person.isEmployed); // Output: true\nconsole.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"person"})," object contains four properties: ",(0,o.jsx)(t.code,{children:"name"}),", ",(0,o.jsx)(t.code,{children:"age"}),", ",(0,o.jsx)(t.code,{children:"isEmployed"}),", and ",(0,o.jsx)(t.code,{children:"greet"}),". The ",(0,o.jsx)(t.code,{children:"greet"})," property is a method that returns a greeting message using the ",(0,o.jsx)(t.code,{children:"name"})," and ",(0,o.jsx)(t.code,{children:"age"})," properties of the object."]}),"\n",(0,o.jsx)(t.h2,{id:"object-methods",children:"Object Methods"}),"\n",(0,o.jsx)(t.p,{children:"An object can also contain methods, which are functions that are associated with the object. You can define methods as properties of an object."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Object Methods"',children:"let person = {\n  name: 'John Doe',\n  age: 30,\n  isEmployed: true,\n  greet: function() {\n    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;\n  }\n};\n\nconsole.log(person.greet()); // Output: Hello, my name is John Doe and I am 30 years old.\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In the above example, the ",(0,o.jsx)(t.code,{children:"greet"})," method is defined as a property of the ",(0,o.jsx)(t.code,{children:"person"})," object. It returns a greeting message using the ",(0,o.jsx)(t.code,{children:"name"})," and ",(0,o.jsx)(t.code,{children:"age"})," properties of the object."]}),"\n",(0,o.jsx)(t.h2,{id:"object-constructor",children:"Object Constructor"}),"\n",(0,o.jsxs)(t.p,{children:["You can also create objects using the ",(0,o.jsx)(t.code,{children:"Object"})," constructor."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:'title="Creating Objects using Object Constructor"',children:"let person = new Object();\n\nperson.name = 'John Doe';\n\nconsole.log(person.name); // Output: John Doe\n"})}),"\n",(0,o.jsxs)(t.admonition,{title:"\ud83d\udcdd Note",type:"info",children:[(0,o.jsxs)(t.p,{children:["The object literal syntax ",(0,o.jsx)(t.code,{children:"{}"})," is the preferred way to create objects in JavaScript. The ",(0,o.jsx)(t.code,{children:"Object"})," constructor is rarely used to create objects."]}),(0,o.jsxs)(t.p,{children:["The object literal syntax is more concise and easier to read than the ",(0,o.jsx)(t.code,{children:"Object"})," constructor."]})]}),"\n",(0,o.jsxs)(t.admonition,{title:"tips and tricks",type:"tip",children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"1. Object Literals"}),": The object literal syntax ",(0,o.jsx)(t.code,{children:"{}"})," is the most common way to create objects in JavaScript."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"2. Object Properties"}),": Objects can contain properties and methods. Properties are key-value pairs, and methods are functions associated with the object."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"3. Accessing Object Properties"}),": You can access object properties using the dot notation (",(0,o.jsx)(t.code,{children:"."}),") or the bracket notation (",(0,o.jsx)(t.code,{children:"[]"}),")."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"4. Modifying Object Properties"}),": You can modify object properties using the assignment operator (",(0,o.jsx)(t.code,{children:"="}),")."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"5. Adding Object Properties"}),": You can add new properties to an object using the assignment operator (",(0,o.jsx)(t.code,{children:"="}),")."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"6. Deleting Object Properties"}),": You can delete properties from an object using the ",(0,o.jsx)(t.code,{children:"delete"})," operator."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"7. Object Methods"}),": Objects can contain methods, which are functions associated with the object."]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"8. Object Constructor"}),": You can create objects using the ",(0,o.jsx)(t.code,{children:"Object"})," constructor, but the object literal syntax is preferred."]})]}),"\n",(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(t.p,{children:["In JavaScript, the ",(0,o.jsx)(t.code,{children:"Object"})," is a non-primitive data type that represents a collection of key-value pairs. You can create objects using the object literal syntax ",(0,o.jsx)(t.code,{children:"{}"})," or the ",(0,o.jsx)(t.code,{children:"Object"})," constructor. Objects can contain properties and methods, and you can access, modify, add, and delete properties of an object using various techniques."]})]})}function p(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>r});var o=n(11504);const a={},s=o.createContext(a);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);