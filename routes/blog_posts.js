var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

  .get(function(req, res) {
    mongoose.model('Blog').find({}, function(err, blogPosts){
     if(err){
       return console.log(err);
     } else {
       res.json(blogPosts);
     }
   });
 })

.post(function(req, res){
   var title = req.body.title;
   var author = req.body.author;
   var body = req.body.body;

   mongoose.model('Blog').create({
     title: title,
     author: author,
     body: body,
   }, function(err, blogPost){
     if(err){
       res.send("That's not an animal")
     } else{
       console.log("You posted to your blog");
       res.redirect('/blog.html');
       res.send(blogPost);
     }
   });
 });

module.exports = router;

