(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[869],{7996:function(t){var n=function(t){void 0==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};n.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++){t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30;this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0}},n.prototype.init_by_array=function(t,n){var e,r,i;for(this.init_seed(19650218),e=1,r=0,i=this.N>n?this.N:n;i;i--){var o=this.mt[e-1]^this.mt[e-1]>>>30;this.mt[e]=(this.mt[e]^(1664525*((4294901760&o)>>>16)<<16)+1664525*(65535&o))+t[r]+r,this.mt[e]>>>=0,r++,++e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1),r>=n&&(r=0)}for(i=this.N-1;i;i--){o=this.mt[e-1]^this.mt[e-1]>>>30;this.mt[e]=(this.mt[e]^(1566083941*((4294901760&o)>>>16)<<16)+1566083941*(65535&o))-e,this.mt[e]>>>=0,++e>=this.N&&(this.mt[0]=this.mt[this.N-1],e=1)}this.mt[0]=2147483648},n.prototype.random_int=function(){var t,n=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var e;for(this.mti==this.N+1&&this.init_seed(5489),e=0;e<this.N-this.M;e++)t=this.mt[e]&this.UPPER_MASK|this.mt[e+1]&this.LOWER_MASK,this.mt[e]=this.mt[e+this.M]^t>>>1^n[1&t];for(;e<this.N-1;e++)t=this.mt[e]&this.UPPER_MASK|this.mt[e+1]&this.LOWER_MASK,this.mt[e]=this.mt[e+(this.M-this.N)]^t>>>1^n[1&t];t=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^t>>>1^n[1&t],this.mti=0}return t=this.mt[this.mti++],t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0},n.prototype.random_int31=function(){return this.random_int()>>>1},n.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},n.prototype.random=function(){return this.random_int()*(1/4294967296)},n.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},n.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)},t.exports=n},65869:function(t,n,e){"use strict";e.r(n);var r=e(85893),i=e(11163),o=e(32125),s=e(44111),a=e.n(s),u=e(65573);function h(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function c(){var t=h(["\n  background-color: #fff;\n  box-shadow: rgb(0 0 0 / 12%) 0px 2px 6px 0px;\n  width: 100%;\n  min-width: 1440px;\n  height: 54px;\n"]);return c=function(){return t},t}function f(){var t=h(["\n  display: flex;\n  align-items: center;\n  padding: 0 72px;\n  width: 100%;\n  height: 100%;\n"]);return f=function(){return t},t}function l(){var t=h(["\n  background-image: url(https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31);\n  background-size: 100%;\n  width: 108px;\n  height: 23px;\n"]);return l=function(){return t},t}function d(){var t=h(["\n  color: #484644;\n  font-size: 18px;\n  margin-left: 16px;\n"]);return d=function(){return t},t}function p(){var t=h(["\n  display: flex;\n  flex: 1 auto;\n  align-items: center;\n"]);return p=function(){return t},t}function m(){var t=h(["\n  display: flex;\n  flex: 0 auto;\n  align-items: center;\n"]);return m=function(){return t},t}function v(){var t=h(["\n  color: #605e5c;\n  max-width: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-left: 8px;\n  font-size: 13px;\n"]);return v=function(){return t},t}function _(){var t=h(["\n  display: flex;\n  cursor: pointer;\n"]);return _=function(){return t},t}var g=o.ZP.div(c()),x=o.ZP.div(f()),y=o.ZP.div(l()),b=o.ZP.h1(d()),j=o.ZP.div(p()),M=o.ZP.div(m()),P=o.ZP.div(v()),O=o.ZP.div(_());n.default=function(){var t=(0,i.useRouter)(),n=(0,u.Z)();return(0,r.jsx)(g,{children:(0,r.jsxs)(x,{children:[(0,r.jsx)(j,{children:(0,r.jsxs)(O,{onClick:function(){return t.push("/")},children:[(0,r.jsx)(y,{}),(0,r.jsx)(b,{children:"Bit Forest App Store"})]})}),(0,r.jsxs)(M,{children:[(0,r.jsx)(a(),{diameter:24,seed:n.account}),(0,r.jsx)(P,{title:"".concat(n.account),children:n.account})]})]})})}},11163:function(t,n,e){t.exports=e(90387)},35342:function(t,n,e){"use strict";var r=this&&this.__extends||function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},i.apply(this,arguments)},o=this&&this.__createBinding||(Object.create?function(t,n,e,r){void 0===r&&(r=e),Object.defineProperty(t,r,{enumerable:!0,get:function(){return n[e]}})}:function(t,n,e,r){void 0===r&&(r=e),t[r]=n[e]}),s=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),a=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&o(n,t,e);return s(n,t),n},u=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var h=e(85893),c=a(e(67294)),f=u(e(7996)),l=e(16401),d=u(e(17241)),p=u(e(62480)),m=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.genColor=function(t){n.generator.random();var e=Math.floor(t.length*n.generator.random());return t.splice(e,1)[0]},n.hueShift=function(t,n){var e=30*n.random()-15;return t.map((function(t){return(0,l.colorRotate)(t,e)}))},n.genShape=function(t,e,r,i){var o=e/2,s=n.generator.random(),a=2*Math.PI*s,u=e/i*n.generator.random()+r*e/i,c="translate("+Math.cos(a)*u+" "+Math.sin(a)*u+")"+" "+("rotate("+(360*s+180*n.generator.random()).toFixed(1)+" "+o+" "+o+")"),f=n.genColor(t);return(0,h.jsx)("rect",{x:"0",y:"0",rx:"0",ry:"0",height:e,width:e,transform:c,fill:f},r)},n}return r(n,t),n.prototype.render=function(){var t=this,n=this.props,e=n.diameter,r=void 0===e?24:e,o=n.paperStyles,s=void 0===o?{}:o,a=n.seed,u=n.svgStyles,c=void 0===u?{}:u;this.generator=new f.default(a);var l=this.hueShift(d.default.slice(),this.generator),m=Array(4).fill(void 0);return(0,h.jsx)(p.default,i({color:this.genColor(l),diameter:r,style:s},{children:(0,h.jsx)("svg",i({xmlns:"http://www.w3.org/2000/svg",x:"0",y:"0",height:r,width:r,style:c},{children:m.map((function(n,e){return t.genShape(l,r,e,3)}))}),void 0)}),void 0)},n}(c.PureComponent);n.default=m},62480:function(t,n,e){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},r.apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var i=e(85893),o={borderRadius:"50px",display:"inline-block",margin:0,overflow:"hidden",padding:0};n.default=function(t){var n=t.children,e=t.color,s=t.diameter,a=t.style;return(0,i.jsx)("div",r({className:"paper",style:r(r(r({},o),{backgroundColor:e,height:s,width:s}),a)},{children:n}),void 0)}},16401:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.HSLToHex=n.hexToHSL=n.colorRotate=void 0;n.colorRotate=function(t,e){var r=(0,n.hexToHSL)(t),i=r.h;return i=(i=(i+e)%360)<0?360+i:i,r.h=i,(0,n.HSLToHex)(r)};n.hexToHSL=function(t){var n="0x"+t[1]+t[2],e="0x"+t[3]+t[4],r="0x"+t[5]+t[6],i=parseInt(n)/255,o=parseInt(e)/255,s=parseInt(r)/255,a=Math.min(i,o,s),u=Math.max(i,o,s),h=u-a,c=0,f=0;return c=0==h?0:u==i?(o-s)/h%6:u==o?(s-i)/h+2:(i-o)/h+4,(c=Math.round(60*c))<0&&(c+=360),f=(u+a)/2,{h:c,s:+(100*(0==h?0:h/(1-Math.abs(2*f-1)))).toFixed(1),l:f=+(100*f).toFixed(1)}};n.HSLToHex=function(t){var n=t.h,e=t.s,r=t.l;e/=100,r/=100;var i=(1-Math.abs(2*r-1))*e,o=i*(1-Math.abs(n/60%2-1)),s=r-i/2,a=0,u=0,h=0;0<=n&&n<60?(a=i,u=o,h=0):60<=n&&n<120?(a=o,u=i,h=0):120<=n&&n<180?(a=0,u=i,h=o):180<=n&&n<240?(a=0,u=o,h=i):240<=n&&n<300?(a=o,u=0,h=i):300<=n&&n<360&&(a=i,u=0,h=o);var c=Math.round(255*(a+s)).toString(16),f=Math.round(255*(u+s)).toString(16),l=Math.round(255*(h+s)).toString(16);return 1==c.length&&(c="0"+c),1==f.length&&(f="0"+f),1==l.length&&(l="0"+l),"#"+c+f+l}},17241:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=Object.freeze(["#01888c","#fc7500","#034f5d","#f73f01","#fc1960","#c7144c","#f3c100","#1598f2","#2465e1","#f19e02"])},44111:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.jsNumberForAddress=n.default=void 0;var i=e(35342);Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r(i).default}});var o=e(586);Object.defineProperty(n,"jsNumberForAddress",{enumerable:!0,get:function(){return r(o).default}})},586:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){var n=t.slice(2,10);return parseInt(n,16)}}}]);