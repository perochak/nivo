"use strict";(self.webpackChunknivo_website=self.webpackChunknivo_website||[]).push([[6666],{41584:function(e,t){var n=Math.PI,r=2*n,o=1e-6,a=r-o;function i(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function l(){return new i}i.prototype=l.prototype={constructor:i,moveTo:function(e,t){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(e,t){this._+="L"+(this._x1=+e)+","+(this._y1=+t)},quadraticCurveTo:function(e,t,n,r){this._+="Q"+ +e+","+ +t+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(e,t,n,r,o,a){this._+="C"+ +e+","+ +t+","+ +n+","+ +r+","+(this._x1=+o)+","+(this._y1=+a)},arcTo:function(e,t,r,a,i){e=+e,t=+t,r=+r,a=+a,i=+i;var l=this._x1,u=this._y1,c=r-e,s=a-t,d=l-e,f=u-t,p=d*d+f*f;if(i<0)throw new Error("negative radius: "+i);if(null===this._x1)this._+="M"+(this._x1=e)+","+(this._y1=t);else if(p>o)if(Math.abs(f*c-s*d)>o&&i){var h=r-l,y=a-u,v=c*c+s*s,g=h*h+y*y,m=Math.sqrt(v),b=Math.sqrt(p),x=i*Math.tan((n-Math.acos((v+p-g)/(2*m*b)))/2),k=x/b,B=x/m;Math.abs(k-1)>o&&(this._+="L"+(e+k*d)+","+(t+k*f)),this._+="A"+i+","+i+",0,0,"+ +(f*h>d*y)+","+(this._x1=e+B*c)+","+(this._y1=t+B*s)}else this._+="L"+(this._x1=e)+","+(this._y1=t);else;},arc:function(e,t,i,l,u,c){e=+e,t=+t,c=!!c;var s=(i=+i)*Math.cos(l),d=i*Math.sin(l),f=e+s,p=t+d,h=1^c,y=c?l-u:u-l;if(i<0)throw new Error("negative radius: "+i);null===this._x1?this._+="M"+f+","+p:(Math.abs(this._x1-f)>o||Math.abs(this._y1-p)>o)&&(this._+="L"+f+","+p),i&&(y<0&&(y=y%r+r),y>a?this._+="A"+i+","+i+",0,1,"+h+","+(e-s)+","+(t-d)+"A"+i+","+i+",0,1,"+h+","+(this._x1=f)+","+(this._y1=p):y>o&&(this._+="A"+i+","+i+",0,"+ +(y>=n)+","+h+","+(this._x1=e+i*Math.cos(u))+","+(this._y1=t+i*Math.sin(u))))},rect:function(e,t,n,r){this._+="M"+(this._x0=this._x1=+e)+","+(this._y0=this._y1=+t)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}},t.Z=l},29140:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(41584),o=n(3583),a=n(79074);function i(e){return e.innerRadius}function l(e){return e.outerRadius}function u(e){return e.startAngle}function c(e){return e.endAngle}function s(e){return e&&e.padAngle}function d(e,t,n,r,o,i,l,u){var c=n-e,s=r-t,d=l-o,f=u-i,p=f*c-d*s;if(!(p*p<a.Ho))return[e+(p=(d*(t-i)-f*(e-o))/p)*c,t+p*s]}function f(e,t,n,r,o,i,l){var u=e-n,c=t-r,s=(l?i:-i)/(0,a._b)(u*u+c*c),d=s*c,f=-s*u,p=e+d,h=t+f,y=n+d,v=r+f,g=(p+y)/2,m=(h+v)/2,b=y-p,x=v-h,k=b*b+x*x,B=o-i,_=p*v-y*h,M=(x<0?-1:1)*(0,a._b)((0,a.Fp)(0,B*B*k-_*_)),R=(_*x-b*M)/k,S=(-_*b-x*M)/k,C=(_*x+b*M)/k,O=(-_*b+x*M)/k,L=R-g,E=S-m,T=C-g,V=O-m;return L*L+E*E>T*T+V*V&&(R=C,S=O),{cx:R,cy:S,x01:-d,y01:-f,x11:R*(o/B-1),y11:S*(o/B-1)}}function p(){var e=i,t=l,n=(0,o.Z)(0),p=null,h=u,y=c,v=s,g=null;function m(){var o,i,l=+e.apply(this,arguments),u=+t.apply(this,arguments),c=h.apply(this,arguments)-a.ou,s=y.apply(this,arguments)-a.ou,m=(0,a.Wn)(s-c),b=s>c;if(g||(g=o=(0,r.Z)()),u<l&&(i=u,u=l,l=i),u>a.Ho)if(m>a.BZ-a.Ho)g.moveTo(u*(0,a.mC)(c),u*(0,a.O$)(c)),g.arc(0,0,u,c,s,!b),l>a.Ho&&(g.moveTo(l*(0,a.mC)(s),l*(0,a.O$)(s)),g.arc(0,0,l,s,c,b));else{var x,k,B=c,_=s,M=c,R=s,S=m,C=m,O=v.apply(this,arguments)/2,L=O>a.Ho&&(p?+p.apply(this,arguments):(0,a._b)(l*l+u*u)),E=(0,a.VV)((0,a.Wn)(u-l)/2,+n.apply(this,arguments)),T=E,V=E;if(L>a.Ho){var w=(0,a.ZR)(L/l*(0,a.O$)(O)),D=(0,a.ZR)(L/u*(0,a.O$)(O));(S-=2*w)>a.Ho?(M+=w*=b?1:-1,R-=w):(S=0,M=R=(c+s)/2),(C-=2*D)>a.Ho?(B+=D*=b?1:-1,_-=D):(C=0,B=_=(c+s)/2)}var F=u*(0,a.mC)(B),q=u*(0,a.O$)(B),Z=l*(0,a.mC)(R),W=l*(0,a.O$)(R);if(E>a.Ho){var X,I=u*(0,a.mC)(_),A=u*(0,a.O$)(_),K=l*(0,a.mC)(M),$=l*(0,a.O$)(M);if(m<a.pi&&(X=d(F,q,K,$,I,A,Z,W))){var Y=F-X[0],H=q-X[1],j=I-X[0],z=A-X[1],P=1/(0,a.O$)((0,a.Kh)((Y*j+H*z)/((0,a._b)(Y*Y+H*H)*(0,a._b)(j*j+z*z)))/2),G=(0,a._b)(X[0]*X[0]+X[1]*X[1]);T=(0,a.VV)(E,(l-G)/(P-1)),V=(0,a.VV)(E,(u-G)/(P+1))}}C>a.Ho?V>a.Ho?(x=f(K,$,F,q,u,V,b),k=f(I,A,Z,W,u,V,b),g.moveTo(x.cx+x.x01,x.cy+x.y01),V<E?g.arc(x.cx,x.cy,V,(0,a.fv)(x.y01,x.x01),(0,a.fv)(k.y01,k.x01),!b):(g.arc(x.cx,x.cy,V,(0,a.fv)(x.y01,x.x01),(0,a.fv)(x.y11,x.x11),!b),g.arc(0,0,u,(0,a.fv)(x.cy+x.y11,x.cx+x.x11),(0,a.fv)(k.cy+k.y11,k.cx+k.x11),!b),g.arc(k.cx,k.cy,V,(0,a.fv)(k.y11,k.x11),(0,a.fv)(k.y01,k.x01),!b))):(g.moveTo(F,q),g.arc(0,0,u,B,_,!b)):g.moveTo(F,q),l>a.Ho&&S>a.Ho?T>a.Ho?(x=f(Z,W,I,A,l,-T,b),k=f(F,q,K,$,l,-T,b),g.lineTo(x.cx+x.x01,x.cy+x.y01),T<E?g.arc(x.cx,x.cy,T,(0,a.fv)(x.y01,x.x01),(0,a.fv)(k.y01,k.x01),!b):(g.arc(x.cx,x.cy,T,(0,a.fv)(x.y01,x.x01),(0,a.fv)(x.y11,x.x11),!b),g.arc(0,0,l,(0,a.fv)(x.cy+x.y11,x.cx+x.x11),(0,a.fv)(k.cy+k.y11,k.cx+k.x11),b),g.arc(k.cx,k.cy,T,(0,a.fv)(k.y11,k.x11),(0,a.fv)(k.y01,k.x01),!b))):g.arc(0,0,l,R,M,b):g.lineTo(Z,W)}else g.moveTo(0,0);if(g.closePath(),o)return g=null,o+""||null}return m.centroid=function(){var n=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,r=(+h.apply(this,arguments)+ +y.apply(this,arguments))/2-a.pi/2;return[(0,a.mC)(r)*n,(0,a.O$)(r)*n]},m.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),m):e},m.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),m):t},m.cornerRadius=function(e){return arguments.length?(n="function"==typeof e?e:(0,o.Z)(+e),m):n},m.padRadius=function(e){return arguments.length?(p=null==e?null:"function"==typeof e?e:(0,o.Z)(+e),m):p},m.startAngle=function(e){return arguments.length?(h="function"==typeof e?e:(0,o.Z)(+e),m):h},m.endAngle=function(e){return arguments.length?(y="function"==typeof e?e:(0,o.Z)(+e),m):y},m.padAngle=function(e){return arguments.length?(v="function"==typeof e?e:(0,o.Z)(+e),m):v},m.context=function(e){return arguments.length?(g=null==e?null:e,m):g},m}},3583:function(e,t,n){function r(e){return function(){return e}}n.d(t,{Z:function(){return r}})},18091:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(41584),o=n(3583),a=n(30964),i=n(92519);function l(){var e=i.x,t=i.y,n=(0,o.Z)(!0),l=null,u=a.Z,c=null;function s(o){var a,i,s,d=o.length,f=!1;for(null==l&&(c=u(s=(0,r.Z)())),a=0;a<=d;++a)!(a<d&&n(i=o[a],a,o))===f&&((f=!f)?c.lineStart():c.lineEnd()),f&&c.point(+e(i,a,o),+t(i,a,o));if(s)return c=null,s+""||null}return s.x=function(t){return arguments.length?(e="function"==typeof t?t:(0,o.Z)(+t),s):e},s.y=function(e){return arguments.length?(t="function"==typeof e?e:(0,o.Z)(+e),s):t},s.defined=function(e){return arguments.length?(n="function"==typeof e?e:(0,o.Z)(!!e),s):n},s.curve=function(e){return arguments.length?(u=e,null!=l&&(c=u(l)),s):u},s.context=function(e){return arguments.length?(null==e?l=c=null:c=u(l=e),s):l},s}},92519:function(e,t,n){function r(e){return e[0]}function o(e){return e[1]}n.d(t,{x:function(){return r},y:function(){return o}})},15050:function(e,t,n){n.d(t,{Ym:function(){return r},yB:function(){return o},Y2:function(){return a},UD:function(){return i},iM:function(){return l}});var r=1e3,o=6e4,a=36e5,i=864e5,l=6048e5},61904:function(e,t,n){n.d(t,{Z:function(){return a}});var r=new Date,o=new Date;function a(e,t,n,i){function l(t){return e(t=0===arguments.length?new Date:new Date(+t)),t}return l.floor=function(t){return e(t=new Date(+t)),t},l.ceil=function(n){return e(n=new Date(n-1)),t(n,1),e(n),n},l.round=function(e){var t=l(e),n=l.ceil(e);return e-t<n-e?t:n},l.offset=function(e,n){return t(e=new Date(+e),null==n?1:Math.floor(n)),e},l.range=function(n,r,o){var a,i=[];if(n=l.ceil(n),o=null==o?1:Math.floor(o),!(n<r&&o>0))return i;do{i.push(a=new Date(+n)),t(n,o),e(n)}while(a<n&&n<r);return i},l.filter=function(n){return a((function(t){if(t>=t)for(;e(t),!n(t);)t.setTime(t-1)}),(function(e,r){if(e>=e)if(r<0)for(;++r<=0;)for(;t(e,-1),!n(e););else for(;--r>=0;)for(;t(e,1),!n(e););}))},n&&(l.count=function(t,a){return r.setTime(+t),o.setTime(+a),e(r),e(o),Math.floor(n(r,o))},l.every=function(e){return e=Math.floor(e),isFinite(e)&&e>0?e>1?l.filter(i?function(t){return i(t)%e==0}:function(t){return l.count(0,t)%e==0}):l:null}),l}},63470:function(e,t,n){var r=n(62370);t.Z=(0,r.h8)({valueFormat:r.Ld,dotLabel:function(e){return"p => `${p.key}: ${p.value}`"===e?function(e){return e.key+": "+e.value}:"p => `${p.index}: ${p.value}`"===e?function(e){return e.index+": "+e.value}:e}})},31312:function(e,t,n){n.d(t,{X:function(){return u}});var r=n(649),o=n(45434),a=n(8804),i=n(80169),l=[{key:"data",group:"Base",type:"Datum[]",required:!0,help:"Chart data.",description:"\n            For example, given this config:\n            ```\n            [\n                { language: 'javascript', john: 12, sarah: 32, bob: 27 },\n                { language: 'golang', john: 25, sarah: 15, bob: 3 },\n                { language: 'python', john: 5, sarah: 22, bob: 31 },\n                { language: 'java', john: 19, sarah: 17, bob: 9 }\n            ]\n            keys: ['john', 'sarah', 'bob']\n            indexBy: 'language'\n            ```\n            We'll have a radar chart representing programing\n            skills for each user by language\n            (3 layers and 4 dimensions).\n        ",flavors:["svg","api"]},{key:"indexBy",group:"Base",type:"string",required:!0,help:"Key to use to index the data.",description:"\n            Key to use to index the data, this key\n            must exist in each data item.\n        ",flavors:["svg","api"]},{key:"keys",group:"Base",type:"string[]",required:!0,help:"Keys to use to determine each serie.",description:"\n            Keys to use to determine each serie.\n            Those keys should exist in each data item.\n        ",flavors:["svg","api"]},{key:"maxValue",group:"Base",type:"number | 'auto'",required:!1,help:"Maximum value.",description:"\n            Maximum value, if 'auto',\n            will use max value from\n            the provided data.\n        ",flavors:["svg","api"],defaultValue:a.XB.maxValue,controlType:"switchableRange",controlOptions:{disabledValue:"auto",defaultValue:200,min:0,max:1e3}},{key:"valueFormat",group:"Base",type:"string | (value: number) => string",required:!1,help:"Optional formatter for values.",description:"\n            The formatted value can then be used for labels & tooltips.\n\n            Under the hood, nivo uses [d3-format](https://github.com/d3/d3-format),\n            please have a look at it for available formats, you can also pass a function\n            which will receive the raw value and should return the formatted one.\n        ",flavors:["svg","api"],controlType:"valueFormat"},{key:"curve",group:"Base",type:"string",required:!1,help:"Curve interpolation.",description:"\n            Defines the curve factory to use\n            for the line generator.\n        ",defaultValue:a.XB.curve,flavors:["svg","api"],controlType:"choices",controlOptions:{choices:o.nL.map((function(e){return{label:e,value:e}}))}},{key:"width",group:"Base",type:"number",required:!0,help:"Chart width.",description:"\n            not required if using\n            `<ResponsiveRadar/>`.\n        ",flavors:["svg","api"],enableControlForFlavors:["api"],controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"height",group:"Base",type:"number",required:!0,help:"Chart height.",description:"\n            not required if using\n            `<ResponsiveRadar/>`.\n        ",flavors:["svg","api"],enableControlForFlavors:["api"],controlType:"range",controlOptions:{unit:"px",min:100,max:1e3,step:5}},{key:"margin",group:"Base",help:"Chart margin.",type:"object",required:!1,flavors:["svg","api"],controlType:"margin"},(0,i.JR)(["svg","api"]),{key:"colors",group:"Style",type:"string | Function | string[]",required:!1,help:"Defines how to compute colors.",defaultValue:a.XB.colors,flavors:["svg","api"],controlType:"ordinalColors"},{key:"fillOpacity",group:"Style",type:"number",required:!1,help:"Shape fill opacity.",flavors:["svg","api"],defaultValue:a.XB.fillOpacity,controlType:"opacity"},{key:"blendMode",group:"Style",type:"string",required:!1,help:"Defines CSS [mix-blend-mode](https://developer.mozilla.org/fr/docs/Web/CSS/mix-blend-mode) for shapes.",flavors:["svg"],defaultValue:a.XB.blendMode,controlType:"blendMode"},{key:"borderWidth",group:"Style",type:"number",required:!1,help:"Shape border width.",flavors:["svg","api"],defaultValue:a.XB.borderWidth,controlType:"lineWidth"},{key:"borderColor",group:"Style",type:"string | object | Function",required:!1,help:"Method to compute border color.",flavors:["svg","api"],defaultValue:a.XB.borderColor,controlType:"inheritedColor"}].concat((0,r.Z)((0,i.uE)("Style",["svg"])),[{key:"gridLevels",group:"Grid",type:"number",required:!1,help:"Number of levels to display for grid",flavors:["svg","api"],defaultValue:a.XB.gridLevels,controlType:"range",controlOptions:{min:1,max:12}},{key:"gridShape",group:"Grid",type:"string",required:!1,help:"Determine shape of the grid.",flavors:["svg","api"],defaultValue:a.XB.gridShape,controlType:"choices",controlOptions:{choices:[{label:"circular",value:"circular"},{label:"linear",value:"linear"}]}},{key:"gridLabel",group:"Grid",type:"Function",required:!1,help:"Grid label.",description:"\n            An optional function to override label rendering.\n            It must return a **valid SVG element** and will\n            receive the following props:\n            ```\n            {\n                id:     string\n                # this can be used to determine the label layout,\n                # if the element should be centered, left/right aligned\n                anchor: 'start' | 'middle' | 'end'\n                # angle in degrees\n                angle:  number\n            }\n            ```\n            The component will be wrapped inside\n            a `g` element **already positioned**\n            where the default label would have been placed.\n        ",flavors:["svg"]},{key:"gridLabelOffset",group:"Grid",type:"number",required:!1,help:"Label offset from outer radius.",flavors:["svg","api"],defaultValue:a.XB.gridLabelOffset,controlType:"range",controlOptions:{unit:"px",min:0,max:60}},{key:"enableDots",group:"Dots",type:"boolean",required:!1,help:"Enable/disable dots.",flavors:["svg","api"],defaultValue:a.XB.enableDots,controlType:"switch"},{key:"dotSymbol",group:"Dots",type:"Function",required:!1,help:"Overrides default dot circle.",description:"\n            Overrides default dot circle.\n            The function will receive `size`,\n            `color`, `borderWidth` and `borderColor`\n            props and must return a valid SVG element.\n        ",flavors:["svg"]},{key:"dotSize",group:"Dots",type:"number",required:!1,help:"Size of the dots.",flavors:["svg","api"],defaultValue:a.XB.dotSize,controlType:"range",controlOptions:{unit:"px",min:2,max:64}},{key:"dotColor",type:"string | object | Function",required:!1,help:"Method to compute dots color.",flavors:["svg","api"],defaultValue:a.XB.dotColor,controlType:"inheritedColor",group:"Dots"},{key:"dotBorderWidth",group:"Dots",type:"number",required:!1,help:"Width of the dots border.",flavors:["svg","api"],defaultValue:a.XB.dotBorderWidth,controlType:"range",controlOptions:{unit:"px",min:0,max:10}},{key:"dotBorderColor",group:"Dots",type:"string | object | Function",required:!1,help:"Method to compute dots border color.",flavors:["svg","api"],defaultValue:a.XB.dotBorderColor,controlType:"inheritedColor"},{key:"enableDotLabel",group:"Dots",help:"Enable/disable dots label.",type:"boolean",required:!1,flavors:["svg","api"],defaultValue:a.XB.enableDotLabel,controlType:"switch"},{key:"dotLabel",group:"Dots",type:"string | ((point: PointData) => string | number)",required:!1,help:"Dot label.",description:"Property to use to determine dot label. If a function is provided, it will receive current value and serie and must return a label.",flavors:["svg"],defaultValue:a.XB.dotLabel,controlType:"choices",controlOptions:{choices:["value","formattedValue","index","key","p => `${p.key}: ${p.value}`","p => `${p.index}: ${p.value}`"].map((function(e){return{label:e,value:e}}))}},{key:"dotLabelYOffset",group:"Dots",type:"number",required:!1,help:"Label Y offset from dot shape.",flavors:["svg","api"],defaultValue:a.XB.dotLabelYOffset,controlType:"range",controlOptions:{unit:"px",min:-24,max:24}},{key:"layers",group:"Customization",help:"Defines the order of layers and add custom layers.",description:"\n            You can also use this to insert extra layers\n            to the chart, the extra layer should be a component.\n            \n            The layer function which will receive the chart's\n            context & computed data and must return a valid SVG element.\n        ",required:!1,type:"(RadarLayerId | FunctionComponent<RadarCustomLayerProps>)[]",flavors:["svg"],defaultValue:a.XB.layers},{key:"isInteractive",group:"Interactivity",type:"boolean",required:!1,help:"Enable/disable interactivity.",flavors:["svg"],defaultValue:a.XB.isInteractive,controlType:"switch"},{key:"sliceTooltip",group:"Interactivity",type:"FunctionComponent<RadarSliceTooltipProps>",required:!1,help:"Override default slice tooltip.",flavors:["svg"]}],(0,r.Z)((0,i.$j)(["svg"],a.XB,"react-spring"))),u=(0,i.R2)(l)},8804:function(e,t,n){n.d(t,{Fk:function(){return w},qQ:function(){return D},XB:function(){return L}});var r=n(27378),o=n(45434),a=n(47425),i=n(58493),l=c(n(30964).Z);function u(e){this._curve=e}function c(e){function t(t){return new u(e(t))}return t._curve=e,t}u.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,t){this._curve.point(t*Math.sin(e),t*-Math.cos(e))}};var s=n(18091);function d(){return e=(0,s.Z)().curve(l),t=e.curve,e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(e){return arguments.length?t(c(e)):t()._curve},e;var e,t}var f=n(59210),p=n(29140),h=n(79234),y=n(89193),v=n(9841);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var b=function(e){var t,n=e.data,a=e.item,l=e.colorByKey,u=e.fillByKey,c=e.radiusScale,s=e.angleStep,f=e.curveFactory,p=e.borderWidth,y=e.borderColor,v=e.fillOpacity,g=e.blendMode,m=(0,o.Fg)(),b=(0,h.Bf)(y,m),x=(0,r.useMemo)((function(){return d().radius((function(e){return c(e)})).angle((function(e,t){return t*s})).curve(f)}),[c,s,f]),k=(0,o.tf)(),B=k.animate,_=k.config,M=(0,o.NS)(x(n.map((function(e){return e[a]})))),R=(0,i.useSpring)({fill:l[a],stroke:b({key:a,color:l[a]}),config:_,immediate:!B}),S=null!=(t=u[a])?t:R.fill;return React.createElement(i.q.path,{key:a,d:M,fill:S,fillOpacity:v,stroke:R.stroke,strokeWidth:p,style:{mixBlendMode:g}})},x=function(e){var t=e.radius,n=e.angles,a=e.indices,l=e.label,u=e.labelOffset,c=(0,o.tf)(),s=c.animate,d=c.config,f=a.map((function(e,r){var a,i,l=(0,o.re)(n[r],t+u),c=(a=n[r],(i=(0,o.vi)(a)+90)<=10||i>=350||i>=170&&i<=190?"middle":i>180?"end":"start");return g({id:e,angle:(0,o.vi)(n[r]),anchor:c},l)})),p=(0,i.useSprings)(f.length,f.map((function(e){return{transform:"translate("+e.x+", "+e.y+")",config:d,immediate:!s}})));return React.createElement(React.Fragment,null,p.map((function(e,t){var n=f[t];return(0,r.createElement)(l,{key:n.id,id:n.id,anchor:n.anchor,angle:n.angle,x:n.x,y:n.y,animated:e})})))},k=["shape"],B=(0,r.memo)((function(e){var t=e.radius,n=(0,o.Fg)(),r=(0,o.tf)(),a=r.animate,l=r.config,u=(0,i.useSpring)({radius:t,config:l,immediate:!a});return React.createElement(i.q.circle,g({fill:"none",r:(0,i.to)(u.radius,(function(e){return Math.max(e,0)}))},n.grid.line))})),_=function(e){var t=e.radius,n=e.angleStep,a=e.dataLength,l=(0,o.Fg)(),u=(0,r.useMemo)((function(){return d().angle((function(e){return e*n})).radius(t).curve(f.Z)}),[n,t]),c=Array.from({length:a},(function(e,t){return t})),s=(0,o.NS)(u(c));return React.createElement(i.q.path,g({fill:"none",d:s},l.grid.line))},M=function(e){var t=e.shape,n=m(e,k);return"circular"===t?React.createElement(B,{radius:n.radius}):React.createElement(_,n)},R=function(e){var t=e.indices,n=e.levels,a=e.shape,i=e.radius,l=e.angleStep,u=e.label,c=e.labelOffset,s=(0,o.Fg)(),d=(0,r.useMemo)((function(){return{radii:Array.from({length:n}).map((function(e,t){return i/n*(t+1)})).reverse(),angles:Array.from({length:t.length},(function(e,t){return t*l-Math.PI/2}))}}),[t,n,i,l]),f=d.radii,p=d.angles;return React.createElement(React.Fragment,null,p.map((function(e,t){var n=(0,o.re)(e,i);return React.createElement("line",g({key:"axis."+t,x1:0,y1:0,x2:n.x,y2:n.y},s.grid.line))})),f.map((function(e,n){return React.createElement(M,{key:"level."+n,shape:a,radius:e,angleStep:l,dataLength:t.length})})),React.createElement(x,{radius:i,angles:p,indices:t,labelOffset:c,label:u}))},S=function(e){var t=e.datum,n=e.keys,a=e.index,i=e.formatValue,l=e.colorByKey,u=e.radius,c=e.startAngle,s=e.endAngle,d=e.arcGenerator,f=e.tooltip,p=(0,r.useState)(!1),h=p[0],v=p[1],g=(0,o.Fg)(),m=(0,y.lL)(),b=m.showTooltipFromEvent,x=m.hideTooltip,k=(0,r.useMemo)((function(){var e=n.map((function(e){return{color:l[e],id:e,value:t[e],formattedValue:i(t[e],e)}}));return e.sort((function(e,t){return e.value-t.value})),e.reverse(),e}),[t,n,i,l]),B=(0,r.useCallback)((function(e){v(!0),b((0,r.createElement)(f,{index:a,data:k}),e)}),[b,f,a,k]),_=(0,r.useCallback)((function(){v(!1),x()}),[x,v]),M=(0,r.useMemo)((function(){var e=(0,o.re)(c+.5*(s-c)-Math.PI/2,u);return{path:d({startAngle:c,endAngle:s}),tipX:e.x,tipY:e.y}}),[c,s,u,d]),R=M.path,S=M.tipX,C=M.tipY;return React.createElement(React.Fragment,null,h&&React.createElement("line",{x1:0,y1:0,x2:S,y2:C,style:g.crosshair.line}),React.createElement("path",{d:R,fill:"#F00",fillOpacity:0,onMouseEnter:B,onMouseMove:B,onMouseLeave:_}))},C=function(e){var t=e.data,n=e.keys,r=e.getIndex,o=e.formatValue,a=e.colorByKey,i=e.radius,l=e.angleStep,u=e.tooltip,c=(0,p.Z)().outerRadius(i).innerRadius(0),s=-.5*l;return React.createElement(React.Fragment,null,t.map((function(e){var t=r(e),d=s,f=d+l;return s+=l,React.createElement(S,{key:t,datum:e,keys:n,index:t,formatValue:o,colorByKey:a,startAngle:d,endAngle:f,radius:i,arcGenerator:c,tooltip:u})})))},O=function(e){var t=e.data,n=e.keys,a=e.getIndex,i=e.colorByKey,l=e.radiusScale,u=e.angleStep,c=e.symbol,s=e.size,d=void 0===s?6:s,f=e.color,p=void 0===f?{from:"color"}:f,y=e.borderWidth,v=void 0===y?0:y,m=e.borderColor,b=void 0===m?{from:"color"}:m,x=e.enableLabel,k=void 0!==x&&x,B=e.label,_=void 0===B?"value":B,M=e.formatValue,R=e.labelYOffset,S=(0,o.Fg)(),C=(0,h.B3)(p,S),O=(0,h.B3)(b,S),L=(0,o.LR)(_),E=(0,r.useMemo)((function(){return t.reduce((function(e,t,r){var c=a(t);return n.forEach((function(n){var a=t[n],s={index:c,key:n,value:a,formattedValue:M(a,n),color:i[n]};e.push({key:n+"."+c,label:k?L(s):void 0,style:g({fill:C(s),stroke:O(s)},(0,o.re)(u*r-Math.PI/2,l(t[n]))),data:s})})),e}),[])}),[t,n,a,i,k,L,M,C,O,u,l]);return React.createElement(React.Fragment,null,E.map((function(e){return React.createElement(o.F_,{key:e.key,x:e.style.x,y:e.style.y,symbol:c,size:d,color:e.style.fill,borderWidth:v,borderColor:e.style.stroke,label:e.label,labelYOffset:R,datum:e.data})})))},L={layers:["grid","layers","slices","dots","legends"],maxValue:"auto",curve:"linearClosed",borderWidth:2,borderColor:{from:"color"},gridLevels:5,gridShape:"circular",gridLabelOffset:16,gridLabel:function(e){var t=e.id,n=e.anchor,r=e.animated,a=(0,o.Fg)();return React.createElement(i.q.g,{transform:r.transform},React.createElement("text",{style:a.axis.ticks.text,dominantBaseline:"central",textAnchor:n},t))},enableDots:!0,dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},enableDotLabel:!1,dotLabel:"formattedValue",dotLabelYOffset:-12,colors:{scheme:"nivo"},fillOpacity:.25,blendMode:"normal",isInteractive:!0,sliceTooltip:function(e){var t=e.index,n=e.data,o=(0,r.useMemo)((function(){return n.map((function(e){return[React.createElement(y.Af,{key:e.id,color:e.color}),e.id,e.formattedValue]}))}),[n]);return React.createElement(y.zI,{title:React.createElement("strong",null,t),rows:o})},legends:[],role:"img",animate:!0,motionConfig:"gentle",defs:[],fill:[]},E=["data"],T=["isInteractive","animate","motionConfig","theme","renderWrapper"],V=function(e){var t=e.data,n=e.keys,i=e.indexBy,l=e.layers,u=void 0===l?L.layers:l,c=e.maxValue,s=void 0===c?L.maxValue:c,d=e.valueFormat,f=e.curve,p=void 0===f?L.curve:f,y=e.margin,x=e.width,k=e.height,B=e.borderWidth,_=void 0===B?L.borderWidth:B,M=e.borderColor,S=void 0===M?L.borderColor:M,T=e.gridLevels,V=void 0===T?L.gridLevels:T,w=e.gridShape,D=void 0===w?L.gridShape:w,F=e.gridLabel,q=void 0===F?L.gridLabel:F,Z=e.gridLabelOffset,W=void 0===Z?L.gridLabelOffset:Z,X=e.enableDots,I=void 0===X?L.enableDots:X,A=e.dotSymbol,K=e.dotSize,$=void 0===K?L.dotSize:K,Y=e.dotColor,H=void 0===Y?L.dotColor:Y,j=e.dotBorderWidth,z=void 0===j?L.dotBorderWidth:j,P=e.dotBorderColor,G=void 0===P?L.dotBorderColor:P,U=e.enableDotLabel,N=void 0===U?L.enableDotLabel:U,Q=e.dotLabel,J=void 0===Q?L.dotLabel:Q,ee=e.dotLabelYOffset,te=void 0===ee?L.dotLabelYOffset:ee,ne=e.colors,re=void 0===ne?L.colors:ne,oe=e.fillOpacity,ae=void 0===oe?L.fillOpacity:oe,ie=e.blendMode,le=void 0===ie?L.blendMode:ie,ue=e.isInteractive,ce=void 0===ue?L.isInteractive:ue,se=e.sliceTooltip,de=void 0===se?L.sliceTooltip:se,fe=e.legends,pe=void 0===fe?L.legends:fe,he=e.role,ye=e.ariaLabel,ve=e.ariaLabelledBy,ge=e.ariaDescribedBy,me=e.defs,be=void 0===me?L.defs:me,xe=e.fill,ke=void 0===xe?L.fill:xe,Be=(0,o.Bs)(x,k,y),_e=Be.margin,Me=Be.innerWidth,Re=Be.innerHeight,Se=Be.outerWidth,Ce=Be.outerHeight,Oe=function(e){var t=e.data,n=e.keys,a=e.indexBy,i=e.maxValue,l=e.valueFormat,u=e.curve,c=e.width,s=e.height,d=e.colors,f=void 0===d?L.colors:d,p=e.legends,y=e.defs,b=e.fill,x=(0,o.LR)(a),k=(0,r.useMemo)((function(){return t.map(x)}),[t,x]),B=(0,o.O_)(l),_=(0,h.U)(f,"key"),M=(0,r.useMemo)((function(){return n.reduce((function(e,t,n){return e[t]=_({key:t,index:n}),e}),{})}),[n,_]),R=(0,r.useMemo)((function(){var e=n.map((function(e){return{key:e,color:M[e],data:t,fill:null}})),r=(0,o.yU)(y,e,b),a=e.reduce((function(e,t){var n=t.key,r=t.fill;return e[n]=r,e}),{});return{boundDefs:r,fillByKey:a}}),[n,t,y,b,M]),S=R.boundDefs,C=R.fillByKey,O=(0,r.useMemo)((function(){var e=t.reduce((function(e,t){return[].concat(e,n.map((function(e){return t[e]})))}),[]),r="auto"!==i?i:Math.max.apply(Math,e),o=Math.min(c,s)/2;return{radius:o,radiusScale:(0,v.Z)().range([0,o]).domain([0,r]),centerX:c/2,centerY:s/2,angleStep:2*Math.PI/t.length}}),[n,t,i,c,s]),T=O.radius,V=O.radiusScale,w=O.centerX,D=O.centerY,F=O.angleStep,q=(0,o.d4)(u),Z=(0,r.useMemo)((function(){return{data:t,keys:n,indices:k,colorByKey:M,centerX:w,centerY:D,radiusScale:V,angleStep:F}}),[t,n,k,M,w,D,V,F]),W=(0,r.useMemo)((function(){return n.map((function(e){return{id:e,label:e,color:M[e]}}))}),[n,M]),X=(0,r.useMemo)((function(){return p.map((function(e){var t=e.data,n=m(e,E),r=null==t?void 0:t.map((function(e){return g({},W.find((function(t){return t.id===e.id}))||{},e)}));return g({},n,{data:r||W})}))}),[p,W]);return{getIndex:x,indices:k,formatValue:B,colorByKey:M,fillByKey:C,boundDefs:S,radius:T,radiusScale:V,centerX:w,centerY:D,angleStep:F,curveFactory:q,legendData:W,boundLegends:X,customLayerProps:Z}}({data:t,keys:n,indexBy:i,maxValue:s,valueFormat:d,curve:p,width:Me,height:Re,colors:re,legends:pe,defs:be,fill:ke}),Le=Oe.getIndex,Ee=Oe.indices,Te=Oe.formatValue,Ve=Oe.colorByKey,we=Oe.fillByKey,De=Oe.boundDefs,Fe=Oe.radius,qe=Oe.radiusScale,Ze=Oe.centerX,We=Oe.centerY,Xe=Oe.angleStep,Ie=Oe.curveFactory,Ae=Oe.boundLegends,Ke=Oe.customLayerProps,$e={grid:null,layers:null,slices:null,dots:null,legends:null};return u.includes("grid")&&($e.grid=React.createElement("g",{key:"grid",transform:"translate("+Ze+", "+We+")"},React.createElement(R,{levels:V,shape:D,radius:Fe,angleStep:Xe,indices:Ee,label:q,labelOffset:W}))),u.includes("layers")&&($e.layers=React.createElement("g",{key:"layers",transform:"translate("+Ze+", "+We+")"},n.map((function(e){return React.createElement(b,{key:e,data:t,item:e,colorByKey:Ve,fillByKey:we,radiusScale:qe,angleStep:Xe,curveFactory:Ie,borderWidth:_,borderColor:S,fillOpacity:ae,blendMode:le})})))),u.includes("slices")&&ce&&($e.slices=React.createElement("g",{key:"slices",transform:"translate("+Ze+", "+We+")"},React.createElement(C,{data:t,keys:n,getIndex:Le,formatValue:Te,colorByKey:Ve,radius:Fe,angleStep:Xe,tooltip:de}))),u.includes("dots")&&I&&($e.dots=React.createElement("g",{key:"dots",transform:"translate("+Ze+", "+We+")"},React.createElement(O,{data:t,keys:n,getIndex:Le,radiusScale:qe,angleStep:Xe,symbol:A,size:$,colorByKey:Ve,color:H,borderWidth:z,borderColor:G,enableLabel:N,label:J,formatValue:Te,labelYOffset:te}))),u.includes("legends")&&($e.legends=React.createElement(r.Fragment,{key:"legends"},Ae.map((function(e,t){return React.createElement(a.$6,g({key:t},e,{containerWidth:x,containerHeight:k}))})))),React.createElement(o.tM,{defs:De,width:Se,height:Ce,margin:_e,role:he,ariaLabel:ye,ariaLabelledBy:ve,ariaDescribedBy:ge},u.map((function(e,t){var n;return"function"==typeof e?React.createElement(r.Fragment,{key:t},(0,r.createElement)(e,Ke)):null!=(n=null==$e?void 0:$e[e])?n:null})))},w=function(e){var t=e.isInteractive,n=void 0===t?L.isInteractive:t,r=e.animate,a=void 0===r?L.animate:r,i=e.motionConfig,l=void 0===i?L.motionConfig:i,u=e.theme,c=e.renderWrapper,s=m(e,T);return React.createElement(o.W2,{animate:a,isInteractive:n,motionConfig:l,renderWrapper:c,theme:u},React.createElement(V,g({isInteractive:n},s)))},D=function(e){return React.createElement(o.d,null,(function(t){var n=t.width,r=t.height;return React.createElement(w,g({width:n,height:r},e))}))}}}]);
//# sourceMappingURL=e64d68d709d71eab07f23953910e81fe4be31d23-888630e7bf5ce9fbbf68.js.map