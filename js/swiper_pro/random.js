var posts=["EasyEngine.html","EasyLua.html","Design-Patterns.html","EasyDocker.html","EasyRPC.html","EasyDB.html","Game-making-from-my-perspective.html","GameUE-Slolo.html","Add-custom-css-and-js-files.html","footer-random-flink.html","beautify-footer.html","c-sizeof.html","keil5-find-cpu.html","card-author-tutorial.html","weixin-gongzonghao-tutorial.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}