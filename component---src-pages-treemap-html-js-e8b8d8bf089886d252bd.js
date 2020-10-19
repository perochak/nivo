(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"0q84":function(e,t,n){"use strict";var o=n("nLLr");t.a=Object(o.c)({label:function(e){return"node => `${node.id} (${node.formattedValue})`"===e?function(e){return e.id+" ("+e.formattedValue+")"}:e},parentLabel:function(e){return"node => node.pathComponents.join(' / ')"===e?function(e){return e.pathComponents.join(" / ")}:e},valueFormat:o.b})},"0wvI":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u}));var o=n("6zZa"),r=n("q8Y+"),a=n.n(r),i=n("JCgZ"),l=n.n(i),c=function(){return{root:Object(o.f)()}},u=function(){return{root:{id:"root",children:a()(600).map((function(e){return{id:"node."+e,value:l()(10,1e5)}}))},nodeCount:600}}},DAMa:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("VlJN"),n("YjJN"),n("Eb4t"),n("Fdmb"),n("IYjZ"),n("yvkl"),n("abGl");var o=n("myAg"),r=n("RQLE");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=o.e,l=[{key:"data",group:"Base",help:"The hierarchical data object.",type:"object",required:!0},{key:"identity",group:"Base",help:"The key or function to use to retrieve nodes identity.",type:"string | Function",required:!1,defaultValue:i.identity},{key:"value",group:"Base",help:"The key or function to use to retrieve nodes value.",type:"string | Function",required:!1,defaultValue:"value"},{key:"valueFormat",help:"\n            Value format supporting d3-format notation, this formatted value\n            will then be used for labels and tooltips.\n        ",type:"string | Function",required:!1,controlType:"valueFormat",group:"Base"},{key:"tile",group:"Base",help:"Strategy used to compute nodes.",description:"\n            Strategy used to compute nodes, see\n            [official d3 documentation](https://github.com/mbostock/d3/wiki/Treemap-Layout#mode).\n        ",type:"string",required:!1,defaultValue:"squarify",controlType:"choices",controlOptions:{choices:[{label:"binary",value:"binary"},{label:"squarify",value:"squarify"},{label:"slice",value:"slice"},{label:"dice",value:"dice"},{label:"sliceDice",value:"sliceDice"},{label:"resquarify",value:"resquarify"}]}},{key:"leavesOnly",help:"Only render leaf nodes (no parent).",type:"boolean",required:!1,defaultValue:i.leavesOnly,controlType:"switch",group:"Base"},{key:"innerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:i.innerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"outerPadding",help:"Padding between parent and child node.",type:"number",required:!1,defaultValue:i.outerPadding,controlType:"range",group:"Base",controlOptions:{unit:"px",min:0,max:32}},{key:"width",group:"Base",enableControlForFlavors:["api"],help:"Chart width.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"height",group:"Base",enableControlForFlavors:["api"],help:"Chart height.",description:"\n            not required if using responsive alternative\n            of the component `<Responsive*/>`.\n        ",type:"number",required:!0},{key:"pixelRatio",flavors:["canvas"],help:"Adjust pixel ratio, useful for HiDPI screens.",required:!1,defaultValue:"Depends on device",type:"number",controlType:"range",group:"Base",controlOptions:{min:1,max:2}},{key:"margin",help:"Chart margin.",type:"object",required:!1,controlType:"margin",group:"Base"},{key:"colors",help:"Defines how to compute node color.",type:"string | Function | string[]",required:!1,defaultValue:i.colors,controlType:"ordinalColors",group:"Style"},{key:"nodeOpacity",help:"Node opacity (0~1).",required:!1,defaultValue:i.nodeOpacity,type:"number",controlType:"opacity",group:"Style"},{key:"borderWidth",help:"Control node border width.",type:"number",required:!1,defaultValue:i.borderWidth,controlType:"lineWidth",group:"Style"},{key:"borderColor",help:"Method to compute border color.",type:"string | object | Function",required:!1,defaultValue:i.borderColor,controlType:"inheritedColor",group:"Style"}].concat(a(Object(r.b)("Style",["svg"])),[{key:"enableLabel",help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:i.enableLabel,controlType:"switch",group:"Labels"},{key:"label",help:"Label accessor.",description:"Defines how to get label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["formattedValue","id","node => `${node.id} (${node.formattedValue})`"].map((function(e){return{label:e,value:e}}))}},{key:"labelSkipSize",help:"Skip label rendering if node minimal side length is lower than given value, 0 to disable.",type:"number",required:!1,controlType:"range",group:"Labels",controlOptions:{unit:"px",min:0,max:100}},{key:"orientLabel",help:"Orient labels according to max node width/height.",type:"boolean",required:!1,defaultValue:i.orientLabel,controlType:"switch",group:"Labels"},{key:"labelTextColor",help:"Method to compute label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"enableParentLabel",flavors:["svg","html","api"],help:"Enable/disable labels.",type:"boolean",required:!1,defaultValue:i.enableParentLabel,controlType:"switch",group:"Labels"},{key:"parentLabel",flavors:["svg","html","api"],help:"Parent label accessor.",description:"Defines how to get parent label text, can be a string (used to access current node property) or a function which will receive the actual node and must return the desired label.",type:"string | Function",required:!1,controlType:"choices",group:"Labels",controlOptions:{choices:["id","formattedValue","node => node.pathComponents.join(' / ')"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelSize",flavors:["svg","html","api"],help:"Parent label size.",required:!1,defaultValue:i.parentLabelSize,type:"number",controlType:"range",group:"Labels",controlOptions:{min:10,max:40}},{key:"parentLabelPosition",flavors:["svg","html","api"],help:"Parent label position.",type:"'top' | 'right' | 'bottom' | 'left'",required:!1,controlType:"choices",group:"Labels",defaultValue:i.parentLabelPosition,controlOptions:{choices:["top","right","bottom","left"].map((function(e){return{label:e,value:e}}))}},{key:"parentLabelPadding",flavors:["svg","html","api"],help:"Parent label padding.",required:!1,defaultValue:i.parentLabelPadding,type:"number",controlType:"range",group:"Labels",controlOptions:{min:0,max:20}},{key:"parentLabelTextColor",flavors:["svg","html","api"],help:"Method to compute parent label text color.",type:"string | object | Function",required:!1,controlType:"inheritedColor",group:"Labels"},{key:"isInteractive",flavors:["svg","html","canvas"],help:"Enable/disable interactivity.",type:"boolean",required:!1,defaultValue:i.isInteractive,controlType:"switch",group:"Interactivity"},{key:"onMouseEnter",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseEnter handler.",required:!1},{key:"onMouseMove",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onMouseMove handler.",required:!1},{key:"onMouseLeave",flavors:["svg","html"],group:"Interactivity",type:"(node, event) => void",help:"onMouseLeave handler.",required:!1},{key:"onClick",flavors:["svg","html","canvas"],group:"Interactivity",type:"(node, event) => void",help:"onClick handler.",required:!1}],a(Object(r.e)(["svg","html","canvas"],i,"react-spring"))),c=Object(r.d)(l)},XgN0:function(e,t,n){var o=n("O76R"),r=n("KXzt"),a=o((function(e,t,n){return e+(n?" ":"")+r(t)}));e.exports=a},YA3f:function(e,t,n){"use strict";n.r(t);n("1c7q");var o=n("mXGw"),r=n.n(o),a=n("myAg"),i=n("ZS2m"),l=n("wZ6/"),c=n.n(l),u=n("0q84"),d=n("DAMa"),b=n("0wvI"),s={identity:"name",value:"loc",valueFormat:{format:".02s",enabled:!0},tile:a.e.tile,leavesOnly:a.e.leavesOnly,innerPadding:a.e.innerPadding,outerPadding:a.e.outerPadding,margin:{top:10,right:10,bottom:10,left:10},enableLabel:!0,label:a.e.label,labelSkipSize:12,labelTextColor:{from:"color",modifiers:[["darker",2]]},orientLabel:a.e.orientLabel,enableParentLabel:a.e.enableParentLabel,parentLabel:a.e.parentLabel,parentLabelSize:a.e.parentLabelSize,parentLabelPosition:a.e.parentLabelPosition,parentLabelPadding:a.e.parentLabelPadding,parentLabelTextColor:{from:"color",modifiers:[["darker",3]]},colors:{scheme:"yellow_orange_red"},colorBy:a.e.colorBy,nodeOpacity:a.e.nodeOpacity,borderWidth:a.e.borderWidth,borderColor:{from:"color",modifiers:[["darker",.1]]},animate:a.e.animate,motionConfig:a.e.motionConfig,isInteractive:a.e.isInteractive};t.default=function(){return r.a.createElement(i.a,{name:"TreeMapHtml",meta:c.a.TreeMapHtml,icon:"treemap",flavors:c.a.flavors,currentFlavor:"html",properties:d.a,initialProperties:s,defaultProperties:a.e,propertiesMapper:u.a,generateData:b.b},(function(e,t,n,o){return r.a.createElement(a.c,Object.assign({data:t.root},e,{theme:n,onClick:function(e){o({type:"click",label:"[node] "+e.id+": "+e.formattedValue,color:e.color,data:e})}}))}))}},myAg:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return W})),n.d(t,"b",(function(){return X})),n.d(t,"c",(function(){return D})),n.d(t,"d",(function(){return T})),n.d(t,"e",(function(){return j}));n("p0JG"),n("1c7q"),n("VlJN"),n("YjJN"),n("jr56"),n("Eb4t"),n("IYjZ"),n("Qvie"),n("xl0S"),n("wDqy"),n("yvkl"),n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3");var o=n("mXGw"),r=n.n(o),a=n("5QYd"),i=n("W0B4"),l=n.n(i),c=n("llhf"),u=n("fWs0"),d=n("edSL"),b=n.n(d),s=n("PWxN"),p=n.n(s),h=n("yEOx"),f=n.n(h),m=n("XgN0"),y=n.n(m),v=n("mrMI"),g=n("56Mt");function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=Object(o.memo)((function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,c=e.labelSkipSize,d=Object(a.pb)(),b=i&&t.isLeaf&&(0===c||Math.min(t.width,t.height)>c),s=l&&t.isParent;return r.a.createElement(u.a.g,{transform:n.transform},r.a.createElement(u.a.rect,{width:n.width.interpolate((function(e){return Math.max(e,0)})),height:n.height.interpolate((function(e){return Math.max(e,0)})),fill:t.fill?t.fill:n.color,strokeWidth:o,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&r.a.createElement(u.a.text,{textAnchor:"middle",dominantBaseline:"central",style:P(P({},d.labels.text),{},{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:n.labelTransform},t.label),s&&r.a.createElement(u.a.text,{dominantBaseline:"central",style:P(P({},d.labels.text),{},{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:n.parentLabelTransform},t.parentLabel))})),w=Object(o.memo)((function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,c=e.labelSkipSize,d=Object(a.pb)(),b=i&&t.isLeaf&&(0===c||Math.min(t.width,t.height)>c),s=l&&t.isParent;return r.a.createElement(u.a.div,{id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:n.htmlTransform,width:n.width,height:n.height,borderWidth:o,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"}},r.a.createElement(u.a.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),b&&r.a.createElement(u.a.span,{style:P(P({},d.labels.text),{},{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:n.labelHtmlTransform,opacity:n.labelOpacity,pointerEvents:"none"})},t.label),s&&r.a.createElement(u.a.span,{style:P(P({},d.labels.text),{},{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:n.parentLabelHtmlTransform,opacity:n.parentLabelOpacity,pointerEvents:"none"})},t.parentLabel))})),x={identity:l.a.oneOfType([l.a.string,l.a.func]).isRequired,value:l.a.oneOfType([l.a.string,l.a.func]).isRequired,valueFormat:l.a.oneOfType([l.a.string,l.a.func]),colors:c.p.isRequired,colorBy:c.d.isRequired,nodeOpacity:l.a.number.isRequired,leavesOnly:l.a.bool.isRequired,tile:a.kb.isRequired,innerPadding:l.a.number.isRequired,outerPadding:l.a.number.isRequired,enableLabel:l.a.bool.isRequired,label:l.a.oneOfType([l.a.string,l.a.func]).isRequired,labelFormat:l.a.string,labelSkipSize:l.a.number.isRequired,labelTextColor:c.k.isRequired,orientLabel:l.a.bool.isRequired,enableParentLabel:l.a.bool.isRequired,parentLabel:l.a.oneOfType([l.a.string,l.a.func]).isRequired,parentLabelSize:l.a.number.isRequired,parentLabelPosition:l.a.oneOf(["top","right","bottom","left"]).isRequired,parentLabelPadding:l.a.number.isRequired,parentLabelTextColor:c.k.isRequired,borderWidth:l.a.number.isRequired,borderColor:c.k.isRequired,isInteractive:l.a.bool.isRequired,onMouseEnter:l.a.func,onMouseMove:l.a.func,onMouseLeave:l.a.func,onClick:l.a.func,tooltip:l.a.func},k=(P(P({},x),{},{nodeComponent:l.a.elementType.isRequired,role:l.a.string.isRequired},a.D),P(P({},x),{},{nodeComponent:l.a.elementType.isRequired}),P(P({},x),{},{pixelRatio:l.a.number.isRequired}),{identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"}),j=P(P({},k),{},{nodeComponent:C,role:"img",defs:[],fill:[]}),M=P(P({},k),{},{nodeComponent:w}),T=P(P({},k),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1});function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],o=!0,r=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(c){r=!0,a=c}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=Object(o.memo)((function(e){var t=e.node,n=e.tooltip;return r.a.createElement(g.a,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color,renderContent:"function"==typeof n?n.bind(null,{node:t}):null})})),R=function(e){return Object(o.useMemo)((function(){return"function"==typeof e?e:function(t){return b()(t,e)}}),[e])},z=function(e){var t=e.data,n=e.identity,r=void 0===n?j.identity:n,i=e.value,l=void 0===i?j.value:i,u=e.valueFormat,d=e.leavesOnly,b=void 0===d?j.leavesOnly:d,s=e.width,h=e.height,m=e.tile,g=void 0===m?j.tile:m,L=e.innerPadding,O=void 0===L?j.innerPadding:L,P=e.outerPadding,C=void 0===P?j.outerPadding:P,w=e.label,x=void 0===w?j.label:w,k=e.orientLabel,M=void 0===k?j.orientLabel:k,T=e.enableParentLabel,q=void 0===T?j.enableParentLabel:T,E=e.parentLabel,z=void 0===E?j.parentLabel:E,I=e.parentLabelSize,F=void 0===I?j.parentLabelSize:I,V=e.parentLabelPosition,B=void 0===V?j.parentLabelPosition:V,W=e.parentLabelPadding,A=void 0===W?j.parentLabelPadding:W,D=e.colors,H=void 0===D?j.colors:D,Y=e.colorBy,X=void 0===Y?j.colorBy:Y,J=e.nodeOpacity,N=void 0===J?j.nodeOpacity:J,Z=e.borderColor,G=void 0===Z?j.borderColor:Z,$=e.labelTextColor,K=void 0===$?j.labelTextColor:$,Q=e.parentLabelTextColor,_=void 0===Q?j.parentLabelTextColor:Q,U=R(r),ee=R(l),te=Object(a.qb)(u),ne=R(x),oe=R(z),re=function(e){var t=e.width,n=e.height,r=e.tile,i=e.innerPadding,l=e.outerPadding,c=e.enableParentLabel,u=e.parentLabelSize,d=e.parentLabelPosition,b=e.leavesOnly;return Object(o.useMemo)((function(){var e=Object(v.d)().size([t,n]).tile(Object(a.jb)(r)).round(!0).paddingInner(i).paddingOuter(l);if(c&&!b){var o=u+2*l;e["padding".concat(y()(d))](o)}return e}),[t,n,r,i,l,c,u,d,b])}({width:s,height:h,tile:g,innerPadding:O,outerPadding:C,enableParentLabel:q,parentLabelSize:F,parentLabelPosition:B,leavesOnly:b}),ae=function(e){var t=e.root,n=e.getValue;return Object(o.useMemo)((function(){return Object(v.a)(t).sum(n)}),[t,n])}({root:t,getValue:ee}),ie=Object(o.useMemo)((function(){var e=f()(ae);return re(e),b?e.leaves():e.descendants()}),[ae,re,b]),le=Object(o.useMemo)((function(){return ie.map((function(e){var t=S(function(e,t){var n=e.ancestors().map((function(e){return t(e.data)})).reverse();return[n.join("."),n]}(e,U),2),n=t[0],o=t[1],r={id:U(e.data),path:n,pathComponents:o,data:p()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:te(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height};return r.label=ne(r),r.parentLabel=oe(r),r.parentLabelRotation=0,"top"===B&&(r.parentLabelX=C+A,r.parentLabelY=C+F/2),"right"===B&&(r.parentLabelX=r.width-C-F/2,r.parentLabelY=r.height-C-A,r.parentLabelRotation=-90),"bottom"===B&&(r.parentLabelX=C+A,r.parentLabelY=r.height-C-F/2),"left"===B&&(r.parentLabelX=C+F/2,r.parentLabelY=r.height-C-A,r.parentLabelRotation=-90),r}))}),[ie,b,U,te,ne,oe,F,B,A,C]),ce=Object(a.pb)(),ue=Object(c.s)(H,X),de=Object(c.r)(G,ce),be=Object(c.r)(K,ce),se=Object(c.r)(_,ce),pe=Object(o.useMemo)((function(){return le.map((function(e){return e.opacity=N,e.labelRotation=M&&e.height>e.width?-90:0,e.color=ue(e),e.borderColor=de(e),e.labelTextColor=be(e),e.parentLabelTextColor=se(e),e}))}),[le,ue,N,de,be,se,M]);return{hierarchy:ae,nodes:pe,layout:re}},I=function(e){return{transform:"translate(".concat(e.x,",").concat(e.y,")"),htmlTransform:"translate(".concat(e.x,"px,").concat(e.y,"px)"),labelOpacity:1,labelTransform:"translate(".concat(e.width/2,",").concat(e.height/2,") rotate(").concat(e.labelRotation,")"),labelHtmlTransform:"translate(".concat(e.width/2,"px,").concat(e.height/2,"px) rotate(").concat(e.labelRotation,"deg)"),parentLabelOpacity:1,parentLabelTransform:"translate(".concat(e.parentLabelX,",").concat(e.parentLabelY,") rotate(").concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(".concat(e.parentLabelX-(0===e.parentLabelRotation?0:5),"px,").concat(e.parentLabelY-(0===e.parentLabelRotation?5:0),"px) rotate(").concat(e.parentLabelRotation,"deg)"),width:e.width,height:e.height,color:e.color}},F=function(e){var t=e.x+e.width/2,n=e.y+e.height/2;return{transform:"translate(".concat(t,",").concat(n,")"),transformPixels:"translate(".concat(t,"px,").concat(n,"px)"),labelOpacity:0,labelTransform:"translate(0,0) rotate(".concat(e.labelRotation,")"),parentLabelOpacity:0,parentLabelTransform:"translate(0,0) rotate(".concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(0px,0px) rotate(".concat(e.parentLabelRotation,"deg)"),width:0,height:0,color:e.color}},V=Object(o.memo)((function(e){var t=e.nodes,n=e.nodeComponent,i=e.borderWidth,l=e.enableLabel,c=e.labelSkipSize,d=e.enableParentLabel,b=function(e,t){var n=t.isInteractive,a=t.onMouseEnter,i=t.onMouseMove,l=t.onMouseLeave,c=t.onClick,u=t.tooltip,d=Object(g.h)(),b=d.showTooltipFromEvent,s=d.hideTooltip,p=Object(o.useCallback)((function(e,t){b(r.a.createElement(E,{node:e,tooltip:u}),t,"left")}),[b,u]),h=Object(o.useCallback)((function(e,t){p(e,t),a&&a(e,t)}),[a,p]),f=Object(o.useCallback)((function(e,t){p(e,t),i&&i(e,t)}),[i,p]),m=Object(o.useCallback)((function(e,t){s(),l&&l(e,t)}),[l,s]),y=Object(o.useCallback)((function(e,t){c&&c(e,t)}),[c]);return Object(o.useMemo)((function(){return e.map((function(e){return n?P(P({},e),{},{onMouseEnter:function(t){return h(e,t)},onMouseMove:function(t){return f(e,t)},onMouseLeave:function(t){return m(e,t)},onClick:function(t){return y(e,t)}}):e}))}),[e,h,f,m,y])}(t,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),s=Object(a.ob)(),p=s.animate,h=s.config;return Object(u.e)(b,(function(e){return e.path}),{initial:function(e){return I(e)},from:function(e){return F(e)},enter:function(e){return I(e)},update:function(e){return I(e)},leave:function(e){return F(e)},config:h,immediate:!p}).map((function(e){var t=e.item,o=e.props,a=e.key;return r.a.createElement(n,{key:a,node:t,animatedProps:o,borderWidth:i,enableLabel:l,labelSkipSize:c,enableParentLabel:d})}))})),B=Object(a.rb)((function(e){var t=e.data,n=e.identity,o=e.value,i=e.tile,l=e.nodeComponent,c=e.valueFormat,u=e.innerPadding,d=e.outerPadding,b=e.leavesOnly,s=e.width,p=e.height,h=e.margin,f=e.colors,m=e.colorBy,y=e.nodeOpacity,v=e.borderWidth,g=e.borderColor,L=e.defs,O=e.fill,P=e.enableLabel,C=e.label,w=e.labelTextColor,x=e.orientLabel,k=e.labelSkipSize,j=e.enableParentLabel,M=e.parentLabel,T=e.parentLabelSize,q=e.parentLabelPosition,S=e.parentLabelPadding,E=e.parentLabelTextColor,R=e.isInteractive,I=e.onMouseEnter,F=e.onMouseMove,B=e.onMouseLeave,W=e.onClick,A=e.tooltip,D=e.role,H=Object(a.mb)(s,p,h),Y=H.margin,X=H.innerWidth,J=H.innerHeight,N=H.outerWidth,Z=H.outerHeight,G=z({data:t,identity:n,value:o,valueFormat:c,leavesOnly:b,width:X,height:J,tile:i,innerPadding:u,outerPadding:d,colors:f,colorBy:m,nodeOpacity:y,borderColor:g,label:C,labelTextColor:w,orientLabel:x,enableParentLabel:j,parentLabel:M,parentLabelSize:T,parentLabelPosition:q,parentLabelPadding:S,parentLabelTextColor:E}).nodes,$=Object(a.r)(L,G,O);return r.a.createElement(a.k,{width:N,height:Z,margin:Y,defs:$,role:D},r.a.createElement(V,{nodes:G,nodeComponent:l,borderWidth:v,enableLabel:P,labelSkipSize:k,enableParentLabel:j,isInteractive:R,onMouseEnter:I,onMouseMove:F,onMouseLeave:B,onClick:W,tooltip:A}))}));B.defaultProps=j;var W=function(e){return r.a.createElement(a.j,null,(function(t){var n=t.width,o=t.height;return r.a.createElement(B,Object.assign({width:n,height:o},e))}))},A=Object(a.rb)((function(e){var t=e.data,n=e.identity,o=e.value,i=e.tile,l=e.nodeComponent,c=e.valueFormat,u=e.innerPadding,d=e.outerPadding,b=e.leavesOnly,s=e.width,p=e.height,h=e.margin,f=e.colors,m=e.colorBy,y=e.nodeOpacity,v=e.borderWidth,g=e.borderColor,L=e.enableLabel,O=e.label,P=e.labelTextColor,C=e.orientLabel,w=e.labelSkipSize,x=e.enableParentLabel,k=e.parentLabel,j=e.parentLabelSize,M=e.parentLabelPosition,T=e.parentLabelPadding,q=e.parentLabelTextColor,S=e.isInteractive,E=e.onMouseEnter,R=e.onMouseMove,I=e.onMouseLeave,F=e.onClick,B=e.tooltip,W=Object(a.mb)(s,p,h),A=W.margin,D=W.innerWidth,H=W.innerHeight,Y=W.outerWidth,X=W.outerHeight,J=z({data:t,identity:n,value:o,valueFormat:c,leavesOnly:b,width:D,height:H,tile:i,innerPadding:u,outerPadding:d,colors:f,colorBy:m,nodeOpacity:y,borderColor:g,label:O,labelTextColor:P,orientLabel:C,enableParentLabel:x,parentLabel:k,parentLabelSize:j,parentLabelPosition:M,parentLabelPadding:T,parentLabelTextColor:q}).nodes;return r.a.createElement("div",{style:{position:"relative",width:Y,height:X}},r.a.createElement("div",{style:{position:"absolute",top:A.top,left:A.left}},r.a.createElement(V,{nodes:J,nodeComponent:l,borderWidth:v,enableLabel:L,labelSkipSize:w,enableParentLabel:x,isInteractive:S,onMouseEnter:E,onMouseMove:R,onMouseLeave:I,onClick:F,tooltip:B})))}));A.defaultProps=M;var D=function(e){return r.a.createElement(a.j,null,(function(t){var n=t.width,o=t.height;return r.a.createElement(A,Object.assign({width:n,height:o},e))}))},H=function(e,t,n,o){return e.find((function(e){return Object(a.M)(e.x+t.left,e.y+t.top,e.width,e.height,n,o)}))},Y=Object(a.rb)((function(e){var t=e.data,n=e.identity,i=e.value,l=e.tile,c=e.valueFormat,u=e.innerPadding,d=e.outerPadding,b=e.leavesOnly,s=e.width,p=e.height,h=e.margin,f=e.colors,m=e.colorBy,y=e.nodeOpacity,v=e.borderWidth,L=e.borderColor,O=e.enableLabel,P=e.label,C=e.labelTextColor,w=e.orientLabel,x=e.labelSkipSize,k=e.isInteractive,j=e.onMouseMove,M=e.onClick,T=e.tooltip,q=e.pixelRatio,R=Object(o.useRef)(null),I=Object(a.mb)(s,p,h),F=I.margin,V=I.innerWidth,B=I.innerHeight,W=I.outerWidth,A=I.outerHeight,D=z({data:t,identity:n,value:i,valueFormat:c,leavesOnly:b,width:V,height:B,tile:l,innerPadding:u,outerPadding:d,colors:f,colorBy:m,nodeOpacity:y,borderColor:L,label:P,labelTextColor:C,orientLabel:w,enableParentLabel:!1}).nodes,Y=Object(a.pb)();Object(o.useEffect)((function(){R.current.width=W*q,R.current.height=A*q;var e=R.current.getContext("2d");e.scale(q,q),e.fillStyle=Y.background,e.fillRect(0,0,W,A),e.translate(F.left,F.top),D.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),v>0&&(e.strokeStyle=t.borderColor,e.lineWidth=v,e.strokeRect(t.x,t.y,t.width,t.height))})),O&&(e.textAlign="center",e.textBaseline="middle",e.font="".concat(Y.labels.text.fontSize,"px ").concat(Y.labels.text.fontFamily),D.forEach((function(t){if(t.isLeaf&&(0===x||Math.min(t.width,t.height)>x)){var n=w&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate(Object(a.E)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(t.label,0,0),e.restore()}})))}),[R,D,W,A,V,B,F,v,O,w,x,Y,q]);var X=Object(g.h)(),J=X.showTooltipFromEvent,N=X.hideTooltip,Z=Object(o.useCallback)((function(e){var t=S(Object(a.K)(R.current,e),2),n=t[0],o=t[1],i=H(D,F,n,o);void 0!==i?(J(r.a.createElement(E,{node:i,tooltip:T}),e,"left"),j&&j(i,e)):N()}),[R,D,F,J,N,T,j]),G=Object(o.useCallback)((function(){N()}),[N]),$=Object(o.useCallback)((function(e){var t=S(Object(a.K)(R.current,e),2),n=t[0],o=t[1],r=H(D,F,n,o);void 0!==r&&M&&M(r,e)}),[R,D,F,M]);return r.a.createElement("canvas",{ref:R,width:W*q,height:A*q,style:{width:W,height:A},onMouseEnter:k?Z:void 0,onMouseMove:k?Z:void 0,onMouseLeave:k?G:void 0,onClick:k?$:void 0})}));Y.defaultProps=T;var X=function(e){return r.a.createElement(a.j,null,(function(t){var n=t.width,o=t.height;return r.a.createElement(Y,Object.assign({width:n,height:o},e))}))}}).call(this,n("pCvA"))},yEOx:function(e,t,n){var o=n("0711"),r=1,a=4;e.exports=function(e){return o(e,r|a)}}}]);
//# sourceMappingURL=component---src-pages-treemap-html-js-e8b8d8bf089886d252bd.js.map