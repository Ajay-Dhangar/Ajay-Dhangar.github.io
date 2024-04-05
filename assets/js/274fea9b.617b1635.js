"use strict";(self.webpackChunkcode_harbor_hub=self.webpackChunkcode_harbor_hub||[]).push([[72098],{78432:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(17624),a=t(4552);const o={id:"production-build",title:"Creating a Production Build in Create React App",sidebar_label:"Production Build",sidebar_position:12,tags:["react","create react app","production build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build"],keywords:["create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build"],description:"Learn how to create a production build for your React app using Create React App. Optimize your code, reduce file sizes, and enhance performance for your users with this enchanting guide!"},n=void 0,c={id:"react/building-your-app/production-build",title:"Creating a Production Build in Create React App",description:"Learn how to create a production build for your React app using Create React App. Optimize your code, reduce file sizes, and enhance performance for your users with this enchanting guide!",source:"@site/docs/react/building-your-app/production-build.md",sourceDirName:"react/building-your-app",slug:"/react/building-your-app/production-build",permalink:"/code-harbor-hub/docs/react/building-your-app/production-build",draft:!1,unlisted:!1,editUrl:"https://github.com/Ajay-Dhangar/code-harbor-hub/edit/main/docs/react/building-your-app/production-build.md",tags:[{label:"react",permalink:"/code-harbor-hub/docs/tags/react"},{label:"create react app",permalink:"/code-harbor-hub/docs/tags/create-react-app"},{label:"production build",permalink:"/code-harbor-hub/docs/tags/production-build"},{label:"react build",permalink:"/code-harbor-hub/docs/tags/react-build"},{label:"create react app production build",permalink:"/code-harbor-hub/docs/tags/create-react-app-production-build"},{label:"react production build",permalink:"/code-harbor-hub/docs/tags/react-production-build"},{label:"create react app build",permalink:"/code-harbor-hub/docs/tags/create-react-app-build"}],version:"current",lastUpdatedBy:"ajay-dhangar",lastUpdatedAt:1710610499e3,sidebarPosition:12,frontMatter:{id:"production-build",title:"Creating a Production Build in Create React App",sidebar_label:"Production Build",sidebar_position:12,tags:["react","create react app","production build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build"],keywords:["create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build","create react app production build","react production build","create react app build","react build","production build"],description:"Learn how to create a production build for your React app using Create React App. Optimize your code, reduce file sizes, and enhance performance for your users with this enchanting guide!"},sidebar:"react",previous:{title:"Measuring Performance",permalink:"/code-harbor-hub/docs/react/building-your-app/measuring-performance"},next:{title:"Testing",permalink:"/code-harbor-hub/docs/category/testing-1"}},d={},l=[{value:"Understanding Production Builds",id:"understanding-production-builds",level:2},{value:"\ud83d\udcc1 Static File Caching \ud83d\ude80",id:"-static-file-caching-",level:3},{value:"\ud83c\udfad Profiling: Peek Behind the Curtain!",id:"-profiling-peek-behind-the-curtain",level:3},{value:"The Production Build Process",id:"the-production-build-process",level:2},{value:"Step 1: Navigate to Your App Directory",id:"step-1-navigate-to-your-app-directory",level:3},{value:"Step 2: Cast the Spell of Optimization",id:"step-2-cast-the-spell-of-optimization",level:3},{value:"Step 3: Unveil the Artifacts",id:"step-3-unveil-the-artifacts",level:3},{value:"Step 4: Embrace Static File Caching",id:"step-4-embrace-static-file-caching",level:3},{value:"Step 5: Profiling Your App (Optional)",id:"step-5-profiling-your-app-optional",level:3},{value:"Conclusion",id:"conclusion",level:2}];function s(e){const i={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Welcome, aspiring developers, to the magical world of React production builds! In this enchanting guide, we'll walk you through the process of creating a production build for your Create React App. Brace yourselves for optimized code, faster load times, and an immersive user experience!"}),"\n",(0,r.jsx)(i.h2,{id:"understanding-production-builds",children:"Understanding Production Builds"}),"\n",(0,r.jsx)(i.p,{children:"Before we set sail on our quest, let's unravel the mystery of production builds. During development, we often use a special mode that helps with debugging and hot-reloading. But when it's time to release our app into the wild, we want it to be nimble and performant. Enter the production build!"}),"\n",(0,r.jsx)(i.p,{children:"A production build is the polished and optimized version of your React app. It reduces file sizes, implements caching techniques, and enhances performance for your end-users. Imagine your app transforming from a budding sapling to a majestic oak tree\u2014ready to stand tall in the digital forest!"}),"\n",(0,r.jsx)(i.h3,{id:"-static-file-caching-",children:"\ud83d\udcc1 Static File Caching \ud83d\ude80"}),"\n",(0,r.jsxs)(i.p,{children:["When you create a production build in Create React App, a fascinating magic happens! Each file inside the ",(0,r.jsx)(i.code,{children:"build/static"})," directory receives a unique hash \ud83e\uddd9\u200d\u2642\ufe0f. It's like a secret spell that's generated based on the file's contents \ud83d\udcdd. This enchanting hash allows us to use aggressive caching techniques \u2728. Imagine it as a magical seal that prevents the browser from re-downloading your assets if nothing has changed \ud83d\udeab\ud83d\udd04."]}),"\n",(0,r.jsxs)(i.p,{children:["For instance, let's say your React app has a magical image \u2728\ud83c\udf1f that rarely changes, like your logo. During the first build, the image gets a unique hash in its filename, like ",(0,r.jsx)(i.code,{children:"logo.abc123.png"})," \ud83c\udf87. When you deploy your app, the browser happily caches this logo with its magical seal for a year \ud83d\uddd3\ufe0f."]}),"\n",(0,r.jsxs)(i.p,{children:["Now, imagine you decide to update the image slightly. No worries! During the subsequent build, the contents of the image change, and voil\xe0, a new unique hash is born \ud83c\udf89. The updated image now has a filename like ",(0,r.jsx)(i.code,{children:"logo.xyz456.png"}),". Since the filename hash has changed, the browser knows it's time to download the new version with excitement \ud83c\udf8a."]}),"\n",(0,r.jsxs)(i.p,{children:["To deliver the ultimate performance to your users, you can use the Cache-Control header \ud83d\udcdc. Think of it as a scroll of command that controls the caching duration. For example, you can set ",(0,r.jsx)(i.code,{children:"Cache-Control: max-age=31536000"})," for your ",(0,r.jsx)(i.code,{children:"build/static"})," assets, like your JavaScript and CSS files. This delightful spell ensures that your user's browser will cache these files for a whole year \ud83d\uddd3\ufe0f."]}),"\n",(0,r.jsxs)(i.p,{children:["Now, imagine you have a spellbinding HTML file, your ",(0,r.jsx)(i.code,{children:"index.html"}),", which might change more often than the static assets. In this case, you can set ",(0,r.jsx)(i.code,{children:"Cache-Control: no-cache"})," for your ",(0,r.jsx)(i.code,{children:"index.html"}),". This clever trick ensures the browser will always check for an updated version of your HTML spellbook whenever your app is revisited \ud83d\udcd6."]}),"\n",(0,r.jsx)(i.p,{children:"To sum it all up, using these caching spells wisely ensures your users will experience the magic of your app with lightning-fast loading times and a delightful user experience! \ud83c\udf1f\u26a1"}),"\n",(0,r.jsx)(i.h3,{id:"-profiling-peek-behind-the-curtain",children:"\ud83c\udfad Profiling: Peek Behind the Curtain!"}),"\n",(0,r.jsx)(i.p,{children:"In the magical land of React, performance profiling is like gazing into a crystal ball, revealing the secrets of your app's performance. \ud83c\udf1f"}),"\n",(0,r.jsxs)(i.p,{children:["In development mode (v16.5+), ReactDOM automatically supports profiling without any special incantations. However, in production mode, profiling remains hidden, adding just a touch of extra magic. To unveil its powers, you must opt-in using the ",(0,r.jsx)(i.code,{children:"--profile"})," flag. \ud83e\uddd9\u200d\u2642\ufe0f"]}),"\n",(0,r.jsx)(i.p,{children:"Imagine you're preparing for the grand performance of your app, and you want to ensure it shines like a dazzling star. To enable profiling in the production build, wave your wand (terminal) and chant:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npm run build -- --profile\n"})}),"\n",(0,r.jsx)(i.p,{children:"Or if you prefer yarn magic:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"yarn build --profile\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Now, behold the wondrous React DevTools! \ud83c\udf0c They hold the key to understanding your app's performance like never before. Consult the ",(0,r.jsx)(i.a,{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler",children:"React docs"})," to master the art of using the DevTools Profiler. It's like learning to control the elements! \ud83d\udd25\ud83d\udca8\ud83d\udca7\ud83c\udf2a"]}),"\n",(0,r.jsx)(i.p,{children:"Just as a talented performer perfects their craft by studying their act, you, too, can dive into your app's performance to discover hidden bottlenecks and optimize its speed and efficiency. \ud83c\udf89"}),"\n",(0,r.jsx)(i.h2,{id:"the-production-build-process",children:"The Production Build Process"}),"\n",(0,r.jsxs)(i.p,{children:["To create a production build in Create React App, you'll need Node.js and npm (Node Package Manager) installed on your computer. If you don't have them already, head to ",(0,r.jsx)(i.a,{href:"https://nodejs.org",children:"https://nodejs.org"})," and follow the installation instructions."]}),"\n",(0,r.jsx)(i.p,{children:"Now, let's dive into the steps to create a magical production build:"}),"\n",(0,r.jsx)(i.h3,{id:"step-1-navigate-to-your-app-directory",children:"Step 1: Navigate to Your App Directory"}),"\n",(0,r.jsx)(i.p,{children:"Open your favorite terminal or command prompt and navigate to your React app's root directory. If you're not sure where it is, run the following command to create a new React app:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npx create-react-app my-awesome-app\ncd my-awesome-app\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Replace ",(0,r.jsx)(i.code,{children:"my-awesome-app"})," with your desired app name."]}),"\n",(0,r.jsx)(i.h3,{id:"step-2-cast-the-spell-of-optimization",children:"Step 2: Cast the Spell of Optimization"}),"\n",(0,r.jsx)(i.p,{children:"With your wand (terminal) in hand, it's time to unleash the power of optimization upon your app. To create the production build, run the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsxs)(i.p,{children:["This command works its magic and conjures a ",(0,r.jsx)(i.code,{children:"build"})," directory containing your production-ready app."]}),"\n",(0,r.jsx)(i.h3,{id:"step-3-unveil-the-artifacts",children:"Step 3: Unveil the Artifacts"}),"\n",(0,r.jsxs)(i.p,{children:["Behold, the fruits of your labor are revealed within the ",(0,r.jsx)(i.code,{children:"build"})," directory! Inside the ",(0,r.jsx)(i.code,{children:"build/static"})," folder, you'll find the precious JavaScript and CSS files. Each filename will be appended with a unique hash, like a secret spell, to enable ",(0,r.jsx)(i.a,{href:"#-static-file-caching-",children:"long term caching techniques"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Additionally, you'll encounter several ",(0,r.jsx)(i.code,{children:".js"})," files, also known as ",(0,r.jsx)(i.em,{children:"chunks"}),", within the ",(0,r.jsx)(i.code,{children:"build/static/js"})," directory:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"main.[hash].chunk.js"}),": This houses your application code, including your beloved ",(0,r.jsx)(i.code,{children:"App.js"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"[number].[hash].chunk.js"}),": These files contain either ",(0,r.jsx)(i.em,{children:"vendor"})," code or ",(0,r.jsx)(i.a,{href:"/code-harbor-hub/docs/react/styles-and-assets/code-splitting",children:"code splitting chunks"}),". ",(0,r.jsx)(i.em,{children:"Vendor"})," code includes modules imported from ",(0,r.jsx)(i.code,{children:"node_modules"}),". Separating ",(0,r.jsx)(i.em,{children:"vendor"})," and ",(0,r.jsx)(i.em,{children:"application"})," code allows for better caching and improved loading performance."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"runtime-main.[hash].js"}),": This small chunk of ",(0,r.jsx)(i.a,{href:"https://webpack.js.org/configuration/optimization/#optimization-runtimechunk",children:"webpack runtime"})," logic is used to load and run your application. By default, it's embedded in your ",(0,r.jsx)(i.code,{children:"build/index.html"})," file to save a network request."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"step-4-embrace-static-file-caching",children:"Step 4: Embrace Static File Caching"}),"\n",(0,r.jsxs)(i.p,{children:["In the realm of production builds, caching is a powerful ally for performance. Each file inside ",(0,r.jsx)(i.code,{children:"build/static"})," has a unique hash based on its contents. This enables ",(0,r.jsx)(i.a,{href:"https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#invalidating_and_updating_cached_responses",children:"aggressive caching techniques"}),", preventing unnecessary re-downloads when file contents haven't changed."]}),"\n",(0,r.jsxs)(i.p,{children:["To optimize caching, specify a ",(0,r.jsx)(i.code,{children:"Cache-Control"})," header for both ",(0,r.jsx)(i.code,{children:"index.html"})," and the files within ",(0,r.jsx)(i.code,{children:"build/static"}),". This header controls the caching duration for the browser and Content Delivery Networks (CDNs). Here's an example of setting ",(0,r.jsx)(i.code,{children:"Cache-Control"})," headers:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-html",children:'\x3c!-- index.html --\x3e\n<meta http-equiv="Cache-Control" content="max-age=31536000">\n\n\x3c!-- All files in build/static --\x3e\n<FilesMatch "\\.(js|css)$">\n  Header set Cache-Control "max-age=31536000"\n</FilesMatch>\n'})}),"\n",(0,r.jsx)(i.p,{children:"With these caching spells in place, your app's static assets will be cached for a year, and your users will enjoy a delightful experience."}),"\n",(0,r.jsx)(i.h3,{id:"step-5-profiling-your-app-optional",children:"Step 5: Profiling Your App (Optional)"}),"\n",(0,r.jsxs)(i.p,{children:["For those who wish to dive deeper into the magical arts of performance optimization, React offers profiling in development mode (v16.5+). In production mode, profiling is opt-in, providing insights into your app's performance. To enable profiling, add the ",(0,r.jsx)(i.code,{children:"--profile"})," flag when running the build command:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"npm run build -- --profile\n"})}),"\n",(0,r.jsxs)(i.p,{children:["With profiling activated, you can leverage the React DevTools to delve into the mysteries of your app's performance. For more details, visit the ",(0,r.jsx)(i.a,{href:"https://reactjs.org/docs/optimizing-performance.html#profiling-components-with-the-devtools-profiler",children:"React Docs"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(i.p,{children:"Congratulations, young wizards! You've successfully mastered the art of creating a production build for your React app. Now, your code is optimized, your performance is enchanting, and your users will be spellbound by the experience. As you embark on your coding adventures, remember to cast the spells of optimization and caching to create truly magical web applications!"}),"\n",(0,r.jsx)(i.p,{children:"May your code be bug-free, your designs be captivating, and your journey be filled with awe-inspiring creations. Happy coding!"})]})}function u(e={}){const{wrapper:i}={...(0,a.M)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},4552:(e,i,t)=>{t.d(i,{I:()=>c,M:()=>n});var r=t(11504);const a={},o=r.createContext(a);function n(e){const i=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(o.Provider,{value:i},e.children)}}}]);