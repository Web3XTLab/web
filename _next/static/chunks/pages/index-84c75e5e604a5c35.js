(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{45301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(26529)}])},65573:function(n,e,r){"use strict";r.d(e,{Z:function(){return o}});var t=r(67294),i=r(99843);function o(){return(0,t.useContext)(i.Z)}},26529:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return ln}});var t=r(85893),i=r(5152),o=r(11163),a=r(67294),c=r(32125),u=r(78629),s=r(68300),l={root:{width:296,boxSizing:"border-box",borderRight:"1px solid #eee",overflowY:"auto",marginTop:12}},f=[{links:[{name:"Popular Apps",url:"#",expandAriaLabel:"Expand Home section",collapseAriaLabel:"Collapse Home section",links:[{name:"Activity",url:"#",key:"key1"},{name:"Free",url:"#",key:"key2"}],isExpanded:!0},{name:"Games",url:"#",key:"key3",isExpanded:!0},{name:"Work",url:"#",key:"key4"},{name:"Music",url:"#",key:"key5"},{name:"Video",url:"#",key:"key6"},{name:"TopFree Apps",url:"#",icon:"News",key:"key7"}]}];function d(n,e){e&&"News"===e.name&&alert("News link clicked")}var p=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.R,{placeholder:"Search"}),(0,t.jsx)(u.J,{onLinkClick:d,selectedKey:"",ariaLabel:"Nav basic example",styles:l,groups:f})]})},x=r(38113);function v(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){var n=v(["\n  display: flex;\n"]);return h=function(){return n},n}function m(){var n=v(["\n  flex: 0 0 608px;\n"]);return m=function(){return n},n}function j(){var n=v(["\n  margin-left: 18px;\n  flex: 1 1 auto;\n"]);return j=function(){return n},n}function k(){var n=v(["\n  font-size: 16px;\n"]);return k=function(){return n},n}function b(){var n=v(["\n  color: #979593;\n  font-size: 13px;\n  margin-top: 16px;\n"]);return b=function(){return n},n}var g=c.ZP.div(h()),w=c.ZP.div(m()),y=c.ZP.div(j()),P=c.ZP.h3(k()),Z=c.ZP.p(b()),C=function(){return(0,t.jsxs)(g,{children:[(0,t.jsx)(w,{children:(0,t.jsx)("img",{width:"100%",src:"https://store-images.s-microsoft.com/image/apps.24192.d5843a61-6690-459f-ae52-ae77f312646b.60631f11-c517-4883-af5a-6153c3e7f440.6b723fda-6967-4edd-9753-7a75da9a9511"})}),(0,t.jsxs)(y,{children:[(0,t.jsx)(P,{children:"Editor Choice"}),(0,t.jsx)(Z,{children:"This is the DAppStore handpicked App placement for users. App owners can also bid to increase the visibility of their apps."}),(0,t.jsx)(x.K,{style:{marginTop:24},children:"Get"})]})]})},O=r(34051),_=r.n(O),z=r(65573),E=r(27494),N=r(40765),A=r(9669),I=r.n(A),S=r(20316);function R(n,e,r,t,i,o,a){try{var c=n[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,i)}function T(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function F(){var n=T(["\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #edebe9;\n  padding: 8px;\n  width: 166px;\n  height: 249px;\n  justify-content: center;\n  margin-right: 16px;\n  margin-bottom: 12px;\n  overflow: hidden;\n\n  &:hover {\n    opacity: 0.9;\n  }\n"]);return F=function(){return n},n}function G(){var n=T(["\n  margin-bottom: 8px;\n  height: 19px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap;\n"]);return G=function(){return n},n}function L(){var n=T(["\n  width: 150px;\n  margin-bottom: 4px;\n"]);return L=function(){return n},n}function H(){var n=T(["\n  margin-bottom: 4px;\n"]);return H=function(){return n},n}function K(){var n=T(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  span {\n    color: #605e5c;\n    padding-left: 8px;\n  }\n"]);return K=function(){return n},n}var U=c.ZP.div(F()),D=c.ZP.h4(G()),X=c.ZP.img(L()),$=c.ZP.div(H()),J=c.ZP.div(K()),M=function(n){var e=n.data,r=n.onItemClick,i=(0,a.useState)({}),o=i[0],c=i[1],u=(0,a.useState)("loading"),s=u[0],l=u[1];(0,a.useEffect)((function(){var n;(n=_().mark((function n(){var r,t;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.tokenURI,n.prev=1,n.next=4,I().get(r,{timeout:5e3});case 4:t=n.sent,c(t.data),l("loaded"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),l("error"),console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function a(n){R(o,t,i,a,c,"next",n)}function c(n){R(o,t,i,a,c,"throw",n)}a(void 0)}))})()}),[e]);var f=(0,a.useCallback)((function(){r(e)}),[e,r]);return(0,t.jsxs)(U,{onClick:f,children:["loading"===s&&(0,t.jsx)(E.$,{}),"error"===s&&(0,t.jsxs)(J,{children:[(0,t.jsx)(S.xu,{iconName:"Cancel"}),(0,t.jsx)("span",{children:"Data Error"})]}),"loaded"===s&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(X,{src:o.image}),(0,t.jsx)(D,{title:o.name,children:o.name}),(0,t.jsx)($,{children:(0,t.jsx)(N.Z,{count:5,value:4,size:12,edit:!1,color2:"#ffd700"})}),(0,t.jsx)(x.K,{children:"Get"})]})]})};function V(n,e,r,t,i,o,a){try{var c=n[o](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(t,i)}function W(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Y(){var n=W(["\n  display: flex;\n  margin-top: 12px;\n  flex-wrap: wrap;\n"]);return Y=function(){return n},n}function q(){var n=W(["\n  margin-top: 32px;\n"]);return q=function(){return n},n}function B(){var n=W(["\n  padding: 24px 0;\n  font-size: 13px;\n  color: #605e5c;\n"]);return B=function(){return n},n}var Q=c.ZP.div(Y()),nn=c.ZP.h4(q()),en=c.ZP.div(B()),rn=function(n){var e=n.onItemClick,r=(0,a.useState)("loading"),i=r[0],o=r[1],c=(0,a.useState)([]),u=c[0],s=c[1],l=(0,z.Z)();return(0,a.useEffect)((function(){var n;(n=_().mark((function n(){var e;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.tokenURIs();case 2:if((e=n.sent)&&0!==(null===e||void 0===e?void 0:e.length)){n.next=6;break}return o("empty"),n.abrupt("return");case 6:o("loaded"),s(e);case 8:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,i){var o=n.apply(e,r);function a(n){V(o,t,i,a,c,"next",n)}function c(n){V(o,t,i,a,c,"throw",n)}a(void 0)}))})()}),[]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(nn,{children:"Popular Apps"}),"loading"===i&&(0,t.jsx)(en,{children:(0,t.jsx)(E.$,{label:"Seriously, still loading...",labelPosition:"right"})}),"loaded"===i&&(0,t.jsx)(Q,{children:u.map((function(n,r){return(0,t.jsx)(M,{data:{tokenURI:n,_tokenId:"".concat(r)},onItemClick:e},"".concat(r))}))}),"empty"===i&&(0,t.jsx)(en,{children:"No Apps Here"})]})};function tn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function on(){var n=tn(["\n  flex: 0 296px;\n"]);return on=function(){return n},n}function an(){var n=tn(["\n  background: grren;\n  flex: 1 auto;\n  margin-left: 24px;\n"]);return an=function(){return n},n}var cn=(0,i.default)((function(){return Promise.all([r.e(150),r.e(564)]).then(r.bind(r,16564))}),{loadableGenerated:{webpack:function(){return[16564]}},ssr:!1}),un=c.ZP.div(on()),sn=c.ZP.div(an()),ln=function(){var n=(0,o.useRouter)(),e=(0,a.useCallback)((function(e){n.push("/detail?id=".concat(e._tokenId))}),[]);return(0,t.jsxs)(cn,{children:[(0,t.jsx)(un,{children:(0,t.jsx)(p,{})}),(0,t.jsxs)(sn,{children:[(0,t.jsx)(C,{}),(0,t.jsx)(rn,{onItemClick:e})]})]})}}},function(n){n.O(0,[482,714,51,3,120,769,623,774,888,179],(function(){return e=45301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);