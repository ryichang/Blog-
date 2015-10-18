//server.js
//load the things we need
var express = require('express'),
	app = express(), 
	path = require("path"), 
	bodyParser = require("body-parser"),
	db = require('./models/index.js'); 

//set the view engine to ejs
app.set('view engine', 'ejs');
//serve js & css files
app.use("/static", express.static("public"));
//body parser config to accept our datatypes 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get('/posts', function(req, res) {
	db.Post.find({}, function(err, posts) {
		if (err) console.log(err); 
		res.render('index', {
			posts: posts
		});
	});
}); 

app.post('/posts', function(req, res) {
	console.log(req.body); 
	db.Post.create(req.body, function(err, post) {
		if (err) {
			console.log(err);
		}
		res.json(post);
	});
}); 


app.get('/', function (req,res) {
	res.render('index');
}); 

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });


app.listen(3000, function() {
	console.log("listening to port 3000");
}); 
