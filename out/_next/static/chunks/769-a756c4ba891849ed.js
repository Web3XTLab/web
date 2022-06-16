"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{78629:function(e,o,t){t.d(o,{J:function(){return S}});var n,r=t(82154),i=t(28385),a=t(67294),l=t(2291),s=t(77804),c=t(97750),d=t(82362),p=t(96233),u=t(87975),h=(0,p.NF)((function(e,o){var t,n,r,i=(0,u.W)(e),a={root:{padding:"0 4px",height:"40px",color:e.palette.neutralPrimary,backgroundColor:"transparent",border:"1px solid transparent",selectors:(t={},t[d.qJ]={borderColor:"Window"},t)},rootHovered:{color:e.palette.themePrimary,selectors:(n={},n[d.qJ]={color:"Highlight"},n)},iconHovered:{color:e.palette.themePrimary},rootPressed:{color:e.palette.black},rootExpanded:{color:e.palette.themePrimary},iconPressed:{color:e.palette.themeDarker},rootDisabled:{color:e.palette.neutralTertiary,backgroundColor:"transparent",borderColor:"transparent",selectors:(r={},r[d.qJ]={color:"GrayText"},r)},rootChecked:{color:e.palette.black},iconChecked:{color:e.palette.themeDarker},flexContainer:{justifyContent:"flex-start"},icon:{color:e.palette.themeDarkAlt},iconDisabled:{color:"inherit"},menuIcon:{color:e.palette.neutralSecondary},textContainer:{flexGrow:0}};return(0,d.E$)(i,a,o)})),m=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return(0,i.ZT)(o,e),o.prototype.render=function(){var e=this.props,o=e.styles,t=e.theme;return a.createElement(l.Y,(0,i.pi)({},this.props,{variantClassName:"ms-Button--action ms-Button--command",styles:h(t,o),onRenderDescription:s.S}))},o=(0,i.gn)([(0,c.a)("ActionButton",["theme","styles"],!0)],o)}(a.Component),v={root:"ms-Nav",linkText:"ms-Nav-linkText",compositeLink:"ms-Nav-compositeLink",link:"ms-Nav-link",chevronButton:"ms-Nav-chevronButton",chevronIcon:"ms-Nav-chevron",navItem:"ms-Nav-navItem",navItems:"ms-Nav-navItems",group:"ms-Nav-group",groupContent:"ms-Nav-groupContent"},f={textContainer:{overflow:"hidden"},label:{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"}},k=t(79785),g=t(3528),x=t(55395),b=t(4921),y=t(97356),C=t(64264),E=t(52672),L=t(66343),B=t(85720);var N=(0,k.y)(),w=function(e){function o(o){var t=e.call(this,o)||this;return t._focusZone=a.createRef(),t._onRenderLink=function(e){var o=t.props,n=o.styles,r=o.groups,i=o.theme,l=N(n,{theme:i,groups:r});return a.createElement("div",{className:l.linkText},e.name)},t._renderGroup=function(e,o){var n=t.props,r=n.styles,l=n.groups,s=n.theme,c=n.onRenderGroupHeader,d=void 0===c?t._renderGroupHeader:c,p=t._isGroupExpanded(e),u=N(r,{theme:s,isGroup:!0,isExpanded:p,groups:l}),h=(0,i.pi)((0,i.pi)({},e),{isExpanded:p,onHeaderClick:function(o,n){t._onGroupHeaderClicked(e,o)}});return a.createElement("div",{key:o,className:u.group},h.name?d(h,t._renderGroupHeader):null,a.createElement("div",{className:u.groupContent},t._renderLinks(h.links,0)))},t._renderGroupHeader=function(e){var o=t.props,n=o.styles,r=o.groups,i=o.theme,l=o.expandButtonAriaLabel,s=e.isExpanded,c=N(n,{theme:i,isGroup:!0,isExpanded:s,groups:r}),d=(s?e.collapseAriaLabel:e.expandAriaLabel)||l,p=e.onHeaderClick,u=p?function(e){p(e,s)}:void 0;return a.createElement("button",{className:c.chevronButton,onClick:u,"aria-label":d,"aria-expanded":s},a.createElement(E.J,{className:c.chevronIcon,iconName:"ChevronDown"}),e.name)},(0,g.l)(t),t.state={isGroupCollapsed:{},isLinkExpandStateChanged:!1,selectedKey:o.initialSelectedKey||o.selectedKey},t}return(0,i.ZT)(o,e),o.prototype.render=function(){var e=this.props,o=e.styles,t=e.groups,n=e.className,r=e.isOnTop,i=e.theme;if(!t)return null;var l=t.map(this._renderGroup),s=N(o,{theme:i,className:n,isOnTop:r,groups:t});return a.createElement(y.k,{direction:C.U.vertical,componentRef:this._focusZone},a.createElement("nav",{role:"navigation",className:s.root,"aria-label":this.props.ariaLabel},l))},Object.defineProperty(o.prototype,"selectedKey",{get:function(){return this.state.selectedKey},enumerable:!1,configurable:!0}),o.prototype.focus=function(e){return void 0===e&&(e=!1),!(!this._focusZone||!this._focusZone.current)&&this._focusZone.current.focus(e)},o.prototype._renderNavLink=function(e,o,t){var n,r=this.props,i=r.styles,l=r.groups,s=r.theme,c=e.icon||e.iconProps,d=this._isLinkSelected(e),p=e.ariaCurrent,u=void 0===p?"page":p,h=N(i,{theme:s,isSelected:d,isDisabled:e.disabled,isButtonEntry:e.onClick&&!e.forceAnchor,leftPadding:14*t+3+(c?0:24),groups:l}),v=e.url&&e.target&&(!(n=e.url)||/^[a-z0-9+-.]+:\/\//i.test(n))?"noopener noreferrer":void 0,k=this.props.linkAs?(0,L.Z)(this.props.linkAs,m):m,g=this.props.onRenderLink?(0,B.k)(this.props.onRenderLink,this._onRenderLink):this._onRenderLink;return a.createElement(k,{className:h.link,styles:f,href:e.url||(e.forceAnchor?"#":void 0),iconProps:e.iconProps||{iconName:e.icon},onClick:e.onClick?this._onNavButtonLinkClicked.bind(this,e):this._onNavAnchorLinkClicked.bind(this,e),title:void 0!==e.title?e.title:e.name,target:e.target,rel:v,disabled:e.disabled,"aria-current":d?u:void 0,"aria-label":e.ariaLabel?e.ariaLabel:void 0,link:e},g(e))},o.prototype._renderCompositeLink=function(e,o,t){var n=(0,i.pi)({},(0,x.pq)(e,x.n7,["onClick"])),r=this.props,l=r.expandButtonAriaLabel,s=r.styles,c=r.groups,d=r.theme,p=N(s,{theme:d,isExpanded:!!e.isExpanded,isSelected:this._isLinkSelected(e),isLink:!0,isDisabled:e.disabled,position:14*t+1,groups:c}),u="";return e.links&&e.links.length>0&&(u=e.collapseAriaLabel||e.expandAriaLabel?e.isExpanded?e.collapseAriaLabel:e.expandAriaLabel:l?e.name+" "+l:e.name),a.createElement("div",(0,i.pi)({},n,{key:e.key||o,className:p.compositeLink}),e.links&&e.links.length>0?a.createElement("button",{className:p.chevronButton,onClick:this._onLinkExpandClicked.bind(this,e),"aria-label":u,"aria-expanded":e.isExpanded?"true":"false"},a.createElement(E.J,{className:p.chevronIcon,iconName:"ChevronDown"})):null,this._renderNavLink(e,o,t))},o.prototype._renderLink=function(e,o,t){var n=this.props,r=n.styles,i=n.groups,l=n.theme,s=N(r,{theme:l,groups:i});return a.createElement("li",{key:e.key||o,role:"listitem",className:s.navItem},this._renderCompositeLink(e,o,t),e.isExpanded?this._renderLinks(e.links,++t):null)},o.prototype._renderLinks=function(e,o){var t=this;if(!e||!e.length)return null;var n=e.map((function(e,n){return t._renderLink(e,n,o)})),r=this.props,i=r.styles,l=r.groups,s=r.theme,c=N(i,{theme:s,groups:l});return a.createElement("ul",{role:"list",className:c.navItems},n)},o.prototype._onGroupHeaderClicked=function(e,o){e.onHeaderClick&&e.onHeaderClick(o,this._isGroupExpanded(e)),void 0===e.isExpanded&&this._toggleCollapsed(e),o&&(o.preventDefault(),o.stopPropagation())},o.prototype._onLinkExpandClicked=function(e,o){var t=this.props.onLinkExpandClick;t&&t(o,e),o.defaultPrevented||(e.isExpanded=!e.isExpanded,this.setState({isLinkExpandStateChanged:!0})),o.preventDefault(),o.stopPropagation()},o.prototype._preventBounce=function(e,o){!e.url&&e.forceAnchor&&o.preventDefault()},o.prototype._onNavAnchorLinkClicked=function(e,o){this._preventBounce(e,o),this.props.onLinkClick&&this.props.onLinkClick(o,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,o),this.setState({selectedKey:e.key})},o.prototype._onNavButtonLinkClicked=function(e,o){this._preventBounce(e,o),e.onClick&&e.onClick(o,e),!e.url&&e.links&&e.links.length>0&&this._onLinkExpandClicked(e,o),this.setState({selectedKey:e.key})},o.prototype._isLinkSelected=function(e){if(void 0!==this.props.selectedKey)return e.key===this.props.selectedKey;if(void 0!==this.state.selectedKey)return e.key===this.state.selectedKey;if("undefined"===typeof(0,b.J)()||!e.url)return!1;(n=n||document.createElement("a")).href=e.url||"";var o=n.href;return location.href===o||(location.protocol+"//"+location.host+location.pathname===o||!!location.hash&&(location.hash===e.url||(n.href=location.hash.substring(1),n.href===o)))},o.prototype._isGroupExpanded=function(e){return void 0!==e.isExpanded?e.isExpanded:e.name&&this.state.isGroupCollapsed.hasOwnProperty(e.name)?!this.state.isGroupCollapsed[e.name]:void 0===e.collapseByDefault||!e.collapseByDefault},o.prototype._toggleCollapsed=function(e){var o;if(e.name){var t=(0,i.pi)((0,i.pi)({},this.state.isGroupCollapsed),((o={})[e.name]=this._isGroupExpanded(e),o));this.setState({isGroupCollapsed:t})}},o.defaultProps={groups:null},o}(a.Component),S=(0,r.z)(w,(function(e){var o,t=e.className,n=e.theme,r=e.isOnTop,i=e.isExpanded,a=e.isGroup,l=e.isLink,s=e.isSelected,c=e.isDisabled,p=e.isButtonEntry,u=e.navHeight,h=void 0===u?44:u,m=e.position,f=e.leftPadding,k=void 0===f?20:f,g=e.leftPaddingExpanded,x=void 0===g?28:g,b=e.rightPadding,y=void 0===b?20:b,C=n.palette,E=n.semanticColors,L=n.fonts,B=(0,d.Cn)(v,n);return{root:[B.root,t,L.medium,{overflowY:"auto",userSelect:"none",WebkitOverflowScrolling:"touch"},r&&[{position:"absolute"},d.k4.slideRightIn40]],linkText:[B.linkText,{margin:"0 4px",overflow:"hidden",verticalAlign:"middle",textAlign:"left",textOverflow:"ellipsis"}],compositeLink:[B.compositeLink,{display:"block",position:"relative",color:E.bodyText},i&&"is-expanded",s&&"is-selected",c&&"is-disabled",c&&{color:E.disabledText}],link:[B.link,(0,d.GL)(n),{display:"block",position:"relative",height:h,width:"100%",lineHeight:h+"px",textDecoration:"none",cursor:"pointer",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",paddingLeft:k,paddingRight:y,color:E.bodyText,selectors:(o={},o[d.qJ]={border:0,selectors:{":focus":{border:"1px solid WindowText"}}},o)},!c&&{selectors:{".ms-Nav-compositeLink:hover &":{backgroundColor:E.bodyBackgroundHovered}}},s&&{color:E.bodyTextChecked,fontWeight:d.lq.semibold,backgroundColor:E.bodyBackgroundChecked,selectors:{"&:after":{borderLeft:"2px solid "+C.themePrimary,content:'""',position:"absolute",top:0,right:0,bottom:0,left:0,pointerEvents:"none"}}},c&&{color:E.disabledText},p&&{color:C.themePrimary}],chevronButton:[B.chevronButton,(0,d.GL)(n),L.small,{display:"block",textAlign:"left",lineHeight:h+"px",margin:"5px 0",padding:"0px, "+y+"px, 0px, "+x+"px",border:"none",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",cursor:"pointer",color:E.bodyText,backgroundColor:"transparent",selectors:{"&:visited":{color:E.bodyText}}},a&&{fontSize:L.large.fontSize,width:"100%",height:h,borderBottom:"1px solid "+E.bodyDivider},l&&{display:"block",width:x-2,height:h-2,position:"absolute",top:"1px",left:m+"px",zIndex:d.bR.Nav,padding:0,margin:0}],chevronIcon:[B.chevronIcon,{position:"absolute",left:"8px",height:h,display:"inline-flex",alignItems:"center",lineHeight:h+"px",fontSize:L.small.fontSize,transition:"transform .1s linear"},i&&{transform:"rotate(-180deg)"},l&&{top:0}],navItem:[B.navItem,{padding:0}],navItems:[B.navItems,{listStyleType:"none",padding:0,margin:0}],group:[B.group,i&&"is-expanded"],groupContent:[B.groupContent,{display:"none",marginBottom:"40px"},d.k4.slideDownIn20,i&&{display:"block"}]}}),void 0,{scope:"Nav"})},68300:function(e,o,t){t.d(o,{R:function(){return D}});var n=t(82154),r=t(28385),i=t(67294),a=t(79785),l=t(55395),s=t(16986),c=t(76856);var d=t(13052),p=t(40229),u=t(2291),h=t(77804),m=t(97750),v=t(82362),f=t(96233),k=t(87975),g=t(72311),x=(0,f.NF)((function(e,o){var t,n=(0,k.W)(e),r=(0,g.W)(e),i=e.palette,a={root:{padding:"0 4px",width:"32px",height:"32px",backgroundColor:"transparent",border:"none",color:e.semanticColors.link},rootHovered:{color:i.themeDarkAlt,backgroundColor:i.neutralLighter,selectors:(t={},t[v.qJ]={borderColor:"Highlight",color:"Highlight"},t)},rootHasMenu:{width:"auto"},rootPressed:{color:i.themeDark,backgroundColor:i.neutralLight},rootExpanded:{color:i.themeDark,backgroundColor:i.neutralLight},rootChecked:{color:i.themeDark,backgroundColor:i.neutralLight},rootCheckedHovered:{color:i.themeDark,backgroundColor:i.neutralQuaternaryAlt},rootDisabled:{color:i.neutralTertiaryAlt}};return(0,v.E$)(n,a,r,o)})),b=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return(0,r.ZT)(o,e),o.prototype.render=function(){var e=this.props,o=e.styles,t=e.theme;return i.createElement(u.Y,(0,r.pi)({},this.props,{variantClassName:"ms-Button--icon",styles:x(t,o),onRenderText:h.S,onRenderDescription:h.S}))},o=(0,r.gn)([(0,m.a)("IconButton",["theme","styles"],!0)],o)}(i.Component),y=t(52672),C="SearchBox",E={root:{height:"auto"},icon:{fontSize:"12px"}},L={iconName:"Clear"},B={ariaLabel:"Clear text"},N=(0,a.y)(),w=i.forwardRef((function(e,o){var t=e.ariaLabel,n=e.className,a=e.defaultValue,u=void 0===a?"":a,h=e.disabled,m=e.underlined,v=e.styles,f=e.labelText,k=e.placeholder,g=void 0===k?f:k,x=e.theme,w=e.clearButtonProps,S=void 0===w?B:w,_=e.disableAnimation,D=void 0!==_&&_,P=e.showIcon,I=void 0!==P&&P,T=e.onClear,A=e.onBlur,H=e.onEscape,G=e.onSearch,R=e.onKeyDown,J=e.iconProps,K=e.role,z=e.onChange,F=e.onChanged,W=i.useState(!1),q=W[0],O=W[1],Z=i.useRef(),Y=function(e,o,t){var n=i.useState(o),r=n[0],a=n[1],l=(0,c.B)(void 0!==e),s=l?e:r,d=i.useRef(s),p=i.useRef(t);i.useEffect((function(){d.current=s,p.current=t}));var u=(0,c.B)((function(){return function(e,o){var t="function"===typeof e?e(d.current):e;p.current&&p.current(o,t),l||a(t)}}));return[s,u]}(e.value,u,(function(e,o){e&&e.timeStamp===Z.current||(Z.current=null===e||void 0===e?void 0:e.timeStamp,null===z||void 0===z||z(e,o),null===F||void 0===F||F(o))})),j=Y[0],V=Y[1],$=String(j),M=i.useRef(null),Q=i.useRef(null),U=(0,d.r)(M,o),X=(0,p.M)(C,e.id),ee=S.onClick,oe=N(v,{theme:x,className:n,underlined:m,hasFocus:q,disabled:h,hasInput:$.length>0,disableAnimation:D,showIcon:I}),te=(0,l.pq)(e,l.Gg,["className","placeholder","onFocus","onBlur","value","role"]),ne=i.useCallback((function(e){var o;null===T||void 0===T||T(e),e.defaultPrevented||(V(""),null===(o=Q.current)||void 0===o||o.focus(),e.stopPropagation(),e.preventDefault())}),[T,V]),re=i.useCallback((function(e){null===ee||void 0===ee||ee(e),e.defaultPrevented||ne(e)}),[ee,ne]),ie=i.useCallback((function(e){O(!1),null===A||void 0===A||A(e)}),[A]),ae=function(e){V(e.target.value,e)};return function(e,o,t){i.useImperativeHandle(e,(function(){return{focus:function(){var e;return null===(e=o.current)||void 0===e?void 0:e.focus()},hasFocus:function(){return t}}}),[o,t])}(e.componentRef,Q,q),i.createElement("div",{role:K,ref:U,className:oe.root,onFocusCapture:function(o){var t;O(!0),null===(t=e.onFocus)||void 0===t||t.call(e,o)}},i.createElement("div",{className:oe.iconContainer,onClick:function(){Q.current&&(Q.current.focus(),Q.current.selectionStart=Q.current.selectionEnd=0)},"aria-hidden":!0},i.createElement(y.J,(0,r.pi)({iconName:"Search"},J,{className:oe.icon}))),i.createElement("input",(0,r.pi)({},te,{id:X,className:oe.field,placeholder:g,onChange:ae,onInput:ae,onBlur:ie,onKeyDown:function(e){switch(e.which){case s.m.escape:null===H||void 0===H||H(e),$&&!e.defaultPrevented&&ne(e);break;case s.m.enter:G&&(G($),e.preventDefault(),e.stopPropagation());break;default:null===R||void 0===R||R(e),e.defaultPrevented&&e.stopPropagation()}},value:$,disabled:h,role:"searchbox","aria-label":t,ref:Q})),$.length>0&&i.createElement("div",{className:oe.clearButton},i.createElement(b,(0,r.pi)({onBlur:ie,styles:E,iconProps:L},S,{onClick:re}))))}));w.displayName=C;var S=t(59154),_={root:"ms-SearchBox",iconContainer:"ms-SearchBox-iconContainer",icon:"ms-SearchBox-icon",clearButton:"ms-SearchBox-clearButton",field:"ms-SearchBox-field"};var D=(0,n.z)(w,(function(e){var o,t,n,r,i,a=e.theme,l=e.underlined,s=e.disabled,c=e.hasFocus,d=e.className,p=e.hasInput,u=e.disableAnimation,h=e.showIcon,m=a.palette,f=a.fonts,k=a.semanticColors,g=a.effects,x=(0,v.Cn)(_,a),b={color:k.inputPlaceholderText,opacity:1},y=m.neutralSecondary,C=m.neutralPrimary,E=m.neutralLighter,L=m.neutralLighter,B=m.neutralLighter;return{root:[x.root,f.medium,v.Fv,{color:k.inputText,backgroundColor:k.inputBackground,display:"flex",flexDirection:"row",flexWrap:"nowrap",alignItems:"stretch",padding:"1px 0 1px 4px",borderRadius:g.roundedCorner2,border:"1px solid "+k.inputBorder,height:32,selectors:(o={},o[v.qJ]={borderColor:"WindowText"},o[":hover"]={borderColor:k.inputBorderHovered,selectors:(t={},t[v.qJ]={borderColor:"Highlight"},t)},o[":hover ."+x.iconContainer]={color:k.inputIconHovered},o)},!c&&p&&{selectors:(n={},n[":hover ."+x.iconContainer]={width:4},n[":hover ."+x.icon]={opacity:0,pointerEvents:"none"},n)},c&&["is-active",{position:"relative"},(0,v.$Y)(k.inputFocusBorderAlt,l?0:g.roundedCorner2,l?"borderBottom":"border")],h&&[{selectors:(r={},r[":hover ."+x.iconContainer]={width:32},r[":hover ."+x.icon]={opacity:1},r)}],s&&["is-disabled",{borderColor:E,backgroundColor:B,pointerEvents:"none",cursor:"default",selectors:(i={},i[v.qJ]={borderColor:"GrayText"},i)}],l&&["is-underlined",{borderWidth:"0 0 1px 0",borderRadius:0,padding:"1px 0 1px 8px"}],l&&s&&{backgroundColor:"transparent"},p&&"can-clear",d],iconContainer:[x.iconContainer,{display:"flex",flexDirection:"column",justifyContent:"center",flexShrink:0,fontSize:16,width:32,textAlign:"center",color:k.inputIcon,cursor:"text"},c&&{width:4},s&&{color:k.inputIconDisabled},!u&&{transition:"width "+v.D1.durationValue1},h&&c&&{width:32}],icon:[x.icon,{opacity:1},c&&{opacity:0,pointerEvents:"none"},!u&&{transition:"opacity "+v.D1.durationValue1+" 0s"},h&&c&&{opacity:1}],clearButton:[x.clearButton,{display:"flex",flexDirection:"row",alignItems:"stretch",cursor:"pointer",flexBasis:"32px",flexShrink:0,padding:0,margin:"-1px 0px",selectors:{"&:hover .ms-Button":{backgroundColor:L},"&:hover .ms-Button-icon":{color:C},".ms-Button":{borderRadius:(0,S.zg)(a)?"1px 0 0 1px":"0 1px 1px 0"},".ms-Button-icon":{color:y}}}],field:[x.field,v.Fv,(0,v.Sv)(b),{backgroundColor:"transparent",border:"none",outline:"none",fontWeight:"inherit",fontFamily:"inherit",fontSize:"inherit",color:k.inputText,flex:"1 1 0px",minWidth:"0px",overflow:"hidden",textOverflow:"ellipsis",paddingBottom:.5,selectors:{"::-ms-clear":{display:"none"}}},s&&{color:k.disabledText}]}}),void 0,{scope:"SearchBox"})}}]);