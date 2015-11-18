var React = require('react');
var GitRepoList = require('./gitRepoList');

var GitRepoLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadComments: function(comment) {
	$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("inside success")
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log("Broken url is " + this.props.url)
				console.error(this.props.url, status, err.toString());
      		 }.bind(this)
					});
	},

	componentDidMount: function(){
	this.loadComments();
},


	render: function() {
		return (
			<div>
				<GitRepoList data={this.state.data}/>
			</div>
			)
	}
})

React.render(<GitRepoLoad url="https://api.github.com/users/sreahard/repos"/>, document.getElementById("gitRepos") );
