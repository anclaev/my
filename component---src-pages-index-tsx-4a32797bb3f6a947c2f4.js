(self.webpackChunkanclaev=self.webpackChunkanclaev||[]).push([[691],{862:function(e,t,n){var r=n(8).default;function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}e.exports=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var o={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=M?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(o,a,u):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o},e.exports.default=e.exports,e.exports.__esModule=!0},523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,M){if(e===M)return!0;if(e&&M&&"object"==typeof e&&"object"==typeof M){if(e.constructor!==M.constructor)return!1;var a,u,c,N;if(Array.isArray(e)){if((a=e.length)!=M.length)return!1;for(u=a;0!=u--;)if(!o(e[u],M[u]))return!1;return!0}if(n&&e instanceof Map&&M instanceof Map){if(e.size!==M.size)return!1;for(N=e.entries();!(u=N.next()).done;)if(!M.has(u.value[0]))return!1;for(N=e.entries();!(u=N.next()).done;)if(!o(u.value[1],M.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&M instanceof Set){if(e.size!==M.size)return!1;for(N=e.entries();!(u=N.next()).done;)if(!M.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(M)){if((a=e.length)!=M.length)return!1;for(u=a;0!=u--;)if(e[u]!==M[u])return!1;return!0}if(e.constructor===RegExp)return e.source===M.source&&e.flags===M.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===M.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===M.toString();if((a=(c=Object.keys(e)).length)!==Object.keys(M).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(M,c[u]))return!1;if(t&&e instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==c[u]&&"__v"!==c[u]&&"__o"!==c[u]||!e.$$typeof)&&!o(e[c[u]],M[c[u]]))return!1;return!0}return e!=e&&M!=M}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,c=[];function N(){u=e(c.map((function(e){return e.props}))),g.canUseDOM?t(u):n&&(u=n(u))}var g=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,c=[],e};var M=i.prototype;return M.UNSAFE_componentWillMount=function(){c.push(this),N()},M.componentDidUpdate=function(){N()},M.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),N()},M.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return M(g,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),M(g,"canUseDOM",a),g}}},4951:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var r={};n.r(r);var i,o,M,a,u=n(7294),c=n(9703),N=n(5697),g=n.n(N),l=n(6124),D=n.n(l),s=n(523),T=n.n(s),j=n(4756),y=n.n(j),f="bodyAttributes",I="htmlAttributes",d="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(A).map((function(e){return A[e]})),"charset"),z="cssText",p="href",E="http-equiv",O="innerHTML",m="itemprop",L="name",h="property",C="rel",w="src",S="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},b="defaultTitle",Q="defer",v="encodeSpecialCharacters",U="onChangeClientState",Y="titleTemplate",_=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),P=[A.NOSCRIPT,A.SCRIPT,A.STYLE],R="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=ee(e,A.TITLE),n=ee(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ee(e,b);return t||r||void 0},q=function(e){return ee(e,U)||function(){}},K=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&oe("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),M=0;M<o.length;M++){var a=o[M],u=a.toLowerCase();-1===t.indexOf(u)||n===C&&"canonical"===e[n].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==O&&a!==z&&a!==m||(n=a)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][c]&&(i[n][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),M=0;M<o.length;M++){var a=o[M],u=y()({},r[a],i[a]);r[a]=u}return e}),[]).reverse()},ee=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},te=(i=Date.now(),function(e){var t=Date.now();t-i>16?(i=t,e(t)):setTimeout((function(){te(e)}),0)}),ne=function(e){return clearTimeout(e)},re="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||te:n.g.requestAnimationFrame||te,ie="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ne:n.g.cancelAnimationFrame||ne,oe=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},Me=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,M=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,c=e.scriptTags,N=e.styleTags,g=e.title,l=e.titleAttributes;Ne(A.BODY,r),Ne(A.HTML,i),ce(g,l);var D={baseTag:ge(A.BASE,n),linkTags:ge(A.LINK,o),metaTags:ge(A.META,M),noscriptTags:ge(A.NOSCRIPT,a),scriptTags:ge(A.SCRIPT,c),styleTags:ge(A.STYLE,N)},s={},T={};Object.keys(D).forEach((function(e){var t=D[e],n=t.newTags,r=t.oldTags;n.length&&(s[e]=n),r.length&&(T[e]=D[e].oldTags)})),t&&t(),u(e,s,T)},ue=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ue(e)),Ne(A.TITLE,t)},Ne=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(R),i=r?r.split(","):[],o=[].concat(i),M=Object.keys(t),a=0;a<M.length;a++){var u=M[a],c=t[u]||"";n.getAttribute(u)!==c&&n.setAttribute(u,c),-1===i.indexOf(u)&&i.push(u);var N=o.indexOf(u);-1!==N&&o.splice(N,1)}for(var g=o.length-1;g>=0;g--)n.removeAttribute(o[g]);i.length===o.length?n.removeAttribute(R):n.getAttribute(R)!==M.join(",")&&n.setAttribute(R,M.join(","))}},ge=function(e,t){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],M=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===z)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(R,"true"),i.some((function(e,t){return M=t,n.isEqualNode(e)}))?i.splice(M,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},De=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},se=function(e,t,n){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[R]=!0,i=De(n,r),[u.createElement(A.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ue(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+J(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case f:case I:return{toComponent:function(){return De(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[R]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===O||n===z){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),u.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===O||e===z)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+J(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",M=-1===P.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(M?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,M=e.metaTags,a=e.noscriptTags,u=e.scriptTags,c=e.styleTags,N=e.title,g=void 0===N?"":N,l=e.titleAttributes;return{base:se(A.BASE,t,r),bodyAttributes:se(f,n,r),htmlAttributes:se(I,i,r),link:se(A.LINK,o,r),meta:se(A.META,M,r),noscript:se(A.NOSCRIPT,a,r),script:se(A.SCRIPT,u,r),style:se(A.STYLE,c,r),title:se(A.TITLE,{title:g,titleAttributes:l},r)}},je=D()((function(e){return{baseTag:X([p,S],e),bodyAttributes:K(f,e),defer:ee(e,Q),encode:ee(e,v),htmlAttributes:K(I,e),linkTags:$(A.LINK,[C,p],e),metaTags:$(A.META,[L,x,E,h,m],e),noscriptTags:$(A.NOSCRIPT,[O],e),onChangeClientState:q(e),scriptTags:$(A.SCRIPT,[w,O],e),styleTags:$(A.STYLE,[z],e),title:V(e),titleAttributes:K(d,e)}}),(function(e){Me&&ie(Me),e.defer?Me=re((function(){ae(e,(function(){Me=null}))})):(ae(e),Me=null)}),Te)((function(){return null})),ye=(o=je,a=M=function(e){function t(){return H(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,M=e.nestedChildren;switch(r.type){case A.TITLE:return W({},i,((t={})[r.type]=M,t.titleAttributes=W({},o),t));case A.BODY:return W({},i,{bodyAttributes:W({},o)});case A.HTML:return W({},i,{htmlAttributes:W({},o)})}return W({},i,((n={})[r.type]=W({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(G(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:M,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:M,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=G(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(o,r)},B(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),M.propTypes={base:g().object,bodyAttributes:g().object,children:g().oneOfType([g().arrayOf(g().node),g().node]),defaultTitle:g().string,defer:g().bool,encodeSpecialCharacters:g().bool,htmlAttributes:g().object,link:g().arrayOf(g().object),meta:g().arrayOf(g().object),noscript:g().arrayOf(g().object),onChangeClientState:g().func,script:g().arrayOf(g().object),style:g().arrayOf(g().object),title:g().string,titleAttributes:g().object,titleTemplate:g().string},M.defaultProps={defer:!0,encodeSpecialCharacters:!0},M.peek=o.peek,M.rewind=function(){var e=o.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);ye.renderStatic=ye.rewind;var fe=n(9925),Ie=(0,fe.createGlobalStyle)(["",":root{--color-primary:#FFE49E;--color-primary-selected:#FFB800;--color-bg:#fff;--color-content:#181818;}*{box-sizing:border-box;overflow-x:hidden;&::selection{color:var(--color-content);background:var(--color-bg);}}html{font-size:15px;}h1,h2{margin:0;}body{margin:0;height:1em;min-height:100vh;background:#111;font-family:'Bebas Neue';color:var(--color-light);}body section{height:100%;padding-left:12.5%;padding-right:12.5%;}#___gatsby,#___gatsby > div,&___gatsby > div > div{height:100%;}input,button{padding:0;cursor:pointer;appearance:none;border:none;background:transparent;color:inherit;font-family:inherit;font-weight:inherit;font-size:inherit;}input:focus{outline:none;}h1{font:inherit;margin:0;}::-webkit-scrollbar{width:7px;background:var(--color-primary);}::-webkit-scrollbar-thumb{background:var(--color-content);opacity:0.5;}@media (max-width:1250px){html{font-size:14px;}}@media (max-width:1120px){html{font-size:13px;}}@media (max-width:1040px){html{font-size:12px;}}@media (max-width:992px){html{font-size:24px;}body section{padding-left:1.25rem;padding-right:1.25rem;}}@media (max-width:320px){html{font-size:20px;}}"],r.default),de=fe.default.div.withConfig({displayName:"containers__Layout",componentId:"sc-1nm9kxa-0"})(["position:relative;height:100%;"]),Ae=fe.default.header.withConfig({displayName:"containers__Header",componentId:"sc-1nm9kxa-1"})(["display:flex;mix-blend-mode:difference;height:18px;left:3.333rem;top:2.917rem;right:3.333rem;position:fixed;overflow:visible;color:var(--color-bg);@media (max-width:992px){left:1.25rem;top:1.667rem;right:1.25rem;}"]),xe=n(5444),ze=n(2359),pe=function(e){return u.createElement(ze.G,e)},Ee=fe.default.div.withConfig({displayName:"components__Cursor",componentId:"sc-taafc0-0"})(["position:fixed;top:0;left 0;width:5px;height:5px;z-index:100;mix-blend-mode:difference;border-radius:100px;border:1px solid hsla(0,0%,100%,.4);background:#fff;transition:width .3s,height .3s,background .3s;pointer-events:none;&[data-status=true]{width:50px;height:50px;background:transparent;}"]),Oe=fe.default.span.withConfig({displayName:"components__Logo",componentId:"sc-taafc0-1"})(["font-family:Proxima Nova;font-style:normal;font-weight:bold;font-size:26px;line-height:39px;position:absolute;top:50%;transform:translateY(-50%);mix-blend-mode:difference;"]),me=fe.default.div.withConfig({displayName:"components__Background",componentId:"sc-taafc0-2"})(['position:fixed;overflow:hidden;z-index:-7;top:0;left:0;bottom:0;right:0;&,& *{user-select:none;}& > *,&:after{position:absolute;top:0;left:0;}& *{width:100%;height:100%;}&:after{content:"";background:#000;opacity:',";bottom:0;right:0;}@media (min-aspect-ratio:16/9){& video,& img{height:300%;top:-100%;}}@media (max-aspect-ratio:16/9){& video,& img{width:300%;left:-100%;}}@supports (object-fit:cover){& video,& img{top:0;left:0;width:100%;height:100%;object-fit:cover;}}"],(function(e){return e.transparency})),Le=fe.default.div.withConfig({displayName:"components__Social",componentId:"sc-taafc0-3"})(["position:fixed;display:flex;flex-direction:column-reverse;left:calc(3.333rem - 18px);bottom:calc(2.917rem - 25px);mix-blend-mode:difference;z-index:7;& *{user-select:none;}@media (max-width:992px){display:none;}"]),he=fe.default.a.withConfig({displayName:"components__SocialLink",componentId:"sc-taafc0-4"})(["padding:35px 30px;overflow:visible;position:relative;&:hover{& img{width:25px;height:25px;opacity:0.7;}}& > img{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transition:0.2s;width:18px;height:18px;mix-blend-mode:difference;}"]),Ce=function(e){var t=(0,xe.useStaticQuery)("3043714642").img;return u.createElement(me,e,u.createElement(pe,{alt:e.alt,image:t.childImageSharp.gatsbyImageData}))},we=function(e){return u.createElement(Ee,{style:{transform:"translate(calc("+e.x+"px - 50%), calc("+e.y+"px - 50%))"},"data-status":e.status})},Se=function(){return u.createElement(Ae,null,u.createElement(Oe,{className:"cursor"},"anclaev"))},ke=function(){return u.createElement(Le,null,u.createElement(he,{href:"https://instagram.com/anclaev",target:"_blank",rel:"noreferrer",className:"cursor"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xOS45ODA0IDUuODgwMDVDMTkuOTMzNSA0LjgxNzM4IDE5Ljc2MTcgNC4wODY4IDE5LjUxNTUgMy40NTM3NEMxOS4yNjE2IDIuNzgxNzYgMTguODcwOSAyLjE4MDE0IDE4LjM1OSAxLjY4MDAyQzE3Ljg1ODkgMS4xNzIxIDE3LjI1MzMgMC43Nzc0MzUgMTYuNTg5MSAwLjUyNzQ0N0MxNS45NTI0IDAuMjgxMjc0IDE1LjIyNTYgMC4xMDk0MjcgMTQuMTYyOSAwLjA2MjU3MzJDMTMuMDkyMyAwLjAxMTc1MTYgMTIuNzUyNCAwIDEwLjAzNyAwQzcuMzIxNjcgMCA2Ljk4MTc5IDAuMDExNzUxNiA1LjkxNTE1IDAuMDU4NjA1MkM0Ljg1MjQ3IDAuMTA1NDU5IDQuMTIxODkgMC4yNzc0NTkgMy40ODg5OCAwLjUyMzQ3OUMyLjgxNjg2IDAuNzc3NDM1IDIuMjE1MjQgMS4xNjgxNCAxLjcxNTExIDEuNjgwMDJDMS4yMDcyIDIuMTgwMTQgMC44MTI2ODIgMi43ODU3MyAwLjU2MjU0MiAzLjQ0OTkyQzAuMzE2MzcgNC4wODY4IDAuMTQ0NTIyIDQuODEzNDEgMC4wOTc2Njg0IDUuODc2MDlDMC4wNDY4NDY4IDYuOTQ2NyAwLjAzNTA5NTIgNy4yODY1OCAwLjAzNTA5NTIgMTAuMDAyQzAuMDM1MDk1MiAxMi43MTczIDAuMDQ2ODQ2OCAxMy4wNTcyIDAuMDkzNzAwNCAxNC4xMjM5QzAuMTQwNTU0IDE1LjE4NjUgMC4zMTI1NTQgMTUuOTE3MSAwLjU1ODcyNiAxNi41NTAyQzAuODEyNjgyIDE3LjIyMjEgMS4yMDcyIDE3LjgyMzggMS43MTUxMSAxOC4zMjM5QzIuMjE1MjQgMTguODMxOCAyLjgyMDgyIDE5LjIyNjUgMy40ODUwMiAxOS40NzY1QzQuMTIxODkgMTkuNzIyNiA0Ljg0ODUgMTkuODk0NSA1LjkxMTMzIDE5Ljk0MTNDNi45Nzc4MiAxOS45ODgzIDcuMzE3ODYgMTkuOTk5OSAxMC4wMzMyIDE5Ljk5OTlDMTIuNzQ4NiAxOS45OTk5IDEzLjA4ODUgMTkuOTg4MyAxNC4xNTUxIDE5Ljk0MTNDMTUuMjE3OCAxOS44OTQ1IDE1Ljk0ODQgMTkuNzIyNiAxNi41ODEzIDE5LjQ3NjVDMTcuOTI1NCAxOC45NTY4IDE4Ljk4ODEgMTcuODk0MSAxOS41MDc3IDE2LjU1MDJDMTkuNzUzOCAxNS45MTMzIDE5LjkyNTggMTUuMTg2NSAxOS45NzI2IDE0LjEyMzlDMjAuMDE5NSAxMy4wNTcyIDIwLjAzMTIgMTIuNzE3MyAyMC4wMzEyIDEwLjAwMkMyMC4wMzEyIDcuMjg2NTggMjAuMDI3MiA2Ljk0NjcgMTkuOTgwNCA1Ljg4MDA1Wk0xOC4xNzkzIDE0LjA0NTdDMTguMTM2MyAxNS4wMjI1IDE3Ljk3MjIgMTUuNTQ5OSAxNy44MzU1IDE1LjkwMTVDMTcuNDk5NCAxNi43NzI4IDE2LjgwNzkgMTcuNDY0MyAxNS45MzY2IDE3LjgwMDRDMTUuNTg1IDE3LjkzNzIgMTUuMDUzNyAxOC4xMDEyIDE0LjA4MDggMTguMTQ0MUMxMy4wMjU5IDE4LjE5MTEgMTIuNzA5NSAxOC4yMDI3IDEwLjA0MSAxOC4yMDI3QzcuMzcyNDkgMTguMjAyNyA3LjA1MjE1IDE4LjE5MTEgNi4wMDEwNyAxOC4xNDQxQzUuMDI0MzIgMTguMTAxMiA0LjQ5Njg3IDE3LjkzNzIgNC4xNDUyNCAxNy44MDA0QzMuNzExNjUgMTcuNjQwMiAzLjMxNjk4IDE3LjM4NjIgMi45OTY2NCAxNy4wNTQxQzIuNjY0NTQgMTYuNzI5OCAyLjQxMDU5IDE2LjMzOTEgMi4yNTAzNCAxNS45MDU1QzIuMTEzNTkgMTUuNTUzOSAxLjk0OTUzIDE1LjAyMjUgMS45MDY2NSAxNC4wNDk3QzEuODU5NjQgMTIuOTk0OCAxLjg0ODA0IDEyLjY3ODMgMS44NDgwNCAxMC4wMDk3QzEuODQ4MDQgNy4zNDEyMiAxLjg1OTY0IDcuMDIwODcgMS45MDY2NSA1Ljk2OTk1QzEuOTQ5NTMgNC45OTMxOSAyLjExMzU5IDQuNDY1NzUgMi4yNTAzNCA0LjExNDEyQzIuNDEwNTkgMy42ODAzOCAyLjY2NDU0IDMuMjg1ODYgMy4wMDA2MSAyLjk2NTM2QzMuMzI0NzcgMi42MzMyNyAzLjcxNTQ3IDIuMzc5MzEgNC4xNDkyMSAyLjIxOTIxQzQuNTAwODQgMi4wODI0NyA1LjAzMjI1IDEuOTE4NCA2LjAwNTA0IDEuODc1MzdDNy4wNTk5MyAxLjgyODUxIDcuMzc2NDYgMS44MTY3NiAxMC4wNDQ4IDEuODE2NzZDMTIuNzE3MyAxLjgxNjc2IDEzLjAzMzcgMS44Mjg1MSAxNC4wODQ4IDEuODc1MzdDMTUuMDYxNSAxLjkxODQgMTUuNTg5IDIuMDgyNDcgMTUuOTQwNiAyLjIxOTIxQzE2LjM3NDIgMi4zNzkzMSAxNi43Njg5IDIuNjMzMjcgMTcuMDg5MiAyLjk2NTM2QzE3LjQyMTMgMy4yODk2NyAxNy42NzUzIDMuNjgwMzggMTcuODM1NSA0LjExNDEyQzE3Ljk3MjIgNC40NjU3NSAxOC4xMzYzIDQuOTk3MDEgMTguMTc5MyA1Ljk2OTk1QzE4LjIyNjIgNy4wMjQ4NCAxOC4yMzggNy4zNDEyMiAxOC4yMzggMTAuMDA5N0MxOC4yMzggMTIuNjc4MyAxOC4yMjYyIDEyLjk5MDggMTguMTc5MyAxNC4wNDU3WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0xMC4wMzcxIDQuODY0MjNDNy4yMDA2OCA0Ljg2NDIzIDQuODk5MzUgNy4xNjU0IDQuODk5MzUgMTAuMDAxOUM0Ljg5OTM1IDEyLjgzODUgNy4yMDA2OCAxNS4xMzk3IDEwLjAzNzEgMTUuMTM5N0MxMi44NzM2IDE1LjEzOTcgMTUuMTc0OCAxMi44Mzg1IDE1LjE3NDggMTAuMDAxOUMxNS4xNzQ4IDcuMTY1NCAxMi44NzM2IDQuODY0MjMgMTAuMDM3MSA0Ljg2NDIzWk0xMC4wMzcxIDEzLjMzNDdDOC4xOTY5NiAxMy4zMzQ3IDYuNzA0MzYgMTEuODQyMiA2LjcwNDM2IDEwLjAwMTlDNi43MDQzNiA4LjE2MTY5IDguMTk2OTYgNi42NjkyNCAxMC4wMzcxIDYuNjY5MjRDMTEuODc3MyA2LjY2OTI0IDEzLjM2OTggOC4xNjE2OSAxMy4zNjk4IDEwLjAwMTlDMTMuMzY5OCAxMS44NDIyIDExLjg3NzMgMTMuMzM0NyAxMC4wMzcxIDEzLjMzNDdaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTE2LjU3NzUgNC42NjEwOUMxNi41Nzc1IDUuMzIzNDYgMTYuMDQwNSA1Ljg2MDUyIDE1LjM3OCA1Ljg2MDUyQzE0LjcxNTYgNS44NjA1MiAxNC4xNzg1IDUuMzIzNDYgMTQuMTc4NSA0LjY2MTA5QzE0LjE3ODUgMy45OTg1OCAxNC43MTU2IDMuNDYxNjcgMTUuMzc4IDMuNDYxNjdDMTYuMDQwNSAzLjQ2MTY3IDE2LjU3NzUgMy45OTg1OCAxNi41Nzc1IDQuNjYxMDlaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",alt:"Icon: Instagram",className:"cursor"})),u.createElement(he,{href:"https://github.com/anclaev",target:"_blank",rel:"noreferrer",className:"cursor"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMCAwQzQuNTAzOTQgMCAwIDQuNTQzIDAgMTAuMDM5MUMwIDE1LjUwMzIgNC40NjI4OSAyMCAxMCAyMEMxNS41MzAyIDIwIDIwIDE1LjUwOTkgMjAgMTAuMDM5MUMyMCA0LjU0MyAxNS40OTYxIDAgMTAgMFpNMTEuNzU3OCAxOC42NTIzQzExLjE5NTQgMTguNzY5NSAxMC41OTc3IDE4LjgyODEgMTAgMTguODI4MUM5LjQwMjMxIDE4LjgyODEgOC44MDQ2MyAxOC43Njk1IDguMjQyMTkgMTguNjUyM1YxNS45MTAyQzguMjQyMTkgMTUuMjUzOSA4LjQxNzk3IDE1LjAxOTUgOC42NTIzNCAxNC43MDMxQzguNzcxNjcgMTQuNTY2NyA4Ljg0MzY5IDE0LjQ0NDMgOS4zNzg4MSAxMy42MzY4TDguNDc2NTYgMTMuNDk2MUM2LjE1NjE2IDEzLjE1NjMgNS4yNDIxNiAxMS45NDkyIDQuODc4ODUgMTEuMDExN0M0LjQxMDEgOS43NTc4NCA0LjY1NjIyIDguMTg3NDEgNS41MDAwMyA3LjE5MTQ3QzUuNjI4OTcgNy4wMzkwMyA1LjczNDQxIDYuNzgxMTYgNS42NDA3MiA2LjUxMTY5QzUuNDY0NzggNS45NzI2IDUuNDg4MjggNS4xMTcxOSA1LjYwNTQ3IDQuNzg4OTdDNi4yMjY4MSA0Ljg3Nzc4IDYuODY1NjkgNS4zMjI4OCA3LjM5ODUzIDUuNjQ0NTNDNy42NDQwNCA1Ljc4NzgxIDcuNzcyODMgNS43NDk5NyA3Ljg5MDYyIDUuNzYxNzJDOC4zMTg3OSA1LjY3MjYxIDguOTg2NjYgNS40NTcgMTAuMDExNyA1LjQ1N0MxMC42NDQ1IDUuNDU3IDExLjMxMjYgNS41NTA2OSAxMS45Njg4IDUuNzM4MjJDMTIuMDg2MiA1LjczNTQ3IDEyLjI3NDggNS44MzUyNyAxMi42MDE2IDUuNjQ0NTNDMTMuMTU4NiA1LjMwNTE4IDEzLjc3NTggNC44NzUzNCAxNC4zOTQ1IDQuNzg4OTdDMTQuNTExNyA1LjExNzE5IDE0LjUzNTIgNS45NzI2IDE0LjM1OTQgNi41MTE2OUMxNC4yNjU2IDYuNzgxMTYgMTQuMzcxIDcuMDM5MDMgMTQuNTAwMSA3LjE5MTQ3QzE1LjM0MzggOC4xODc1NiAxNS41ODk5IDkuNzU3ODQgMTUuMTIxMiAxMS4wMTE3QzE0Ljc1NzggMTEuOTQ5MiAxMy44NDM4IDEzLjE1NjMgMTEuNTIzNCAxMy40OTYxTDEwLjYyMTIgMTMuNjM2OEMxMS4xNzQzIDE0LjQ3MTQgMTEuMjMyNiAxNC41NzE1IDExLjM0NzggMTQuNzAzMUMxMS41ODIgMTUuMDE5NSAxMS43NTc4IDE1LjI1MzkgMTEuNzU3OCAxNS45MTAyVjE4LjY1MjNaTTEyLjkyOTcgMTguMzEyNVYxNS45MTAyQzEyLjkyOTcgMTUuMjQyMiAxMi43ODkgMTQuNzk2OSAxMi42MDE1IDE0LjQ2ODdDMTQuMzgyOCAxMy45ODgzIDE1LjY0ODUgMTIuOTMzNSAxNi4yMTA5IDExLjQyMThDMTYuODA4NiA5LjgyODE5IDE2LjUzOTIgNy45Mjk2OSAxNS41NDI5IDYuNjE3MTNDMTUuNzE4OCA1LjgzMjA2IDE1LjcxODggNC41NzgwOSAxNS4yOTY5IDMuOTkyMTZDMTUuMTA5NCAzLjczNDQ0IDE0Ljg1MTUgMy41OTM3NSAxNC41MjM1IDMuNTkzNzVDMTQuNTExNyAzLjU5Mzc1IDE0LjUxMTcgMy41OTM3NSAxNC41MTE3IDMuNTkzNzVDMTMuNjAzMSAzLjY0Mjg4IDEyLjg4NzkgNC4xMDA0OSAxMi4xMjExIDQuNTY2MzVDMTEuNDE4IDQuMzc4ODEgMTAuNzAzMSA0LjI4NTEzIDkuOTg4MjUgNC4yODUxM0M5LjI2MTc4IDQuMjg1MTMgOC41MzUxNiA0LjM5MDU2IDcuODkwNzggNC41NjYzNUM3LjA4MzU5IDQuMDc5NTkgNi4zNzUyNyAzLjY0MTY2IDUuNDQxNDQgMy41OTM3NUM1LjE0ODQ3IDMuNTkzNzUgNC44OTA1OSAzLjczNDQ0IDQuNzAzMDYgMy45OTIxNkM0LjI4MTMxIDQuNTc4MDkgNC4yODEzMSA1LjgzMjA2IDQuNDU3MDkgNi42MTcxM0MzLjQ2MDg1IDcuOTI5NjkgMy4xOTEzOCA5LjgzOTc4IDMuNzg5MDYgMTEuNDIxOEM0LjM1MTUgMTIuOTMzNSA1LjYxNzIyIDEzLjk4ODMgNy4zOTg1MyAxNC40Njg3QzcuMjUzMTEgMTQuNzIzMSA3LjEzODA2IDE1LjA1MTMgNy4wOTI3NCAxNS40OTU1QzYuNzMyOTQgMTUuNjE5NSA2LjQyMDkgMTUuNjU5OSA2LjEzMDY4IDE1LjU3NDZDNS44MjQ1OCAxNS40ODQyIDUuNTg2MDkgMTUuMjc5OCA1LjM3ODg4IDE0LjkzMTNDNC45MTM0OCAxNC4xNDk1IDQuMTIwNzkgMTMuNTExMiAzLjIxODIzIDEzLjU5NDJMMy4zMjEyMyAxNC43NjE1QzMuNzM5MTcgMTQuNzIzMiA0LjE1NTEyIDE1LjE2NTQgNC4zNzExOSAxNS41Mjk5QzQuNzI3NjMgMTYuMTMwMiA1LjIwNzgyIDE2LjUyMzkgNS43OTg4IDE2LjY5ODVDNi4yMzc0OSAxNi44Mjc3IDYuNjM4NDkgMTYuODI0NiA3LjA3MDMxIDE2LjczMjVWMTguMzEyNUMzLjY2MDEzIDE3LjExNzIgMS4xNzE4OCAxMy44NTk0IDEuMTcxODggMTAuMDM5MUMxLjE3MTg4IDUuMTg3NTMgNS4xNDg0NyAxLjE3MTg4IDEwIDEuMTcxODhDMTQuODUxNSAxLjE3MTg4IDE4LjgyODEgNS4xODc1MyAxOC44MjgxIDEwLjAzOTFDMTguODI4MSAxMy44NTk0IDE2LjMzOTkgMTcuMTE3MiAxMi45Mjk3IDE4LjMxMjVaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",alt:"Icon: Github",className:"cursor"})),u.createElement(he,{href:"https://t.me/anclaev",target:"_blank",rel:"noreferrer",className:"cursor"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik03Ljg0NzQ3IDEyLjY1MDhMNy41MTY2MyAxNy4zMDQyQzcuOTg5OTcgMTcuMzA0MiA4LjE5NDk3IDE3LjEwMDggOC40NDA4IDE2Ljg1NjdMMTAuNjYgMTQuNzM1OEwxNS4yNTgzIDE4LjEwMzNDMTYuMTAxNiAxOC41NzMzIDE2LjY5NTggMTguMzI1OCAxNi45MjMzIDE3LjMyNzVMMTkuOTQxNiAzLjE4NDE2TDE5Ljk0MjUgMy4xODMzMkMyMC4yMSAxLjkzNjY2IDE5LjQ5MTYgMS40NDkxNiAxOC42NyAxLjc1NDk5TDAuOTI4Mjk4IDguNTQ3NDlDLTAuMjgyNTM1IDkuMDE3NDkgLTAuMjY0MjAyIDkuNjkyNDkgMC43MjI0NjUgOS45OTgzMkw1LjI1ODMgMTEuNDA5MkwxNS43OTQxIDQuODE2NjZDMTYuMjkgNC40ODgzMiAxNi43NDA4IDQuNjY5OTkgMTYuMzcgNC45OTgzMkw3Ljg0NzQ3IDEyLjY1MDhaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",alt:"Icon: Telegram",className:"cursor"})),u.createElement(he,{href:"https://vk.com/anclaev",target:"_blank",rel:"noreferrer",className:"cursor"},u.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNi41OTU4IDEwLjg1NjdDMTYuMjcyNSAxMC40NDgzIDE2LjM2NSAxMC4yNjY3IDE2LjU5NTggOS45MDE2OEMxNi42IDkuODk3NTEgMTkuMjY5MiA2LjIwOTE3IDE5LjU0NDIgNC45NTgzNEwxOS41NDU4IDQuOTU3NTFDMTkuNjgyNSA0LjUwMTY3IDE5LjU0NTggNC4xNjY2NyAxOC44ODUgNC4xNjY2N0gxNi42OTgzQzE2LjE0MTcgNC4xNjY2NyAxNS44ODUgNC40NTQxNyAxNS43NDc1IDQuNzc1ODRDMTUuNzQ3NSA0Ljc3NTg0IDE0LjYzNDIgNy40NDA4NCAxMy4wNTkyIDkuMTY4MzRDMTIuNTUwOCA5LjY2NzUxIDEyLjMxNTggOS44Mjc1MSAxMi4wMzgzIDkuODI3NTFDMTEuOTAxNyA5LjgyNzUxIDExLjY4OTIgOS42Njc1MSAxMS42ODkyIDkuMjExNjhWNC45NTc1MUMxMS42ODkyIDQuNDEwODQgMTEuNTMzMyA0LjE2NjY3IDExLjA3MjUgNC4xNjY2N0g3LjYzNDE3QzcuMjg1IDQuMTY2NjcgNy4wNzc1IDQuNDIxNjcgNy4wNzc1IDQuNjU5MTdDNy4wNzc1IDUuMTc3NTEgNy44NjUgNS4yOTY2NyA3Ljk0NjY3IDYuNzU1MDFWOS45MTkxOEM3Ljk0NjY3IDEwLjYxMjUgNy44MjA4MyAxMC43NCA3LjU0MTY3IDEwLjc0QzYuNzk4MzMgMTAuNzQgNC45OTQxNyA4LjA2NDE3IDMuOTI1IDUuMDAxNjdDMy43MDkxNyA0LjQwNzUxIDMuNDk4MzMgNC4xNjc1MSAyLjkzNzUgNC4xNjc1MUgwLjc1QzAuMTI1ODMzIDQuMTY3NTEgMCA0LjQ1NTAxIDAgNC43NzY2N0MwIDUuMzQ1MDEgMC43NDMzMzMgOC4xNzA4NCAzLjQ1NjY3IDExLjkwNDJDNS4yNjUgMTQuNDUyNSA3LjgxMTY3IDE1LjgzMzMgMTAuMTI4MyAxNS44MzMzQzExLjUyMDggMTUuODMzMyAxMS42OTA4IDE1LjUyNjcgMTEuNjkwOCAxNC45OTkyQzExLjY5MDggMTIuNTY0MiAxMS41NjUgMTIuMzM0MiAxMi4yNjI1IDEyLjMzNDJDMTIuNTg1OCAxMi4zMzQyIDEzLjE0MjUgMTIuNDk0MiAxNC40NDI1IDEzLjcyMzNDMTUuOTI4MyAxNS4xODA4IDE2LjE3MjUgMTUuODMzMyAxNy4wMDQyIDE1LjgzMzNIMTkuMTkwOEMxOS44MTQyIDE1LjgzMzMgMjAuMTMgMTUuNTI2NyAxOS45NDgzIDE0LjkyMTdDMTkuNTMyNSAxMy42NDkyIDE2LjcyMjUgMTEuMDMxNyAxNi41OTU4IDEwLjg1NjdaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9zdmc+DQo=",alt:"Icon: VK",className:"cursor"})))},be=function(){return u.createElement(u.Fragment,null,u.createElement(Se,null),u.createElement(ke,null))},Qe=function(e){var t=e.children,n=(0,c.useIntl)(),r=(0,u.useRef)(null),i=(0,u.useState)({x:0,y:0,status:!1}),o=i[0],M=i[1],a=(0,u.useState)(0);a[0],a[1];return u.createElement(u.Fragment,null,u.createElement(Ie,null),u.createElement(de,{onMouseMove:function(e){var t=!1;try{t=e.target.className.includes("cursor")}catch(e){t=!0}M({x:e.clientX,y:e.clientY,status:t})},ref:r},u.createElement(ye,{htmlAttributes:{lang:n.locale}},u.createElement("title",null,n.formatMessage({id:"site_title"})),u.createElement("meta",{name:"description",content:n.formatMessage({id:"site_description"})})),u.createElement(be,null),t,u.createElement(we,o),u.createElement(Ce,{alt:n.formatMessage({id:"home_background_alt"}),transparency:"0.1"})))},ve=fe.default.section.withConfig({displayName:"Home__Hello",componentId:"sc-tjp64j-0"})(['display:flex;flex-direction:column;justify-content:center;padding-top:7.083rem;padding-bottom:7.083rem;color:var(--color-bg);& > h1,& > h2{display:block;overflow:hidden;}& > h1{margin-bottom:1.167rem;max-width:70%;white-space:pre-line;text-transform:uppercase;font-size:3.75rem;line-height:1.111111111111111;letter-spacing:0.03rem;@media (max-width:992px){font-size:1.25rem;margin-bottom:0.667rem;max-width:100%;line-height:1.176470588235294;}}& > h2{font-family:"Roboto Condensed";font-weight:400;margin-bottom:1.5rem;font-size:1rem;line-height:1.416666666666667;@media (max-width:992px){font-size:0.667rem;margin-bottom:0.667rem;}}']),Ue=fe.default.section.withConfig({displayName:"Home__Me",componentId:"sc-tjp64j-1"})(["background:var(--color-primary);"]),Ye=fe.default.section.withConfig({displayName:"Home__Skills",componentId:"sc-tjp64j-2"})(["background:#fff;"]),_e=fe.default.section.withConfig({displayName:"Home__Cases",componentId:"sc-tjp64j-3"})(["background:var(--color-primary);"]),Pe=fe.default.section.withConfig({displayName:"Home__Call",componentId:"sc-tjp64j-4"})(["background:#fff;"]),Re=function(){var e=(0,c.useIntl)();return u.createElement(Qe,null,u.createElement(ve,null,u.createElement("h1",null,e.formatMessage({id:"home_title"})),u.createElement("h2",null,e.formatMessage({id:"home_subtitle"}))),u.createElement(Ue,null),u.createElement(Ye,null),u.createElement(_e,null),u.createElement(Pe,null))}},9703:function(e,t,n){"use strict";var r=n(5318),i=n(862);t.__esModule=!0;var o={Link:!0,withIntl:!0,navigate:!0,changeLocale:!0,IntlContextProvider:!0,IntlContextConsumer:!0};t.IntlContextConsumer=t.IntlContextProvider=t.changeLocale=t.navigate=t.withIntl=t.Link=void 0;var M=n(5984);Object.keys(M).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(o,e)||(t[e]=M[e]))}));var a=i(n(4687));t.Link=a.default,t.navigate=a.navigate,t.changeLocale=a.changeLocale;var u=r(n(8770));t.withIntl=u.default;var c=n(8368);t.IntlContextProvider=c.IntlContextProvider,t.IntlContextConsumer=c.IntlContextConsumer},4687:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.changeLocale=t.navigate=t.default=void 0;var i=r(n(7154)),o=r(n(7316)),M=r(n(7294)),a=r(n(5697)),u=n(5444),c=n(8368),N=function(e){var t=e.to,n=e.language,r=e.children,a=e.onClick,N=(0,o.default)(e,["to","language","children","onClick"]);return M.default.createElement(c.IntlContextConsumer,null,(function(e){var o=n||e.language,c=e.routed||n?"/"+o+t:""+t;return M.default.createElement(u.Link,(0,i.default)({},N,{to:c,onClick:function(e){n&&localStorage.setItem("gatsby-intl-language",n),a&&a(e)}}),r)}))};N.propTypes={children:a.default.node.isRequired,to:a.default.string,language:a.default.string},N.defaultProps={to:""};var g=N;t.default=g;t.navigate=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl,r=n.language,i=n.routed?"/"+r+e:""+e;(0,u.navigate)(i,t)}};t.changeLocale=function(e,t){if("undefined"!=typeof window){var n=window.___gatsbyIntl.routed,r="/"+e+(t||function(e){if(!n)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;localStorage.setItem("gatsby-intl-language",e),(0,u.navigate)(r)}}},8770:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var i=r(n(7294)),o=n(5984);t.default=function(e){return function(t){return console.warn("withIntl is deprecated. Please use injectIntl instead."),i.default.createElement((0,o.injectIntl)(e),t)}}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4a32797bb3f6a947c2f4.js.map