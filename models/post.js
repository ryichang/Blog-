var mongoose = require('mongoose');

// var postSchema = mongoose.Schema({
// 	text: String
// });

// var Post = mongoose.model('Post', postSchema);

// module.exports = Post; 

var Schema = mongoose.Schema; 

var postSchema = new Schema ({
	text: String, 
	comments: [{type: Schema.Types.ObjectId, ref: 'comment'}]
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post; 