var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

  .get(function(req, res) {
    var Comment = mongoose.model('Comment');
    console.log(Comment)
    Comment.find({}, function(err, blogComments){
     if(err){
       return console.log(err);
     } else {
       res.json(blogComments);
     }
   });
 })

.post(function(req, res){
   var name = req.body.name;
   var comment = req.body.comment;

   mongoose.model('Comment').create({
     name: name,
     comment: comment,
   }, function(err, blogComments){
     if(err){
       res.send("Bad Comment!")
     } else{
       console.log("You posted a comment");
       res.redirect('/blog.html');
       res.send(blogComments);
     }
   });
 });

module.exports = router;

