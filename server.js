var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./models/dbs');
var blogModel = require('./models/blog');
var commentModel = require('./models/comment');

var app = express();

app.set('port', (process.env.PORT || 4000));

var blogRoutes = require('./routes/blog_posts');

var commentRoutes = require('./routes/comments');

app.use(express.static('public'));

app.use('/api/v1/blogPosts', blogRoutes);

app.use('/api/v1/blogComments', commentRoutes);

app.get('/', function(req, res){
	res.readFile('index.html')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});