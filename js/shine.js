"use strict";var navMusicEl=document.getElementById("nav-music"),lastSayHello="",shine={saveData:(e,t)=>{localStorage.setItem(e,JSON.stringify({time:Date.now(),data:t}))},loadData:(e,t)=>{let n=JSON.parse(localStorage.getItem(e));if(n){let e=Date.now()-n.time;if(e<60*t*1e3&&e>-1)return n.data}return 0},randomLink:()=>{let e=shine.loadData("links",30);if(e){let t=document.querySelectorAll("#friend-links-in-footer .footer-item");if(!t.length)return;for(let n=0;n<5;n++){let a=parseInt(Math.random()*e.length);t[n].innerText=e[a].name,t[n].href=e[a].link,e.splice(a,1)}}else fetch("/link.json").then((e=>e.json())).then((e=>{shine.saveData("links",e.link_list),shine.randomLink()}))},getTimeState:function(){var e=(new Date).getHours(),t="";return 0<=e&&e<=5?t="晚安😴":5<e&&e<=10?t="早上好👋":10<e&&e<=14?t="中午好👋":14<e&&e<=18?t="下午好👋":18<e&&e<=24&&(t="晚上好👋"),t},sayhi:function(){var e=document.getElementById("author-info__sayhi");e&&(e.innerHTML=shine.getTimeState()+"！我是")},showSubscribeSum:function(){fetch("https://qexo.shineyu.cn/pub/getSubscribeSum/").then((e=>e.json())).then((e=>{var t=document.getElementById("author-subscribe");console.log("json.msg:",e.msg),t&&(t.innerHTML="订阅数 "+e.msg)}))},logInfo:()=>{console.log(`Welcome to:\n%cShine blog:%c https://blog.shineyu.cn%c\nThis site has been running stably for %c${Math.round(((new Date).getTime()-new Date("2022/12/01 00:00:00").getTime())/864e5)} %c days`,"border:1px #888 solid;border-right:0;border-radius:5px 0 0 5px;padding: 5px 10px;color:white;background:#4976f5;margin:10px 0","border:1px #888 solid;border-left:0;border-radius:0 5px 5px 0;padding: 5px 10px;","","color:#4976f5","")},enterFullscreen:function(e){console.log("进入全屏的元素",e),e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():shine.noFullscreenSupport(),shine.is_mobile()&&window.screen.orientation.lock("landscape-primary")},exitFullscreen:function(e){console.log("全屏元素",e);let t=window.top.document;t.exitFullscreen?t.exitFullscreen():t.msExitFullscreen?t.msExitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen?t.webkitExitFullscreen():shine.noFullscreenSupport()},noFullscreenSupport:function(){fullscreenState=!fullscreenState,alert("您的浏览器不支持全屏.")},is_mobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},scrollTo:function(e){var t=document.querySelector(e).offsetTop;window.scrollTo(0,t-80)},applyFlink:function(){var e=document.getElementsByClassName("el-textarea__inner")[0];let t=document.createEvent("HTMLEvents");t.initEvent("input",!0,!0),e.value="昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n",e.dispatchEvent(t),shine.scrollTo("#post-comment"),e.focus(),e.setSelectionRange(-1,-1)},switchCommentBarrage:function(){if(null==localStorage.getItem("commentBarrageSwitch")||"true"==localStorage.getItem("commentBarrageSwitch"))$("#comment-barrage").hide(),document.querySelector("#barrage-btn").classList.remove("on"),localStorage.setItem("commentBarrageSwitch","false");else if("false"==localStorage.getItem("commentBarrageSwitch")){if($("#comment-barrage").show(),document.querySelector("#barrage-btn").classList.add("on"),localStorage.removeItem("commentBarrageSwitch","true"),document.querySelector("#comment-barrage"))new Swiper("#comment-barrage",{direction:"vertical"}).slideNext()}},initSwitchCommentBarrage:function(){null==localStorage.getItem("commentBarrageSwitch")||"true"==localStorage.getItem("commentBarrageSwitch")?($(".menu-commentBarrage-text").text("关闭热评"),document.querySelector("#barrage-btn").classList.add("on")):"false"==localStorage.getItem("commentBarrageSwitch")&&($(".menu-commentBarrage-text").text("显示热评"),document.querySelector("#barrage-btn").classList.remove("on"))},FPSToggle:function(){"true"==localStorage.getItem("showFPS")?($("#fps-group").hide(),document.querySelector("#FPS-btn").classList.remove("on"),localStorage.setItem("showFPS","false")):($("#fps-group").show(),document.querySelector("#FPS-btn").classList.add("on"),localStorage.setItem("showFPS","true"))},initFPSBtn:function(){null==localStorage.getItem("showFPS")?($("#fps").hide(),document.querySelector("#FPS-btn").classList.remove("on"),localStorage.setItem("showFPS","false")):"true"==localStorage.getItem("showFPS")?document.querySelector("#FPS-btn").classList.add("on"):"false"==localStorage.getItem("showFPS")&&document.querySelector("#FPS-btn").classList.remove("on")},switchRightSide:function(){document.getElementById("rightside")?.classList.toggle("hidden"),document.getElementById("rightside-mask")?.classList.toggle("hidden"),shine.initSwitchCommentBarrage(),shine.initFPSBtn()},changeMusicBg:function(e=!0){if("/music/"!=window.location.pathname)return;const t=document.getElementById("an_music_bg");if(e){const e=document.querySelector("#anMusic-page .aplayer-pic");t.style.backgroundImage=e.style.backgroundImage}else{let e=setInterval((()=>{const n=document.querySelector("#anMusic-page .aplayer-pic");console.info(t),n&&(clearInterval(e),t.style.backgroundImage=n.style.backgroundImage,shine.addEventListenerChangeMusicBg())}),100)}},addEventListenerChangeMusicBg:function(){const e=document.getElementById("anMusic-page"),t=e.querySelector(".aplayer-info .aplayer-time .aplayer-icon-menu");e.querySelector("meting-js").aplayer.on("loadeddata",(function(){shine.changeMusicBg(),console.info("player loadeddata")})),t.addEventListener("click",(function(){document.getElementById("menu-mask").style.display="block",document.getElementById("menu-mask").style.animation="0.5s ease 0s 1 normal none running to_show"})),document.getElementById("menu-mask").addEventListener("click",(function(){"/music/"==window.location.pathname&&e.querySelector(".aplayer-list").classList.remove("aplayer-list-hide")}))},musicToggle:function(e=!0){anzhiyu_musicFirst||(musicBindEvent(),anzhiyu_musicFirst=!0);anzhiyu_musicPlaying?(navMusicEl.classList.remove("playing"),document.getElementById("nav-music-hoverTips").innerHTML="音乐已暂停",anzhiyu_musicPlaying=!1,navMusicEl.classList.remove("stretch")):(navMusicEl.classList.add("playing"),anzhiyu_musicPlaying=!0,navMusicEl.classList.add("stretch")),e&&document.querySelector("#nav-music meting-js").aplayer.toggle()},musicTelescopic:function(){navMusicEl.classList.contains("stretch")?navMusicEl.classList.remove("stretch"):navMusicEl.classList.add("stretch")},musicSkipBack:function(){document.querySelector("#nav-music meting-js").aplayer.skipBack()},musicSkipForward:function(){document.querySelector("#nav-music meting-js").aplayer.skipForward()},musicGetName:function(){for(var e=$(".aplayer-title"),t=[],n=e.length-1;n>=0;n--)t[n]=e[n].innerText;return t[0]},mailSubscribe:function(){var e=subscribe_form.subscribe_name.value,t=subscribe_form.subscribe_mail.value;if(e&&t){var n=JSON.stringify({name:e,mail:t}),a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("readystatechange",(function(){if(4===this.readyState){let e=JSON.parse(this.responseText);void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(e.msg)}})),a.open("POST","https://qexo.shineyu.cn/pub/subscribe/"),a.setRequestHeader("Content-Type","application/json"),a.send(n)}else void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow("名称或者邮箱没填！")},cancelMailSubscribe:function(){var e=cancelSubscribe_form.cancelSubscribe_name.value,t=cancelSubscribe_form.cancelSubscribe_mail.value;if(e&&t){var n=JSON.stringify({name:e,mail:t}),a=new XMLHttpRequest;a.withCredentials=!0,a.addEventListener("readystatechange",(function(){if(4===this.readyState){let e=JSON.parse(this.responseText);void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(e.msg)}})),a.open("POST","https://qexo.shineyu.cn/pub/cancelSubscribe/"),a.setRequestHeader("Content-Type","application/json"),a.send(n)}else void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow("名称或者邮箱没填！")},changeSayHelloText:function(){const e=["🎹 编曲爱好者","🔍 分享与热心帮助","🔨 博客折腾小能手","🤖️ AI小萌新","🤝 专修游戏技术","🏃 脚踏实地行动派","🧱 专攻各种困难","🪅 活泼开朗型"],t=document.getElementById("author-info__sayhi");let n=e[Math.floor(Math.random()*e.length)];for(;n===lastSayHello;)n=e[Math.floor(Math.random()*e.length)];t.textContent=n,lastSayHello=n}};function musicBindEvent(){document.querySelector("#nav-music .aplayer-music").addEventListener("click",(function(){shine.musicTelescopic()})),document.querySelector("#nav-music .aplayer-button").addEventListener("click",(function(){shine.musicToggle(!1)}))}shine.randomLink(),shine.sayhi(),shine.showSubscribeSum(),shine.logInfo(),shine.changeMusicBg(!1);