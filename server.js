var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var db = require('./models/dbs');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
var configDB = require('./config/database.js');
var blogModel = require('./models/blog');
var commentModel = require('./models/comment');
var contactModel = require('./models/contact');
var app = express();

app.set('port', (process.env.PORT || 4000));

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser.json()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms

app.set('view engine', 'ejs');
// // required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// // routes ======================================================================
require('./routes/userRoutes')(app, passport);



var blogRoutes = require('./routes/blog_posts');

var commentRoutes = require('./routes/comments');

var contactRoutes = require('./routes/contact');

app.use(express.static('public'));

app.use('/api/v1/blogPosts', blogRoutes);

app.use('/api/v1/blogComments', commentRoutes);

app.use('/api/v1/blogContact', contactRoutes);

app.get('/', function(req, res){
	res.readFile('index.html')
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});