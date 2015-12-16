var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.route('/')

.get(function(req, res) {
  var Projects = mongoose.model('Projects');
  Projects.find({}, function(err, projects) {
    if (err) {
      return console.log(err);
    } else {
      res.json(projects);
    }
  });
})

.post(function(req, res) {
  var name = req.body.name;
  var description = req.body.description;
  var url = req.body.url;

  mongoose.model('Projects').create({
    name: name,
    description: description,
    url: url,

  }, function(err, projects) {
    if (err) {
      res.send('Bad Project!');
    } else {
      res.send(projects);
    }
  });
});

module.exports = router;
