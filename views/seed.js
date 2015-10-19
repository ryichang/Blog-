// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");



db.Post.remove({}, function(err, posts){

  db.Post.create(posts_list, function(err, posts){
    if (err) { return console.log(err); }
    console.log("created", posts.length, "posts");
    process.exit();
  });

});
