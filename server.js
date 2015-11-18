var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var db = require('./models/dbs');
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var blogModel = require('./models/blog');
var commentModel = require('./models/comment');
var contactModel = require('./models/contact');


app.set('port', (process.env.PORT || 4000));

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser.json()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms

if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading
  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}

app.use(express.static('public'));

app.set('view engine', 'ejs');
// // required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// // routes ======================================================================
require('./routes/userRoutes')(app, passport);
require('./routes/blogRoutes')(app, passport);
require('./routes/commentRoutes')(app, passport);


var contactRoutes = require('./routes/contactRoutes');



app.use('/api/v1/blogContact', contactRoutes);

// app.get('/', function(req, res){
// 	res.render('./pages/index.ejs')
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});