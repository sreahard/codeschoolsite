var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/blogComment'); // connect to our database

module.exports = mongoose;