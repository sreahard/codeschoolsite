// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require('fs');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/blogComment'); // connect to our database

var Comment = require('./public/js/comment');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

var port = process.env.PORT || 4000;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get('/', function(req, res) {
	res.readFile('index.html')
});

// more routes for our API will happen here

// on routes that end in /blogComment
// ----------------------------------------------------
router.route('/blogComment')

    // create a comment (accessed at POST http://localhost:4000/api/blogComment)
    .post(function(req, res) {

        var comment = new Comment();      // create a new instance of the comment model
        comment.name = req.body.name;  // set the blogComment name (comes from the request)

        // save the comment and check for errors
        comment.save(function(err) {
        	if (err)
        		res.send(err);
        	res.redirect('/blog.html');
        	res.json({ message: 'comment ' + comment.name + ' created!' });

        });
        
    }) // removed semicolon to link get function
    // get all the blogComment (accessed at GET http://localhost:4000/api/blogComment)
    .get(function(req, res) {
    	Comment.find(function(err, blogComment) {
    		if (err)
    			res.send(err);

    		res.json(blogComment);
    	});
    });

    // on routes that end in /blogComment/:comment_id
// ----------------------------------------------------
router.route('/blogComment/:comment_id')

    // get the comment with that id (accessed at GET http://localhost:4000/api/blogComment/:comment_id)
    .get(function(req, res) {
        Comment.findById(req.params.comment_id, function(err, comment) {
            if (err)
                res.send(err);
            res.json(comment);
        });
    })
// update the comment with this id (accessed at PUT http://localhost:4000/api/blogComment/:comment_id)
    .put(function(req, res) {

        // use our comment model to find the comment we want
        Comment.findById(req.params.comment_id, function(err, comment) {

            if (err)
                res.send(err);

            comment.name = req.body.name;  // update the blogComment info

            // save the comment
            comment.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'comment updated!' });
            });

        });
    })
    
    // delete the comment with this id (accessed at DELETE http://localhost:4000/api/blogComment/:comment_id)
    .delete(function(req, res) {
        Comment.remove({
            _id: req.params.comment_id
        }, function(err, comment) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/v1', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);