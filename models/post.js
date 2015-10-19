var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
	text: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post; 