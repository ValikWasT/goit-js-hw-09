!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},u=n.parcelRequired7c6;null==u&&((u=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var u={id:e,exports:{}};return t[e]=u,n.call(u.exports,u,u.exports),u.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=u);var r=u("iU1Pc"),i={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),form:document.querySelector("form")};function a(n,t){var o=Math.random()>.3;new Promise((function(e,u){setTimeout((function(){o?e({position:n,delay:t}):u({position:n,delay:t})}),t)})).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}i.form.addEventListener("submit",(function(n){if(n.preventDefault(),Number.parseInt(i.inputDelay.value)<0||Number.parseInt(i.inputAmount.value)<0||Number.parseInt(i.inputStep.value)<0)e(r).Notify.failure("Error! Your values is negative!");else for(var t=Number.parseInt(i.inputDelay.value),o=1;o<=Number.parseInt(i.inputAmount.value);o+=1)a(Number.parseInt(o),t),t+=Number.parseInt(i.inputStep.value)}))}();
//# sourceMappingURL=03-promises.c2984c8b.js.map