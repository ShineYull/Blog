var posts=["EasyLua.html","Design-Patterns.html","EasyEngine.html","EasyDocker.html","EasyDB.html","EasyRPC.html","Game-making-from-my-perspective.html","GameUE-Slolo.html","Add-custom-css-and-js-files.html","beautify-footer.html","footer-random-flink.html","c-sizeof.html","keil5-find-cpu.html","weixin-gongzonghao-tutorial.html","card-author-tutorial.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}