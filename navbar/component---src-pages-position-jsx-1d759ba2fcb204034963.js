(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(161),i=n(166),u=n(164),c=n(165),l=function(e){return Math.round(e)};t.default=function(){var e=Object(r.useState)({x:0,y:0}),t=e[0],n=e[1],s=Object(r.useState)({x:20,y:150}),f=s[0],d=s[1],p=Object(r.useRef)(),m=Object(r.useRef)();return Object(o.useScrollPosition)(function(e){var t=e.currPos;n(t);var r=p.current.style;r.top=150+t.y+"px",r.left=10+t.x+"px"},[],!1,!0),Object(o.useScrollPosition)(function(e){var t=e.currPos;d(t)},[],m),Object(r.useMemo)(function(){return a.a.createElement(c.g,null,a.a.createElement(c.e,{ref:m},"RED BOX"),a.a.createElement(c.d,{ref:p},a.a.createElement("b",null,a.a.createElement("div",null,"VIEWPORT SCROLL POSITION:",a.a.createElement("br",null),"X:",l(t.x)," Y:",l(t.y)),a.a.createElement("div",null,"RED BOX SCROLL POSITION:",a.a.createElement("br",null),"X:",l(f.x)," Y:",l(f.y)))),a.a.createElement(c.c,{show:!0},a.a.createElement(i.a,null)),a.a.createElement(c.a,{mt:"45"},a.a.createElement(u.a,null)))},[t])}},160:function(e,t,n){var r;e.exports=(r=n(163))&&r.default||r},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useScrollPosition",{enumerable:!0,get:function(){return r.useScrollPosition}});var r=n(162)},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useScrollPosition=i;var r=n(0),a="undefined"!=typeof window;function o(e){var t=e.element,n=e.useWindow;if(!a)return{x:0,y:0};var r=(t?t.current:document.body).getBoundingClientRect();return n?{x:window.scrollX,y:window.scrollY}:{x:r.left,y:r.top}}function i(e,t,n,i){var u=(0,r.useRef)(o({useWindow:i}));(0,r.useLayoutEffect)(function(){var t=null;function r(){a&&null===t&&(t=window.requestAnimationFrame(function(){var r=o({element:n,useWindow:i});e({prevPos:u.current,currPos:r}),u.current=r,t=null}))}return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}},t)}i.defaultProps={deps:[],element:!1,useWindow:!1}},163:function(e,t,n){"use strict";n.r(t);n(42);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),u=n(65),c=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},164:function(e,t,n){"use strict";n(96),n(167);var r=n(0),a=n.n(r),o=n(168),i=Array.from({length:20},function(e,t){return a.a.createElement("p",{key:t},Object(o.Chance)().paragraph({sentences:10}))});t.a=function(){return i}},165:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"f",function(){return i}),n.d(t,"b",function(){return u}),n.d(t,"a",function(){return c}),n.d(t,"g",function(){return l}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return f});var r=n(169),a=r.a.nav.withConfig({displayName:"styles__NavbarBase",componentId:"afpalf-0"})(["background:#e6513d;color:white;a{color:white;text-decoration:none;font-weight:bold;padding-left:15px;}line-height:1;height:40px;position:fixed;top:0;right:0;left:0;z-index:1030;display:flex;flex-wrap:nowrap;align-items:center;justify-content:start;"]),o=Object(r.a)(a).withConfig({displayName:"styles__Navbar",componentId:"afpalf-1"})(["box-shadow:0 0.5rem 2rem rgba(0,0,0,0.65);visibility:",";transition:all 200ms ",";transform:",";"],function(e){return e.show?"visible":"hidden"},function(e){return e.show?"ease-in":"ease-out"},function(e){return e.show?"none":"translate(0, -100%)"}),i=Object(r.a)(o).withConfig({displayName:"styles__Sidebar",componentId:"afpalf-2"})(["background:mediumpurple;a{padding-top:15px;padding-left:0;}writing-mode:vertical-lr;width:40px;height:100%;transform:",";"],function(e){return e.show?"none":"translateX(-100%)"}),u=Object(r.a)(a).withConfig({displayName:"styles__Footer",componentId:"afpalf-3"})(["top:unset;bottom:0;justify-content:center;"]),c=r.a.main.withConfig({displayName:"styles__Content",componentId:"afpalf-4"})(["margin-top:","px;"],function(e){return e.mt?e.mt:0}),l=r.a.div.withConfig({displayName:"styles__Wrapper",componentId:"afpalf-5"})([""]),s=r.a.div.withConfig({displayName:"styles__Position",componentId:"afpalf-6"})(["background:#e6513d;color:white;position:absolute;padding:15px;top:150px;left:10px;"]),f=r.a.div.withConfig({displayName:"styles__RedBox",componentId:"afpalf-7"})(["background:red;color:white;position:absolute;padding:15px;top:300px;left:10px;"])},166:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(5),i=n.n(o),u=n(41),c=n.n(u);n(160),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func;t.a=function(){return a.a.createElement(r.Fragment,null,a.a.createElement(c.a,{to:"/navbar"},"Navbar"),a.a.createElement(c.a,{to:"/sidebar"},"Sidebar"),a.a.createElement(c.a,{to:"/position"},"Position"))}}}]);
//# sourceMappingURL=component---src-pages-position-jsx-1d759ba2fcb204034963.js.map