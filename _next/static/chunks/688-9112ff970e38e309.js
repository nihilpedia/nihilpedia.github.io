(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[688],{7942:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},u=r(4957),i=r(9898),c=r(639);var l={};function f(e,t,r,n){if(e&&u.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var t=u.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?u.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,y=e.replace,m=e.shallow,h=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),C=n(w,2),E=C[0],O=C[1],k=a.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);a.default.useEffect((function(){var e=O&&r&&u.isLocalURL(d),t="undefined"!==typeof g?g:o&&o.locale,n=l[d+"%"+p+(t?"%"+t:"")];e&&!n&&f(o,d,p,{locale:t})}),[p,d,O,g,r,o]);var L={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,y,m,h,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u.isLocalURL(d)&&f(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var j="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,j,o&&o.locales,o&&o.domainLocales);L.href=M||u.addBasePath(u.addLocale(p,j,o&&o.defaultLocale))}return a.default.cloneElement(t,L)};t.default=s},639:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!u,c=o.useRef(),l=o.useState(!1),f=n(l,2),s=f[0],d=f[1],p=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||s||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,s]);return o.useEffect((function(){if(!u&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=r(7294),a=r(6286),u="undefined"!==typeof IntersectionObserver;var i=new Map},1664:function(e,t,r){e.exports=r(7942)},1163:function(e,t,r){e.exports=r(9898)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return l}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,u({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return n.createElement(f,u({attr:u({},e.attr)},t),c(e.child))}}function f(e){var t=function(t){var r,o=e.attr,a=e.size,c=e.title,l=i(e,["attr","size","title"]),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},5934:function(e,t,r){"use strict";var n;r.d(t,{Z:function(){return s}});var o=new Uint8Array(16);function a(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&u.test(e)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};var s=function(e,t,r){var n=(e=e||{}).random||(e.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var o=0;o<16;++o)t[r+o]=n[o];return t}return f(n)}},2640:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return o}})}}]);