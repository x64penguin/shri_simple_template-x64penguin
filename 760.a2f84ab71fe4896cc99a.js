"use strict";(self.webpackChunkunit_demo_cra=self.webpackChunkunit_demo_cra||[]).push([[760],{294:(r,t,n)=>{r.exports=n(408)},893:(r,t,n)=>{r.exports=n(251)},890:(r,t,n)=>{function e(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,{MT:()=>c});var o="function"==typeof Symbol&&Symbol.observable||"@@observable",i=function(){return Math.random().toString(36).substring(7).split("").join(".")},f={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function u(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function c(r,t,n){var i;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(e(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(e(1));return n(c)(r,t)}if("function"!=typeof r)throw new Error(e(2));var s=r,p=t,w=[],l=w,h=!1;function y(){l===w&&(l=w.slice())}function a(){if(h)throw new Error(e(3));return p}function E(r){if("function"!=typeof r)throw new Error(e(4));if(h)throw new Error(e(5));var t=!0;return y(),l.push(r),function(){if(t){if(h)throw new Error(e(6));t=!1,y();var n=l.indexOf(r);l.splice(n,1),w=null}}}function b(r){if(!u(r))throw new Error(e(7));if(void 0===r.type)throw new Error(e(8));if(h)throw new Error(e(9));try{h=!0,p=s(p,r)}finally{h=!1}for(var t=w=l,n=0;n<t.length;n++)(0,t[n])();return r}function d(r){if("function"!=typeof r)throw new Error(e(10));s=r,b({type:f.REPLACE})}function v(){var r,t=E;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(e(11));function n(){r.next&&r.next(a())}return n(),{unsubscribe:t(n)}}})[o]=function(){return this},r}return b({type:f.INIT}),(i={dispatch:b,subscribe:E,getState:a,replaceReducer:d})[o]=v,i}}}]);