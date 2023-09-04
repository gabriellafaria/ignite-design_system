import{R as g,r as $}from"./index-902e4630.js";import{$ as me,a as X,_ as q,b as We,c as Le,d as Me,e as Ae,f as ae,g as Te,h as _e}from"./index-883097aa.js";import{j as z}from"./jsx-runtime-0741ab7f.js";var x="colors",w="sizes",c="space",he={gap:c,gridGap:c,columnGap:c,gridColumnGap:c,rowGap:c,gridRowGap:c,inset:c,insetBlock:c,insetBlockEnd:c,insetBlockStart:c,insetInline:c,insetInlineEnd:c,insetInlineStart:c,margin:c,marginTop:c,marginRight:c,marginBottom:c,marginLeft:c,marginBlock:c,marginBlockEnd:c,marginBlockStart:c,marginInline:c,marginInlineEnd:c,marginInlineStart:c,padding:c,paddingTop:c,paddingRight:c,paddingBottom:c,paddingLeft:c,paddingBlock:c,paddingBlockEnd:c,paddingBlockStart:c,paddingInline:c,paddingInlineEnd:c,paddingInlineStart:c,top:c,right:c,bottom:c,left:c,scrollMargin:c,scrollMarginTop:c,scrollMarginRight:c,scrollMarginBottom:c,scrollMarginLeft:c,scrollMarginX:c,scrollMarginY:c,scrollMarginBlock:c,scrollMarginBlockEnd:c,scrollMarginBlockStart:c,scrollMarginInline:c,scrollMarginInlineEnd:c,scrollMarginInlineStart:c,scrollPadding:c,scrollPaddingTop:c,scrollPaddingRight:c,scrollPaddingBottom:c,scrollPaddingLeft:c,scrollPaddingX:c,scrollPaddingY:c,scrollPaddingBlock:c,scrollPaddingBlockEnd:c,scrollPaddingBlockStart:c,scrollPaddingInline:c,scrollPaddingInlineEnd:c,scrollPaddingInlineStart:c,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Oe=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const o=(i=>JSON.stringify(i,Oe))(t);return o in e?e[o]:e[o]=r(t,...n)}},M=Symbol.for("sxs.internal"),ne=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),le=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Fe}=Object.prototype,re=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),Ne=/\s+(?![^()]*\))/,F=e=>t=>e(...typeof t=="string"?String(t).split(Ne):[t]),se={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:F((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:F((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:F((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:F((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:F((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:F((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},te=/([\d.]+)([^]*)/,He=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(o)?`:is(${n})`:n):n+" "+o)),r),[]):t,De=(e,t)=>e in Ve&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,o,i)=>n+(o==="stretch"?`-moz-available${i};${re(e)}:${n}-webkit-fill-available`:`-moz-fit-content${i};${re(e)}:${n}fit-content`)+i):String(t),Ve={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},W=e=>e?e+"-":"",be=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,o,i,d,l)=>d=="$"==!!i?n:(o||d=="--"?"calc(":"")+"var(--"+(d==="$"?W(t)+(l.includes("$")?"":W(r))+l.replace(/\$/g,"-"):l)+")"+(o||d=="--"?"*"+(o||"")+(i||"1")+")":"")),Ge=/\s*,\s*(?![^()]*\))/,Ue=Object.prototype.toString,N=(e,t,r,n,o)=>{let i,d,l;const a=(f,m,u)=>{let s,p;const b=y=>{for(s in y){const S=s.charCodeAt(0)===64,C=S&&Array.isArray(y[s])?y[s]:[y[s]];for(p of C){const E=/[A-Z]/.test(h=s)?h:h.replace(/-[^]/g,B=>B[1].toUpperCase()),V=typeof p=="object"&&p&&p.toString===Ue&&(!n.utils[E]||!m.length);if(E in n.utils&&!V){const B=n.utils[E];if(B!==d){d=B,b(B(p)),d=null;continue}}else if(E in se){const B=se[E];if(B!==l){l=B,b(B(p)),l=null;continue}}if(S&&(k=s.slice(1)in n.media?"@media "+n.media[s.slice(1)]:s,s=k.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(B,I,j,L,R,P)=>{const O=te.test(I),K=.0625*(O?-1:1),[Z,ie]=O?[L,I]:[I,L];return"("+(j[0]==="="?"":j[0]===">"===O?"max-":"min-")+Z+":"+(j[0]!=="="&&j.length===1?ie.replace(te,(Pe,Q,ee)=>Number(Q)+K*(j===">"?1:-1)+ee):ie)+(R?") and ("+(R[0]===">"?"min-":"max-")+Z+":"+(R.length===1?P.replace(te,(Pe,Q,ee)=>Number(Q)+K*(R===">"?-1:1)+ee):P):"")+")"})),V){const B=S?u.concat(s):[...u],I=S?[...m]:He(m,s.split(Ge));i!==void 0&&o(ce(...i)),i=void 0,a(p,I,B)}else i===void 0&&(i=[[],m,u]),s=S||s.charCodeAt(0)!==36?s:`--${W(n.prefix)}${s.slice(1).replace(/\$/g,"-")}`,p=V?p:typeof p=="number"?p&&E in Ye?String(p)+"px":String(p):be(De(E,p??""),n.prefix,n.themeMap[E]),i[0].push(`${S?`${s} `:`${re(s)}:`}${p}`)}}var k,h};b(f),i!==void 0&&o(ce(...i)),i=void 0};a(e,t,r)},ce=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,Ye={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},de=e=>String.fromCharCode(e+(e>25?39:97)),A=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=de(r%52)+n;return de(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),U=["themed","global","styled","onevar","resonevar","allvar","inline"],qe=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Ke=e=>{let t;const r=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,d)=>{const{cssText:l}=i;let a="";if(l.startsWith("--sxs"))return"";if(o[d-1]&&(a=o[d-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const f in t.rules)if(t.rules[f].group===i)return`--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${l}`;return i.cssRules.length?`${a}${l}`:""}return l}).join("")},n=()=>{if(t){const{rules:l,sheet:a}=t;if(!a.deleteRule){for(;Object(Object(a.cssRules)[0]).type===3;)a.cssRules.splice(0,1);a.cssRules=[]}for(const f in l)delete l[f]}const o=Object(e).styleSheets||[];for(const l of o)if(qe(l)){for(let a=0,f=l.cssRules;f[a];++a){const m=Object(f[a]);if(m.type!==1)continue;const u=Object(f[a+1]);if(u.type!==4)continue;++a;const{cssText:s}=m;if(!s.startsWith("--sxs"))continue;const p=s.slice(14,-3).trim().split(/\s+/),b=U[p[0]];b&&(t||(t={sheet:l,reset:n,rules:{},toString:r}),t.rules[b]={group:u,index:a,cache:new Set(p)})}if(t)break}if(!t){const l=(a,f)=>({type:f,cssRules:[],insertRule(m,u){this.cssRules.splice(u,0,l(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return a==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:a}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:l("","text/css"),rules:{},reset:n,toString:r}}const{sheet:i,rules:d}=t;for(let l=U.length-1;l>=0;--l){const a=U[l];if(!d[a]){const f=U[l+1],m=d[f]?d[f].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${l}}`,m),d[a]={group:i.cssRules[m+1],index:m,cache:new Set([l])}}Ze(d[a])}};return n(),t},Ze=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},G=Symbol(),Je=D(),ue=(e,t)=>Je(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const o of r)if(o!=null)if(o[M]){n.type==null&&(n.type=o[M].type);for(const i of o[M].composers)n.composers.add(i)}else o.constructor!==Object||o.$$typeof?n.type==null&&(n.type=o):n.composers.add(Xe(o,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),Qe(e,n,t)}),Xe=({variants:e,compoundVariants:t,defaultVariants:r,...n},o)=>{const i=`${W(o.prefix)}c-${A(n)}`,d=[],l=[],a=Object.create(null),f=[];for(const s in r)a[s]=String(r[s]);if(typeof e=="object"&&e)for(const s in e){m=a,u=s,Fe.call(m,u)||(a[s]="undefined");const p=e[s];for(const b in p){const y={[s]:String(b)};String(b)==="undefined"&&f.push(s);const k=p[b],h=[y,k,!le(k)];d.push(h)}}var m,u;if(typeof t=="object"&&t)for(const s of t){let{css:p,...b}=s;p=typeof p=="object"&&p||{};for(const k in b)b[k]=String(b[k]);const y=[b,p,!le(p)];l.push(y)}return[i,n,d,l,a,f]},Qe=(e,t,r)=>{const[n,o,i,d]=et(t.composers),l=typeof t.type=="function"||t.type.$$typeof?(u=>{function s(){for(let p=0;p<s[G].length;p++){const[b,y]=s[G][p];u.rules[b].apply(y)}return s[G]=[],null}return s[G]=[],s.rules={},U.forEach(p=>s.rules[p]={apply:b=>s[G].push([p,b])}),s})(r):null,a=(l||r).rules,f=`.${n}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=u=>{u=typeof u=="object"&&u||tt;const{css:s,...p}=u,b={};for(const h in i)if(delete p[h],h in u){let S=u[h];typeof S=="object"&&S?b[h]={"@initial":i[h],...S}:(S=String(S),b[h]=S!=="undefined"||d.has(h)?S:i[h])}else b[h]=i[h];const y=new Set([...o]);for(const[h,S,C,E]of t.composers){r.rules.styled.cache.has(h)||(r.rules.styled.cache.add(h),N(S,[`.${h}`],[],e,I=>{a.styled.apply(I)}));const V=ge(C,b,e.media),B=ge(E,b,e.media,!0);for(const I of V)if(I!==void 0)for(const[j,L,R]of I){const P=`${h}-${A(L)}-${j}`;y.add(P);const O=(R?r.rules.resonevar:r.rules.onevar).cache,K=R?a.resonevar:a.onevar;O.has(P)||(O.add(P),N(L,[`.${P}`],[],e,Z=>{K.apply(Z)}))}for(const I of B)if(I!==void 0)for(const[j,L]of I){const R=`${h}-${A(L)}-${j}`;y.add(R),r.rules.allvar.cache.has(R)||(r.rules.allvar.cache.add(R),N(L,[`.${R}`],[],e,P=>{a.allvar.apply(P)}))}}if(typeof s=="object"&&s){const h=`${n}-i${A(s)}-css`;y.add(h),r.rules.inline.cache.has(h)||(r.rules.inline.cache.add(h),N(s,[`.${h}`],[],e,S=>{a.inline.apply(S)}))}for(const h of String(u.className||"").trim().split(/\s+/))h&&y.add(h);const k=p.className=[...y].join(" ");return{type:t.type,className:k,selector:f,props:p,toString:()=>k,deferredInjector:l}};return ne(m,{className:n,selector:f,[M]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},et=e=>{let t="";const r=[],n={},o=[];for(const[i,,,,d,l]of e){t===""&&(t=i),r.push(i),o.push(...l);for(const a in d){const f=d[a];(n[a]===void 0||f!=="undefined"||l.includes(f))&&(n[a]=f)}}return[t,r,n,new Set(o)]},ge=(e,t,r,n)=>{const o=[];e:for(let[i,d,l]of e){if(l)continue;let a,f=0,m=!1;for(a in i){const u=i[a];let s=t[a];if(s!==u){if(typeof s!="object"||!s)continue e;{let p,b,y=0;for(const k in s){if(u===String(s[k])){if(k!=="@initial"){const h=k.slice(1);(b=b||[]).push(h in r?r[h]:k.replace(/^@media ?/,"")),m=!0}f+=y,p=!0}++y}if(b&&b.length&&(d={["@media "+b.join(", ")]:d}),!p)continue e}}}(o[f]=o[f]||[]).push([n?"cv":`${a}-${i[a]}`,d,m])}return o},tt={},rt=D(),nt=(e,t)=>rt(e,()=>(...r)=>{const n=()=>{for(let o of r){o=typeof o=="object"&&o||{};let i=A(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let d=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let l of[].concat(o["@import"]))l=l.includes('"')||l.includes("'")?l:`"${l}"`,t.sheet.insertRule(`@import ${l};`,d++);delete o["@import"]}N(o,[],[],e,d=>{t.rules.global.apply(d)})}}return""};return ne(n,{toString:n})}),ot=D(),it=(e,t)=>ot(e,()=>r=>{const n=`${W(e.prefix)}k-${A(r)}`,o=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const i=[];N(r,[],[],e,l=>i.push(l));const d=`@keyframes ${n}{${i.join("")}}`;t.rules.global.apply(d)}return n};return ne(o,{get name(){return o()},toString:o})}),at=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+W(this.prefix)+W(this.scale)+this.token}toString(){return this.computedValue}},lt=D(),st=(e,t)=>lt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const o=`.${r=(r=typeof r=="string"?r:"")||`${W(e.prefix)}t-${A(n)}`}`,i={},d=[];for(const a in n){i[a]={};for(const f in n[a]){const m=`--${W(e.prefix)}${a}-${f}`,u=be(String(n[a][f]),e.prefix,a);i[a][f]=new at(f,u,a,e.prefix),d.push(`${m}:${u}`)}}const l=()=>{if(d.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const a=`${n===e.theme?":root,":""}.${r}{${d.join(";")}}`;t.rules.themed.apply(a)}return r};return{...i,get className(){return l()},selector:o,toString:l}}),ct=D(),dt=D(),ut=e=>{const t=(r=>{let n=!1;const o=ct(r,i=>{n=!0;const d="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",l=typeof i.media=="object"&&i.media||{},a=typeof i.root=="object"?i.root||null:globalThis.document||null,f=typeof i.theme=="object"&&i.theme||{},m={prefix:d,media:l,theme:f,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...he},utils:typeof i.utils=="object"&&i.utils||{}},u=Ke(a),s={css:ue(m,u),globalCss:nt(m,u),keyframes:it(m,u),createTheme:st(m,u),reset(){u.reset(),s.theme.toString()},theme:{},sheet:u,config:m,prefix:d,getCssText:u.toString,toString:u.toString};return String(s.theme=s.createTheme(f)),s});return n||o.reset(),o})(e);return t.styled=(({config:r,sheet:n})=>dt(r,()=>{const o=ue(r,n);return(...i)=>{const d=o(...i),l=d[M].type,a=g.forwardRef((f,m)=>{const u=f&&f.as||l,{props:s,deferredInjector:p}=d(f);return delete s.as,s.ref=m,p?g.createElement(g.Fragment,null,g.createElement(u,s),g.createElement(p,null)):g.createElement(u,s)});return a.className=d.className,a.displayName=`Styled.${l.displayName||l.name||l}`,a.selector=d.selector,a.toString=()=>d.selector,a[M]=d[M],a}}))(t),t},gt=$.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),$e=function(t,r,n){var o=n.get(t);return o?o(r):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function fe(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var xe=$.forwardRef(function(e,t){var r=e.alt,n=e.color,o=e.size,i=e.weight,d=e.mirrored,l=e.children,a=e.renderPath,f=fe(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=$.useContext(gt),u=m.color,s=u===void 0?"currentColor":u,p=m.size,b=m.weight,y=b===void 0?"regular":b,k=m.mirrored,h=k===void 0?!1:k,S=fe(m,["color","size","weight","mirrored"]);return g.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??p,height:o??p,fill:n??s,viewBox:"0 0 256 256",transform:d||h?"scale(-1, 1)":void 0},S,f),!!r&&g.createElement("title",null,r),l,g.createElement("rect",{width:"256",height:"256",fill:"none"}),a(i??y,n??s))});xe.displayName="IconBase";const ke=xe;var T=new Map;T.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});T.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});T.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});T.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});T.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});T.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var ft=function(t,r){return $e(t,r,T)},ye=$.forwardRef(function(e,t){return g.createElement(ke,Object.assign({ref:t},e,{renderPath:ft}))});ye.displayName="Check";const pt=ye;var _=new Map;_.set("bold",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return g.createElement(g.Fragment,null,g.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});_.set("light",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return g.createElement(g.Fragment,null,g.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),g.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var mt=function(t,r){return $e(t,r,_)},Se=$.forwardRef(function(e,t){return g.createElement(ke,Object.assign({ref:t},e,{renderPath:mt}))});Se.displayName="User";const ht=Se,ve="Avatar",[bt,pr]=me(ve),[$t,Ee]=bt(ve),xt=$.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[o,i]=$.useState("idle");return $.createElement($t,{scope:r,imageLoadingStatus:o,onImageLoadingStatusChange:i},$.createElement(X.span,q({},n,{ref:t})))}),kt="AvatarImage",yt=$.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:o=()=>{},...i}=e,d=Ee(kt,r),l=Et(n),a=We(f=>{o(f),d.onImageLoadingStatusChange(f)});return Le(()=>{l!=="idle"&&a(l)},[l,a]),l==="loaded"?$.createElement(X.img,q({},i,{ref:t,src:n})):null}),St="AvatarFallback",vt=$.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...o}=e,i=Ee(St,r),[d,l]=$.useState(n===void 0);return $.useEffect(()=>{if(n!==void 0){const a=window.setTimeout(()=>l(!0),n);return()=>window.clearTimeout(a)}},[n]),d&&i.imageLoadingStatus!=="loaded"?$.createElement(X.span,q({},o,{ref:t})):null});function Et(e){const[t,r]=$.useState("idle");return $.useEffect(()=>{if(!e){r("error");return}let n=!0;const o=new window.Image,i=d=>()=>{n&&r(d)};return r("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{n=!1}},[e]),t}const Ct=xt,wt=yt,Bt=vt,Ce="Checkbox",[zt,mr]=me(Ce),[It,hr]=zt(Ce),Rt=$.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:o,defaultChecked:i,required:d,disabled:l,value:a="on",onCheckedChange:f,...m}=e,[u,s]=$.useState(null),p=Me(t,C=>s(C)),b=$.useRef(!1),y=u?!!u.closest("form"):!0,[k=!1,h]=Ae({prop:o,defaultProp:i,onChange:f}),S=$.useRef(k);return $.useEffect(()=>{const C=u==null?void 0:u.form;if(C){const E=()=>h(S.current);return C.addEventListener("reset",E),()=>C.removeEventListener("reset",E)}},[u,h]),$.createElement(It,{scope:r,state:k,disabled:l},$.createElement(X.button,q({type:"button",role:"checkbox","aria-checked":H(k)?"mixed":k,"aria-required":d,"data-state":Pt(k),"data-disabled":l?"":void 0,disabled:l,value:a},m,{ref:p,onKeyDown:ae(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:ae(e.onClick,C=>{h(E=>H(E)?!0:!E),y&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})})),y&&$.createElement(jt,{control:u,bubbles:!b.current,name:n,value:a,checked:k,required:d,disabled:l,style:{transform:"translateX(-100%)"}}))}),jt=e=>{const{control:t,checked:r,bubbles:n=!0,...o}=e,i=$.useRef(null),d=Te(r),l=_e(t);return $.useEffect(()=>{const a=i.current,f=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(f,"checked").set;if(d!==r&&u){const s=new Event("click",{bubbles:n});a.indeterminate=H(r),u.call(a,H(r)?!1:r),a.dispatchEvent(s)}},[d,r,n]),$.createElement("input",q({type:"checkbox","aria-hidden":!0,defaultChecked:H(r)?!1:r},o,{tabIndex:-1,ref:i,style:{...e.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function H(e){return e==="indeterminate"}function Pt(e){return H(e)?"indeterminate":e?"checked":"unchecked"}const we=Rt;var Wt=Object.defineProperty,Lt=Object.defineProperties,Mt=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,pe=(e,t,r)=>t in e?Wt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))Be.call(t,r)&&pe(e,r,t[r]);if(J)for(var r of J(t))ze.call(t,r)&&pe(e,r,t[r]);return e},oe=(e,t)=>Lt(e,Mt(t)),At=(e,t)=>{var r={};for(var n in e)Be.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&ze.call(e,n)&&(r[n]=e[n]);return r},Tt={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D",test:"#FFF"},_t={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},Ot={regular:"400",medium:"500",bold:"700"},Ft={default:"Roboto, sans-serif",code:"monospace"},Nt={shorter:"125%",short:"140%",base:"160%",tall:"180%"},Ht={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},Dt={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},{styled:v,css:br,globalCss:$r,keyframes:Ie,getCssText:xr,theme:kr,createTheme:yr,config:Sr}=ut({themeMap:oe(Y({},he),{height:"space",width:"space"}),theme:{colors:Tt,fontSizes:_t,fontWeights:Ot,fonts:Ft,lineHeights:Nt,radii:Ht,space:Dt}}),Vt=v("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});Vt.displayName="Box";var Re=v("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Re.displayName="Text";var Gt=v("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Gt.displayName="Heading";var Ut=v(Ct,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),Yt=v(wt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),qt=v(Bt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Kt(e){return z.jsxs(Ut,{children:[z.jsx(Yt,Y({},e)),z.jsx(qt,{delayMs:600,children:z.jsx(ht,{})})]})}Kt.displayName="Avatar";var Zt=v("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});Zt.displayName="Button";var Jt=v("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),Xt=v("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Qt=v("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),je=$.forwardRef((e,t)=>{var r=e,{prefix:n,containerProps:o}=r,i=At(r,["prefix","containerProps"]);return z.jsxs(Jt,oe(Y({},o),{children:[!!n&&z.jsx(Xt,{children:n}),z.jsx(Qt,Y({ref:t},i))]}))});je.displayName="TextInput";var er=v("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});er.displayName="TextArea";var tr=v(we,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),rr=Ie({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),nr=Ie({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),or=v(we,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${rr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${nr} 200ms ease-out`}});function ir(e){return z.jsx(tr,oe(Y({},e),{children:z.jsx(or,{asChild:!0,children:z.jsx(pt,{weight:"bold"})})}))}ir.displayName="Checkbox";var ar=v("div",{}),lr=v(Re,{color:"$gray200",defaultVariants:{size:"xs"}}),sr=v("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),cr=v("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function dr({size:e,currentStep:t=1}){return z.jsxs(ar,{children:[z.jsxs(lr,{children:["Passo ",t," de ",e]}),z.jsx(sr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>z.jsx(cr,{active:t>=r},r))})]})}dr.displayName="MultiStep";je.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Kt as A,Vt as B,ir as C,Gt as H,ke as I,dr as M,je as T,Re as a,er as b,Zt as c,$e as r};
//# sourceMappingURL=index-0a9fcd1f.js.map
