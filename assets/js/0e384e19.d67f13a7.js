"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,k=m["".concat(l,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={slug:"/",sidebar_position:1},o="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Welcome to the documentation page of the Wise Old Man REST API (v2). This API is Open Source and is in continuous development.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"sidebar",next:{title:"Global Types & Entities",permalink:"/global-type-definitions"}},l={},u=[{value:"Useful Links",id:"useful-links",level:2},{value:"About the API",id:"about-the-api",level:2},{value:"3rd party libraries",id:"3rd-party-libraries",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Base URL",id:"base-url",level:3},{value:"Rate Limits &amp; API Keys",id:"rate-limits--api-keys",level:3},{value:"Dates (ISO8601)",id:"dates-iso8601",level:2},{value:"Status Codes",id:"status-codes",level:2},{value:"Pagination",id:"pagination",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Welcome to the documentation page of the Wise Old Man REST API (v2). This API is Open Source and is in continuous development."),(0,r.kt)("h2",{id:"useful-links"},"Useful Links"),(0,r.kt)("p",null,"You can contribute to this API on GitHub: ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wise-old-man/wise-old-man"},"https://github.com/wise-old-man/wise-old-man")),(0,r.kt)("p",null,"Or reach out to us on our Discord: ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://wiseoldman.net/discord"},"https://wiseoldman.net/discord")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Do you have a suggestion or a bug to report?")," Please use GitHub issues for that, through the link below ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wise-old-man/wise-old-man/issues"},"https://github.com/wise-old-man/wise-old-man/issues")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are interested in using our API for your apps, consider saying hi on our discord so we can assign you a ",(0,r.kt)("inlineCode",{parentName:"p"},"API Consumer")," role which\nwe use to ping users when something in the API has changed."),(0,r.kt)("p",{parentName:"admonition"},"Also consider requesting an ",(0,r.kt)("strong",{parentName:"p"},"API Key")," for your app, more on that ",(0,r.kt)("a",{parentName:"p",href:"/#rate-limits--api-keys"},"later on this page"),".")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"about-the-api"},"About the API"),(0,r.kt)("p",null,"Our REST API uses standard HTTP response codes and verbs, and mostly supports JSON-encoded responses, with a few exceptions for endpoints that return CSV, that are meant to be consumed by applications like Google Sheets and Microsoft Excel."),(0,r.kt)("p",null,"This documentation website will provide examples for each request using ",(0,r.kt)("strong",{parentName:"p"},"cURL")," and our own ",(0,r.kt)("strong",{parentName:"p"},"JavaScript/TypeScript")," client library (highly recommended if you are using any of those languages). There could be more client libraries built for other languages in the future, but it is not our main priority right now. Please do contact us if you are interested in developing one for any other languages."),(0,r.kt)("h3",{id:"3rd-party-libraries"},"3rd party libraries"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Library"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"),(0,r.kt)("th",{parentName:"tr",align:null},"Maintainer"),(0,r.kt)("th",{parentName:"tr",align:null},"Links"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wom.py")),(0,r.kt)("td",{parentName:"tr",align:null},"Python3"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@jonxslays")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://jonxslays.github.io/wom.py/stable"},"Docs")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/jonxslays/wom.py"},"Repo"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Little to no support")," may be provided for 3rd party libraries in the Wise Old Man discord server.\nIf you are having issues or have questions, feel free to ask - but understand you may need to inquire with the maintainer of the library, or on the github repository directly.")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"base-url"},"Base URL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.wiseoldman.net/v2\n")),(0,r.kt)("p",null,"All routes described in this documentation website are meant to be used with this base URL as a prefix."),(0,r.kt)("p",null,"Example: ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"/competitions")," should be accessed as ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.wiseoldman.net/v2/competitions")),(0,r.kt)("h3",{id:"rate-limits--api-keys"},"Rate Limits & API Keys"),(0,r.kt)("p",null,"There is a maximum of 100 requests per 5 minutes, however, this can be increased (to 500) if you register for an ",(0,r.kt)("strong",{parentName:"p"},"API key"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API Keys")," help us keep track of who is actually using our API, and what resources they need the most, and can be really helpful for us to know how to contact our API consumers."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If you want an API key, or just want to be notified of API changes, just send us a message on ",(0,r.kt)("a",{parentName:"strong",href:"https://wiseoldman.net/discord"},"our discord")," and we'll help you.")),(0,r.kt)("p",null,"Alternatively, you can add a user agent header to your requests, which would help us identify who you are, however, this does not increase API rate limits."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adding API Key and User Agent to cURL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X GET "https://api.wiseoldman.net/v2/groups" \\\n  -H "x-api-key: *your_key_here*" \\\n  -A "*your_discord_name_here*"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Adding API Key and User Agent using our JS/TS Library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { WOMClient } = require('@wise-old-man/utils');\n\nconst client = new WOMClient({\n  apiKey: '*your_key_here',\n  userAgent: '*your_discord_name_here*'\n});\n\n// Use this client to send requests\nconst groups = await client.groups.searchGroups();\n")),(0,r.kt)("h2",{id:"dates-iso8601"},"Dates (ISO8601)"),(0,r.kt)("p",null,"Our API utilizes the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO8601")," format for most Date/Times returned in our models."),(0,r.kt)("h2",{id:"status-codes"},"Status Codes"),(0,r.kt)("p",null,"Our API uses conventional HTTP response codes to indicate the success or failure status of an API request."),(0,r.kt)("p",null,"Success Statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"200")," - Success."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"201")," - Success. New resource created")),(0,r.kt)("p",null,"Error Statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"400")," - Bad Request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"403")," - Forbidden."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"404")," - Not Found."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"429")," - Too Many Requests. (Usually triggered by API rate limits or too-frequent player updates)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"500")," - Server Error.")),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Some API endpoints support pagination in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," query parameters. This will be indicated in the endpoint description."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"offset"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"---")))),(0,r.kt)("p",null,"Examples"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using pagination in cURL request")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// Returns the top 20-40 groups\ncurl -X GET "https://api.wiseoldman.net/v2/groups?offset=20&limit=20"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using pagination through our JS/TS Library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const { WOMClient } = require('@wise-old-man/utils');\n\nconst client = new WOMClient();\n\n// Returns the top 20-40 groups\nconst groups = await client.groups.searchGroups('', { limit: 20, offset: 20 });\n")))}d.isMDXComponent=!0}}]);