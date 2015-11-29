var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var projectsSchema = new Schema({
  name:  String,
  description: String,
  url: String
  });

module.exports = mongoose.model('Projects', projectsSchema);