var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
    name: String,
    content: String

});

module.exports = mongoose.model('Comment', CommentSchema);