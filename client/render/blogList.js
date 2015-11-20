var React = require('react');
var ReactDOM = require('react-dom');
var CommentForm = require('./commentForm')

var BlogList = React.createClass({

	render: function() {
        var that = this;

        var blogData = this.props.data.map(function(blog){
                    
            var blogId = blog._id;
            
            var comments = blog.comments.map(function(comments){
                return (
                    <div className="containerBlog">
                        <div className="row">
                            <img className="img-circle" src="http://placecreature.com/60/60"/>
                            <p><strong>{comments.comment}</strong></p>
                            <p>{comments.date}</p>
                            <hr/>
                        </div>
                    </div>
                    )
                }.bind(this));
            
                return (
                	<div>
                        <div>
                        	<h1>{blog.title}</h1>
                        	<p className="lead"> by {blog.author}</p>
                        	<hr/>
                        	<p><span className="glyphicon glyphicon-time"></span>{blog.date}</p>
                        	<hr/>
                			<div key="blogBody" dangerouslySetInnerHTML = {{__html: blog.body}}/>   	
                    	</div>
                        <hr/>
                        <div className="well">
                            <h4>Leave a Comment:</h4>
                            <CommentForm blogId={blog._id} onPost={that.props.newData}/>
                        </div>
                        <div>
                            {comments}
                        </div>
                	</div>
            	) 
              }.bind(this));


			return (
			<div>
			{blogData}
			</div>
			);
	}
});

module.exports = BlogList;


