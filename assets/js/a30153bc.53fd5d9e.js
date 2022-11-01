"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),h=o(a),f=r,c=h["".concat(p,".").concat(f)]||h[f]||d[f]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5485:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const i={title:"Name Change Types & Entities",sidebar_position:1},l="Name Change Types & Entities",m={unversionedId:"names-api/name-type-definitions",id:"names-api/name-type-definitions",title:"Name Change Types & Entities",description:"(Enum) Name Change Status",source:"@site/docs/names-api/name-type-definitions.md",sourceDirName:"names-api",slug:"/names-api/name-type-definitions",permalink:"/names-api/name-type-definitions",draft:!1,editUrl:"https://github.com/wise-old-man/wise-old-man/tree/master/docs/docs/names-api/name-type-definitions.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Name Change Types & Entities",sidebar_position:1},sidebar:"sidebar",previous:{title:"Name Changes API",permalink:"/category/name-changes-api"},next:{title:"Name Change Endpoints",permalink:"/names-api/name-endpoints"}},p={},o=[{value:"<code>(Enum)</code> Name Change Status",id:"enum-name-change-status",level:3},{value:"<code>(Object)</code> Name Change",id:"object-name-change",level:3},{value:"<code>(Object)</code> Name Change Data",id:"object-name-change-data",level:3},{value:"<code>(Object)</code> Name Change Details",id:"object-name-change-details",level:3}],s={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"name-change-types--entities"},"Name Change Types & Entities"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"enum-name-change-status"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Enum)")," Name Change Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"'pending', 'approved', 'denied'\n")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-name-change"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Name Change"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's unique ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"playerId"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's parent player ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"oldName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The player\'s "previous" username.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"newName"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'The player\'s "new" username.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/names-api/name-type-definitions#enum-name-change-status"},"NameChangeStatus")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change's status.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"resolvedAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change has been approved/denied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"updatedAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change was last modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"createdAt"),(0,r.kt)("td",{parentName:"tr",align:"left"},"date"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The date at which the name change was submitted.")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-name-change-data"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Name Change Data"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isNewOnHiscores"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the new username is on the OSRS hiscores.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isOldOnHiscores"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the old username is on the OSRS hiscores.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"isNewTracked"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the new username is already being tracked on WOM.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hasNegativeGains"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether there are negative exp/kc/etc gains between the two names.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeDiff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of time (in milliseconds) between the old name's last snapshot, and the new name's first snapshot (or name change submission date, if not tracked.).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hoursDiff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The amount of time (in hours) between the old name's last snapshot, and the new name's first snapshot (or name change submission date, if not tracked.).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ehpDiff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The difference in efficient hours played (EHP) between the old name's last snapshot, and the new name's first snapshot (or name change submission date, if not tracked.).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ehbDiff"),(0,r.kt)("td",{parentName:"tr",align:"left"},"integer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The difference in efficient hours bossed (EHB) between the old name's last snapshot, and the new name's first snapshot (or name change submission date, if not tracked.).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"oldStats"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-snapshot"},"Snapshot")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The old name's last snapshot.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"newStats"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/players-api/player-type-definitions#object-snapshot"},"Snapshot")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The new name's first snapshot. (or current hiscores stats if untracked.)")))),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"object-name-change-details"},(0,r.kt)("inlineCode",{parentName:"h3"},"(Object)")," Name Change Details"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"nameChange"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/names-api/name-type-definitions#object-name-change"},"NameChange")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/names-api/name-type-definitions#object-name-change-data"},"NameChangeData")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The name change data object. Used to review the validity of the name change.")))))}d.isMDXComponent=!0}}]);