function t(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}const e={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};e.btnStart.addEventListener("click",(function(){e.btnStop.removeAttribute("disabled"),e.btnStart.setAttribute("disabled","disabled"),e.body.style.backgroundColor=t(),timerId=setInterval((()=>{e.body.style.backgroundColor=t()}),1e3)})),e.btnStop.addEventListener("click",(function(){e.btnStart.removeAttribute("disabled"),e.btnStop.setAttribute("disabled","disabled"),clearInterval(timerId)}));
//# sourceMappingURL=01-color-switcher.f81004a7.js.map
