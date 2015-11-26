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
var react = require('express-react-views');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');

var blogModel = require('./models/blog');
var commentModel = require('./models/comment');
var contactModel = require('./models/contact');


require('dotenv').load();
var Twit = require('twit');
var axios = require('axios');
var _ = require('lodash');

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

app.engine('js', react.createEngine());

app.set('view engine', 'ejs');
// // required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// // routes ======================================================================
require('./routes/userRoutes')(app, passport);
require('./routes/blogRoutes')(app, passport);
// require('./routes/commentRoutes')(app, passport);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.options("*", function(req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
});


var T = new Twit({
  consumer_key:TeSpTq0uf661OyBu6SaK3oY3f,
  consumer_secret:process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret:process.env.ACCESS_TOKEN_SECRET
});

var fetchTweets = function(req, res){
  var twitterHandle = req.params.twitterHandle;

T.get('statuses/user_timeline', { screen_name: twitterHandle, count:10 },  function (err, data, response) {
  res.send(data)
});

};

var searchTweets = function(req, res){
  var query = req.params.query;

    T.get('search/tweets', { q: query, result_type: "popular", count:10 },  
        function (err, data, response){
            var justTweets = [];
            var searchArray = data.statuses;
            searchArray.forEach(function(status){
                justTweets.push(status.text);
            })
            res.send(justTweets);
        });
};




var contactRoutes = require('./routes/contactRoutes');
var gitHubRoutes = require('./routes/gitHubRoutes');



app.use('/api/v1/github', gitHubRoutes);
app.use('/api/v1/blogContact', contactRoutes);
app.use('/api/twitter/search/:query', searchTweets);
app.use('/api/twitter/handle/:twitterHandle', fetchTweets);


// app.get('/', function(req, res){
// 	res.render('./pages/index.ejs')
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});