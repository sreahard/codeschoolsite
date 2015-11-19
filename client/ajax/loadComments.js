var React = require('react');
var CommentList = require('../render/commentList');

var CommentLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadComments: function(comment) {
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
	this.loadComments();
},


	render: function() {
		return (
			<div>
				<CommentList data={this.state.data}/>
			</div>
			)
	}
})

React.render(<CommentLoad url="/api/v1/blogComments"/>, document.getElementById("blogComments") );
