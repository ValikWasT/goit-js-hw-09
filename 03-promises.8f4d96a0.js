!function(){var e={inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]'),form:document.querySelector("form")};e.form.addEventListener("submit",(function(n){n.preventDefault(),function(e,n){for(var t=0;t<e;t+=1){var o=Math.random()>.3;new Promise((function(e,t){setTimeout((function(){o?e("Success! Value passed to resolve function"):t("Error! Error passed to reject function")}),n)})).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),n+=500}}(e.inputAmount.value,e.inputDelay.value)}))}();
//# sourceMappingURL=03-promises.8f4d96a0.js.map
