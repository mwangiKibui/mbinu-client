_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+Css":function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("H+61"),o=n("UlJF"),i=n("7LId"),a=n("VIvw"),u=n("iHvq"),c=n("q1tI"),s=n.n(c),f=(n("ndWB"),n("DGdN"),n("xKkp"),n("5eFS"),n("zGdC"),n("dFg+"),n("QYuT"),n("jDDT"),n("kznw"),n("4nt+"),n("17x9"),s.a.createContext(null));var p=function(e){e()},l={notify:function(){}};function d(){var e=p,t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var y=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=l,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=d())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=l)},e}();var h=function(e){var t=e.store,n=e.context,r=e.children,o=Object(c.useMemo)((function(){var e=new y(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),i=Object(c.useMemo)((function(){return t.getState()}),[t]);Object(c.useEffect)((function(){var e=o.subscription;return e.trySubscribe(),i!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[o,i]);var a=n||f;return s.a.createElement(a.Provider,{value:o},r)};n("dWyf"),n("TOwV"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?c.useLayoutEffect:c.useEffect;var b=n("ANjH");var v,m=n("i8i4");v=m.unstable_batchedUpdates,p=v;var g=n("8Bbg"),w=n.n(g),O=n("g4pe"),S=n.n(O),j=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},P=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(a,u)}c((r=r.apply(e,t||[])).next())}))},x=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},I={storeKey:"__NEXT_REDUX_STORE__",debug:!1,serializeState:function(e){return e},deserializeState:function(e){return e}};function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=n("cpVT"),k=n("5HXA"),N="ADD_TO_CART",M="REMOVE_ITEM",D="SUB_QUANTITY",R="ADD_QUANTITY",H="ADD_SHIPPING",$="ADD_QUANTITY_WITH_NUMBER",W="RESET_CART";function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={products:[{id:1,title:"White Book",price:8.5,oldPrice:12.5,image:"/images/shop/1.jpg",imageHover:"/images/shop/1-1.jpg"},{id:2,title:"Red Side Book",price:12.5,oldPrice:20.5,image:"/images/shop/2.jpg",imageHover:"/images/shop/2-1.jpg"},{id:3,title:"Book With Pen",price:8.5,oldPrice:12.5,image:"/images/shop/3.jpg",imageHover:"/images/shop/3-1.jpg"},{id:4,title:"Drop Side Book",price:7.5,oldPrice:11.5,image:"/images/shop/4.jpg",imageHover:"/images/shop/4-1.jpg"},{id:5,title:"Color Book",price:10.5,oldPrice:10.5,image:"/images/shop/5.jpg",imageHover:"/images/shop/5-1.jpg"},{id:6,title:"The Jungle Book",price:15,oldPrice:25,image:"/images/shop/6.jpg",imageHover:"/images/shop/6-1.jpg"}],relatedProducts:[{id:1,title:"White Book",price:8.5,oldPrice:12.5,image:"/images/shop/1.jpg",imageHover:"/images/shop/1-1.jpg"},{id:2,title:"Red Side Book",price:12.5,oldPrice:20.5,image:"/images/shop/2.jpg",imageHover:"/images/shop/2-1.jpg"},{id:3,title:"Book With Pen",price:8.5,oldPrice:12.5,image:"/images/shop/3.jpg",imageHover:"/images/shop/3-1.jpg"}],addedItems:[],total:0,shipping:0},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;if(t.type===N){var n=e.products.find((function(e){return e.id===t.id})),r=e.addedItems.find((function(e){return t.id===e.id}));if(r)return n.quantity+=1,q(q({},e),{},{total:e.total+n.price});n.quantity=1;var o=e.total+n.price;return q(q({},e),{},{addedItems:[].concat(C(e.addedItems),[n]),total:o})}if(t.type===$){var i=e.products.find((function(e){return e.id===t.id})),a=e.addedItems.find((function(e){return t.id===e.id}));if(a)return i.quantity+=t.qty,q(q({},e),{},{total:e.total+i.price*t.qty});i.quantity=t.qty;var u=e.total+i.price*t.qty;return q(q({},e),{},{addedItems:[].concat(C(e.addedItems),[i]),total:u})}if(t.type===M){var c=e.addedItems.find((function(e){return t.id===e.id})),s=e.addedItems.filter((function(e){return t.id!==e.id})),f=e.total-c.price*c.quantity;return q(q({},e),{},{addedItems:s,total:f})}if(t.type===R){var p=e.products.find((function(e){return e.id===t.id}));p.quantity+=1;var l=e.total+p.price;return q(q({},e),{},{total:l})}if(t.type===D){var d=e.products.find((function(e){return e.id===t.id}));if(1===d.quantity){var y=e.addedItems.filter((function(e){return e.id!==t.id})),h=e.total-d.price;return q(q({},e),{},{addedItems:y,total:h})}d.quantity-=1;var b=e.total-d.price;return q(q({},e),{},{total:b})}return t.type===H?q(q({},e),{},{shipping:e.shipping+=6}):"SUB_SHIPPING"===t.type?q(q({},e),{},{shipping:e.shipping-=6}):t.type===W?q(q({},e),{},{addedItems:[],total:0,shipping:0}):e},F=n("+Css"),G=s.a.createElement;function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var z=function(e){Object(i.a)(n,e);var t=V(n);function n(e){var o;return Object(r.a)(this,n),o=t.call(this,e),Object(A.a)(Object(F.a)(o),"_isMounted",!1),Object(A.a)(Object(F.a)(o),"onScrollStep",(function(){o._isMounted=!0,0===window.pageYOffset&&clearInterval(o.state.intervalId),window.scroll(0,window.pageYOffset-o.props.scrollStepInPx)})),Object(A.a)(Object(F.a)(o),"scrollToTop",(function(){o._isMounted=!0;var e=setInterval(o.onScrollStep,o.props.delayInMs);o.setState({intervalId:e})})),Object(A.a)(Object(F.a)(o),"renderGoTopIcon",(function(){return G("div",{className:"go-top ".concat(o.state.thePosition?"active":""),onClick:o.scrollToTop},G("i",{className:"fas fa-arrow-up"}),G("i",{className:"fas fa-arrow-up"}))})),o.state={intervalId:0,thePosition:!1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this._isMounted=!0,document.addEventListener("scroll",(function(){window.scrollY>170?e.setState({thePosition:!0}):e.setState({thePosition:!1})})),window.scrollTo(0,0)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){return G(s.a.Fragment,null,this.renderGoTopIcon())}}]),n}(s.a.Component),L=s.a.createElement;function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}t.default=function(e,t){t=_({},I,t);var n="undefined"===typeof window,r=function(r){var o=r.initialState,i=r.ctx,a=t.storeKey,u=function(){return e(t.deserializeState(o),_({},i,t,{isServer:n}))};return n?u():(window.hasOwnProperty(a)||(window[a]=u()),window[a])};return function(e){var o;return(o=function(n){function o(e,o){var i=n.call(this,e,o)||this,a=e.initialState;return t.debug&&console.log("4. WrappedApp.render created new store with initialState",a),i.store=r({initialState:a}),i}return j(o,n),o.prototype.render=function(){var t=this.props,n=t.initialProps,r=(t.initialState,E(t,["initialProps","initialState"]));return s.a.createElement(e,_({},r,n,{store:this.store}))},o}(c.Component)).displayName="withRedux("+(e.displayName||e.name||"App")+")",o.getInitialProps=function(o){return P(undefined,void 0,void 0,(function(){var i,a;return x(this,(function(u){switch(u.label){case 0:if(!o)throw new Error("No app context");if(!o.ctx)throw new Error("No page context");return i=r({ctx:o.ctx}),t.debug&&console.log("1. WrappedApp.getInitialProps wrapper got the store with state",i.getState()),o.ctx.store=i,o.ctx.isServer=n,a={},"getInitialProps"in e?[4,e.getInitialProps.call(e,o)]:[3,2];case 1:a=u.sent(),u.label=2;case 2:return t.debug&&console.log("3. WrappedApp.getInitialProps has store state",i.getState()),[2,{isServer:n,initialState:t.serializeState(i.getState()),initialProps:a}]}}))}))},o}}((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B;return Object(b.createStore)(X,e,Object(k.composeWithDevTools)(Object(b.applyMiddleware)()))}))(function(e){Object(i.a)(n,e);var t=K(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,r=e.store;return L(s.a.Fragment,null,L(S.a,null,L("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),L("title",null,"Opstar - React Next AI Startups Template")),L(h,{store:r},L(t,n)),L(z,{scrollStepInPx:"50",delayInMs:"5.66"}))}}]),n}(w.a))},"4nt+":function(e,t,n){},"5HXA":function(e,t,n){"use strict";var r=n("ANjH").compose;t.__esModule=!0,t.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},t.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}}},"5eFS":function(e,t,n){},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"7LId":function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,s=l.length;c<s;c++){var f=l[c];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var p=o.props[f],d=r[f]||new Set;"name"===f&&a||!d.has(p)?(d.add(p),r[f]=d):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function y(e){var t=e.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}y.rewind=function(){};var h=y;t.default=h},ANjH:function(e,t,n){"use strict";n.r(t),n.d(t,"__DO_NOT_USE__ActionTypes",(function(){return i})),n.d(t,"applyMiddleware",(function(){return b})),n.d(t,"bindActionCreators",(function(){return p})),n.d(t,"combineReducers",(function(){return s})),n.d(t,"compose",(function(){return h})),n.d(t,"createStore",(function(){return u}));var r=n("bCCX"),o=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function a(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function u(e,t,n){var o;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(u)(e,t)}if("function"!==typeof e)throw new Error("Expected the reducer to be a function.");var c=e,s=t,f=[],p=f,l=!1;function d(){p===f&&(p=f.slice())}function y(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return d(),p.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,d();var n=p.indexOf(e);p.splice(n,1),f=null}}}function b(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,s=c(s,e)}finally{l=!1}for(var t=f=p,n=0;n<t.length;n++){(0,t[n])()}return e}function v(e){if("function"!==typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,b({type:i.REPLACE})}function m(){var e,t=h;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e}return b({type:i.INIT}),(o={dispatch:b,subscribe:h,getState:y,replaceReducer:v})[r.a]=m,o}function c(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"===typeof e[o]&&(n[o]=e[o])}var a,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if("undefined"===typeof n(void 0,{type:i.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+i.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(s){a=s}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var s=u[i],f=n[s],p=e[s],l=f(p,t);if("undefined"===typeof l){var d=c(s,t);throw new Error(d)}o[s]=l,r=r||l!==p}return(r=r||u.length!==Object.keys(e).length)?o:e}}function f(e,t){return function(){return t(e.apply(this,arguments))}}function p(e,t){if("function"===typeof e)return f(e,t);if("object"!==typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in e){var o=e[r];"function"===typeof o&&(n[r]=f(o,t))}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e)),t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function b(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map((function(e){return e(o)}));return y({},n,{dispatch:r=h.apply(void 0,i)(n.dispatch)})}}}},Az8m:function(e,t){(function(t){e.exports=function(){var e={931:function(e){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},i=!0;try{e[t](o,o.exports,r),i=!1}finally{i&&delete n[t]}return o.exports}return r.ab=t+"/",r(931)}()}).call(this,"/")},B5Ud:function(e,t,n){"use strict";var r=n("vJKn"),o=n("/GRZ"),i=n("i2R6"),a=n("48fX"),u=n("tCBg"),c=n("T0f4"),s=n("qVT1");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var p=n("AroE");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=v,t.default=void 0;var l=p(n("q1tI")),d=n("g/15");function y(e){return h.apply(this,arguments)}function h(){return(h=s(r.mark((function e(t){var n,o,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return i=e.sent,e.abrupt("return",{pageProps:i});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.AppInitialProps=d.AppInitialProps,t.NextWebVitalsMetric=d.NextWebVitalsMetric;var b=function(e){a(n,e);var t=f(n);function n(){return o(this,n),t.apply(this,arguments)}return i(n,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,o=e.__N_SSG,i=e.__N_SSP;return l.default.createElement(n,Object.assign({},r,o||i?{}:{url:v(t)}))}}]),n}(l.default.Component);function v(e){var t=e.pathname,n=e.asPath,r=e.query;return{get query(){return r},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var r=n?t:"",o=n||t;return e.push(r,o)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var r=n?t:"",o=n||t;return e.replace(r,o)}}}t.default=b,b.origGetInitialProps=y,b.getInitialProps=y},DGdN:function(e,t,n){},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"H+61":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},QYuT:function(e,t,n){},SLVX:function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"===typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},UlJF:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},VIvw:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var o=n("+Css");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?Object(o.a)(e):t}},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),o=n("/GRZ"),i=n("i2R6"),a=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),p=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=p},bCCX:function(e,t,n){"use strict";(function(e,r){var o,i=n("SLVX");o="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:r;var a=Object(i.a)(o);t.a=a}).call(this,n("ntbh"),n("Az8m")(e))},cpVT:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},"dFg+":function(e,t,n){},dWyf:function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return r.isMemo(e)?a:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=a;var s=Object.defineProperty,f=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var a=f(n);p&&(a=a.concat(p(n)));for(var u=c(t),h=c(n),b=0;b<a.length;++b){var v=a[b];if(!i[v]&&(!r||!r[v])&&(!h||!h[v])&&(!u||!u[v])){var m=l(n,v);try{s(t,v,m)}catch(g){}}}}return t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},iHvq:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},jDDT:function(e,t,n){},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kznw:function(e,t,n){},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),i=n("KckH"),a=n("kG2m");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},ndWB:function(e,t,n){},ntbh:function(e,t){(function(t){e.exports=function(){var e={149:function(e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(n){"object"===typeof window&&(t=window)}e.exports=t}},n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={exports:{}},i=!0;try{e[t](o,o.exports,r),i=!1}finally{i&&delete n[t]}return o.exports}return r.ab=t+"/",r(149)}()}).call(this,"/")},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qT12:function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,i=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,m=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,O=r?Symbol.for("react.scope"):60119;function S(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case p:case l:case a:case c:case u:case y:return e;default:switch(e=e&&e.$$typeof){case f:case d:case v:case b:case s:return e;default:return t}}case i:return t}}}function j(e){return S(e)===l}t.AsyncMode=p,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=v,t.Memo=b,t.Portal=i,t.Profiler=c,t.StrictMode=u,t.Suspense=y,t.isAsyncMode=function(e){return j(e)||S(e)===p},t.isConcurrentMode=j,t.isContextConsumer=function(e){return S(e)===f},t.isContextProvider=function(e){return S(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return S(e)===d},t.isFragment=function(e){return S(e)===a},t.isLazy=function(e){return S(e)===v},t.isMemo=function(e){return S(e)===b},t.isPortal=function(e){return S(e)===i},t.isProfiler=function(e){return S(e)===c},t.isStrictMode=function(e){return S(e)===u},t.isSuspense=function(e){return S(e)===y},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===u||e===y||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===g||e.$$typeof===w||e.$$typeof===O||e.$$typeof===m)},t.typeOf=S},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},xKkp:function(e,t,n){},zGdC:function(e,t,n){}},[[0,0,2,1]]]);