var React = require('react');
var BlogList = require('./blogList');

var BlogLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadBlogPosts: function(blog) {
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
	this.loadBlogPosts();
},


	render: function() {
		return (
			<div>
				<BlogList data={this.state.data}/>
			</div>
			)
	}
})


module.exports = BlogLoad;