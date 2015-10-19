var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  date: { type: Date, default: '12/10/1990' },
  });

module.exports = mongoose.model('Blog', blogSchema);