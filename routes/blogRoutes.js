var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

module.exports = function(app, passport) {
  app.get('/api/v1/blogPosts', function(req, res) {
    mongoose.model('Blog').find({})
    .populate({ path: 'comments', populate: {path: 'user'}})
    .exec(function(err, comments) {
      if (err) {
        res.send(err);
      }
      res.send(comments);
    });
  });

  app.post('/api/v1/blogPosts', function(req, res) {

    var title = req.body.title;
    var body = req.body.body;
    var author = req.body.author;
    var img = req.body.img;

    mongoose.model('Blog').create({
      title: title,
      body: body,
      author: author,
      img: img
    },
    function(err, blogPost) {
      if (err) {
        res.send('Not a Post');
      } else {
        res.send(blogPost);
      }
    });
  });


  app.get('/api/v1/blogPosts/user', function(req, res) {

    if (req.user) {
      mongoose.model('User').findById({
        _id: req.user._id
      },
      function(err, user) {
        if (err) {
          return console.log(err);
        } else {
          res.json(user);
        }
      });
    } else {
      res.json({
        user: 'anonymous'
      });
    }
  });
  app.get('/api/v1/blogPosts/:id', function(req, res) {
    mongoose.model('Blog').findById({
      _id: req.params.id
    }, function(err, blogPost) {
      if (err) {
        res.send(err);
      }
      res.json(blogPost);
    });
  });

  app.get('/api/v1/blogPosts/search/:query', function(req, res) {
    mongoose.model('Blog').findById({
      _id: req.params.id
    }, function(err, blogPost) {
      if (err) {
        res.send(err);
      }
      res.json(blogPost);
    });
  });
  app.get('/api/v1/blogPosts/:id/comments', function(req, res) {
    mongoose.model('Blog').findById({
      _id: req.params.id
    })
    .populate({ path: 'comments', populate: { path: 'user', select: 'local.email'} })
    .exec(function(err, blog) {
      if (err) {
        res.send(err);
      }
      res.send(blog);
    });
  });

  app.post('/api/v1/blogPosts/:id/comment', function(req, res) {
    var comment = req.body.comment;
    var user = req.user;

    mongoose.model('Comment').create({
      comment: comment,
      user: user,
      blog: req.params.id
    }, function(err, comment) {
      if (err) {
        res.send(err);
      }
      mongoose.model('Blog').findById({
        _id: req.params.id
      }, function(err, blog) {
        if (err) {
          res.send(err);
        }
        blog.comments.push(comment._id);
        blog.save();
        res.json(comment);
      });
    });
  });

  app.put('/api/v1/blogPosts/:id', function(req, res) {
    mongoose.model('Blog').findById(req.params.id, function(err, blogPost) {
      if (err) {
        res.send(err);
      }
      blogPost.title = req.body.title;
      blogPost.author = req.body.author;
      blogPost.body = req.body.body;
      blogPost.img = req.body.img;

      blogPost.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({ message: 'Blog was updated'});
      });

    });
  });

  app.delete('/api/v1/blogPosts/:id', function(req, res) {
    mongoose.model('Blog').remove({
      _id: req.params.id
    }, function(err, blog) {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully Deleted'});
    });
  });
};
