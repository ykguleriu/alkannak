(function(){var L=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[20],{"3Csl":function(T,g,u){"use strict";u.r(g),u.d(g,"collectExtraDataByMetric",function(){return H});var p=u("8OQS"),f=u.n(p);const h=.05,v=t=>{var n,o,e,l;if(!t)return"unknownElement";if(!t.closest)return(t==null?void 0:t.nodeName)==="#text"?v(t.parentElement):t.nodeName;const s=t==null||(n=t.closest("[data-widget-type]"))===null||n===void 0||(o=n.dataset)===null||o===void 0?void 0:o.widgetType;if(s)return s;const i=t==null||(e=t.closest("[data-element-type]"))===null||e===void 0||(l=e.dataset)===null||l===void 0?void 0:l.elementType;if(i)return i;const d={dmRespCol:"column",dmRespRow:"row",dmFooterContainer:"footer",dmHeaderContainer:"header",dmInner:"page background",bgGallerySlide:"row image slider",videobgframe:"video bg"};for(const[r,a]of Object.entries(d)){var c;if(t!=null&&(c=t.classList)!==null&&c!==void 0&&c.contains(r))return a}return"unknown"},C=({entries:t=[]})=>{const n=[],o=[];return t.forEach(({sources:e,value:l})=>{if(l>h){const s=e.map(({node:i}={})=>{var d,c;o.push(v(i));const r=(i==null||(d=i.nodeName)===null||d===void 0?void 0:d.toLowerCase())||(i==null?void 0:i.nodeType)||"unknownNode",a=i!=null&&(c=i.className)!==null&&c!==void 0&&c.length?"."+Array.from(i.classList.values()).join("."):"";return`${r}${a}`});s!=null&&s.length&&n.push(s.join(","))}}),{clsSelectors:n,clsCustomType:o}},y=t=>{const o=/(-)(\d{1,4})(w.*)$/gm.exec(t);return o?Number(o[2]):null},I=(t,n,o)=>{const e=y(n);return e?{isBackgroundImg:o,lcpImgIntrinsicWidth:e,lcpImgRenderedWidth:t,lcpImgWidthDelta:e?e>t?e-t:0:-1,lcpImgSrc:n}:{}},w=t=>{const n=t==null?void 0:t.naturalHeight;let o=t==null?void 0:t.clientHeight;return o===0&&(o=t.parentElement.clientHeight),{lcpImgIntrinsicHeight:n,lcpImgRenderedHeight:o,lcpImgHeightDelta:n?n>o?n-o:0:-1}},N=({lcpImgWidthDelta:t=0,lcpImgHeightDelta:n=0})=>t+n,S=({entries:t=[]},n)=>{var o;const{url:e,element:l}=(t==null?void 0:t.pop())||{},s=(l==null?void 0:l.className)||"unknown",i=(l==null||(o=l.tagName)===null||o===void 0?void 0:o.toLowerCase())||"",d=v(l),c=i==="img";let r={lcpSelector:s,lcpElementType:i,lcpCustomType:d};const a=(l==null?void 0:l.clientWidth)||n,m=!c&&i!=="video";return a&&e&&(r=Object.assign({},r,I(a,e,m))),!m&&e&&c&&(r=Object.assign({},r,w(l))),Object.assign({},r,{lcpTotalImageDelta:N(r)})},H=(t,{viewportWidth:n})=>{let{name:o}=t,e=f()(t,["name","delta"]);return o==="LCP"?S(e,n):o==="CLS"?C(e):{}}}}])})();