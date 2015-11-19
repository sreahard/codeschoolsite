var React = require('react')

var GRAVATAR_URL = "http://gravatar.com/avatar"



var USERS = [
{id: 1, name: "doug", email: "doug@kosmojo.com"},
{id: 2, name: "paul", email: "paul@kosmojo.com"},
{id: 3, name: "emily", email: "emily@kosmojo.com"},
{id: 4, name: "suzie", email: "suziequz@msn.com"}
]

var Gravatar = React.createClass({
	render: function() {
		var user = this.props.users.map(function(n){
			return <li key= {n.id}> {n.name} {n.email} </li>
		})

		var users = this.props.users.map(function(u){

			var hash = md5(u.email);

			var url = GRAVATAR_URL + "/" + hash;

			return (
				<li key={u.id}> <img src={url} className="img-circle" /> {u.email} </li>
				)
		});
		return (
			<ul>
			{users}
			</ul>
			)
	}
})

var App = React.createClass({
	render: function() {

		return (
			<div>
			<h1>HTML HERE</h1>
			<ul>
			<Gravatar users = {USERS}/>
			</ul>
			</div>
			)
	}
})

React.render(<App/>, document.getElementById("gravatars") )