//server.js
//load the things we need
var express = require('express'),
	app = express(), 
	path = require("path"), 
	bodyParser = require("body-parser"),
	db = require('./models/index.js'),
	where = require("./utils/where");

//set the view engine to ejs
app.set('view engine', 'ejs');
//serve js & css files
app.use("/static", express.static("public"));
//body parser config to accept our datatypes 
app.use(bodyParser.urlencoded({
	extended: true
}));

// ROUTES //
app.get("/", function (req, res){
  db.Post.find().exec(function(err, posts){
     if (err) { return console.log("find error: " + err); }
     console.log('here are the posts: ', posts);
     res.render("index", {posts: posts});
  });
  // render index.html and send with posts data filled in
  // res.render("index", {posts: posts});
});


// api route to get all posts (sanity check)
app.get("/api/posts", function (req, res){
 // get posts from db
 db.Post.find(function(err, posts){
    res.send(posts);
  });
});

// api route to create new post
app.post("/api/posts", function (req, res){
  var newPost = req.body;
   console.log(newPost);

  db.Post.create({text: newPost.post}, function(err, post){
    if (err) { return console.log("create error: " + err); }
    console.log("created ", post);
    res.json(post);
	});
    // process.exit();
});

  // if (posts.length !== 0) {
  //   newPost._id = posts [posts.length - 1]._id + 1;
  // } else {
  //   newPost._id = 0;
  // }
  // posts.push(newPost);
  // res.json(newPost);
  

app.delete("/api/posts/:id", function (req,res) {
  var targetId = req.params.id;

  console.log(targetId);

  db.Post.findOneAndRemove({_id:targetId}, function(err, deletedPost){
    if (err) { return console.log("delete error: " + err); }
    console.log(deletedPost + " removed");
    res.send(deletedPost);
   });
});








// app.get('/', function (req,res) {
// 	res.render ('index', {posts: posts});

// });

// app.get('/posts', function(req, res) {
// 	db.Post.find({}, function(err, posts) {
// 		if (err) console.log(err); 
// 		res.render('index', {
// 			posts: posts
// 		});
// 	});
// }); 

// app.post('/posts', function(req, res) {

// 	console.log(req.body); 
// 	db.Post.create(req.body, function(err, post) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		res.json(post);
// 	});
// }); 


app.get('/', function (req,res) {
	res.render('index');
}); 

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


app.listen(3000, function() {
	console.log("listening to port 3000");
}); 
