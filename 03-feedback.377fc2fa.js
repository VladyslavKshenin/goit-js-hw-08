!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function b(e,t,n){var i,r,a,l,u,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,s=t,l=e.apply(o,n)}function h(e){return s=e,u=setTimeout(O,t),c?b(e):l}function E(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function O(){var e=p();if(E(e))return w(e);u=setTimeout(O,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function w(e){return u=void 0,d&&i?b(e):(i=r=void 0,l)}function M(){var e=p(),n=E(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return h(f);if(m)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),l}return t=j(t)||0,y(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(j(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),M.cancel=function(){void 0!==u&&clearTimeout(u),s=0,i=f=r=u=void 0},M.flush=function(){return void 0===u?l:w(p())},M}function y(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=l.test(e);return o||u.test(e)?f(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var h=document.querySelector(".feedback-form"),E="feedback-form-state",O={Email:"",Message:""};var w=n((function(){O.Email=h.elements.email.value,O.Message=h.elements.message.value,console.log(O),localStorage.setItem(E,JSON.stringify(O))}),1e3);!function(){var e=localStorage.getItem(E);if(e){var t=JSON.parse(e),n=t.Email,i=t.Message;console.log({Email:n,Message:i}),h.elements.email.value=n,h.elements.message.value=i,O.Email=h.elements.email.value,O.Message=h.elements.message.value}}(),h.addEventListener("input",w),h.addEventListener("submit",(function(e){e.preventDefault(),""===h.elements.email.value||""===h.elements.message.value.trim()?alert("Please fill in all the fields!"):(localStorage.removeItem(E),console.log(O),h.reset())}))}();
//# sourceMappingURL=03-feedback.377fc2fa.js.map