(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"/Cyf":function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return c}));var n=function(e,r){return e<r?-1:e>r?1:e>=r?0:NaN};var o,a;1===(o=n).length&&(a=o,o=function(e,r){return n(a(e),r)});var i=Array.prototype,c=(i.slice,i.map,function(e,r,t){e=+e,r=+r,t=(o=arguments.length)<2?(r=e,e=0,1):o<3?1:+t;for(var n=-1,o=0|Math.max(0,Math.ceil((r-e)/t)),a=new Array(o);++n<o;)a[n]=e+n*t;return a});Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);var l=function(e){for(var r,t,n,o=e.length,a=-1,i=0;++a<o;)i+=e[a].length;for(t=new Array(i);--o>=0;)for(r=(n=e[o]).length;--r>=0;)t[--i]=n[r];return t}},"78gg":function(e,r,t){"use strict";(function(e){t.d(r,"a",(function(){return N})),t.d(r,"b",(function(){return R})),t.d(r,"c",(function(){return U})),t.d(r,"d",(function(){return Y}));var n=t("mXGw"),o=t.n(n),a=t("5QYd"),i=t("llhf"),c=t("FFEP"),l=t("W0B4"),u=t.n(l),s=t("56Mt"),b=t("aBO9"),d=t("QU3t"),f=t("qg2j"),g=t.n(f),p=t("wMFK"),v=t("tsrg");function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?O(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=Object(n.memo)((function(e){var r=e.arc;return o.a.createElement(s.a,{id:r.label,value:r.formattedValue,color:r.color,enableChip:!0})}));y.displayName="ChordArcTooltip";var A=Object(n.memo)((function(e){var r=e.ribbon,t=Object(a.sb)();return o.a.createElement(s.d,{theme:t,rows:[[o.a.createElement(s.b,{key:"chip",color:r.source.color}),o.a.createElement("strong",{key:"id"},r.source.label),r.source.formattedValue],[o.a.createElement(s.b,{key:"chip",color:r.target.color}),o.a.createElement("strong",{key:"id"},r.target.label),r.target.formattedValue]]})}));A.displayName="ChordRibbonTooltip";var M={keys:u.a.arrayOf(u.a.string).isRequired,matrix:u.a.arrayOf(u.a.arrayOf(u.a.number)).isRequired,valueFormat:u.a.oneOfType([u.a.func,u.a.string]),padAngle:u.a.number.isRequired,innerRadiusRatio:u.a.number.isRequired,innerRadiusOffset:u.a.number.isRequired,layers:u.a.arrayOf(u.a.oneOfType([u.a.oneOf(["ribbons","arcs","labels","legends"]),u.a.func])).isRequired,arcOpacity:u.a.number.isRequired,arcHoverOpacity:u.a.number.isRequired,arcHoverOthersOpacity:u.a.number.isRequired,arcBorderWidth:u.a.number.isRequired,arcBorderColor:i.k.isRequired,onArcMouseEnter:u.a.func,onArcMouseMove:u.a.func,onArcMouseLeave:u.a.func,onArcClick:u.a.func,arcTooltip:u.a.oneOfType([u.a.func,u.a.object]).isRequired,ribbonOpacity:u.a.number.isRequired,ribbonHoverOpacity:u.a.number.isRequired,ribbonHoverOthersOpacity:u.a.number.isRequired,ribbonBorderWidth:u.a.number.isRequired,ribbonBorderColor:i.k.isRequired,ribbonBlendMode:a.s.isRequired,onRibbonMouseEnter:u.a.func,onRibbonMouseMove:u.a.func,onRibbonMouseLeave:u.a.func,onRibbonClick:u.a.func,ribbonTooltip:u.a.oneOfType([u.a.func,u.a.object]).isRequired,enableLabel:u.a.bool.isRequired,label:u.a.oneOfType([u.a.string,u.a.func]).isRequired,labelOffset:u.a.number.isRequired,labelRotation:u.a.number.isRequired,labelTextColor:i.k.isRequired,colors:i.p.isRequired,isInteractive:u.a.bool.isRequired,legends:u.a.arrayOf(u.a.shape(c.o)).isRequired},j=(m(m(m({},M),a.T),{},{role:u.a.string.isRequired}),m({pixelRatio:u.a.number.isRequired},M),{padAngle:0,innerRadiusRatio:.9,innerRadiusOffset:0,layers:["ribbons","arcs","labels","legends"],arcOpacity:1,arcHoverOpacity:1,arcHoverOthersOpacity:.15,arcBorderWidth:1,arcBorderColor:{from:"color",modifiers:[["darker",.4]]},arcTooltip:y,ribbonOpacity:.5,ribbonHoverOpacity:.85,ribbonHoverOthersOpacity:.15,ribbonBorderWidth:1,ribbonBorderColor:{from:"color",modifiers:[["darker",.4]]},ribbonBlendMode:"normal",ribbonTooltip:A,enableLabel:!0,label:"id",labelOffset:12,labelRotation:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},colors:{scheme:"nivo"},legends:[],isInteractive:!0}),R=m(m({},j),{},{animate:!0,motionStiffness:90,motionDamping:15,role:"img"}),E=m(m({},j),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1});function C(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function k(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return t}}(e,r)||function(e,r){if(e){if("string"==typeof e)return C(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(e){var r=e.padAngle;return Object(n.useMemo)((function(){return function(e){var r=e.padAngle;return Object(d.a)().padAngle(r)}({padAngle:r})}),[r])},x=function(e){var r=e.width,t=e.height,o=e.innerRadiusRatio,a=e.innerRadiusOffset;return Object(n.useMemo)((function(){return function(e){var r=e.width,t=e.height,n=e.innerRadiusRatio,o=e.innerRadiusOffset,a=[r/2,t/2],i=Math.min(r,t)/2,c=i*n,l=i*(n-o);return{center:a,radius:i,innerRadius:c,arcGenerator:Object(b.a)().outerRadius(i).innerRadius(c),ribbonGenerator:Object(d.b)().radius(l)}}({width:r,height:t,innerRadiusRatio:o,innerRadiusOffset:a})}),[r,t,o,a])},q=function(e){var r=e.keys,t=e.matrix,o=e.label,c=e.valueFormat,l=e.width,u=e.height,s=e.innerRadiusRatio,b=e.innerRadiusOffset,d=e.padAngle,f=e.colors,g=w({padAngle:d}),p=x({width:l,height:u,innerRadiusRatio:s,innerRadiusOffset:b}),v=p.center,h=p.radius,O=p.innerRadius,m=p.arcGenerator,y=p.ribbonGenerator,A=Object(n.useMemo)((function(){return Object(a.I)(o)}),[o]),M=Object(a.tb)(c),j=Object(i.s)(f,"id"),R=function(e){var r=e.chord,t=e.getColor,o=e.keys,a=e.matrix,i=e.getLabel,c=e.formatValue;return Object(n.useMemo)((function(){return function(e){var r=e.chord,t=e.getColor,n=e.keys,o=e.matrix,a=e.getLabel,i=e.formatValue,c=r(o),l=c.groups.map((function(e){return e.id=n[e.index],e.color=t(e),e.formattedValue=i(e.value),e.label=a(e),e}));return c.forEach((function(e){e.source.id=n[e.source.index],e.source.color=t(e.source),e.source.formattedValue=i(e.source.value),e.source.label=a(e.source),e.target.id=n[e.target.index],e.target.color=t(e.target),e.target.formattedValue=i(e.target.value),e.target.label=a(e.target),e.id=[e.source.id,e.target.id].sort().join(".")})),{arcs:l,ribbons:c}}({chord:r,getColor:t,keys:o,matrix:a,getLabel:i,formatValue:c})}),[r,t,o,a,i,c])}({chord:g,getColor:j,keys:r,matrix:t,getLabel:A,formatValue:M});return{center:v,chord:g,radius:h,innerRadius:O,arcGenerator:m,ribbonGenerator:y,getColor:j,arcs:R.arcs,ribbons:R.ribbons}},B=function(e){var r=e.arcs,t=e.arcOpacity,o=e.arcHoverOpacity,a=e.arcHoverOthersOpacity,i=e.ribbons,c=e.ribbonOpacity,l=e.ribbonHoverOpacity,u=e.ribbonHoverOthersOpacity,s=k(Object(n.useState)(null),2),b=s[0],d=s[1],f=k(Object(n.useState)(null),2),g=f[0],p=f[1],v=Object(n.useMemo)((function(){var e=[],r=[];return b&&(e.push(b.id),i.filter((function(e){return e.source.id===b.id||e.target.id===b.id})).forEach((function(e){r.push(e.id)}))),g&&(e.push(g.source.id),e.push(g.target.id),r.push(g.id)),{selectedArcIds:e,selectedRibbonIds:r}}),[b,g,r,i]),h=v.selectedArcIds.length>1||v.selectedRibbonIds.length>0,O=Object(n.useMemo)((function(){return function(e){return h?v.selectedArcIds.includes(e.id)?o:a:t}}),[v.selectedArcIds,t,o,a]),y=Object(n.useMemo)((function(){return function(e){return h?v.selectedRibbonIds.includes(e.id)?l:u:c}}),[v.selectedRibbonIds,c,l,u]);return m(m({currentArc:b,setCurrentArc:d,currentRibbon:g,setCurrentRibbon:p,hasSelection:h},v),{},{getArcOpacity:O,getRibbonOpacity:y})},S=function(e){var r=e.center,t=e.radius,o=e.arcs,a=e.arcGenerator,i=e.ribbons,c=e.ribbonGenerator;return Object(n.useMemo)((function(){return{center:r,radius:t,arcs:o,arcGenerator:a,ribbons:i,ribbonGenerator:c}}),[r,t,o,a,i,c])},H=Object(n.memo)((function(e){var r=e.ribbon,t=e.ribbonGenerator,a=e.sourceStartAngle,i=e.sourceEndAngle,c=e.targetStartAngle,l=e.targetEndAngle,u=e.color,b=e.opacity,d=e.borderWidth,f=e.getBorderColor,g=e.blendMode,p=e.isInteractive,v=e.setCurrent,h=e.onMouseEnter,O=e.onMouseMove,y=e.onMouseLeave,A=e.onClick,M=e.tooltip,j=Object(s.i)(),R=j.showTooltipFromEvent,E=j.hideTooltip,C=Object(n.useMemo)((function(){if(p)return function(e){v(r),R(o.a.createElement(M,{ribbon:r}),e),h&&h(r,e)}}),[p,R,M,r,h]),k=Object(n.useMemo)((function(){if(p)return function(e){R(o.a.createElement(M,{ribbon:r}),e),O&&O(r,e)}}),[p,R,M,r,O]),w=Object(n.useMemo)((function(){if(p)return function(e){v(null),E(),y&&y(r,e)}}),[p,E,r,y]),x=Object(n.useMemo)((function(){if(p&&A)return function(e){return A(r,e)}}),[p,r,A]);return o.a.createElement("path",{d:t({source:{startAngle:a,endAngle:i},target:{startAngle:c,endAngle:l}}),fill:u,fillOpacity:b,strokeWidth:d,stroke:f(m(m({},r),{},{color:u})),strokeOpacity:b,style:{mixBlendMode:g},onMouseEnter:C,onMouseMove:k,onMouseLeave:w,onClick:x})}));H.displayName="ChordRibbon";var T=function(e,r,t){var n,o,i,c=e.source,l=e.target;if(c.startAngle<l.startAngle?(n=c,o=l):(n=l,o=c),!0===r){var u=Object(a.R)(n),s=Object(a.R)(o);i={sourceStartAngle:u,sourceEndAngle:u,targetStartAngle:s,targetEndAngle:s}}else i={sourceStartAngle:n.startAngle,sourceEndAngle:n.endAngle,targetStartAngle:o.startAngle,targetEndAngle:o.endAngle};return t?g()(i,(function(e){return Object(p.spring)(e,t)})):i},G=function(e){var r=e.data;return m(m({},T(r,!0)),{},{opacity:0},Object(i.l)(r.source.color))},L=function(e){return function(r){var t=r.data;return m(m({},T(t,!0,e)),{},{opacity:0},Object(i.l)(t.source.color,e))}},W=Object(n.memo)((function(e){var r=e.ribbons,t=e.ribbonGenerator,n=e.borderWidth,c=e.getBorderColor,l=e.getOpacity,u=e.blendMode,s=e.isInteractive,b=e.setCurrent,d=e.onMouseEnter,f=e.onMouseMove,g=e.onMouseLeave,v=e.onClick,h=e.tooltip,O=Object(a.qb)(),y=O.animate,A=O.springConfig;if(!0!==y)return o.a.createElement("g",null,r.map((function(e){return o.a.createElement(H,{key:e.id,ribbon:e,ribbonGenerator:t,sourceStartAngle:e.source.startAngle,sourceEndAngle:e.source.endAngle,targetStartAngle:e.target.startAngle,targetEndAngle:e.target.endAngle,color:e.source.color,blendMode:u,opacity:l(e),borderWidth:n,getBorderColor:c,isInteractive:s,setCurrent:b,onMouseEnter:d,onMouseMove:f,onMouseLeave:g,onClick:v,tooltip:h})})));var M=m(m({},A),{},{precision:.001});return o.a.createElement(p.TransitionMotion,{willEnter:G,willLeave:L(M),styles:r.map((function(e){return{key:e.id,data:e,style:m(m({},T(e,!1,M)),{},{opacity:Object(p.spring)(l(e),M)},Object(i.l)(e.source.color,M))}}))},(function(e){return o.a.createElement(o.a.Fragment,null,e.map((function(e){var r=e.key,a=e.style,l=e.data,p=Object(i.i)(a);return o.a.createElement(H,{key:r,ribbon:l,ribbonGenerator:t,sourceStartAngle:a.sourceStartAngle,sourceEndAngle:Math.max(a.sourceEndAngle,a.sourceStartAngle),targetStartAngle:a.targetStartAngle,targetEndAngle:Math.max(a.targetEndAngle,a.targetStartAngle),color:p,blendMode:u,opacity:a.opacity,borderWidth:n,getBorderColor:c,isInteractive:s,setCurrent:b,onMouseEnter:d,onMouseMove:f,onMouseLeave:g,onClick:v,tooltip:h})})))}))}));W.displayName="ChordRibbons";var I=Object(n.memo)((function(e){var r=e.arc,t=e.startAngle,a=e.endAngle,i=e.borderWidth,c=e.getBorderColor,l=e.opacity,u=e.arcGenerator,b=e.setCurrent,d=e.isInteractive,f=e.onMouseEnter,g=e.onMouseMove,p=e.onMouseLeave,v=e.onClick,h=e.tooltip,O=Object(s.i)(),m=O.showTooltipFromEvent,y=O.hideTooltip,A=Object(n.useMemo)((function(){if(d)return function(e){b(r),m(o.a.createElement(h,{arc:r}),e),f&&f(r,e)}}),[d,m,h,r,f]),M=Object(n.useMemo)((function(){if(d)return function(e){m(o.a.createElement(h,{arc:r}),e),g&&g(r,e)}}),[d,m,h,r,g]),j=Object(n.useMemo)((function(){if(d)return function(e){b(null),y(),p&&p(r,e)}}),[d,y,r,p]),R=Object(n.useMemo)((function(){if(d&&v)return function(e){return v(r,e)}}),[d,r,v]);return o.a.createElement("path",{d:u({startAngle:t,endAngle:a}),fill:r.color,fillOpacity:l,strokeWidth:i,stroke:c(r),strokeOpacity:l,onMouseEnter:A,onMouseMove:M,onMouseLeave:j,onClick:R})}));I.displayName="ChordArc";var F=Object(n.memo)((function(e){var r=e.arcs,t=e.borderWidth,n=e.getBorderColor,c=e.getOpacity,l=e.arcGenerator,u=e.setCurrent,s=e.isInteractive,b=e.onMouseEnter,d=e.onMouseMove,f=e.onMouseLeave,g=e.onClick,v=e.tooltip,h=Object(a.qb)(),O=h.animate,y=h.springConfig;if(!0!==O)return r.map((function(e){return o.a.createElement(I,{key:e.id,arc:e,arcGenerator:l,startAngle:e.startAngle,endAngle:e.endAngle,color:e.color,opacity:c(e),borderWidth:t,getBorderColor:n,getOpacity:c,isInteractive:s,setCurrent:u,onMouseEnter:b,onMouseMove:d,onMouseLeave:f,onClick:g,tooltip:v})}));var A=m(m({},y),{},{precision:.001});return o.a.createElement(p.TransitionMotion,{styles:r.map((function(e){return{key:e.id,data:e,style:m({startAngle:Object(p.spring)(e.startAngle,A),endAngle:Object(p.spring)(e.endAngle,A),opacity:Object(p.spring)(c(e),A)},Object(i.l)(e.color,A))}}))},(function(e){return o.a.createElement(o.a.Fragment,null,e.map((function(e){var r=e.key,a=e.style,p=e.data,h=Object(i.i)(a);return o.a.createElement(I,{key:r,arc:p,arcGenerator:l,startAngle:a.startAngle,endAngle:a.endAngle,color:h,opacity:a.opacity,borderWidth:t,getBorderColor:n,getOpacity:c,isInteractive:s,setCurrent:u,onMouseEnter:b,onMouseMove:d,onMouseLeave:f,onClick:g,tooltip:v})})))}))}));F.displayName="ChordArcs";var P=function(e){var r=e.arcs,t=e.radius,n=e.rotation,i=e.getColor,c=Object(a.sb)(),l=Object(a.qb)(),u=l.animate,s=l.springConfig;return!0!==u?o.a.createElement(o.a.Fragment,null,r.map((function(e){var r=i(e,c),l=Object(a.R)(e),u=Object(a.J)(t,l,n);return o.a.createElement("text",{key:e.id,transform:"translate(".concat(u.x,", ").concat(u.y,") rotate(").concat(u.rotate,")"),style:m(m({},c.labels.text),{},{pointerEvents:"none",fill:r}),textAnchor:u.align,dominantBaseline:u.baseline},e.label)}))):o.a.createElement(p.TransitionMotion,{styles:r.map((function(e){var r=Object(a.R)(e);return{key:e.id,data:e,style:{angle:Object(p.spring)(r,s)}}}))},(function(e){return o.a.createElement(o.a.Fragment,null,e.map((function(e){var r=e.key,l=e.style,u=e.data,s=i(u,c),b=Object(a.J)(t,l.angle,n);return o.a.createElement("text",{key:r,transform:"translate(".concat(b.x,", ").concat(b.y,") rotate(").concat(b.rotate,")"),style:m(m({},c.labels.text),{},{pointerEvents:"none",fill:s}),textAnchor:b.align,dominantBaseline:b.baseline},u.label)})))}))},V=function(e){var r=e.margin,t=e.width,l=e.height,u=e.keys,s=e.matrix,b=e.label,d=e.valueFormat,f=e.innerRadiusRatio,g=e.innerRadiusOffset,p=e.padAngle,v=e.layers,h=e.colors,O=e.arcBorderWidth,m=e.arcBorderColor,y=e.arcOpacity,A=e.arcHoverOpacity,M=e.arcHoverOthersOpacity,j=e.arcTooltip,R=e.ribbonBorderWidth,E=e.ribbonBorderColor,C=e.ribbonBlendMode,k=e.ribbonOpacity,w=e.ribbonHoverOpacity,x=e.ribbonHoverOthersOpacity,H=e.ribbonTooltip,T=e.enableLabel,G=e.labelOffset,L=e.labelRotation,I=e.labelTextColor,V=e.isInteractive,N=e.onArcMouseEnter,D=e.onArcMouseMove,J=e.onArcMouseLeave,Q=e.onArcClick,U=e.onRibbonMouseEnter,Y=e.onRibbonMouseMove,_=e.onRibbonMouseLeave,z=e.onRibbonClick,K=e.legends,X=e.role,$=Object(a.ob)(t,l,r),Z=$.margin,ee=$.innerWidth,re=$.innerHeight,te=$.outerWidth,ne=$.outerHeight,oe=q({keys:u,matrix:s,label:b,valueFormat:d,width:ee,height:re,innerRadiusRatio:f,innerRadiusOffset:g,padAngle:p,colors:h}),ae=oe.center,ie=oe.radius,ce=oe.arcGenerator,le=oe.ribbonGenerator,ue=oe.arcs,se=oe.ribbons,be=B({arcs:ue,arcOpacity:y,arcHoverOpacity:A,arcHoverOthersOpacity:M,ribbons:se,ribbonOpacity:k,ribbonHoverOpacity:w,ribbonHoverOthersOpacity:x}),de=be.setCurrentArc,fe=be.setCurrentRibbon,ge=be.getArcOpacity,pe=be.getRibbonOpacity,ve=Object(a.sb)(),he=Object(i.r)(I,ve),Oe=Object(i.r)(m,ve),me=Object(i.r)(E,ve),ye=S({center:ae,radius:ie,arcs:ue,arcGenerator:ce,ribbons:se,ribbonGenerator:le});if(ie<=0)return null;var Ae=ue.map((function(e){return{id:e.id,label:e.label,color:e.color}})),Me={ribbons:o.a.createElement("g",{key:"ribbons",transform:"translate(".concat(ae[0],", ").concat(ae[1],")")},o.a.createElement(W,{ribbons:se,ribbonGenerator:le,borderWidth:R,getBorderColor:me,getOpacity:pe,blendMode:C,setCurrent:fe,isInteractive:V,onMouseEnter:U,onMouseMove:Y,onMouseLeave:_,onClick:z,tooltip:H})),arcs:o.a.createElement("g",{key:"arcs",transform:"translate(".concat(ae[0],", ").concat(ae[1],")")},o.a.createElement(F,{arcs:ue,arcGenerator:ce,borderWidth:O,getBorderColor:Oe,getOpacity:ge,setCurrent:de,isInteractive:V,onMouseEnter:N,onMouseMove:D,onMouseLeave:J,onClick:Q,tooltip:j})),labels:null,legends:o.a.createElement(n.Fragment,{key:"legends"},K.map((function(e,r){return o.a.createElement(c.j,Object.assign({key:r},e,{containerWidth:ee,containerHeight:re,data:Ae,theme:ve}))})))};return!0===T&&(Me.labels=o.a.createElement("g",{key:"labels",transform:"translate(".concat(ae[0],", ").concat(ae[1],")")},o.a.createElement(P,{arcs:ue,radius:ie+G,rotation:L,getColor:he}))),o.a.createElement(a.l,{width:te,height:ne,margin:Z,theme:ve,role:X},v.map((function(e,r){return void 0!==Me[e]?Me[e]:"function"==typeof e?o.a.createElement(n.Fragment,{key:r},e(ye)):null})))};V.defaultProps=R;var N=Object(a.ub)(V),D=function(e){var r=e.event,t=e.canvasEl,n=e.center,o=e.margin,i=e.radius,c=e.innerRadius,l=e.arcs,u=k(Object(a.L)(t,r),2),s=u[0],b=u[1],d=o.left+n[0],f=o.top+n[1];return Object(v.h)(d,f,i,c,l,s,b)},J=Object(n.memo)((function(e){var r=e.pixelRatio,t=e.margin,l=e.width,u=e.height,b=e.keys,d=e.matrix,f=e.label,g=e.valueFormat,p=e.innerRadiusRatio,v=e.innerRadiusOffset,h=e.padAngle,O=e.layers,y=e.colors,A=e.arcBorderWidth,M=e.arcBorderColor,j=e.arcOpacity,R=e.arcHoverOpacity,E=e.arcHoverOthersOpacity,C=e.arcTooltip,k=e.ribbonBorderWidth,w=e.ribbonBorderColor,x=e.ribbonOpacity,H=e.ribbonHoverOpacity,T=e.ribbonHoverOthersOpacity,G=e.enableLabel,L=e.labelOffset,W=e.labelRotation,I=e.labelTextColor,F=e.isInteractive,P=e.onArcMouseEnter,V=e.onArcMouseMove,N=e.onArcMouseLeave,J=e.onArcClick,Q=e.legends,U=Object(n.useRef)(null),Y=Object(a.ob)(l,u,t),_=Y.innerWidth,z=Y.innerHeight,K=Y.outerWidth,X=Y.outerHeight,$=Y.margin,Z=q({keys:b,matrix:d,label:f,valueFormat:g,width:_,height:z,innerRadiusRatio:p,innerRadiusOffset:v,padAngle:h,colors:y}),ee=Z.center,re=Z.radius,te=Z.innerRadius,ne=Z.arcGenerator,oe=Z.ribbonGenerator,ae=Z.arcs,ie=Z.ribbons,ce=B({arcs:ae,arcOpacity:j,arcHoverOpacity:R,arcHoverOthersOpacity:E,ribbons:ie,ribbonOpacity:x,ribbonHoverOpacity:H,ribbonHoverOthersOpacity:T}),le=ce.currentArc,ue=ce.setCurrentArc,se=ce.getArcOpacity,be=ce.getRibbonOpacity,de=Object(a.sb)(),fe=Object(i.r)(I,de),ge=Object(i.r)(M,de),pe=Object(i.r)(w,de),ve=S({center:ee,radius:re,arcs:ae,arcGenerator:ne,ribbons:ie,ribbonGenerator:oe});Object(n.useEffect)((function(){U.current.width=K*r,U.current.height=X*r;var e=U.current.getContext("2d");e.scale(r,r),e.fillStyle=de.background,e.fillRect(0,0,K,X),re<=0||O.forEach((function(r){if("ribbons"===r&&(e.save(),e.translate($.left+ee[0],$.top+ee[1]),oe.context(e),ie.forEach((function(r){e.save(),e.globalAlpha=be(r),e.fillStyle=r.source.color,e.beginPath(),oe(r),e.fill(),k>0&&(e.strokeStyle=pe(m(m({},r),{},{color:r.source.color})),e.lineWidth=k,e.stroke()),e.restore()})),e.restore()),"arcs"===r&&(e.save(),e.translate($.left+ee[0],$.top+ee[1]),ne.context(e),ae.forEach((function(r){e.save(),e.globalAlpha=se(r),e.fillStyle=r.color,e.beginPath(),ne(r),e.fill(),A>0&&(e.strokeStyle=ge(r),e.lineWidth=A,e.stroke()),e.restore()})),e.restore()),"labels"===r&&!0===G&&(e.save(),e.translate($.left+ee[0],$.top+ee[1]),e.font="".concat(de.labels.text.fontSize,"px ").concat(de.labels.text.fontFamily||"sans-serif"),ae.forEach((function(r){var t=Object(a.R)(r),n=Object(a.J)(re+L,t,W);e.save(),e.translate(n.x,n.y),e.rotate(Object(a.E)(n.rotate)),e.textAlign=n.align,e.textBaseline=n.baseline,e.fillStyle=fe(r,de),e.fillText(r.label,0,0),e.restore()})),e.restore()),"legends"===r){e.save(),e.translate($.left,$.top);var t=ae.map((function(e){return{id:e.id,label:e.label,color:e.color}}));Q.forEach((function(r){Object(c.q)(e,m(m({},r),{},{data:t,containerWidth:_,containerHeight:z,theme:de}))})),e.restore()}"function"==typeof r&&r(e,ve)}))}),[U,_,z,K,X,$,r,de,O,ae,ne,se,A,ge,ie,oe,be,k,pe,G,L,W,fe,Q,ve]);var he=Object(s.i)(),Oe=he.showTooltipFromEvent,me=he.hideTooltip,ye=Object(n.useCallback)((function(e){var r=D({event:e,canvasEl:U.current,center:ee,margin:$,radius:re,innerRadius:te,arcs:ae});r?(ue(r),Oe(o.a.createElement(C,{arc:r}),e),!le&&P&&P(r,e),V&&V(r,e),le&&le.id!==r.id&&N&&N(r,e)):(ue(null),me(),le&&N&&N(le,e))}),[U,ee,$,re,te,ae,ue,Oe,me,P,V,N]),Ae=Object(n.useCallback)((function(){ue(null),me()}),[ue,me]),Me=Object(n.useCallback)((function(e){if(J){var r=D({event:e,canvasEl:U.current,center:ee,margin:$,radius:re,innerRadius:te,arcs:ae});r&&J(r,e)}}),[U,ee,$,re,te,ae,J]);return o.a.createElement("canvas",{ref:U,width:K*r,height:X*r,style:{width:K,height:X,cursor:F?"auto":"normal"},onMouseEnter:F?ye:void 0,onMouseMove:F?ye:void 0,onMouseLeave:F?Ae:void 0,onClick:F?Me:void 0})}));J.defaultProps=E;var Q=Object(a.ub)(J),U=function(e){return o.a.createElement(a.k,null,(function(r){var t=r.width,n=r.height;return o.a.createElement(N,Object.assign({width:t,height:n},e))}))},Y=function(e){return o.a.createElement(a.k,null,(function(r){var t=r.width,n=r.height;return o.a.createElement(Q,Object.assign({width:t,height:n},e))}))}}).call(this,t("pCvA"))},QU3t:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return y}));var n=t("/Cyf"),o=Math.cos,a=Math.sin,i=Math.PI,c=i/2,l=2*i,u=Math.max;function s(e){return function(r,t){return e(r.source.value+r.target.value,t.source.value+t.target.value)}}var b=function(){var e=0,r=null,t=null,o=null;function a(a){var i,c,s,b,d,f,g=a.length,p=[],v=Object(n.b)(g),h=[],O=[],m=O.groups=new Array(g),y=new Array(g*g);for(i=0,d=-1;++d<g;){for(c=0,f=-1;++f<g;)c+=a[d][f];p.push(c),h.push(Object(n.b)(g)),i+=c}for(r&&v.sort((function(e,t){return r(p[e],p[t])})),t&&h.forEach((function(e,r){e.sort((function(e,n){return t(a[r][e],a[r][n])}))})),b=(i=u(0,l-e*g)/i)?e:l/g,c=0,d=-1;++d<g;){for(s=c,f=-1;++f<g;){var A=v[d],M=h[A][f],j=a[A][M],R=c,E=c+=j*i;y[M*g+A]={index:A,subindex:M,startAngle:R,endAngle:E,value:j}}m[A]={index:A,startAngle:s,endAngle:c,value:p[A]},c+=b}for(d=-1;++d<g;)for(f=d-1;++f<g;){var C=y[f*g+d],k=y[d*g+f];(C.value||k.value)&&O.push(C.value<k.value?{source:k,target:C}:{source:C,target:k})}return o?O.sort(o):O}return a.padAngle=function(r){return arguments.length?(e=u(0,r),a):e},a.sortGroups=function(e){return arguments.length?(r=e,a):r},a.sortSubgroups=function(e){return arguments.length?(t=e,a):t},a.sortChords=function(e){return arguments.length?(null==e?o=null:(o=s(e))._=e,a):o&&o._},a},d=Array.prototype.slice,f=function(e){return function(){return e}},g=t("VSTl");function p(e){return e.source}function v(e){return e.target}function h(e){return e.radius}function O(e){return e.startAngle}function m(e){return e.endAngle}var y=function(){var e=p,r=v,t=h,n=O,i=m,l=null;function u(){var u,s=d.call(arguments),b=e.apply(this,s),f=r.apply(this,s),p=+t.apply(this,(s[0]=b,s)),v=n.apply(this,s)-c,h=i.apply(this,s)-c,O=p*o(v),m=p*a(v),y=+t.apply(this,(s[0]=f,s)),A=n.apply(this,s)-c,M=i.apply(this,s)-c;if(l||(l=u=Object(g.a)()),l.moveTo(O,m),l.arc(0,0,p,v,h),v===A&&h===M||(l.quadraticCurveTo(0,0,y*o(A),y*a(A)),l.arc(0,0,y,A,M)),l.quadraticCurveTo(0,0,O,m),l.closePath(),u)return l=null,u+""||null}return u.radius=function(e){return arguments.length?(t="function"==typeof e?e:f(+e),u):t},u.startAngle=function(e){return arguments.length?(n="function"==typeof e?e:f(+e),u):n},u.endAngle=function(e){return arguments.length?(i="function"==typeof e?e:f(+e),u):i},u.source=function(r){return arguments.length?(e=r,u):e},u.target=function(e){return arguments.length?(r=e,u):r},u.context=function(e){return arguments.length?(l=null==e?null:e,u):l},u}},qg2j:function(e,r,t){var n=t("Dh2Y"),o=t("JIgs"),a=t("tDyL");e.exports=function(e,r){var t={};return r=a(r,3),o(e,(function(e,o,a){n(t,o,r(e,o,a))})),t}}}]);
//# sourceMappingURL=a77d954936de97652c28cdb7523a1ba16279dcf7-46573c78f1589275aad1.js.map