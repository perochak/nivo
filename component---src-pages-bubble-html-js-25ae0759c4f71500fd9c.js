(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7nGd":function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return z})),r.d(t,"b",(function(){return D})),r.d(t,"c",(function(){return I})),r.d(t,"d",(function(){return F})),r.d(t,"e",(function(){return H})),r.d(t,"f",(function(){return ne})),r.d(t,"g",(function(){return K}));r("IYjZ"),r("Eb4t"),r("fikn"),r("iTLF"),r("XQVo"),r("Qvie"),r("xl0S"),r("1c7q"),r("p0JG"),r("wDqy"),r("yvkl"),r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3");var n=r("mXGw"),o=r.n(n),i=r("wMFK"),a=r("gTDC"),l=r.n(a),c=r("5QYd"),u=r("llhf"),s=r("mrMI"),d=r("bBnb"),p=r.n(d),f=r("Cg+6"),b=r.n(f),h=r("ZXVz"),m=r.n(h),y=r("r1ui"),g=r.n(y),v=r("oek1"),O=r.n(v),w=r("W0B4"),x=r.n(w),k=r("56Mt");function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e,t,r,n){var o=e.find((function(e){return e.path===t}));if(!o)return e;var i=Math.min(r,n)/(2*o.r),a=r/2-o.x*i,l=n/2-o.y*i;return e.map((function(e){return T(T({},e),{},{r:e.r*i,x:e.x*i+a,y:e.y*i+l})}))},P={identity:x.a.oneOfType([x.a.string,x.a.func]).isRequired,colors:u.p.isRequired,colorBy:u.d.isRequired,leavesOnly:x.a.bool.isRequired,padding:x.a.number.isRequired,borderWidth:x.a.number.isRequired,borderColor:u.k.isRequired,enableLabel:x.a.bool.isRequired,label:x.a.oneOfType([x.a.string,x.a.func]).isRequired,labelFormat:x.a.string,labelTextColor:u.k.isRequired,labelSkipRadius:x.a.number.isRequired,isInteractive:x.a.bool.isRequired,onClick:x.a.func.isRequired,isZoomable:x.a.bool.isRequired,tooltipFormat:x.a.oneOfType([x.a.func,x.a.string]),tooltip:x.a.func},B=T(T({},P),{},{nodeComponent:x.a.func.isRequired,role:x.a.string.isRequired},c.D),R=T(T({},P),{},{nodeComponent:x.a.func.isRequired}),S=T(T({},P),{},{pixelRatio:x.a.number.isRequired}),q={identity:"id",leavesOnly:!1,padding:1,colors:{scheme:"nivo"},colorBy:"depth",borderWidth:0,borderColor:{from:"color"},enableLabel:!0,label:"id",labelTextColor:{from:"color",modifiers:[["darker",1]]},labelSkipRadius:8,isInteractive:!0,onClick:c.S,isZoomable:!0},I=T(T({},q),{},{nodeComponent:function(e){var t=e.node,r=e.style,n=e.handlers,i=e.theme;return r.r<=0?null:o.a.createElement("g",{transform:"translate(".concat(r.x,",").concat(r.y,")")},o.a.createElement("circle",Object.assign({r:r.r},n,{fill:r.fill?r.fill:r.color,stroke:r.borderColor,strokeWidth:r.borderWidth})),!1!==t.label&&o.a.createElement("text",{textAnchor:"middle",dominantBaseline:"central",style:T(T({},i.labels.text),{},{fill:r.labelTextColor,pointerEvents:"none"})},t.label))},role:"img",defs:[],fill:[]}),F=T(T({},q),{},{nodeComponent:function(e){var t=e.node,r=e.style,n=e.handlers;return r.r<=0?null:o.a.createElement("div",Object.assign({id:(t.data&&t.data.id?t.data.id:t.id).replace(/[^\w]/gi,"-"),style:{position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",background:r.color,color:r.labelTextColor,borderWidth:r.borderWidth,borderColor:r.borderColor,top:r.y-r.r,left:r.x-r.r,width:2*r.r,height:2*r.r,borderStyle:"solid",borderRadius:r.r}},n),!1!==t.label&&t.label)}}),D=T(T({},q),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1}),L=Object.freeze({__proto__:null,BubblePropTypes:B,BubbleHtmlPropTypes:R,BubbleCanvasPropTypes:S,BubbleDefaultProps:I,BubbleHtmlDefaultProps:F,BubbleCanvasDefaultProps:D}),W=[Object(c.tb)(),Object(c.sb)(),Object(c.vb)(),m()(["colors","colorBy"],(function(e){var t=e.colors,r=e.colorBy;return{getColor:Object(u.j)(t,r)}})),m()(["width","height","padding"],(function(e){var t=e.width,r=e.height,n=e.padding;return{pack:Object(s.b)().size([t,r]).padding(n)}})),m()(["identity"],(function(e){var t=e.identity;return{getIdentity:Object(c.F)(t)}})),m()(["borderColor","theme"],(function(e){var t=e.borderColor,r=e.theme;return{getBorderColor:Object(u.h)(t,r)}})),m()(["label","labelFormat"],(function(e){var t=e.label,r=e.labelFormat;return{getLabel:Object(c.I)(t,r)}})),m()(["labelTextColor","theme"],(function(e){var t=e.labelTextColor,r=e.theme;return{getLabelTextColor:Object(u.h)(t,r)}})),g()((function(e){var t=e.currentNodePath;return{currentNodePath:void 0===t?null:t}}),{zoomToNode:function(e){var t=e.currentNodePath;return function(e){return e===t?{currentNodePath:null}:{currentNodePath:e}}}}),m()(["root","pack","leavesOnly","getIdentity","getColor"],(function(e){return{nodes:function(e){var t=e.root,r=e.pack,n=e.leavesOnly,o=e.getIdentity,i=e.getColor;t.each((function(e){e.id=o(e.data),e.path=function(e,t){return e.ancestors().map((function(e){return t(e.data)})).join(".")}(e,o)})),r(t);var a=n?t.leaves():t.descendants();return a=a.map((function(e){return e.color=i(T(T({},e.data),{},{depth:e.depth})),e.label=!1,e}))}({root:e.root,pack:e.pack,leavesOnly:e.leavesOnly,getIdentity:e.getIdentity,getColor:e.getColor})}})),m()(["enableLabel","nodes","getLabel","labelSkipRadius"],(function(e){var t=e.enableLabel,r=e.nodes,n=e.getLabel,o=e.labelSkipRadius;if(t)return{nodes:r.map((function(e){return 0!==e.height||o>0&&e.r<o?e:T(T({},e),{},{label:n(e)})}))}})),m()(["nodes","isZoomable","currentNodePath"],(function(e){var t=e.nodes,r=e.isZoomable,n=e.currentNodePath,o=e.width,i=e.height;if(n&&r)return{nodes:E(t,n,o,i)}}))],N=[m()(["nodes","defs","fill"],(function(e){var t=e.nodes,r=e.defs,n=e.fill;return{defs:Object(c.r)(r,t,n,{targetKey:"fill"})}}))],_=function(e){var t=L["".concat(e.displayName,"PropTypes")],r=L["".concat(e.displayName,"DefaultProps")];switch(e.propTypes=t,e.displayName){case"Bubble":return p.a.apply(void 0,[b()(r)].concat(W,N,[Object(c.ub)(),O.a]))(e);case"BubbleHtml":return p.a.apply(void 0,[b()(r)].concat(W,[Object(c.ub)(),O.a]))(e);case"BubbleCanvas":return p.a.apply(void 0,[b()(r)].concat(W,[O.a]))(e)}return e},M=function(e){var t=e.data;return T({scale:0,r:0,x:t.x,y:t.y},Object(u.l)(t.color))},V=function(e){return function(t){var r=t.data;return T({scale:Object(i.spring)(0,e),r:Object(i.spring)(0,e),x:Object(i.spring)(r.x,e),y:Object(i.spring)(r.y,e)},Object(u.l)(r.color,e))}},Z=function(e,t){var r=t.isInteractive,n=t.onClick,i=t.showTooltip,a=t.hideTooltip,l=t.isZoomable,c=t.zoomToNode,u=t.theme,s=t.tooltipFormat,d=t.tooltip;if(!r)return{};var p=function(t){i(o.a.createElement(k.a,{id:e.id,value:e.value,enableChip:!0,color:e.color,theme:u,format:s,renderContent:"function"==typeof d?d.bind(null,T({node:e},e)):null}),t)};return{onMouseEnter:p,onMouseMove:p,onMouseLeave:a,onClick:l?function(t){n(e,t),c(e.path)}:function(t){n(e,t)}}},A=function(e){var t=e.nodes,r=e.nodeComponent,n=e.margin,a=e.outerWidth,s=e.outerHeight,d=e.theme,p=e.borderWidth,f=e.getBorderColor,b=e.defs,h=e.getLabelTextColor,m=e.animate,y=e.motionStiffness,g=e.motionDamping,v=e.isInteractive,O=e.onClick,w=e.tooltipFormat,x=e.tooltip,k=e.isZoomable,C=e.zoomToNode,j=e.role,E={stiffness:y,damping:g},P=function(e,t,r){return Z(e,{isInteractive:v,onClick:O,showTooltip:t,hideTooltip:r,isZoomable:k,zoomToNode:C,theme:d,tooltipFormat:w,tooltip:x})};return o.a.createElement(c.b,{isInteractive:v,theme:d,animate:m,motionStiffness:y,motionDamping:g},(function(e){var y=e.showTooltip,g=e.hideTooltip;return o.a.createElement(c.k,{width:a,height:s,margin:n,defs:b,theme:d,role:j},!m&&o.a.createElement("g",null,t.map((function(e){return o.a.createElement(r,{key:e.path,node:e,style:T(T({},l()(e,["scale","r","x","y","color"])),{},{fill:e.fill,borderWidth:p,borderColor:f(e),labelTextColor:h(e)}),handlers:P(e,y,g),theme:d})}))),m&&o.a.createElement(i.TransitionMotion,{willEnter:M,willLeave:V(E),styles:t.map((function(e){return{key:e.path,data:e,style:T({scale:Object(i.spring)(1,E),r:Object(i.spring)(e.r,E),x:Object(i.spring)(e.x,E),y:Object(i.spring)(e.y,E),opacity:Object(i.spring)(1,E)},Object(u.l)(e.color,E))}}))},(function(e){return o.a.createElement("g",null,e.map((function(e){var t=e.style,n=e.data;return t.color=Object(u.i)(t),o.a.createElement(r,{key:n.path,node:n,style:T(T({},t),{},{fill:n.fill,borderWidth:p,borderColor:f(t),labelTextColor:h(t)}),handlers:P(n,y,g),theme:d})})))})))}))};A.displayName="Bubble";var z=_(A);z.displayName="Bubble";var H=function(e){return o.a.createElement(c.j,null,(function(t){var r=t.width,n=t.height;return o.a.createElement(z,Object.assign({width:r,height:n},e))}))},G=function(e){var t=e.nodes,r=e.nodeComponent,n=e.margin,a=e.outerWidth,s=e.outerHeight,d=e.theme,p=e.borderWidth,f=e.getBorderColor,b=e.getLabelTextColor,h=e.animate,m=e.motionStiffness,y=e.motionDamping,g=e.isInteractive,v=e.onClick,O=e.isZoomable,w=e.zoomToNode,x=e.tooltipFormat,k=e.tooltip,C={stiffness:m,damping:y},j=function(e,t,r){return Z(e,{isInteractive:g,onClick:v,showTooltip:t,hideTooltip:r,isZoomable:O,zoomToNode:w,theme:d,tooltipFormat:x,tooltip:k})};return o.a.createElement(c.b,{isInteractive:g,theme:d,animate:h,motionStiffness:m,motionDamping:y},(function(e){var c=e.showTooltip,d=e.hideTooltip;return o.a.createElement("div",{style:{position:"relative",width:a,height:s}},!h&&o.a.createElement("div",{style:{position:"absolute",top:n.top,left:n.left}},t.map((function(e){return o.a.createElement(r,{key:e.path,node:e,style:T(T({},l()(e,["scale","r","x","y","color"])),{},{borderWidth:p,borderColor:f(e),labelTextColor:b(e)}),handlers:j(e,c,d)})}))),h&&o.a.createElement(i.TransitionMotion,{willEnter:M,willLeave:V(C),styles:t.map((function(e){return{key:e.path,data:e,style:T({scale:Object(i.spring)(1,C),r:Object(i.spring)(e.r,C),x:Object(i.spring)(e.x,C),y:Object(i.spring)(e.y,C),opacity:Object(i.spring)(1,C)},Object(u.l)(e.color,C))}}))},(function(e){return o.a.createElement("div",{style:{position:"absolute",top:n.top,left:n.left}},e.map((function(e){var t=e.style,n=e.data;return t.color=Object(u.i)(t),o.a.createElement(r,{key:n.path,node:n,style:T(T({},t),{},{borderWidth:p,borderColor:f(t),labelTextColor:b(t)}),handlers:j(n,c,d)})})))})))}))};G.displayName="BubbleHtml";var Q=_(G);Q.displayName="BubbleHtml";var K=function(e){return o.a.createElement(c.j,null,(function(t){var r=t.width,n=t.height;return o.a.createElement(Q,Object.assign({width:r,height:n},e))}))};function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(l,e);var t,r,n,i,a=(t=l,function(){var e,r=U(t);if(Y()){var n=U(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return ee(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),a.apply(this,arguments)}return r=l,(n=[{key:"componentDidMount",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"componentDidUpdate",value:function(){this.ctx=this.surface.getContext("2d"),this.draw(this.props)}},{key:"draw",value:function(e){var t=this,r=e.nodes,n=e.pixelRatio,o=e.margin,i=e.outerWidth,a=e.outerHeight,l=e.theme,c=e.borderWidth,u=e.getBorderColor,s=e.enableLabel,d=e.getLabel,p=e.labelSkipRadius,f=e.getLabelTextColor;this.surface.width=i*n,this.surface.height=a*n,this.ctx.scale(n,n),this.ctx.fillStyle=l.background,this.ctx.fillRect(0,0,i,a),this.ctx.translate(o.left,o.top),r.forEach((function(e){t.ctx.save(),c>0&&(t.ctx.strokeStyle=u(e),t.ctx.lineWidth=c),t.ctx.beginPath(),t.ctx.arc(e.x,e.y,e.r,0,2*Math.PI),t.ctx.fillStyle=e.color,t.ctx.fill(),c>0&&t.ctx.stroke()})),s&&(this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="".concat(l.labels.text.fontSize,"px ").concat(l.labels.text.fontFamily),r.filter((function(e){return e.r>p})).forEach((function(e){var r=d(e),n=f(e);t.ctx.fillStyle=n,t.ctx.fillText(r,e.x,e.y)})))}},{key:"render",value:function(){var e=this,t=this.props,r=t.outerWidth,n=t.outerHeight,i=t.pixelRatio,a=t.isInteractive,l=t.theme;return o.a.createElement(c.b,{isInteractive:a,theme:l,animate:!1},(function(){return o.a.createElement("canvas",{ref:function(t){e.surface=t},width:r*i,height:n*i,style:{width:r,height:n}})}))}}])&&X(r.prototype,n),i&&X(r,i),l}(n.Component);te.displayName="BubbleCanvas";var re=_(te);re.displayName="BubbleCanvas";var ne=function(e){return o.a.createElement(c.j,null,(function(t){var r=t.width,n=t.height;return o.a.createElement(re,Object.assign({width:r,height:n},e))}))}}).call(this,r("pCvA"))},OD1n:function(e,t,r){"use strict";var n=r("nLLr");t.a=Object(n.c)({label:function(e){return"d => `${d.id}: ${d.value}`"===e?function(e){return e.id+": "+e.value}:e}})},QQ1a:function(e,t,r){"use strict";t.__esModule=!0,t.default=void 0;var n=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n));return r};t.default=n},"Xd+p":function(e,t,r){"use strict";r.r(t);r("abGl"),r("gZHo"),r("Fdmb"),r("Ir+3"),r("1c7q");var n=r("mXGw"),o=r.n(n),i=r("7nGd"),a=r("6zZa"),l=r("ZS2m"),c=r("2Au1"),u=r.n(c),s=r("OD1n"),d=r("vl/B");var p={margin:{top:20,right:20,bottom:20,left:20},identity:"name",value:"loc",colors:{scheme:"paired"},colorBy:"depth",padding:1,leavesOnly:!1,enableLabel:!0,label:"id",labelSkipRadius:10,labelTextColor:{from:"color",modifiers:[["darker",.8]]},borderWidth:0,borderColor:{from:"color",modifiers:[["darker",.3]]},animate:!0,motionStiffness:90,motionDamping:12,isInteractive:!0,isZoomable:!0};t.default=function(){return o.a.createElement(l.a,{name:"BubbleHtml",meta:u.a.BubbleHtml,icon:"circle-packing",flavors:u.a.flavors,currentFlavor:"html",properties:d.a,initialProperties:p,defaultProperties:i.d,propertiesMapper:s.a,generateData:a.f,dataKey:"root"},(function(e,t,r,n){return o.a.createElement(i.g,Object.assign({root:t},e,{theme:r,onClick:function(e){e.children,e.parent;var t=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["children","parent"]);n({type:"click",label:t.id+": "+t.value,color:t.color,data:t})}}))}))}},nKO5:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var o=n(r("QKC2")),i=r("mXGw"),a=(n(r("lPWr")),n(r("6lSW")),function(e){return function(t){var r=(0,i.createFactory)(t);return function(t){function n(){return t.apply(this,arguments)||this}(0,o.default)(n,t);var i=n.prototype;return i.shouldComponentUpdate=function(t){return e(this.props,t)},i.render=function(){return r(this.props)},n}(i.Component)}});t.default=a},oek1:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var o=n(r("nKO5")),i=n(r("lcr2")),a=(n(r("lPWr")),n(r("6lSW")),function(e){return(0,o.default)((function(e,t){return!(0,i.default)(e,t)}))(e)});t.default=a},r1ui:function(e,t,r){"use strict";var n=r("63Ad");t.__esModule=!0,t.default=void 0;var o=n(r("8VmE")),i=n(r("QKC2")),a=r("mXGw"),l=(n(r("lPWr")),n(r("6lSW")),n(r("QQ1a"))),c=function(e,t){return function(r){var n=(0,a.createFactory)(r);return function(r){function a(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=r.call.apply(r,[this].concat(i))||this).state="function"==typeof e?e(n.props):e,n.stateUpdaters=(0,l.default)(t,(function(e){return function(t){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];t&&"function"==typeof t.persist&&t.persist(),n.setState((function(r,n){return e(r,n).apply(void 0,[t].concat(o))}))}})),n}return(0,i.default)(a,r),a.prototype.render=function(){return n((0,o.default)({},this.props,this.state,this.stateUpdaters))},a}(a.Component)}};t.default=c},"vl/B":function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r("VlJN"),r("YjJN"),r("Eb4t"),r("Fdmb"),r("IYjZ"),r("yvkl"),r("abGl");var n=r("7nGd"),o=r("RQLE");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=[{key:"root",help:"The hierarchical data object.",type:"object",required:!0,group:"Base"},{key:"identity",help:"Define id accessor.",description:"\n            define id accessor, if string given, will use\n            `datum[value]`, if function given, it will be\n            invoked for each node and will receive the node as\n            first argument, it must return the node value.\n        ",type:"string | Function",required:!1,defaultValue:n.c.identity,group:"Base"},{key:"value",help:"Define value accessor.",description:"\n            define value accessor, if string given, will use\n            `datum[value]`, if function given, it will be\n            invoked for each node and will receive the node as\n            first argument, it must return the node value.\n        ",type:"string | Function",required:!1,defaultValue:"value",group:"Base"},{key:"width",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using `<ResponsiveBubble/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using `<ResponsiveBubble/>`.\n        ",type:"number",required:!0,controlType:"range",group:"Base",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"leavesOnly",help:"Only render leaf nodes (skip parent nodes).",type:"boolean",required:!1,defaultValue:n.c.leavesOnly,controlType:"switch",group:"Base"},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"padding",help:"Padding between each circle.",description:"\n            Padding between adjacent circles.\n            Please be aware that when zoomed\n            this value will be affected by the zooming factor\n            and is expressed in pixels. See the\n            [official d3 documentation](https://github.com/d3/d3-hierarchy#pack_padding).\n        ",type:"number",required:!1,defaultValue:n.c.padding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},o.f,{key:"colors",help:"Defines how to compute node color.",description:"\n            colors used to colorize the circles,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | Function | string[]",required:!1,defaultValue:{scheme:"nivo"},controlType:"ordinalColors",group:"Style"},{key:"colorBy",type:"string | Function",help:"Property used to determine node color.",description:"\n            Property to use to determine node color.\n            If a function is provided, it will receive\n            the current node data and must return\n            a string or number which will be passed\n            to the color generator.\n        ",required:!1,defaultValue:n.c.colorBy,controlType:"choices",group:"Style",controlOptions:{choices:[{label:"depth",value:"depth"},{label:"name",value:"name"}]}},{key:"borderWidth",help:"Width of circle border.",type:"number",required:!1,defaultValue:n.c.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",description:"\n            how to compute border color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:n.c.borderColor,controlType:"inheritedColor",group:"Style"}].concat(i(Object(o.b)("Style",["svg"])),[{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:n.c.enableLabel,controlType:"switch",group:"Labels"},{key:"label",help:"Label accessor.",description:"\n            Defines how to get label text,\n            can be a string (used to access current node data property)\n            or a function which will receive the actual node data.\n        ",type:"string | Function",required:!1,defaultValue:n.c.label,controlType:"choices",group:"Labels",controlOptions:{choices:["id","value","d => `${d.id}: ${d.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"labelFormat",group:"Labels",help:"Labels formatting.",description:"\n            How to format label,\n            [see d3.format() documentation](https://github.com/d3/d3-format/blob/master/README.md#format).\n        ",type:"string | Function"},{key:"labelTextColor",help:"Method to compute label text color.",description:"\n            how to compute label text color,\n            [see dedicated documentation](self:/guides/colors).\n        ",type:"string | object | Function",required:!1,defaultValue:n.c.labelTextColor,controlType:"inheritedColor",group:"Labels"},{key:"labelSkipRadius",help:"Skip label rendering if node radius is lower than given value, 0 to disable.",type:"number",required:!1,defaultValue:n.c.labelSkipRadius,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:32}},{key:"isInteractive",flavors:["svg","html"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:n.c.isInteractive,controlType:"switch",group:"Interactivity"},{key:"isZoomable",flavors:["svg","html"],help:"Enable/disable zooming ('isInteractive' must also be 'true').",type:"boolean",required:!1,defaultValue:n.c.isZoomable,controlType:"switch",group:"Interactivity"},{key:"onClick",group:"Interactivity",flavors:["svg","html"],help:"onClick handler, it receives clicked node data and mouse event.",type:"Function",required:!1}],i(Object(o.e)(["svg","html"],n.c))),l=Object(o.d)(a)}}]);
//# sourceMappingURL=component---src-pages-bubble-html-js-25ae0759c4f71500fd9c.js.map