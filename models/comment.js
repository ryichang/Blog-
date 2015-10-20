var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var commentSchema = new Schema ({
	comment: String
});

var Comment = mongoose.model('Commnet', commentSchema);


module.exports = Comment; 