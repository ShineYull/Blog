var posts=["EasyEngine.html","EasyLua.html","Design-Patterns.html","EasyDB.html","EasyDocker.html","EasyRPC.html","Game-making-from-my-perspective.html","GameUE-Slolo.html","Add-custom-css-and-js-files.html","footer-random-flink.html","c-sizeof.html","beautify-footer.html","keil5-find-cpu.html","card-author-tutorial.html","weixin-gongzonghao-tutorial.html","toc-jump-error.html","game-page-tutorial.html","twikoo-css-tutorial.html","video-page-tutorial.html","essay-music-notshow.html","setting-button-tutorial.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}