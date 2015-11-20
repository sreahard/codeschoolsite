var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Blog = require('../models/blog');


module.exports = function(app, passport){
  app.get('/api/v1/blogPosts', function(req, res){
    mongoose.model('Blog').find({})
    .populate('comments')
    .exec(function(err, comments) {
      if(err)
        res.send(err)
        res.send(comments)
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

  app.get('/api/v1/blogPosts/search/:query', function(req, res){
    mongoose.model('Blog').findById({
      _id: req.params.id 
    }, function(err, blogPost) {
      if(err)
        res.send(err)
        res.json(blogPost)
    });
  });
  app.get('/api/v1/blogPosts/:id/comments', function(req, res){
    mongoose.model('Blog').findById({
      _id: req.params.id 
    })
    .populate('comments').exec(function(err, comments) {
      if(err)
        res.send(err)
        res.send(comments)
    });
  });

  app.post('/api/v1/blogPosts/:id/comment', function(req, res){
    var newComment = req.body;
    mongoose.model('Comment').create(newComment, 
      function(err, comment) {
      if(err)
        res.send(err)
      mongoose.model('Blog').findById({
        _id: req.params.id
      }, function(err, blog) {
        if(err)
          res.send(err)
        blog.comments.push(comment._id)
        blog.save();
        res.send(comment)
      })
    })
  })


  // app.post('/api/v1/blogPosts/:id/comment', function(req, res){
   
  //  var newComment = req.body;
    
  //   // Find beer by beerId
  //   mongoose.model('Blog').findById({
  //     _id: req.params.id
  //   }, function(err, blog) {
  //     if(err) {
  //       res.send(err);
  //     }
  //   mongoose.model('User').findById({
  //     _id: req.user._id
  //   }, function(err, user){
  //     if(err){
  //       res.send(err);
  //     }

  //   // Add newComment to the blog's comment array

  //   blog.comments = blog.comments || [];
  //   blog.comments.push({
  //     comment: newRating.comment,
  //     user_id: user
  //   })  
    
    // Save the updated beer back to the DB
    
  //   blog.save(function(err, blog) {
  //       if(err)
  //         res.send(err);
          
  //         res.json({ message: "Comment was posted"});
  //       });
  //     });
  //   }); 
  // })  




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

