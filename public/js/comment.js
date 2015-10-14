var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CommentSchema = new Schema({
    name: String,
    content: String
});

// var blogSchema = new Schema({
//   title:  String,
//   author: String,
//   body:   String,
//   date: { type: Date, default: Date.now },
//   });

module.exports = mongoose.model('Comment', CommentSchema);
// module.exports = mongoose.model('Blog', blogSchema);