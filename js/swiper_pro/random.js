var posts=["EasyEngine.html","EasyLua.html","Design-Patterns.html","EasyDocker.html","EasyDB.html","EasyRPC.html","Game-making-from-my-perspective.html","GameUE-Slolo.html","Add-custom-css-and-js-files.html","beautify-footer.html","footer-random-flink.html","c-sizeof.html","keil5-find-cpu.html","card-author-tutorial.html","weixin-gongzonghao-tutorial.html","setting-button-tutorial.html","toc-jump-error.html","game-page-tutorial.html","twikoo-css-tutorial.html","video-page-tutorial.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}