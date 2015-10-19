var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogPosts');

 // connect to our database

module.exports = mongoose;