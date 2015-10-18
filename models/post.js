var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	Post: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post; 