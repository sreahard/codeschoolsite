var React = require('react');

var BlogList = React.createClass({
	render: function() {

      var blogData = this.props.data.map(function(blog){
        return (
        	<div>
        	<h1  key={blog.id}>{blog.title}</h1>
        	<p className="lead"  key={blog.id}> by {blog.author}</p>
        	<hr/>
        	<p  key={blog.id}><span className="glyphicon glyphicon-time"></span>{blog.date}</p>
        	<hr/>
        	<p  key={blog.id}>
			<div key="blogBody" dangerouslySetInnerHTML = {{__html: blog.body}}/>   	
			</p>
        	<hr/>
        	</div>
        	)
      });
			return (
			<div>
			{blogData}
			</div>
			);
	}
});

module.exports = BlogList;