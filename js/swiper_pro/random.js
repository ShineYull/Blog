var posts=["EasyEngine.html","EasyLua.html","Design-Patterns.html","EasyDB.html","EasyRPC.html","Game-making-from-my-perspective.html","EasyDocker.html","GameUE-Slolo.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};