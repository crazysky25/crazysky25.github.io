import{_ as M}from"./plugin-vue_export-helper-DlAUqK2U.js";import{p as v,g as z,c as a,i as g,d as I,a as V,b as R,e as j,f as A,m as B,h as D,j as F,k as H,l as N,r as $,n as p,t as _,s as E,u as Z,o as G,q as P,v as d,w as f,x as O,y as q,z as J,I as K,A as U,B as X,T as Y,C as x,D as T,E as S,F as Q,G as W,H as ee,J as h,K as L,L as te,V as ne,M as se,N as oe}from"./index-C0dOSKbJ.js";const ae=v({border:[Boolean,Number,String]},"border");function le(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{borderClasses:a(()=>{const t=g(e)?e.value:e.border,s=[];if(t===!0||t==="")s.push(`${o}--border`);else if(typeof t=="string"||t===0)for(const l of String(t).split(" "))s.push(`border-${l}`);return s})}}function w(e){return I(()=>{const o=[],n={};if(e.value.background)if(V(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&R(e.value.background)){const t=j(e.value.background);if(t.a==null||t.a===1){const s=A(t);n.color=s,n.caretColor=s}}}else o.push(`bg-${e.value.background}`);return e.value.text&&(V(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):o.push(`text-${e.value.text}`)),{colorClasses:o,colorStyles:n}})}function ue(e,o){const n=a(()=>({text:g(e)?e.value:null})),{colorClasses:t,colorStyles:s}=w(n);return{textColorClasses:t,textColorStyles:s}}function re(e,o){const n=a(()=>({background:g(e)?e.value:null})),{colorClasses:t,colorStyles:s}=w(n);return{backgroundColorClasses:t,backgroundColorStyles:s}}const ie=v({elevation:{type:[Number,String],validator(e){const o=parseInt(e);return!isNaN(o)&&o>=0&&o<=24}}},"elevation");function ce(e){return{elevationClasses:a(()=>{const n=g(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const de=v({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function fe(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{roundedClasses:a(()=>{const t=g(e)?e.value:e.rounded,s=g(e)?e.value:e.tile,l=[];if(t===!0||t==="")l.push(`${o}--rounded`);else if(typeof t=="string"||t===0)for(const r of String(t).split(" "))l.push(`rounded-${r}`);else(s||t===!1)&&l.push("rounded-0");return l})}}const ge=v({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ae(),...B(),...ie(),...D(),...de(),...F({tag:"footer"}),...H()},"VFooter"),ve=N()({name:"VFooter",props:ge(),setup(e,o){let{slots:n}=o;const t=$(),{themeClasses:s}=p(e),{backgroundColorClasses:l,backgroundColorStyles:r}=re(_(e,"color")),{borderClasses:C}=le(e),{elevationClasses:y}=ce(e),{roundedClasses:b}=fe(e),i=E(32),{resizeRef:c}=Z(u=>{u.length&&(i.value=u[0].target.clientHeight)}),m=a(()=>e.height==="auto"?i.value:parseInt(e.height,10));return G(()=>e.app,()=>{const u=O({id:e.name,order:a(()=>parseInt(e.order,10)),position:a(()=>"bottom"),layoutSize:m,elementSize:a(()=>e.height==="auto"?void 0:m.value),active:a(()=>e.app),absolute:_(e,"absolute")});q(()=>{t.value=u.layoutItemStyles.value})}),P(()=>d(e.tag,{ref:c,class:["v-footer",s.value,l.value,C.value,y.value,b.value,e.class],style:[r.value,e.app?t.value:{height:f(e.height)},e.style]},n)),{}}}),me=["x-small","small","default","large","x-large"],Ce=v({size:{type:[String,Number],default:"default"}},"size");function he(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return I(()=>{let n,t;return J(me,e.size)?n=`${o}--size-${e.size}`:e.size&&(t={width:f(e.size),height:f(e.size)}),{sizeClasses:n,sizeStyles:t}})}const ye=v({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:K,...B(),...Ce(),...F({tag:"i"}),...H()},"VIcon"),be=N()({name:"VIcon",props:ye(),setup(e,o){let{attrs:n,slots:t}=o;const s=$(),{themeClasses:l}=p(e),{iconData:r}=U(a(()=>s.value||e.icon)),{sizeClasses:C}=he(e),{textColorClasses:y,textColorStyles:b}=ue(_(e,"color"));return P(()=>{var m,u;const i=(m=t.default)==null?void 0:m.call(t);i&&(s.value=(u=X(i).filter(k=>k.type===Y&&k.children&&typeof k.children=="string")[0])==null?void 0:u.children);const c=!!(n.onClick||n.onClickOnce);return d(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",l.value,C.value,y.value,{"v-icon--clickable":c,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[C.value?void 0:{fontSize:f(e.size),height:f(e.size),width:f(e.size)},b.value,e.style],role:c?"button":void 0,"aria-hidden":!c,tabindex:c?e.disabled?-1:0:void 0},{default:()=>[i]})}),{}}}),ke=["href","title"],_e={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},xe={__name:"AppFooter",setup(e){const o=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:["M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z"],href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:["M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"],href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(n,t)=>(x(),T(ve,{height:"40",app:""},{default:S(()=>[(x(),Q(W,null,ee(o,s=>h("a",{key:s.title,href:s.href,title:s.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[d(be,{icon:s.icon,size:s.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,ke)),64)),h("div",_e,[L(" © 2016-"+te(new Date().getFullYear())+" ",1),t[0]||(t[0]=h("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),t[1]||(t[1]=L(" — ")),t[2]||(t[2]=h("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1))])]),_:1}))}},Se=M(xe,[["__scopeId","data-v-40134937"]]),Le={__name:"default",setup(e){return(o,n)=>{const t=se("router-view"),s=Se;return x(),T(ne,null,{default:S(()=>[d(oe,null,{default:S(()=>[d(t)]),_:1}),d(s)]),_:1})}}};export{Le as default};
