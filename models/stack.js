var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var stackSchema = new Schema({
  name: String,
  url: String
});

module.exports = mongoose.model('Stack', stackSchema);
