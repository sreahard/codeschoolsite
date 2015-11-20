var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema   = new Schema({
    comment: String,
    name: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
    date: { type: Date, default: Date.now }	

});

module.exports = mongoose.model('Comment', CommentSchema);	