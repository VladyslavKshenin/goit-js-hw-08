var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=l||f||Function("return this")(),s=Object.prototype.toString,c=Math.max,m=Math.min,d=function(){return u.Date.now()};function v(e,t,n){var i,o,a,r,l,f,u=0,s=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,a=o;return i=o=void 0,u=t,r=e.apply(a,n)}function E(e){return u=e,l=setTimeout(j,t),s?y(e):r}function h(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-u>=a}function j(){var e=d();if(h(e))return w(e);l=setTimeout(j,function(e){var n=t-(e-f);return v?m(n,a-(e-u)):n}(e))}function w(e){return l=void 0,b&&i?y(e):(i=o=void 0,r)}function O(){var e=d(),n=h(e);if(i=arguments,o=this,f=e,n){if(void 0===l)return E(f);if(v)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),r}return t=p(t)||0,g(n)&&(s=!!n.leading,a=(v="maxWait"in n)?c(p(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),O.cancel=function(){void 0!==l&&clearTimeout(l),u=0,i=f=o=l=void 0},O.flush=function(){return void 0===l?r:w(d())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=o.test(e);return l||a.test(e)?r(e.slice(2),l?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form"),y={Email:"",Message:""};const E=t((function(){y.Email=b.elements.email.value,y.Message=b.elements.message.value,console.log(y),localStorage.setItem("feedback-form-state",JSON.stringify(y))}),1e3);!function(){const e=localStorage.getItem("feedback-form-state");if(e){const{Email:t,Message:n}=JSON.parse(e);console.log({Email:t,Message:n}),b.elements.email.value=t,b.elements.message.value=n,y.Email=b.elements.email.value,y.Message=b.elements.message.value}}(),b.addEventListener("input",E),b.addEventListener("submit",(function(e){e.preventDefault(),""===b.elements.email.value||""===b.elements.message.value.trim()?alert("Please fill in all the fields!"):(localStorage.removeItem("feedback-form-state"),console.log(y),b.reset())}));
//# sourceMappingURL=03-feedback.f9784024.js.map
