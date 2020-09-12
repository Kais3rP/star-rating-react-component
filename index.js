module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("react")},function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var n=r(0),o=r.n(n);function a(e){var t=e.color,r=(e.bgColor,e.borderColor),n=e.starsWidth,a=e.handleMouseMove,l=e.handleMouseOut,u=e.handleClick,i=e.identifier;return o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 280 280",width:n,style:{fill:t,stroke:r,strokeWidth:20,cursor:"pointer"},onMouseMove:a,onMouseLeave:l,onClick:u,"data-current":i},o.a.createElement("polygon",{points:"141.5 23.47 170.5 109.47 260.5 109.47 188.5 163.47 214.5 249.47 141.5 198.47 68.5 249.47 94.5 163.47 22.5 109.47 112.5 109.47 141.5 23.47"}))}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(n=(l=u.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i={options:{name:"half-grad",numOfStars:5,starsWidth:30,color:"green",bgColor:"white",borderColor:"green",scoreColor:"inherit"},handleScore:function(e){console.log(e)}};function c(e){for(var t=e.options,r=e.handleScore,u=l(Object(n.useState)(-1),2),i=u[0],c=u[1],s=l(Object(n.useState)(0),2),d=s[0],f=s[1],g=[],p=t.name,y=t.numOfStars,h=t.starsWidth,m=t.color,b=t.bgColor,v=t.borderColor,C=t.scoreColor,w=0;w<y;w++)g.push(w);var S=function(e){e.pageX<e.currentTarget.getBoundingClientRect().x+e.currentTarget.getBoundingClientRect().width/2?e.currentTarget.style.fill="url(#".concat(p,")"):e.currentTarget.style.fill=m,c(e.currentTarget.dataset.current)},x=function(e){c(-1)},M=function(e){e.pageX<e.currentTarget.getBoundingClientRect().x+e.currentTarget.getBoundingClientRect().width/2?(f(parseInt(e.currentTarget.dataset.current)+.5),r(parseInt(e.currentTarget.dataset.current)+.5)):(f(parseInt(e.currentTarget.dataset.current)+1),r(parseInt(e.currentTarget.dataset.current)+1))};return o.a.createElement("div",null,o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 0 0",width:0,height:0},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:p,x1:"0",x2:"100%",y1:"0",y2:"0"},o.a.createElement("stop",{offset:"50%",stopColor:m}),o.a.createElement("stop",{offset:"50%",stopColor:b})))),g.map((function(e,t){return t<=i?o.a.createElement(a,{key:t,identifier:t,color:m,bgColor:b,borderColor:v,starsWidth:h,handleMouseMove:S,handleMouseOut:x,handleClick:M}):t>i?o.a.createElement(a,{key:t,identifier:t,color:b,bgColor:b,borderColor:v,starsWidth:h,handleMouseMove:S,handleMouseOut:x,handleClick:M}):void 0})),o.a.createElement("div",{style:{fontFamily:"Arial",fontSize:"15px",color:C}},"Rating: ",d))}c.defaultProps=i}]);