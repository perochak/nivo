"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6128],{76173:function(e,o,r){r.d(o,{wp:function(){return Q},gL:function(){return X},yI:function(){return de},_3:function(){return ie},lG:function(){return G}});var n=r(27378),t=r(45434),i=Array.prototype.slice;function l(e){for(var o,r,n=0,t=(e=function(e){for(var o,r,n=e.length;n;)r=Math.random()*n--|0,o=e[n],e[n]=e[r],e[r]=o;return e}(i.call(e))).length,l=[];n<t;)o=e[n],r&&d(r,o)?++n:(r=c(l=a(l,o)),n=0);return r}function a(e,o){var r,n;if(s(o,e))return[o];for(r=0;r<e.length;++r)if(u(o,e[r])&&s(v(e[r],o),e))return[e[r],o];for(r=0;r<e.length-1;++r)for(n=r+1;n<e.length;++n)if(u(v(e[r],e[n]),o)&&u(v(e[r],o),e[n])&&u(v(e[n],o),e[r])&&s(f(e[r],e[n],o),e))return[e[r],e[n],o];throw new Error}function u(e,o){var r=e.r-o.r,n=o.x-e.x,t=o.y-e.y;return r<0||r*r<n*n+t*t}function d(e,o){var r=e.r-o.r+1e-6,n=o.x-e.x,t=o.y-e.y;return r>0&&r*r>n*n+t*t}function s(e,o){for(var r=0;r<o.length;++r)if(!d(e,o[r]))return!1;return!0}function c(e){switch(e.length){case 1:return{x:(o=e[0]).x,y:o.y,r:o.r};case 2:return v(e[0],e[1]);case 3:return f(e[0],e[1],e[2])}var o}function v(e,o){var r=e.x,n=e.y,t=e.r,i=o.x,l=o.y,a=o.r,u=i-r,d=l-n,s=a-t,c=Math.sqrt(u*u+d*d);return{x:(r+i+u/c*s)/2,y:(n+l+d/c*s)/2,r:(c+t+a)/2}}function f(e,o,r){var n=e.x,t=e.y,i=e.r,l=o.x,a=o.y,u=o.r,d=r.x,s=r.y,c=r.r,v=n-l,f=n-d,h=t-a,x=t-s,p=u-i,y=c-i,m=n*n+t*t-i*i,b=m-l*l-a*a+u*u,C=m-d*d-s*s+c*c,g=f*h-v*x,M=(h*C-x*b)/(2*g)-n,k=(x*p-h*y)/g,w=(f*b-v*C)/(2*g)-t,F=(v*y-f*p)/g,j=k*k+F*F-1,E=2*(i+M*k+w*F),L=M*M+w*w-i*i,I=-(j?(E+Math.sqrt(E*E-4*j*L))/(2*j):L/E);return{x:n+M+k*I,y:t+w+F*I,r:I}}function h(e,o,r){var n,t,i,l,a=e.x-o.x,u=e.y-o.y,d=a*a+u*u;d?(t=o.r+r.r,t*=t,l=e.r+r.r,t>(l*=l)?(n=(d+l-t)/(2*d),i=Math.sqrt(Math.max(0,l/d-n*n)),r.x=e.x-n*a-i*u,r.y=e.y-n*u+i*a):(n=(d+t-l)/(2*d),i=Math.sqrt(Math.max(0,t/d-n*n)),r.x=o.x+n*a-i*u,r.y=o.y+n*u+i*a)):(r.x=o.x+r.r,r.y=o.y)}function x(e,o){var r=e.r+o.r-1e-6,n=o.x-e.x,t=o.y-e.y;return r>0&&r*r>n*n+t*t}function p(e){var o=e._,r=e.next._,n=o.r+r.r,t=(o.x*r.r+r.x*o.r)/n,i=(o.y*r.r+r.y*o.r)/n;return t*t+i*i}function y(e){this._=e,this.next=null,this.previous=null}function m(e){if(!(t=e.length))return 0;var o,r,n,t,i,a,u,d,s,c,v;if((o=e[0]).x=0,o.y=0,!(t>1))return o.r;if(r=e[1],o.x=-r.r,r.x=o.r,r.y=0,!(t>2))return o.r+r.r;h(r,o,n=e[2]),o=new y(o),r=new y(r),n=new y(n),o.next=n.previous=r,r.next=o.previous=n,n.next=r.previous=o;e:for(u=3;u<t;++u){h(o._,r._,n=e[u]),n=new y(n),d=r.next,s=o.previous,c=r._.r,v=o._.r;do{if(c<=v){if(x(d._,n._)){r=d,o.next=r,r.previous=o,--u;continue e}c+=d._.r,d=d.next}else{if(x(s._,n._)){(o=s).next=r,r.previous=o,--u;continue e}v+=s._.r,s=s.previous}}while(d!==s.next);for(n.previous=o,n.next=r,o.next=r.previous=r=n,i=p(o);(n=n.next)!==r;)(a=p(n))<i&&(o=n,i=a);r=o.next}for(o=[r._],n=r;(n=n.next)!==r;)o.push(n._);for(n=l(o),u=0;u<t;++u)(o=e[u]).x-=n.x,o.y-=n.y;return n.r}var b=r(69997),C=r(45228);function g(e){return Math.sqrt(e.value)}function M(e){return function(o){o.children||(o.r=Math.max(0,+e(o)||0))}}function k(e,o){return function(r){if(n=r.children){var n,t,i,l=n.length,a=e(r)*o||0;if(a)for(t=0;t<l;++t)n[t].r+=a;if(i=m(n),a)for(t=0;t<l;++t)n[t].r-=a;r.r=i+a}}}function w(e){return function(o){var r=o.parent;o.r*=e,r&&(o.x=r.x+e*o.x,o.y=r.y+e*o.y)}}var F=r(65591),j=r(30454),E=r.n(j),L=r(95099),I=r.n(L),W=r(79234),B=r(89193),R=r(24246),_=r(58493);function O(){return O=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},O.apply(this,arguments)}function P(e,o){if(null==e)return{};var r,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}var S,T=function(e){var o,r=e.data,n=e.id,i=e.value,l=e.valueFormat,a=e.width,u=e.height,d=e.padding,s=e.leavesOnly,c=e.colors,v=e.colorBy,f=e.inheritColorFromParent,h=e.childColor,x=(0,t.LR)(n),p=(0,t.LR)(i),y=(0,t.O_)(l),m=(0,W.U)(c,v),j=(0,t.Fg)(),L=(0,W.Bf)(h,j),B=E()(r),R=(0,F.ZP)(B).sum(p),_=function(){var e=null,o=1,r=1,n=C.G;function t(t){return t.x=o/2,t.y=r/2,e?t.eachBefore(M(e)).eachAfter(k(n,.5)).eachBefore(w(1)):t.eachBefore(M(g)).eachAfter(k(C.G,1)).eachAfter(k(n,t.r/Math.min(o,r))).eachBefore(w(Math.min(o,r)/(2*t.r))),t}return t.radius=function(o){return arguments.length?(e=(0,b.j)(o),t):e},t.size=function(e){return arguments.length?(o=+e[0],r=+e[1],t):[o,r]},t.padding=function(e){return arguments.length?(n="function"==typeof e?e:(0,C.Z)(+e),t):n},t}().size([a,u]).padding(d)(R),O=s?_.leaves():_.descendants(),P=I()(O,"depth"),S=null!=(o=R.value)?o:0,T=P.reduce((function(e,o){var r,n=x(o.data),t=o.value,i=100*t/S,a=o.ancestors().map((function(e){return x(e.data)}));o.parent&&(r=e.find((function(e){return e.id===x(o.parent.data)})));var u={id:n,path:a,value:t,percentage:i,formattedValue:l?y(t):i.toFixed(2)+"%",x:o.x,y:o.y,radius:o.r,color:"",data:o.data,depth:o.depth,height:o.height};return f&&r&&u.depth>1?u.color=L(r):u.color=m(u),[].concat(e,[u])}),[]);return T},q=function(e,o,r,t){return(0,n.useMemo)((function(){if(!o)return e;var n=e.find((function(e){return e.id===o}));if(!n)return e;var i=Math.min(r,t)/(2*n.radius),l=r/2-n.x*i,a=t/2-n.y*i;return e.map((function(e){return O({},e,{x:e.x*i+l,y:e.y*i+a,radius:e.radius*i})}))}),[e,o,r,t])},z=function(e){var o=e.nodes,r=e.label,i=e.filter,l=e.skipRadius,a=e.textColor,u=(0,t.LR)(r),d=(0,t.Fg)(),s=(0,W.Bf)(a,d),c=(0,n.useMemo)((function(){return o.filter((function(e){return e.radius>=l})).map((function(e){return{label:u(e),textColor:s(e),node:e}}))}),[o,l,u,s]);return(0,n.useMemo)((function(){return i?c.filter(i):c}),[c,i])},A=function(e,o){var r=o.onMouseEnter,t=o.onMouseMove,i=o.onMouseLeave,l=o.onClick;return(0,n.useMemo)((function(){return{onMouseEnter:r?function(o){r(e,o)}:void 0,onMouseMove:t?function(o){t(e,o)}:void 0,onMouseLeave:i?function(o){i(e,o)}:void 0,onClick:l?function(o){l(e,o)}:void 0}}),[e,r,t,i,l])},H=function(e){var o=e.nodes;return(0,n.useMemo)((function(){return{nodes:o}}),[o])},G={id:"id",value:"value",padding:0,leavesOnly:!1,layers:["circles","labels"],colors:{scheme:"nivo"},colorBy:"depth",inheritColorFromParent:!1,childColor:{from:"color",modifiers:[["darker",.3]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},defs:[],fill:[],enableLabels:!1,label:"id",labelTextColor:{from:"color",modifiers:[["darker",1.6]]},labelsSkipRadius:8,isInteractive:!0,tooltip:function(e){var o=e.id,r=e.formattedValue,n=e.color;return(0,R.jsx)(B._5,{id:o,value:r,enableChip:!0,color:n})},animate:!0,motionConfig:"gentle",role:"img",pixelRatio:"undefined"!=typeof window&&null!=(S=window.devicePixelRatio)?S:1},U=function(e){return(0,_.to)([e],(function(e){return Math.max(0,e)}))},V=function(e){var o=e.nodes,r=e.borderWidth,i=e.borderColor,l=e.component,a=e.isInteractive,u=e.onMouseEnter,d=e.onMouseMove,s=e.onMouseLeave,c=e.onClick,v=e.tooltip,f=(0,B.lL)(),h=f.showTooltipFromEvent,x=f.hideTooltip,p=(0,n.useMemo)((function(){if(a)return function(e,o){h((0,n.createElement)(v,e),o),null==u||u(e,o)}}),[a,h,v,u]),y=(0,n.useMemo)((function(){if(a)return function(e,o){h((0,n.createElement)(v,e),o),null==d||d(e,o)}}),[a,h,v,d]),m=(0,n.useMemo)((function(){if(a)return function(e,o){x(),null==s||s(e,o)}}),[a,x,s]),b=(0,n.useMemo)((function(){if(a)return function(e,o){null==c||c(e,o)}}),[a,c]),C=(0,t.tf)(),g=C.animate,M=C.config,k=(0,t.Fg)(),w=(0,W.Bf)(i,k),F=(0,n.useMemo)((function(){return e=w,{enter:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}},update:function(o){return{x:o.x,y:o.y,radius:o.radius,color:o.color,borderColor:e(o),opacity:1}},leave:function(o){return{x:o.x,y:o.y,radius:0,color:o.color,borderColor:e(o),opacity:0}}};var e}),[w]),j=(0,_.useTransition)(o,{keys:function(e){return e.id},initial:F.update,from:F.enter,enter:F.update,update:F.update,leave:F.leave,config:M,immediate:!g});return(0,R.jsx)(R.Fragment,{children:j((function(e,o){return n.createElement(l,{key:o.id,node:o,style:O({},e,{radius:U(e.radius),borderWidth:r}),onMouseEnter:p,onMouseMove:y,onMouseLeave:m,onClick:b})}))})},Z=function(e){var o=e.node,r=e.style,n=e.onMouseEnter,t=e.onMouseMove,i=e.onMouseLeave,l=e.onClick,a=A(o,{onMouseEnter:n,onMouseMove:t,onMouseLeave:i,onClick:l});return(0,R.jsx)(_.q.circle,{cx:r.x,cy:r.y,r:r.radius,fill:o.fill||r.color,stroke:r.borderColor,strokeWidth:r.borderWidth,opacity:r.opacity,onMouseEnter:a.onMouseEnter,onMouseMove:a.onMouseMove,onMouseLeave:a.onMouseLeave,onClick:a.onClick},o.id)},K=function(e){var o=e.nodes,r=e.label,i=e.filter,l=e.skipRadius,a=e.textColor,u=e.component,d=(0,t.tf)(),s=d.animate,c=d.config,v=z({nodes:o,label:r,filter:i,skipRadius:l,textColor:a}),f=(0,n.useMemo)((function(){return{enter:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}},update:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:1}},leave:function(e){return{x:e.node.x,y:e.node.y,radius:e.node.radius,textColor:e.textColor,opacity:0}}}}),[]),h=(0,_.useTransition)(v,{keys:function(e){return e.node.id},initial:f.update,from:f.enter,enter:f.update,update:f.update,leave:f.leave,config:c,immediate:!s});return(0,R.jsx)(R.Fragment,{children:h((function(e,o){return(0,n.createElement)(u,{key:o.node.id,label:o.label,style:O({},e,{radius:U(e.radius)}),node:o.node})}))})},D=function(e){var o=e.node,r=e.label,n=e.style,i=(0,t.Fg)();return(0,R.jsx)(_.q.text,{x:n.x,y:n.y,textAnchor:"middle",dominantBaseline:"central",style:O({},i.labels.text,{fill:n.textColor,opacity:n.opacity,pointerEvents:"none"}),children:r},o.id)},J=["theme","isInteractive","animate","motionConfig","renderWrapper"],N=function(e){var o=e.data,r=e.id,i=void 0===r?G.id:r,l=e.value,a=void 0===l?G.value:l,u=e.valueFormat,d=e.width,s=e.height,c=e.margin,v=e.padding,f=void 0===v?G.padding:v,h=e.leavesOnly,x=void 0===h?G.leavesOnly:h,p=e.colors,y=void 0===p?G.colors:p,m=e.colorBy,b=void 0===m?G.colorBy:m,C=e.inheritColorFromParent,g=void 0===C?G.inheritColorFromParent:C,M=e.childColor,k=void 0===M?G.childColor:M,w=e.borderWidth,F=void 0===w?G.borderWidth:w,j=e.borderColor,E=void 0===j?G.borderColor:j,L=e.circleComponent,I=void 0===L?Z:L,W=e.defs,B=void 0===W?G.defs:W,_=e.fill,O=void 0===_?G.fill:_,P=e.enableLabels,S=void 0===P?G.enableLabels:P,z=e.label,A=void 0===z?G.label:z,U=e.labelsFilter,J=e.labelsSkipRadius,N=void 0===J?G.labelsSkipRadius:J,Q=e.labelTextColor,X=void 0===Q?G.labelTextColor:Q,Y=e.labelComponent,$=void 0===Y?D:Y,ee=e.layers,oe=void 0===ee?G.layers:ee,re=e.isInteractive,ne=e.onMouseEnter,te=e.onMouseMove,ie=e.onMouseLeave,le=e.onClick,ae=e.tooltip,ue=void 0===ae?G.tooltip:ae,de=e.zoomedId,se=e.role,ce=void 0===se?G.role:se,ve=(0,t.Bs)(d,s,c),fe=ve.outerWidth,he=ve.outerHeight,xe=ve.margin,pe=ve.innerWidth,ye=ve.innerHeight,me=T({data:o,id:i,value:a,valueFormat:u,width:pe,height:ye,padding:f,leavesOnly:x,colors:y,colorBy:b,inheritColorFromParent:g,childColor:k}),be=q(me,de,pe,ye),Ce=(0,n.useMemo)((function(){return(0,t.yU)(B,be,O,{targetKey:"fill"})}),[B,be,O]),ge={circles:null,labels:null};oe.includes("circles")&&(ge.circles=(0,R.jsx)(V,{nodes:be,borderWidth:F,borderColor:E,isInteractive:re,onMouseEnter:ne,onMouseMove:te,onMouseLeave:ie,onClick:le,component:I,tooltip:ue},"circles")),S&&oe.includes("labels")&&(ge.labels=(0,R.jsx)(K,{nodes:be,label:A,filter:U,skipRadius:N,textColor:X,component:$},"labels"));var Me=H({nodes:me});return(0,R.jsx)(t.tM,{width:fe,height:he,margin:xe,defs:Ce,role:ce,children:oe.map((function(e,o){return void 0!==ge[e]?ge[e]:"function"==typeof e?(0,R.jsx)(n.Fragment,{children:(0,n.createElement)(e,Me)},o):null}))})},Q=function(e){var o=e.theme,r=e.isInteractive,n=void 0===r?G.isInteractive:r,i=e.animate,l=void 0===i?G.animate:i,a=e.motionConfig,u=void 0===a?G.motionConfig:a,d=e.renderWrapper,s=P(e,J);return(0,R.jsx)(t.W2,{isInteractive:n,animate:l,motionConfig:u,renderWrapper:d,theme:o,children:(0,R.jsx)(N,O({isInteractive:n},s))})},X=function(e){return(0,R.jsx)(t.d,{children:function(o){var r=o.width,n=o.height;return(0,R.jsx)(Q,O({width:r,height:n},e))}})},Y=function(e,o){return(0,_.to)([e,o],(function(e,o){return e-o}))},$=function(e){return(0,_.to)([e],(function(e){return 2*e}))},ee=function(e){var o,r,n=e.node,t=e.style,i=e.onMouseEnter,l=e.onMouseMove,a=e.onMouseLeave,u=e.onClick,d=$(t.radius),s=A(n,{onMouseEnter:i,onMouseMove:l,onMouseLeave:a,onClick:u});return(0,R.jsx)(_.q.div,{style:{position:"absolute",top:Y(t.y,t.radius),left:Y(t.x,t.radius),height:d,width:d,borderRadius:t.radius,backgroundColor:t.color,borderWidth:(o=t.borderWidth,r=t.radius,(0,_.to)([r],(function(e){return Math.min(o,e)}))),borderStyle:"solid",borderColor:t.borderColor,boxSizing:"border-box"},onMouseEnter:s.onMouseEnter,onMouseMove:s.onMouseMove,onMouseLeave:s.onMouseLeave,onClick:s.onClick})},oe=function(e){var o=e.node,r=e.label,n=e.style,i=(0,t.Fg)(),l=$(n.radius);return(0,R.jsx)(_.q.div,{style:O({},i.labels.text,{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:Y(n.y,n.radius),left:Y(n.x,n.radius),width:l,height:l,color:n.textColor,opacity:n.opacity,pointerEvents:"none"}),children:r},o.id)},re=["theme","isInteractive","animate","motionConfig"],ne=function(e){var o=e.data,r=e.id,i=void 0===r?G.id:r,l=e.value,a=void 0===l?G.value:l,u=e.valueFormat,d=e.width,s=e.height,c=e.margin,v=e.padding,f=void 0===v?G.padding:v,h=e.leavesOnly,x=void 0===h?G.leavesOnly:h,p=e.colors,y=void 0===p?G.colors:p,m=e.colorBy,b=void 0===m?G.colorBy:m,C=e.inheritColorFromParent,g=void 0===C?G.inheritColorFromParent:C,M=e.childColor,k=void 0===M?G.childColor:M,w=e.borderWidth,F=void 0===w?G.borderWidth:w,j=e.borderColor,E=void 0===j?G.borderColor:j,L=e.circleComponent,I=void 0===L?ee:L,W=e.enableLabels,B=void 0===W?G.enableLabels:W,_=e.label,O=void 0===_?G.label:_,P=e.labelsFilter,S=e.labelsSkipRadius,z=void 0===S?G.labelsSkipRadius:S,A=e.labelTextColor,U=void 0===A?G.labelTextColor:A,Z=e.labelComponent,D=void 0===Z?oe:Z,J=e.layers,N=void 0===J?G.layers:J,Q=e.isInteractive,X=e.onMouseEnter,Y=e.onMouseMove,$=e.onMouseLeave,re=e.onClick,ne=e.tooltip,te=void 0===ne?G.tooltip:ne,ie=e.zoomedId,le=e.role,ae=void 0===le?G.role:le,ue=(0,t.Bs)(d,s,c),de=ue.outerWidth,se=ue.outerHeight,ce=ue.margin,ve=ue.innerWidth,fe=ue.innerHeight,he=T({data:o,id:i,value:a,valueFormat:u,width:ve,height:fe,padding:f,leavesOnly:x,colors:y,colorBy:b,inheritColorFromParent:g,childColor:k}),xe=q(he,ie,ve,fe),pe={circles:null,labels:null};N.includes("circles")&&(pe.circles=(0,R.jsx)(V,{nodes:xe,borderWidth:F,borderColor:E,isInteractive:Q,onMouseEnter:X,onMouseMove:Y,onMouseLeave:$,onClick:re,component:I,tooltip:te},"circles")),B&&N.includes("labels")&&(pe.labels=(0,R.jsx)(K,{nodes:xe,label:O,filter:P,skipRadius:z,textColor:U,component:D},"labels"));var ye=H({nodes:he});return(0,R.jsx)("div",{role:ae,style:{position:"relative",overflow:"hidden",width:de,height:se},children:(0,R.jsx)("div",{style:{position:"absolute",top:ce.top,left:ce.left},children:N.map((function(e,o){return void 0!==pe[e]?pe[e]:"function"==typeof e?(0,R.jsx)(n.Fragment,{children:(0,n.createElement)(e,ye)},o):null}))})})},te=function(e){var o=e.theme,r=e.isInteractive,n=void 0===r?G.isInteractive:r,i=e.animate,l=void 0===i?G.animate:i,a=e.motionConfig,u=void 0===a?G.motionConfig:a,d=P(e,re);return(0,R.jsx)(t.W2,{isInteractive:n,animate:l,motionConfig:u,theme:o,children:(0,R.jsx)(ne,O({isInteractive:n},d))})},ie=function(e){return(0,R.jsx)(t.d,{children:function(o){var r=o.width,n=o.height;return(0,R.jsx)(te,O({width:r,height:n},e))}})},le=["isInteractive","theme"],ae=function(e){var o=e.data,r=e.id,i=void 0===r?G.id:r,l=e.value,a=void 0===l?G.value:l,u=e.valueFormat,d=e.width,s=e.height,c=e.margin,v=e.padding,f=void 0===v?G.padding:v,h=e.leavesOnly,x=void 0===h?G.leavesOnly:h,p=e.colors,y=void 0===p?G.colors:p,m=e.colorBy,b=void 0===m?G.colorBy:m,C=e.inheritColorFromParent,g=void 0===C?G.inheritColorFromParent:C,M=e.childColor,k=void 0===M?G.childColor:M,w=e.borderWidth,F=void 0===w?G.borderWidth:w,j=e.borderColor,E=void 0===j?G.borderColor:j,L=e.enableLabels,_=void 0===L?G.enableLabels:L,O=e.label,P=void 0===O?G.label:O,S=e.labelsFilter,A=e.labelsSkipRadius,H=void 0===A?G.labelsSkipRadius:A,U=e.labelTextColor,V=void 0===U?G.labelTextColor:U,Z=e.isInteractive,K=e.onMouseMove,D=e.onClick,J=e.tooltip,N=void 0===J?G.tooltip:J,Q=e.zoomedId,X=e.role,Y=void 0===X?G.role:X,$=e.pixelRatio,ee=void 0===$?G.pixelRatio:$,oe=(0,n.useRef)(null),re=(0,t.Fg)(),ne=(0,t.Bs)(d,s,c),te=ne.margin,ie=ne.innerWidth,le=ne.innerHeight,ae=ne.outerWidth,ue=ne.outerHeight,de=T({data:o,id:i,value:a,valueFormat:u,width:ie,height:le,padding:f,leavesOnly:x,colors:y,colorBy:b,inheritColorFromParent:g,childColor:k}),se=q(de,Q,ie,le),ce=z({nodes:se,label:P,filter:S,skipRadius:H,textColor:V}),ve=(0,W.Bf)(E,re);(0,n.useEffect)((function(){if(oe.current){oe.current.width=ae*ee,oe.current.height=ue*ee;var e=oe.current.getContext("2d");e.scale(ee,ee),e.fillStyle=re.background,e.fillRect(0,0,ae,ue),e.save(),e.translate(te.left,te.top),se.forEach((function(o){F>0&&(e.strokeStyle=ve(o),e.lineWidth=F),e.beginPath(),e.arc(o.x,o.y,o.radius,0,2*Math.PI),e.fillStyle=o.color,e.fill(),F>0&&e.stroke()})),_&&(e.textAlign="center",e.textBaseline="middle",e.font=re.labels.text.fontSize+"px "+re.labels.text.fontFamily,ce.forEach((function(o){e.fillStyle=o.textColor,e.fillText(""+o.label,o.node.x,o.node.y)})))}}),[oe,ie,le,ae,ue,te.top,te.left,re,ee,se,_,ce,F,ve]);var fe=function(e){var o=e.nodes,r=e.canvasEl,i=e.margin,l=(0,n.useMemo)((function(){return I()(o,"height")}),[o]);return(0,n.useCallback)((function(e){if(!r.current)return null;var o=(0,t.P6)(r.current,e),n=o[0],a=o[1];return l.find((function(e){return(0,t.Sp)(e.x,e.y,n-i.left,a-i.top)<=e.radius}))}),[r,i,l])}({nodes:se,canvasEl:oe,margin:te}),he=(0,B.lL)(),xe=he.showTooltipFromEvent,pe=he.hideTooltip,ye=(0,n.useCallback)((function(e){var o=fe(e);o?(null==K||K(o,e),xe((0,n.createElement)(N,o),e)):pe()}),[fe,xe,N,pe]),me=(0,n.useCallback)((function(){pe()}),[pe]),be=(0,n.useCallback)((function(e){if(D){var o=fe(e);o&&D(o,e)}}),[fe,D]);return(0,R.jsx)("canvas",{ref:oe,width:ae*ee,height:ue*ee,style:{width:ae,height:ue,cursor:Z?"auto":"normal"},role:Y,onMouseEnter:Z?ye:void 0,onMouseMove:Z?ye:void 0,onMouseLeave:Z?me:void 0,onClick:Z?be:void 0})},ue=function(e){var o=e.isInteractive,r=void 0===o?G.isInteractive:o,n=e.theme,i=P(e,le);return(0,R.jsx)(t.W2,{isInteractive:r,theme:n,children:(0,R.jsx)(ae,O({isInteractive:r},i))})},de=function(e){return(0,R.jsx)(t.d,{children:function(o){var r=o.width,n=o.height;return(0,R.jsx)(ue,O({width:r,height:n},e))}})}}}]);
//# sourceMappingURL=012a0d7f220f502d08e25bfb12749a8ab15b25b0-4c51b24b55092d3d9d57.js.map