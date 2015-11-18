var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('../models/comment');


module.exports = function(app, passport){
  app.get('/api/v1/blogComments', function(req, res){
    mongoose.model('Comment').find({}, function(err, blogComments){
     if(err){
       return console.log('err');
     } else {
       res.json(blogComments);
     }
   });
 });

  app.post('/api/v1/blogComments', function(req, res){

   var newPost = req.body;

   mongoose.model('Comment').create(newPost,
   function(err, blogPost){
     if(err){
       res.send("That's not a Comment")
     } else{
       console.log("You posted a comment to your blog");
       res.redirect('/blog');
       res.send(blogPost);
     }
   });
 });

  app.get('/api/v1/blogComments/:id', function(req, res){
    mongoose.model('Comment').findById({
      _id: req.params.id 
    }, function(err, blogPost) {
      if(err)
        res.send(err)
        res.json(blogPost)
    });
  });

  app.put('/api/v1/blogComments/:id', function(req, res) {
    mongoose.model('Comment').findById(req.params.id, function(err, blogPost){
      if(err)
        res.send(err);
      blogPost.title = req.body.title;
      blogPost.author = req.body.author;
      blogPost.body = req.body.body;

      console.log(JSON.stringify(blogPost));

      blogPost.save(function(err) {
        if(err)
          res.send(err);
          res.json({ message: "Comment was updated"});
      });

    });
  });

  app.delete('/api/v1/blogComments/:id', function(req, res) {
    mongoose.model('Comment').remove({
      _id: req.params.id
    }, function(err, beer) {
      if(err)
        res.send(err);
        res.json({ message: 'Successfully Deleted'});
    });
  });

}

