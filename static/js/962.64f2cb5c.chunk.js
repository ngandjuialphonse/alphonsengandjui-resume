"use strict";(self.webpackChunkresume_portal=self.webpackChunkresume_portal||[]).push([[962],{962:(e,t,r)=>{r.r(t),r.d(t,{default:()=>E});var n=r(228),s=r(43),i=r(293);function a(){const e=(0,s.useRef)(!1);return(0,i.E)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var o=r(65);var l=r(674),c=r(930);class d extends s.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u(e){let{children:t,isPresent:r}=e;const n=(0,s.useId)(),i=(0,s.useRef)(null),a=(0,s.useRef)({width:0,height:0,top:0,left:0});return(0,s.useInsertionEffect)((()=>{const{width:e,height:t,top:s,left:o}=a.current;if(r||!i.current||!e||!t)return;i.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${s}px !important;\n            left: ${o}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),s.createElement(d,{isPresent:r,childRef:i,sizeRef:a},s.cloneElement(t,{ref:i}))}const p=e=>{let{children:t,initial:r,isPresent:n,onExitComplete:i,custom:a,presenceAffectsLayout:o,mode:d}=e;const p=(0,c.M)(m),f=(0,s.useId)(),h=(0,s.useMemo)((()=>({id:f,initial:r,isPresent:n,custom:a,onExitComplete:e=>{p.set(e,!0);for(const t of p.values())if(!t)return;i&&i()},register:e=>(p.set(e,!1),()=>p.delete(e))})),o?void 0:[n]);return(0,s.useMemo)((()=>{p.forEach(((e,t)=>p.set(t,!1)))}),[n]),s.useEffect((()=>{!n&&!p.size&&i&&i()}),[n]),"popLayout"===d&&(t=s.createElement(u,{isPresent:n},t)),s.createElement(l.t.Provider,{value:h},t)};function m(){return new Map}var f=r(190);var h=r(129);const x=e=>e.key||"";const g=e=>{let{children:t,custom:r,initial:n=!0,onExitComplete:l,exitBeforeEnter:c,presenceAffectsLayout:d=!0,mode:u="sync"}=e;(0,h.V)(!c,"Replace exitBeforeEnter with mode='wait'");const m=(0,s.useContext)(f.L).forceRender||function(){const e=a(),[t,r]=(0,s.useState)(0),n=(0,s.useCallback)((()=>{e.current&&r(t+1)}),[t]);return[(0,s.useCallback)((()=>o.Gt.postRender(n)),[n]),t]}()[0],g=a(),y=function(e){const t=[];return s.Children.forEach(e,(e=>{(0,s.isValidElement)(e)&&t.push(e)})),t}(t);let v=y;const b=(0,s.useRef)(new Map).current,j=(0,s.useRef)(v),E=(0,s.useRef)(new Map).current,k=(0,s.useRef)(!0);var N;if((0,i.E)((()=>{k.current=!1,function(e,t){e.forEach((e=>{const r=x(e);t.set(r,e)}))}(y,E),j.current=v})),N=()=>{k.current=!0,E.clear(),b.clear()},(0,s.useEffect)((()=>()=>N()),[]),k.current)return s.createElement(s.Fragment,null,v.map((e=>s.createElement(p,{key:x(e),isPresent:!0,initial:!!n&&void 0,presenceAffectsLayout:d,mode:u},e))));v=[...v];const w=j.current.map(x),C=y.map(x),P=w.length;for(let s=0;s<P;s++){const e=w[s];-1!==C.indexOf(e)||b.has(e)||b.set(e,void 0)}return"wait"===u&&b.size&&(v=[]),b.forEach(((e,t)=>{if(-1!==C.indexOf(t))return;const n=E.get(t);if(!n)return;const i=w.indexOf(t);let a=e;if(!a){const e=()=>{b.delete(t);const e=Array.from(E.keys()).filter((e=>!C.includes(e)));if(e.forEach((e=>E.delete(e))),j.current=y.filter((r=>{const n=x(r);return n===t||e.includes(n)})),!b.size){if(!1===g.current)return;m(),l&&l()}};a=s.createElement(p,{key:x(n),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:d,mode:u},n),b.set(t,a)}v.splice(i,0,a)})),v=v.map((e=>{const t=e.key;return b.has(t)?e:s.createElement(p,{key:x(e),isPresent:!0,presenceAffectsLayout:d,mode:u},e)})),s.createElement(s.Fragment,null,b.size?v:v.map((e=>(0,s.cloneElement)(e))))};var y=r(369),v=r(579);const b=[{title:"CI/CD Pipeline Automation",description:"Automated deployment pipeline using Jenkins, Docker, and Kubernetes for microservices architecture.",image:"/projects/cicd.jpg",technologies:["Jenkins","Docker","Kubernetes","Git"],githubUrl:"https://github.com/yourusername/cicd-pipeline",category:"devops"},{title:"Cloud Infrastructure",description:"Multi-cloud infrastructure management using Terraform and Ansible.",image:"/projects/cloud.jpg",technologies:["AWS","Azure","Terraform","Ansible"],githubUrl:"https://github.com/yourusername/cloud-infra",category:"cloud"}],j=[{id:"all",label:"All"},{id:"devops",label:"DevOps"},{id:"cloud",label:"Cloud"},{id:"automation",label:"Automation"}],E=()=>{const[e,t]=(0,s.useState)("all"),[r,i]=(0,s.useState)(null),a="all"===e?b:b.filter((t=>t.category===e));return(0,v.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1},className:"min-h-screen py-16 px-4 sm:px-6 lg:px-8",children:(0,v.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,v.jsx)(n.P.h1,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},className:"text-4xl md:text-5xl font-bold text-center mb-8",children:"Featured Projects"}),(0,v.jsx)(n.P.div,{initial:{y:20,opacity:0},animate:{y:0,opacity:1},className:"flex justify-center gap-4 mb-12",children:j.map((r=>(0,v.jsx)("button",{onClick:()=>t(r.id),className:"px-4 py-2 rounded-full transition-all "+(e===r.id?"bg-secondary text-primary":"bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r.label},r.id)))}),(0,v.jsx)(n.P.div,{layout:!0,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:(0,v.jsx)(g,{children:a.map(((e,t)=>(0,v.jsx)(n.P.div,{layout:!0,initial:{opacity:0,y:50},animate:{opacity:1,y:0},exit:{opacity:0,y:50},transition:{delay:.1*t},className:"relative group",onHoverStart:()=>i(e.title),onHoverEnd:()=>i(null),children:(0,v.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden",children:[(0,v.jsxs)("div",{className:"relative aspect-video",children:[(0,v.jsx)("img",{src:e.image,alt:e.title,className:"object-cover w-full h-full"}),(0,v.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"})]}),(0,v.jsxs)("div",{className:"p-6",children:[(0,v.jsx)("h3",{className:"text-xl font-bold mb-2",children:e.title}),(0,v.jsx)("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:e.description}),(0,v.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.technologies.map((e=>(0,v.jsx)("span",{className:"px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm",children:e},e)))}),(0,v.jsxs)("div",{className:"flex gap-4",children:[(0,v.jsxs)("a",{href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors",children:[(0,v.jsx)(y.hL4,{className:"w-5 h-5"}),(0,v.jsx)("span",{children:"Code"})]}),e.liveUrl&&(0,v.jsxs)("a",{href:e.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary transition-colors",children:[(0,v.jsx)(y.EQc,{className:"w-5 h-5"}),(0,v.jsx)("span",{children:"Live Demo"})]})]})]})]})},e.title)))})})]})})}}}]);
//# sourceMappingURL=962.64f2cb5c.chunk.js.map