"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[3553],{17236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(17624),i=t(4552);const r={id:"two-sum",title:"Two Sum Problem (LeetCode)",sidebar_label:"0001 - Two Sum",tags:["Two Sum","Hash Table","Two Pointer","Array","LeetCode","JavaScript","TypeScript"],description:"This is a solution to the Two Sum problem on LeetCode."},l=void 0,o={id:"lc-solutions/0000-0099/two-sum",title:"Two Sum Problem (LeetCode)",description:"This is a solution to the Two Sum problem on LeetCode.",source:"@site/dsa-solutions/lc-solutions/0000-0099/0001-two-sum.md",sourceDirName:"lc-solutions/0000-0099",slug:"/lc-solutions/0000-0099/two-sum",permalink:"/code-harbor-hub/dsa-solutions/lc-solutions/0000-0099/two-sum",draft:!1,unlisted:!1,tags:[{label:"Two Sum",permalink:"/code-harbor-hub/dsa-solutions/tags/two-sum"},{label:"Hash Table",permalink:"/code-harbor-hub/dsa-solutions/tags/hash-table"},{label:"Two Pointer",permalink:"/code-harbor-hub/dsa-solutions/tags/two-pointer"},{label:"Array",permalink:"/code-harbor-hub/dsa-solutions/tags/array"},{label:"LeetCode",permalink:"/code-harbor-hub/dsa-solutions/tags/leet-code"},{label:"JavaScript",permalink:"/code-harbor-hub/dsa-solutions/tags/java-script"},{label:"TypeScript",permalink:"/code-harbor-hub/dsa-solutions/tags/type-script"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1711984915e3,sidebarPosition:1,frontMatter:{id:"two-sum",title:"Two Sum Problem (LeetCode)",sidebar_label:"0001 - Two Sum",tags:["Two Sum","Hash Table","Two Pointer","Array","LeetCode","JavaScript","TypeScript"],description:"This is a solution to the Two Sum problem on LeetCode."},sidebar:"codeharborhub",previous:{title:"0000 - 0099",permalink:"/code-harbor-hub/dsa-solutions/category/0000---0099"}},a={},c=[{value:"Problem Description",id:"problem-description",level:3},{value:"Examples",id:"examples",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Solution for Two Sum Problem",id:"solution-for-two-sum-problem",level:2},{value:"Intuition",id:"intuition",level:3},{value:"Approach 1: Brute Force (Naive)",id:"approach-1-brute-force-naive",level:3},{value:"Implementation",id:"implementation",level:4},{value:"Codes in Different Languages",id:"codes-in-different-languages",level:4},{value:"Complexity Analysis",id:"complexity-analysis",level:4},{value:"Approach 2: Using Hash Table",id:"approach-2-using-hash-table",level:3},{value:"Implementation",id:"implementation-1",level:4},{value:"Code in Different Languages",id:"code-in-different-languages",level:4},{value:"Complexity Analysis",id:"complexity-analysis-1",level:4},{value:"Approach 3: Using Two Pointers",id:"approach-3-using-two-pointers",level:3},{value:"Implementation",id:"implementation-2",level:4},{value:"Code in Different Languages",id:"code-in-different-languages-1",level:4},{value:"Complexity Analysis",id:"complexity-analysis-2",level:4},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.M)(),...e.components},{TabItem:t,Tabs:r}=n;return t||m("TabItem",!0),r||m("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"We have provided multiple solutions to the Two Sum problem on LeetCode. The problem is to find two numbers in an array that add up to a target sum. We have provided solutions using a brute force approach, a hash table, and the two-pointer technique. The hash table approach is the most efficient among the three approaches and is recommended for large inputs."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Problem Statement"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Solution Link"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"LeetCode Profile"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum/",children:"Two Sum on LeetCode"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum/solutions/4958021/two-sum-problem-solution-using-hash-table-ts-js-java-py-cpp-recommended-solutions",children:"Two Sum Solution on LeetCode"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.a,{href:"https://leetcode.com/ajaydhangar49/",children:"Ajay Dhangar"})})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["LeetCode provides the ",(0,s.jsx)(n.a,{href:"https://leetcode.com/problems/two-sum/",children:"Two Sum problem"})," with the following problem statement:"]}),"\n",(0,s.jsx)(n.h3,{id:"problem-description",children:"Problem Description"}),"\n",(0,s.jsxs)(n.p,{children:["Given an array of integers ",(0,s.jsx)(n.code,{children:"nums"})," and an integer ",(0,s.jsx)(n.code,{children:"target"}),", return indices of the two numbers such that they add up to ",(0,s.jsx)(n.code,{children:"target"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"You may assume that each input would have exactly one solution, and you may not use the same element twice."}),"\n",(0,s.jsx)(n.p,{children:"You can return the answer in any order."}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]\nOutput: Because nums[0] + nums[1] == 9, we return [0, 1].\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Input: nums = [3,2,4], target = 6\nOutput: [1,2]\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Input: nums = [3,3], target = 6\nOutput: [0,1]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"2 <= nums.length <= 10^4"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10^9 <= nums[i] <= 10^9"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"-10^9 <= target <= 10^9"})}),"\n",(0,s.jsx)(n.li,{children:"Only one valid answer exists."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"solution-for-two-sum-problem",children:"Solution for Two Sum Problem"}),"\n",(0,s.jsx)(n.h3,{id:"intuition",children:"Intuition"}),"\n",(0,s.jsxs)(n.p,{children:["The problem can be solved using a brute force approach, a hash table, or the two-pointer technique. The brute force approach has a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})}),", the hash table approach has a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})}),", and the two-pointer technique has a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"approach-1-brute-force-naive",children:"Approach 1: Brute Force (Naive)"}),"\n",(0,s.jsxs)(n.p,{children:["The brute force approach is simple. We iterate through each element ",(0,s.jsx)(n.code,{children:"nums[i]"})," and check if there is another element ",(0,s.jsx)(n.code,{children:"nums[j]"})," such that ",(0,s.jsx)(n.code,{children:"nums[i] + nums[j] == target"}),". If we find such a pair, we return the indices ",(0,s.jsx)(n.code,{children:"[i, j]"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function twoSumProblem() {\n  const nums = [2, 7, 11, 15];\n  const target = 9;\n  const twoSum = function (nums, target) {\n    for (let i = 0; i < nums.length; i++) {\n      for (let j = i + 1; j < nums.length; j++) {\n        if (nums[i] + nums[j] === target) {\n          return [i, j];\n        }\n      }\n    }\n\n    return [];\n  };\n\n  const result = twoSum(nums, target);\n  return (\n    <div>\n      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>\n      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"codes-in-different-languages",children:"Codes in Different Languages"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{value:"JavaScript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:" function twoSum(nums, target) {\n   for (let i = 0; i < nums.length; i++) {\n     for (let j = i + 1; j < nums.length; j++) {\n       if (nums[i] + nums[j] === target) {\n         return [i, j];\n       }\n     }\n   }\n\n return [];\n }\n"})})}),(0,s.jsx)(t,{value:"TypeScript",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:" function twoSum(nums: number[], target: number): number[] {\n   for (let i = 0; i < nums.length; i++) {\n     for (let j = i + 1; j < nums.length; j++) {\n       if (nums[i] + nums[j] === target) {\n         return [i, j];\n       }\n     }\n   }\n\n   return [];\n }\n"})})}),(0,s.jsx)(t,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:" class Solution:\n def twoSum(self, nums: List[int], target: int) -> List[int]:\n     for i in range(len(nums)):\n         for j in range(i + 1, len(nums)):\n             if nums[i] + nums[j] == target:\n                return [i, j]\n\n     return []        \n"})})}),(0,s.jsx)(t,{value:"Java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:" class Solution {\n     public int[] twoSum(int[] nums, int target) {\n         for (int i = 0; i < nums.length; i++) {\n             for (int j = i + 1; j < nums.length; j++) {\n                 if (nums[i] + nums[j] == target) {\n                     return new int[] {i, j};\n                 }\n             }\n         }\n\n         return new int[0];\n     }\n }\n"})})}),(0,s.jsx)(t,{value:"C++",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:" class Solution {\n public:\n     vector<int> twoSum(vector<int>& nums, int target) {\n         for (int i = 0; i < nums.size(); i++) {\n             for (int j = i + 1; j < nums.size(); j++) {\n                 if (nums[i] + nums[j] == target) {\n                     return {i, j};\n                 }\n             }\n         }\n\n         return {};\n     }\n };\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"complexity-analysis",children:"Complexity Analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Time Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})]}),"\n",(0,s.jsxs)(n.li,{children:["Space Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(1)"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Where ",(0,s.jsx)(n.code,{children:"n"})," is the length of the input array ",(0,s.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The time complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})," because we are iterating through the array twice."]}),"\n",(0,s.jsxs)(n.li,{children:["The space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(1)"})})," because we are not using any extra space."]}),"\n",(0,s.jsx)(n.li,{children:"This approach is not efficient and is not recommended for large inputs."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"approach-2-using-hash-table",children:"Approach 2: Using Hash Table"}),"\n",(0,s.jsx)(n.p,{children:"We can improve the time complexity of the brute force approach by using a hash table to store the elements and their indices. While we iterate through the array, we check if the difference between the target and the current element exists in the hash table. If it does, we return the indices of the current element and the element that makes up the target sum."}),"\n",(0,s.jsx)(n.h4,{id:"implementation-1",children:"Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function twoSumProblem() {\n  const nums = [2, 7, 11, 15];\n  const target = 9;\n\n    const twoSum = function (nums, target) {\n        const numMap = new Map();\n\n        for (let i = 0; i < nums.length; i++) {\n        const complement = target - nums[i];\n        if (numMap.has(complement)) {\n            return [numMap.get(complement), i];\n        }\n        numMap.set(nums[i], i);\n        }\n\n        return [];\n    };\n\n  const result = twoSum(nums, target);\n  return (\n    <div>\n      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>\n      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"code-in-different-languages",children:"Code in Different Languages"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{value:"JavaScript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:" function twoSum(nums, target) {\n   const numMap = new Map();\n\n   for (let i = 0; i < nums.length; i++) {\n     const complement = target - nums[i];\n     if (numMap.has(complement)) {\n       return [numMap.get(complement), i];\n     }\n     numMap.set(nums[i], i);\n   }\n\n   return [];\n }\n"})})}),(0,s.jsx)(t,{value:"TypeScript",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:" function twoSum(nums: number[], target: number): number[] {\n   const numMap = new Map<number, number>();\n\n   for (let i = 0; i < nums.length; i++) {\n     const complement = target - nums[i];\n     if (numMap.has(complement)) {\n       return [numMap.get(complement)!, i];\n     }\n     numMap.set(nums[i], i);\n   }\n\n   return [];\n }\n"})})}),(0,s.jsx)(t,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"  class Solution:\n   def twoSum(self, nums: List[int], target: int) -> List[int]:\n     num_map = {}\n     for i, num in enumerate(nums):\n         complement = target - num\n         if complement in num_map:\n             return [num_map[complement], i]\n         num_map[num] = i\n\n     return []\n"})})}),(0,s.jsx)(t,{value:"Java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:" class Solution {\n     public int[] twoSum(int[] nums, int target) {\n         Map<Integer, Integer> numMap = new HashMap<>();\n\n         for (int i = 0; i < nums.length; i++) {\n             int complement = target - nums[i];\n             if (numMap.containsKey(complement)) {\n                 return new int[] {numMap.get(complement), i};\n             }\n             numMap.put(nums[i], i);\n         }\n\n         return new int[0];\n     }\n }\n"})})}),(0,s.jsx)(t,{value:"C++",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:" class Solution {\n public:\n     vector<int> twoSum(vector<int>& nums, int target) {\n         unordered_map<int, int> numMap;\n\n         for (int i = 0; i < nums.size(); i++) {\n             int complement = target - nums[i];\n             if (numMap.find(complement) != numMap.end()) {\n                 return {numMap[complement], i};\n             }\n             numMap[nums[i]] = i;\n         }\n\n         return {};\n     }\n };\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"complexity-analysis-1",children:"Complexity Analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Time Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Space Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Where ",(0,s.jsx)(n.code,{children:"n"})," is the length of the input array ",(0,s.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The time complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})," because we iterate through the array only once."]}),"\n",(0,s.jsxs)(n.li,{children:["The space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})," because we use a hash table to store the elements and their indices."]}),"\n",(0,s.jsx)(n.li,{children:"This approach is more efficient than the brute force approach and is recommended for large inputs."}),"\n",(0,s.jsxs)(n.li,{children:["The hash table lookup has an average time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(1)"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})," because we store at most ",(0,s.jsx)(n.code,{children:"n"})," elements in the hash table."]}),"\n",(0,s.jsxs)(n.li,{children:["The total time complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})}),". and the total space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"approach-3-using-two-pointers",children:"Approach 3: Using Two Pointers"}),"\n",(0,s.jsx)(n.p,{children:"We can also solve this problem using the two-pointer technique. We first sort the array and then use two pointers, one at the beginning and one at the end. We move the pointers based on the sum of the elements at the two pointers. If the sum is equal to the target, we return the indices of the two elements. If the sum is less than the target, we move the left pointer to the right. If the sum is greater than the target, we move the right pointer to the left."}),"\n",(0,s.jsx)(n.h4,{id:"implementation-2",children:"Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function twoSumProblem() {\n  const nums = [2, 7, 11, 15];\n  const target = 9;\n\n  const twoSum = function (nums, target) {\n    const sortedNums = nums.map((num, index) => [num, index]);\n    sortedNums.sort((a, b) => a[0] - b[0]);\n\n    let left = 0;\n    let right = sortedNums.length - 1;\n\n    while (left < right) {\n      const sum = sortedNums[left][0] + sortedNums[right][0];\n      if (sum === target) {\n        return [sortedNums[left][1], sortedNums[right][1]];\n      } else if (sum < target) {\n        left++;\n      } else {\n        right--;\n      }\n    }\n\n    return [];\n  };\n\n  const result = twoSum(nums, target);\n  return (\n    <div>\n      <p><b>Input:</b> nums = {"[", nums.join(", "), "]"}, target = {target}</p>\n      <p><b>Output:</b> {"[", result.join(", "), "]"}</p>\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"code-in-different-languages-1",children:"Code in Different Languages"}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)(t,{value:"JavaScript",label:"JavaScript",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:" function twoSum(nums, target) {\n   const sortedNums = nums.map((num, index) => [num, index]);\n   sortedNums.sort((a, b) => a[0] - b[0]);\n\n   let left = 0;\n   let right = sortedNums.length - 1;\n\n   while (left < right) {\n     const sum = sortedNums[left][0] + sortedNums[right][0];\n     if (sum === target) {\n       return [sortedNums[left][1], sortedNums[right][1]];\n     } else if (sum < target) {\n       left++;\n     } else {\n       right--;\n     }\n   }\n\n   return [];\n }\n"})})}),(0,s.jsx)(t,{value:"TypeScript",label:"TypeScript",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:" function twoSum(nums: number[], target: number): number[] {\n   const sortedNums = nums.map((num, index) => [num, index]);\n   sortedNums.sort((a, b) => a[0] - b[0]);\n\n   let left = 0;\n   let right = sortedNums.length - 1;\n\n   while (left < right) {\n     const sum = sortedNums[left][0] + sortedNums[right][0];\n     if (sum === target) {\n       return [sortedNums[left][1], sortedNums[right][1]];\n     } else if (sum < target) {\n       left++;\n     } else {\n       right--;\n     }\n   }\n\n   return [];\n }\n"})})}),(0,s.jsx)(t,{value:"Python",label:"Python",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"  class Solution:\n   def twoSum(self, nums: List[int], target: int) -> List[int]:\n     sorted_nums = sorted(enumerate(nums), key=lambda x: x[1])\n\n     left, right = 0, len(sorted_nums) - 1\n\n     while left < right:\n         sum = sorted_nums[left][1] + sorted_nums[right][1]\n         if sum == target:\n             return [sorted_nums[left][0], sorted_nums[right][0]]\n         elif sum < target:\n             left += 1\n         else:\n             right -= 1\n\n     return []\n"})})}),(0,s.jsx)(t,{value:"Java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:" class Solution {\n     public int[] twoSum(int[] nums, int target) {\n         int[][] sortedNums = new int[nums.length][2];\n         for (int i = 0; i < nums.length; i++) {\n             sortedNums[i] = new int[] {nums[i], i};\n         }\n\n         Arrays.sort(sortedNums, (a, b) -> Integer.compare(a[0], b[0]));\n\n         int left = 0;\n         int right = sortedNums.length - 1;\n\n         while (left < right) {\n             int sum = sortedNums[left][0] + sortedNums[right][0];\n             if (sum == target) {\n                 return new int[] {sortedNums[left][1], sortedNums[right][1]};\n             } else if (sum < target) {\n                 left++;\n             } else {\n                 right--;\n             }\n         }\n\n         return new int[0];\n     }\n }\n"})})}),(0,s.jsx)(t,{value:"C++",label:"C++",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:" class Solution {\n public:\n     vector<int> twoSum(vector<int>& nums, int target) {\n         vector<vector<int>> sortedNums(nums.size(), vector<int>(2));\n         for (int i = 0; i < nums.size(); i++) {\n             sortedNums[i] = {nums[i], i};\n         }\n\n         sort(sortedNums.begin(), sortedNums.end(), [](vector<int>& a, vector<int>& b) {\n             return a[0] < b[0];\n         });\n\n         int left = 0;\n         int right = sortedNums.size() - 1;\n\n         while (left < right) {\n             int sum = sortedNums[left][0] + sortedNums[right][0];\n             if (sum == target) {\n                 return {sortedNums[left][1], sortedNums[right][1]};\n             } else if (sum < target) {\n                 left++;\n             } else {\n                 right--;\n             }\n         }\n\n         return {};\n     }\n };\n"})})})]}),"\n",(0,s.jsx)(n.h4,{id:"complexity-analysis-2",children:"Complexity Analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Time Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Space Complexity: ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})]}),"\n",(0,s.jsxs)(n.li,{children:["Where ",(0,s.jsx)(n.code,{children:"n"})," is the length of the input array ",(0,s.jsx)(n.code,{children:"nums"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The time complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})})," because we sort the array."]}),"\n",(0,s.jsxs)(n.li,{children:["The space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})," because we store the indices of the elements in the sorted array."]}),"\n",(0,s.jsx)(n.li,{children:"This approach is efficient and is recommended for large inputs."}),"\n",(0,s.jsxs)(n.li,{children:["The total time complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})}),". and the total space complexity is ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Note",type:"tip",children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Which is the best approach? and why?"})}),(0,s.jsxs)(n.p,{children:["The hash table approach is the most efficient among the three approaches. It has a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})})," and is recommended for large inputs. The two-pointer approach also has a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})})," but requires sorting the array, which may not be necessary in some cases. The brute force approach is the least efficient with a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})})," and is not recommended for large inputs."]})]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In this problem, we learned how to find two numbers in an array that add up to a target sum. We explored three different approaches to solve this problem:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The brute force approach with a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsxs)(n.em,{children:["O(n",(0,s.jsx)("sup",{children:"2"}),")"]})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The hash table approach with a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n)"})}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The two-pointer approach with a time complexity of ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"O(n log n)"})}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The hash table approach is the most efficient and is recommended for large inputs."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var s=t(11504);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);