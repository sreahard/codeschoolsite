var React = require('react');
var Gravatar = require('../render/renderGravatars')

var UserLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadUsers: function(blog) {
	// var blogPost = this.state.data;
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
	this.loadUsers();
},


	render: function() {
		return (
			<div>
				<Gravatar data={this.state.data}/>
			</div>
			)
	}
})

React.render(<UserLoad url="/api/v1/users"/>, document.getElementById("gravatars") );
