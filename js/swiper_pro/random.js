var posts=["EasyEngine.html","EasyLua.html","Design-Patterns.html","EasyDB.html","EasyDocker.html","EasyRPC.html","Game-making-from-my-perspective.html","GameUE-Slolo.html","Add-custom-css-and-js-files.html","footer-random-flink.html","beautify-footer.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};