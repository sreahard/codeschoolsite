var express = require('express');
var bodyParser = require('body-parser');
var axios = require ('axios')

var url = "https://api.github.com/users/sreahard/events";

fetchGitHubEvents = function(req,res){
	
	axios.get(url)

	.then(function (response){
		var gitStuff = response.data.map(function(g){
		  return {"id":g.id, "type": g.type, "repo": g.repo.name, "myAvatar": g.actor.avatar_url, "commits": g.payload.commits}
		});

		res.json(gitStuff);	
	})

	.catch(function(response){
		res.json(response.data);
	});
}

module.exports = fetchGitHubEvents;