var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Blog = require('../models/blog');


module.exports = function(app, passport){
  app.get('/api/v1/blogPosts', function(req, res){
    mongoose.model('Blog').find({}, function(err, blogPosts){
     if(err){
       return console.log('err');
     } else {
       res.json(blogPosts);
     }
   });
 });

  app.post('/api/v1/blogPosts', function(req, res){

   var newPost = req.body;

   mongoose.model('Blog').create(newPost,
   function(err, blogPost){
     if(err){
       res.send("That's not a Post")
     } else{
       console.log("You posted to your blog");
       res.send(blogPost);
     }
   });
 });

  app.get('/api/v1/blogPosts/:id', function(req, res){
    mongoose.model('Blog').findById({
      _id: req.params.id 
    }, function(err, blogPost) {
      if(err)
        res.send(err)
        res.json(blogPost)
    });
  });

  app.put('/api/v1/blogPosts/:id', function(req, res) {
    mongoose.model('Blog').findById(req.params.id, function(err, blogPost){
      if(err)
        res.send(err);
      blogPost.title = req.body.title;
      blogPost.author = req.body.author;
      blogPost.body = req.body.body;

      console.log(JSON.stringify(blogPost));

      blogPost.save(function(err) {
        if(err)
          res.send(err);
          res.json({ message: "Blog was updated"});
      });

    });
  });

  app.delete('/api/v1/blogPosts/:id', function(req, res) {
    mongoose.model('Blog').remove({
      _id: req.params.id
    }, function(err, beer) {
      if(err)
        res.send(err);
        res.json({ message: 'Successfully Deleted'});
    });
  });

}

