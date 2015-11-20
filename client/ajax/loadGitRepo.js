var React = require('react');
var ReactDOM = require('react-dom');
var GitRepoList = require('../render/gitRepoList');


var GitRepoLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadRepos: function(comment) {
	$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("load repos success")
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log("Broken url is " + this.props.url)
				console.error(this.props.url, status, err.toString());
      		 }.bind(this)
					});
	},

	componentDidMount: function(){
	this.loadRepos();
},


	render: function() {
		return (
			<div>
				<GitRepoList data={this.state.data}/>
			</div>
			)
	}
})

// To add more info from git hub events, update routes/gitHubRoutes.js

ReactDOM.render(<GitRepoLoad url="https://api.github.com/users/sreahard/repos"/>, document.getElementById("gitRepos") );
