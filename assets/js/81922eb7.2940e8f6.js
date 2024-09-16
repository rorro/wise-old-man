"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),f=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=f(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),m=f(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||i;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var f=2;f<i;f++)l[f]=n[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8139:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>f});var a=n(7462),r=(n(7294),n(3905));const i={title:"Efficiency Types & Entities",sidebar_position:1},l="Efficiency Types & Entities",o={unversionedId:"efficiency-api/efficiency-type-definitions",id:"efficiency-api/efficiency-type-definitions",title:"Efficiency Types & Entities",description:"(Enum) Efficiency Algorithm Type",source:"@site/docs/efficiency-api/efficiency-type-definitions.md",sourceDirName:"efficiency-api",slug:"/efficiency-api/efficiency-type-definitions",permalink:"/efficiency-api/efficiency-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/efficiency-api/efficiency-type-definitions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Efficiency Types & Entities",sidebar_position:1},sidebar:"sidebar",previous:{title:"Efficiency API",permalink:"/category/efficiency-api"},next:{title:"Efficiency Endpoints",permalink:"/efficiency-api/efficiency-endpoints"}},p={},f=[{value:"<code>(Enum)</code> Efficiency Algorithm Type",id:"enum-efficiency-algorithm-type",level:3},{value:"<code>(Object)</code> Skill Meta Method",id:"object-skill-meta-method",level:3},{value:"<code>(Object)</code> Bonus",id:"object-bonus",level:3},{value:"<code>(Object)</code> Skill Meta Config",id:"object-skill-meta-config",level:3},{value:"<code>(Object)</code> Boss Meta Config",id:"object-boss-meta-config",level:3}],c={toc:f};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"efficiency-types--entities"},"Efficiency Types & Entities"),(0,r.kt)("h3",{id:"enum-efficiency-algorithm-type"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Efficiency Algorithm Type"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"'main', 'ironman', 'ultimate', 'lvl3', 'f2p', 'f2p_lvl3', 'f2p_ironman', 'f2p_lvl3_ironman'\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-skill-meta-method"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Skill Meta Method"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startExp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"What exp to start calculating EHP from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The exp per hour for the method.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"realRate?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Scaled exp per hour for the method based on bonuses received.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The description of the method.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-bonus"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Bonus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"originSkill"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/global-type-definitions#enum-skill"},"Skill")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The skill that gives the bonus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bonusSkill"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/global-type-definitions#enum-skill"},"Skill")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The skill that receives the bonus.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"startExp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Start exp of origin skill for which bonus skill starts receiving bonus exp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"endExp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"End exp of origin skill for which bonus skill stops receiving bonus exp.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxBonus?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calculated max bonus a bonus skill can receive from origin skill.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"end"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the bonus exp is added at the end when calculating EHP for the bonus skill.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ratio"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ratio of bonus xp given to bonus skill per exp in origin skill.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-skill-meta-config"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Skill Meta Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"skill"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/global-type-definitions#enum-skill"},"Skill")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"methods"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/efficiency-api/efficiency-type-definitions#object-skill-meta-method"},"SkillMetaMethod[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An array of skill methods used to calculate EHP.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"bonuses"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/efficiency-api/efficiency-type-definitions#object-bonus"},"Bonus[]")),(0,r.kt)("td",{parentName:"tr",align:"left"},"A list of bonuses the skill gives to other skills.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-boss-meta-config"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Boss Meta Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"boss"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/global-type-definitions#enum-boss"},"Boss")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The kills per hour for a certain boss.")))))}d.isMDXComponent=!0}}]);