/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var e,t=location.hash.substring(1);/^[A-z0-9_-]+$/.test(t)&&(e=document.getElementById(t))&&(/^(?:a|select|input|button|textarea)$/i.test(e.tagName)||(e.tabIndex=-1),e.focus())},!1);var MoveTo=function(){var e={tolerance:0,duration:800,easing:"easeOutQuart",container:window,callback:function(){}};function t(e,t,n,o){return e/=o,-n*(--e*e*e*e-1)+t}function n(e,t){var n={};return Object.keys(e).forEach(function(t){n[t]=e[t]}),Object.keys(t).forEach(function(e){n[e]=t[e]}),n}function o(e){return e instanceof HTMLElement?e.scrollTop:e.pageYOffset}function i(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.options=n(e,o),this.easeFunctions=n({easeOutQuart:t},i)}return i.prototype.registerTrigger=function(e,t){var o=this;if(e){var i=e.getAttribute("href")||e.getAttribute("data-target"),a=i&&"#"!==i?document.getElementById(i.substring(1)):document.body,r=n(this.options,function(e,t){var n={};return Object.keys(t).forEach(function(t){var o=e.getAttribute("data-mt-".concat(t.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})));o&&(n[t]=isNaN(o)?o:parseInt(o,10))}),n}(e,this.options));"function"==typeof t&&(r.callback=t);var s=function(e){e.preventDefault(),o.move(a,r)};return e.addEventListener("click",s,!1),function(){return e.removeEventListener("click",s,!1)}}},i.prototype.move=function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0===e||e){i=n(this.options,i);var a,r="number"==typeof e?e:e.getBoundingClientRect().top,s=o(i.container),d=null;r-=i.tolerance;window.requestAnimationFrame(function n(l){var c=o(t.options.container);d||(d=l-1);var u=l-d;if(a&&(r>0&&a>c||r<0&&a<c))return i.callback(e);a=c;var f=t.easeFunctions[i.easing](u,s,r,i.duration);i.container.scroll(0,f),u<i.duration?window.requestAnimationFrame(n):(i.container.scroll(0,r+s),i.callback(e))})}},i.prototype.addEaseFunction=function(e,t){this.easeFunctions[e]=t},i}();"undefined"!=typeof module?module.exports=MoveTo:window.MoveTo=MoveTo,function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},specificKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n,i=Date.now(),a="false",r=["button","input","select","textarea"],s=[],d=[16,17,18,91,93],l=[],c={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch",touchend:"touch"},u=!1,f={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},g=!1;try{var h=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,h)}catch(e){}var m=function(){var e=!!g&&{passive:!0};document.addEventListener("DOMContentLoaded",v),window.PointerEvent?(window.addEventListener("pointerdown",w),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",w),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",w),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",w,e),window.addEventListener("touchend",w))),window.addEventListener(A(),y,e),window.addEventListener("keydown",w),window.addEventListener("keyup",w),window.addEventListener("focusin",x),window.addEventListener("focusout",E)},v=function(){if(a=!(e.getAttribute("data-whatpersist")||"false"===document.body.getAttribute("data-whatpersist")))try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(e){}b("input"),b("intent")},w=function(e){var t=e.which,i=c[e.type];"pointer"===i&&(i=k(e));var a=!l.length&&-1===d.indexOf(t),s=l.length&&-1!==l.indexOf(t),u="keyboard"===i&&t&&(a||s)||"mouse"===i||"touch"===i;if(N(i)&&(u=!1),u&&n!==i&&(L("input",n=i),b("input")),u&&o!==i){var f=document.activeElement;f&&f.nodeName&&(-1===r.indexOf(f.nodeName.toLowerCase())||"button"===f.nodeName.toLowerCase()&&!O(f,"form"))&&(L("intent",o=i),b("intent"))}},b=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),S(t)},y=function(e){var t=c[e.type];"pointer"===t&&(t=k(e)),T(e),(!u&&!N(t)||u&&"wheel"===e.type||"mousewheel"===e.type||"DOMMouseScroll"===e.type)&&o!==t&&(L("intent",o=t),b("intent"))},x=function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):E()},E=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},L=function(e,t){if(a)try{window.sessionStorage.setItem("what-"+e,t)}catch(e){}},k=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},N=function(e){var t=Date.now(),o="mouse"===e&&"touch"===n&&t-i<200;return i=t,o},A=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},S=function(e){for(var t=0,i=s.length;t<i;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?n:o)},T=function(e){f.x!==e.screenX||f.y!==e.screenY?(u=!1,f.x=e.screenX,f.y=e.screenY):u=!0},O=function(e,t){var n=window.Element.prototype;if(n.matches||(n.matches=n.msMatchesSelector||n.webkitMatchesSelector),n.closest)return e.closest(t);do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null};return"addEventListener"in window&&Array.prototype.indexOf&&(c[A()]="mouse",m()),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){d=e},specificKeys:function(e){l=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=s.length;t<n;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)},clearStorage:function(){window.sessionStorage.clear()}}}()}])}),function(e,t){"object"==typeof exports?module.exports=t(e):"function"==typeof define&&define.amd?define([],t):e.LazyLoad=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";"function"==typeof define&&define.amd&&(e=window);const t={src:"data-src",srcmobile:"data-src-mobile",srcset:"data-srcset",selector:".lazyload",root:null,rootMargin:"0px",threshold:0},n=function(){let e={},t=!1,o=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);let a=function(o){for(let i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t&&"[object Object]"===Object.prototype.toString.call(o[i])?e[i]=n(!0,e[i],o[i]):e[i]=o[i])};for(;o<i;o++){a(arguments[o])}return e};function o(e,o){this.settings=n(t,o||{}),this.images=e||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(o.prototype={init:function(){if(!e.IntersectionObserver)return void this.loadImages();let t=this,n={root:this.settings.root,rootMargin:this.settings.rootMargin,threshold:[this.settings.threshold]};this.observer=new IntersectionObserver(function(e){Array.prototype.forEach.call(e,function(e){if(e.isIntersecting){const n=e.target;void 0!==n.nextElementSibling&&null!=n.nextElementSibling&&n.nextElementSibling.classList.add("reveal"),t.observer.unobserve(e.target);let o=n.getAttribute(t.settings.src),i=(n.getAttribute(t.settings.srcset),n.getAttribute(t.settings.srcmobile));"img"===n.tagName.toLowerCase()?document.documentElement.clientWidth<600?n.src=i:n.src=o:document.documentElement.clientWidth<600?n.nextElementSibling.style.backgroundImage="url("+i+")":n.nextElementSibling.style.backgroundImage="url("+o+")"}})},n),Array.prototype.forEach.call(this.images,function(e){t.observer.observe(e)})},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let e=this;Array.prototype.forEach.call(this.images,function(t){let n=t.getAttribute(e.settings.src),o=t.getAttribute(e.settings.srcset),i=t.getAttribute(e.settings.srcmobile);"img"===t.tagName.toLowerCase()?(n&&(t.src=n),o&&(t.srcset=o),i&&(t.srcmobile=i)):document.documentElement.clientWidth<600?t.style.backgroundImage="url('"+i+"')":t.style.backgroundImage="url('"+n+"')"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(e,t){return new o(e,t)},e.jQuery){const t=e.jQuery;t.fn.lazyload=function(e){return(e=e||{}).attribute=e.attribute||"data-src",new o(t.makeArray(this),e),this}}return o}),function(e){var t,n,o,i,a,r,s,d,l,c,u,f,p=e(".nav-container"),g=p.find("#nav-toggle"),h=p.find("#main-navigation-wrapper"),m=p.find("#nav"),v=e("<button />",{class:"dropdown-toggle","aria-expanded":!1}).append(e("<span />",{class:"screen-reader-text",text:air_light_screenReaderText.expand}));if(g.length&&(g.add(m).attr("aria-expanded","false"),g.on("click",function(){e(this).add(h).toggleClass("toggled-on"),e(this).add(m).attr("aria-expanded","false"===e(this).add(m).attr("aria-expanded")?"true":"false")})),e(".menu-item-has-children > a").after(v),h.find(".menu-item-has-children").attr("aria-haspopup","true"),h.find(".dropdown-toggle").click(function(t){screenReaderSpan=e(this).find(".screen-reader-text"),dropdownMenu=e(this).nextAll(".sub-menu"),t.preventDefault(),e(this).toggleClass("toggled-on"),dropdownMenu.toggleClass("toggled-on"),e(this).attr("aria-expanded","false"===e(this).attr("aria-expanded")?"true":"false"),screenReaderSpan.text(screenReaderSpan.text()===air_light_screenReaderText.expand?air_light_screenReaderText.collapse:air_light_screenReaderText.expand)}),e(".sub-menu .menu-item-has-children").parent(".sub-menu").addClass("has-sub-menu"),e(".menu-item a, button.dropdown-toggle").on("keydown",function(t){if(-1!=[37,38,39,40].indexOf(t.keyCode))switch(t.keyCode){case 37:t.preventDefault(),t.stopPropagation(),e(this).hasClass("dropdown-toggle")?e(this).prev("a").focus():e(this).parent().prev().children("button.dropdown-toggle").length?e(this).parent().prev().children("button.dropdown-toggle").focus():e(this).parent().prev().children("a").focus(),e(this).is("ul ul ul.sub-menu.toggled-on li:first-child a")&&e(this).parents("ul.sub-menu.toggled-on li").children("button.dropdown-toggle").focus();break;case 39:t.preventDefault(),t.stopPropagation(),e(this).next("button.dropdown-toggle").length?e(this).next("button.dropdown-toggle").focus():e(this).parent().next().find("input").length?e(this).parent().next().find("input").focus():e(this).parent().next().children("a").focus(),e(this).is("ul.sub-menu .dropdown-toggle.toggled-on")&&e(this).parent().find("ul.sub-menu li:first-child a").focus();break;case 40:t.preventDefault(),t.stopPropagation(),e(this).next().length?e(this).next().find("li:first-child a").first().focus():e(this).parent().next().find("input").length?e(this).parent().next().find("input").focus():e(this).parent().next().children("a").focus(),e(this).is("ul.sub-menu a")&&e(this).next("button.dropdown-toggle").length&&e(this).parent().next().children("a").focus(),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().next().children(".dropdown-toggle").length&&e(this).parent().next().children(".dropdown-toggle").focus();break;case 38:t.preventDefault(),t.stopPropagation(),e(this).parent().prev().length?e(this).parent().prev().children("a").focus():e(this).parents("ul").first().prev(".dropdown-toggle.toggled-on").focus(),e(this).is("ul.sub-menu .dropdown-toggle")&&e(this).parent().prev().children(".dropdown-toggle").length&&e(this).parent().prev().children(".dropdown-toggle").focus()}}),(o=document.getElementById("nav"))&&void 0!==(i=document.getElementById("nav-toggle")))if(t=document.getElementsByTagName("html")[0],n=document.getElementsByTagName("body")[0],a=o.getElementsByTagName("ul")[0],r=document.getElementById("main-navigation-wrapper"),void 0!==a)for(a.setAttribute("aria-expanded","false"),-1===a.className.indexOf("nav-menu")&&(a.className+=" nav-menu"),i.onclick=function(){-1!==o.className.indexOf("is-active")?w():(t.className+=" disable-scroll",n.className+=" js-nav-active",o.className+=" is-active",i.className+=" is-active",i.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),c=o.querySelectorAll(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']),u=c[0],f=c[c.length-1],console.log(c),forwardTab=function(e){9!==e.keyCode||e.shiftKey||(e.preventDefault(),i.focus())},f.addEventListener("keydown",forwardTab),firstShiftTab=function(e){9===e.keyCode&&e.shiftKey&&(e.preventDefault(),i.focus())},u.addEventListener("keydown",firstShiftTab),shiftTab=function(e){9===e.keyCode&&e.shiftKey&&(e.preventDefault(),f.focus())},i.addEventListener("keydown",shiftTab))},document.addEventListener("keyup",function(e){27==e.keyCode&&-1!==o.className.indexOf("is-active")&&w()}),r.onclick=function(e){e.target==r&&-1!==o.className.indexOf("is-active")&&w()},s=a.getElementsByTagName("a"),a.getElementsByTagName("ul"),d=0,l=s.length;d<l;d++)s[d].addEventListener("focus",b,!0),s[d].addEventListener("blur",b,!0);else i.style.display="none";function w(){t.className=t.className.replace(" disable-scroll",""),n.className=n.className.replace(" js-nav-active",""),o.className=o.className.replace(" is-active",""),i.className=i.className.replace(" is-active",""),i.setAttribute("aria-expanded","false"),a.setAttribute("aria-expanded","false"),c=o.querySelectorAll(["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])']),u=c[0],(f=c[c.length-1]).removeEventListener("keydown",forwardTab),u.removeEventListener("keydown",firstShiftTab),i.removeEventListener("keydown",shiftTab),i.focus()}function b(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}}(jQuery),document.body.classList.remove("no-js"),document.body.classList.add("js");let images=document.querySelectorAll(".lazyload");lazyload(images,{root:null,rootMargin:"0px",threshold:0}),function(e){e(window).scroll(function(){e(this).scrollTop()>300?e(".top").addClass("is-visible"):e(".top").removeClass("is-visible"),e(this).scrollTop()>1200?e(".top").addClass("fade-out"):e(".top").removeClass("fade-out")}),e(function(){var e=new MoveTo,t=document.getElementById("target");e.move(t);var n=document.getElementsByClassName("js-trigger")[0];e.registerTrigger(n)})}(jQuery);