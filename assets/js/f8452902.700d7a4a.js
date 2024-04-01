"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[34050],{38280:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});var i=t(17624),r=t(4552);const a={id:"arrays-bubblesort-in-dsa",title:"Arrays - Bubble Sort in DSA",sidebar_label:"Bubble Sort",sidebar_position:2,description:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position.",tags:["dsa","arrays","sorting","bubble-sort","algorithm of bubble-sort","pseudocode of bubble-sort","complexity of bubble-sort","example of bubble-sort","live example of bubble-sort","explanation of bubble-sort","quiz of bubble-sort","conclusion of bubble-sort"]},l=void 0,n={id:"dsa/arrays/arrays-bubblesort-in-dsa",title:"Arrays - Bubble Sort in DSA",description:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position.",source:"@site/docs/dsa/arrays/arrays-bubblesort-dsa.md",sourceDirName:"dsa/arrays",slug:"/dsa/arrays/arrays-bubblesort-in-dsa",permalink:"/code-harbor-hub/docs/dsa/arrays/arrays-bubblesort-in-dsa",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/dsa/arrays/arrays-bubblesort-dsa.md",tags:[{label:"dsa",permalink:"/code-harbor-hub/docs/tags/dsa"},{label:"arrays",permalink:"/code-harbor-hub/docs/tags/arrays"},{label:"sorting",permalink:"/code-harbor-hub/docs/tags/sorting"},{label:"bubble-sort",permalink:"/code-harbor-hub/docs/tags/bubble-sort"},{label:"algorithm of bubble-sort",permalink:"/code-harbor-hub/docs/tags/algorithm-of-bubble-sort"},{label:"pseudocode of bubble-sort",permalink:"/code-harbor-hub/docs/tags/pseudocode-of-bubble-sort"},{label:"complexity of bubble-sort",permalink:"/code-harbor-hub/docs/tags/complexity-of-bubble-sort"},{label:"example of bubble-sort",permalink:"/code-harbor-hub/docs/tags/example-of-bubble-sort"},{label:"live example of bubble-sort",permalink:"/code-harbor-hub/docs/tags/live-example-of-bubble-sort"},{label:"explanation of bubble-sort",permalink:"/code-harbor-hub/docs/tags/explanation-of-bubble-sort"},{label:"quiz of bubble-sort",permalink:"/code-harbor-hub/docs/tags/quiz-of-bubble-sort"},{label:"conclusion of bubble-sort",permalink:"/code-harbor-hub/docs/tags/conclusion-of-bubble-sort"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711886797,formattedLastUpdatedAt:"Mar 31, 2024",sidebarPosition:2,frontMatter:{id:"arrays-bubblesort-in-dsa",title:"Arrays - Bubble Sort in DSA",sidebar_label:"Bubble Sort",sidebar_position:2,description:"Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements 'bubble' to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort. It can be practical if the input is usually in sort order but may occasionally have some out-of-order elements nearly in position.",tags:["dsa","arrays","sorting","bubble-sort","algorithm of bubble-sort","pseudocode of bubble-sort","complexity of bubble-sort","example of bubble-sort","live example of bubble-sort","explanation of bubble-sort","quiz of bubble-sort","conclusion of bubble-sort"]},sidebar:"dsa",previous:{title:"Arrays",permalink:"/code-harbor-hub/docs/dsa/arrays/arrays-in-dsa"},next:{title:"Selection Sort",permalink:"/code-harbor-hub/docs/dsa/arrays/arrays-selectionsort-in-dsa"}},o={},d=[{value:"Algorithm",id:"algorithm",level:2},{value:"Pseudocode",id:"pseudocode",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Example",id:"example",level:2},{value:"Complexity",id:"complexity",level:2},{value:"Live Example",id:"live-example",level:2},{value:"Explanation",id:"explanation",level:2},{value:"References",id:"references",level:2},{value:"Related",id:"related",level:2},{value:"Quiz",id:"quiz",level:2},{value:"Conclusion",id:"conclusion",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",input:"input",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.M)(),...e.components},{BubbleSortVisualization:t}=s;return t||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("BubbleSortVisualization",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Bubble Sort"})," is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller elements ",(0,i.jsx)("mark",{children:"bubble"})," to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems even when compared to ",(0,i.jsx)("mark",{children:"insertion sort"}),". It can be practical if the input is usually in sorted order but may occasionally have some out-of-order elements nearly in position."]}),"\n",(0,i.jsx)(t,{}),"\n",(0,i.jsx)(s.h2,{id:"algorithm",children:"Algorithm"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Start from the first element, compare the current element with the next element of the array."}),"\n",(0,i.jsx)(s.li,{children:"If the current element is greater than the next element of the array, swap them."}),"\n",(0,i.jsx)(s.li,{children:"If the current element is less than the next element, move to the next element."}),"\n",(0,i.jsx)(s.li,{children:"Repeat steps 1-3 until the array is sorted."}),"\n",(0,i.jsx)(s.li,{children:"The array is sorted."}),"\n",(0,i.jsx)(s.li,{children:"Exit."}),"\n",(0,i.jsxs)(s.li,{children:["The time complexity of the bubble sort is O(n",(0,i.jsx)("sup",{children:"2"}),")."]}),"\n",(0,i.jsx)(s.li,{children:"The space complexity of the bubble sort is O(1)."}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"pseudocode",children:"Pseudocode"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-plaintext",metastring:'title="Bubble Sort"',children:"procedure bubbleSort( A : list of sortable items )\n    n = length(A)\n    repeat\n        swapped = false\n        for i = 1 to n-1 inclusive do\n            if A[i-1] > A[i] then\n                swap(A[i-1], A[i])\n                swapped = true\n            end if\n        end for\n    until not swapped\nend procedure\n"})}),"\n",(0,i.jsx)(s.h2,{id:"diagram",children:"Diagram"}),"\n",(0,i.jsx)(s.mermaid,{value:'graph TD\n    A([Start]) --\x3e B("i = 0")\n    B --\x3e C{"i < n-1"}\n    C --\x3e|True| D("j = 0")\n    D --\x3e E{"j < n - i - 1"}\n    E --\x3e|True| F{arr j > arr j+1}\n    F --\x3e|True| G{Swap arr j, arr j+1 }\n    G --\x3e H{Increment j}\n    H --\x3e |j++| D\n    F --\x3e|False| I{Increment j}\n    I --\x3e |j++| D\n    E --\x3e |false i++| C\n    D --\x3e |False| J{Increment i}\n    J --\x3e |i++| C\n    C --\x3e|False| K(Sorted Array)\n    K --\x3e L([Stop])\n'}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:'title="Bubble Sort"',children:"function bubbleSort(arr) {\n  let n = arr.length;\n  let swapped;\n  do {\n    swapped = false;\n    for (let i = 0; i < n - 1; i++) {\n      if (arr[i] > arr[i + 1]) {\n        let temp = arr[i];\n        arr[i] = arr[i + 1];\n        arr[i + 1] = temp;\n        swapped = true;\n      }\n    }\n  } while (swapped);\n  return arr;\n}\n\nlet arr = [64, 34, 25, 12, 22, 11, 90];\nconsole.log(bubbleSort(arr)); // [ 11, 12, 22, 25, 34, 64, 90 ]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"complexity",children:"Complexity"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Time Complexity"}),": O(n",(0,i.jsx)("sup",{children:"2"}),")","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Best Case: O(n)"}),"\n",(0,i.jsxs)(s.li,{children:["Average Case: O(n",(0,i.jsx)("sup",{children:"2"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["Worst Case: O(n",(0,i.jsx)("sup",{children:"2"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Space Complexity"}),": O(1)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Stable"}),": Yes"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"live-example",children:"Live Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",metastring:"live",live:!0,children:'function bubbleSort() {\n  let arr = [64, 34, 25, 12, 22, 11, 90];\n  let n = arr.length;\n\n  for (let i = 0; i < n; i++) {\n    for (let j = 0; j < n - i - 1; j++) {\n      if (arr[j] > arr[j + 1]) {\n        let temp = arr[j];\n        arr[j] = arr[j + 1];\n        arr[j + 1] = temp;\n      }\n    }\n  }\n\n  return (\n    <div>\n        <h3>Bubble Sort</h3>\n        <p><b>Array:</b> [64, 34, 25, 12, 22, 11, 90]</p>\n        <p>\n            <b>Sorted Array:</b> [{arr.join(", ")}]\n        </p>\n    </div>\n  )\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"explanation",children:"Explanation"}),"\n",(0,i.jsxs)(s.p,{children:["In the above example, we have an array of numbers ",(0,i.jsx)(s.code,{children:"[64, 34, 25, 12, 22, 11, 90]"}),". We are using the bubble sort algorithm to sort the array in ascending order. The bubble sort algorithm compares each pair of adjacent items and swaps them if they are in the wrong order. The algorithm repeats this process until the array is sorted. The sorted array is ",(0,i.jsx)(s.code,{children:"[11, 12, 22, 25, 34, 64, 90]"}),". The time complexity of the bubble sort is O(n",(0,i.jsx)("sup",{children:"2"}),") and the space complexity is O(1)."]}),"\n",(0,i.jsx)(s.admonition,{title:"Try it yourself",type:"info",children:(0,i.jsx)(s.p,{children:"Change the array values and see how the bubble sort algorithm sorts the array."})}),"\n",(0,i.jsxs)(s.admonition,{title:"\ud83d\udcdd Note",type:"tip",children:[(0,i.jsxs)(s.p,{children:["Bubble sort is not a practical sorting algorithm when the input is large. It is not suitable for large datasets due to its O(n",(0,i.jsx)("sup",{children:"2"}),") time complexity."]}),(0,i.jsx)(s.p,{children:"The main advantage of bubble sort is that it is easy to understand and implement. It is often used to teach the concept of sorting algorithms."}),(0,i.jsx)(s.p,{children:"Bubble sort is stable, meaning that it preserves the relative order of equal elements."}),(0,i.jsx)(s.p,{children:"Bubble sort is not an efficient algorithm for large datasets and is generally not used in practice."})]}),"\n",(0,i.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Bubble_sort",children:"Wikipedia"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.geeksforgeeks.org/bubble-sort/",children:"GeeksforGeeks"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.programiz.com/dsa/bubble-sort",children:"Programiz"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.tutorialspoint.com/data_structures_algorithms/bubble_sort_algorithm.htm",children:"TutorialsPoint"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.studytonight.com/data-structures/bubble-sort",children:"StudyTonight"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://www.w3schools.com/dsa/dsa_algo_bubblesort.php",children:"w3schools"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"related",children:"Related"}),"\n",(0,i.jsx)(s.p,{children:"Insertion Sort, Selection Sort, Merge Sort, Quick Sort, etc."}),"\n",(0,i.jsx)(s.h2,{id:"quiz",children:"Quiz"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"What is the time complexity of the bubble sort algorithm?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(n)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","O(n",(0,i.jsx)("sup",{children:"2"}),")     \u2714"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(log n)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(n!)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Is bubble sort a stable sorting algorithm?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Yes    \u2714"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","No"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Maybe"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","Not sure"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"What is the space complexity of the bubble sort algorithm?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(n)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","O(1)   \u2714"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(log n)"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","O(n!)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"What is the main advantage of bubble sort?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is the fastest sorting algorithm"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","It is easy to understand and implement     \u2714"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is suitable for large datasets"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is used in practice"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"What is the main disadvantage of bubble sort?"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is the fastest sorting algorithm"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is easy to understand and implement"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","It is not suitable for large datasets  \u2714"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","It is used in practice"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(s.p,{children:"In this tutorial, we learned about the bubble sort algorithm. We discussed the algorithm, pseudocode, diagram, example, complexity, and related concepts. We also implemented the bubble sort algorithm in JavaScript and saw a live example. We also discussed the advantages and disadvantages of the bubble sort algorithm. We hope you enjoyed this tutorial and found it helpful. Feel free to share your thoughts in the comments below."})]})}function c(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4552:(e,s,t)=>{t.d(s,{I:()=>n,M:()=>l});var i=t(11504);const r={},a=i.createContext(r);function l(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function n(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);