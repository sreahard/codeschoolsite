var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectsSchema = new Schema({
  name: String,
  description: String,
  url: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Projects', projectsSchema);
