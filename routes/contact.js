var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

  .get(function(req, res) {
    var Contact = mongoose.model('Contact');
    Contact.find({}, function(err, blogContact){
     if(err){
       return console.log(err);
     } else {
       res.json(blogContact);
     }
   });
 })

.post(function(req, res){
   var name = req.body.name;
   var email = req.body.email;
   var message = req.body.message;

   mongoose.model('Contact').create({
     name: name,
     email: email,
     message: message,

   }, function(err, blogContact){
     if(err){
       res.send("Bad Contact!")
     } else{
       console.log("You posted a Contact");
       res.redirect('/contacted.html');
       res.send(blogContact);
     }
   });
 });

module.exports = router;

