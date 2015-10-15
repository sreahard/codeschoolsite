var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', function(req, res){
	res.readFile('index.html')
})


app.post('/api/form', function(req, res) {
	var newComment = req.body.newComment;
	var myData = 'Comment: ' + newComment;
	fs.appendFile('form.json', JSON.stringify(myData), function(err)  {
		if(err){
			console.log(err)
		} else {
			console.log(JSON.stringify(myData) + ' sucessfully saved');
			res.redirect('/blog.html');
		}
	});
});

app.get('/api/hello', function(req, res) {
  res.send("Yo home slice! What's shakin'?")
});




app.listen(3000);