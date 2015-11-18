var express = require('express');
var bodyParser = require('body-parser');
var axios = require ('axios')

var url = "https://api.github.com/users/sreahard/events";

fetchGitHubEvents = function(req,res){
	
	axios.get(url)

	.then(function (response){
		var gitStuff = response.data.map(function(g){
		for (var i=0; i < g.payload.commit.length; i++) {
			console.log(i)
		  return {"id":g.id, "type": g.type, "repo": g.repo.name, "myAvatar": g.actor.avatar_url, "commitMessage": g.payload.commit[i].message}
		}
		});

		console.log(gitStuff);
		res.json(gitStuff);
	})

	.catch(function(response){
		console.log(response.data);
				res.json(response.data);
	});
}

module.exports = fetchGitHubEvents;