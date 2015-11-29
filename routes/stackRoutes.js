var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }))

router.route('/')

  .get(function(req, res) {
    var Stack = mongoose.model('Stack');
    Stack.find({}, function(err, stack){
     if(err){
       return console.log(err);
     } else {
       res.json(stack);
     }
   });
 })

.post(function(req, res){
   var name = req.body.name;
   var url = req.body.url;

   mongoose.model('Stack').create({
     name: name,
     url: url,

   }, function(err, stack){
     if(err){
       res.send("Bad Stack!")
     } else{
       console.log("You posted a Stack");
       res.send(stack);
     }
   });
 });

module.exports = router;

