var React = require('react');
var ReactDOM = require('react-dom');

var BlogList = React.createClass({

    handleSubmit: function(id, comment){

      // e.preventDefault();
  
      var id = id;

      var comment = this.refs.comment.getDOMNode().value.trim();
      
      alert(comment);

      var data = ({comment: comment});
          $.ajax({
              url: '/api/v1/blogPosts/' + id + '/comment',
              dataType: 'json',
              data: data,
              type:'POST',
                  success: function(response){
                  console.log("posting data!",data, response)
                  document.location='/blog'
                  }.bind(this),
                  error: function(xhr, status, err){
                      console.log("not posting data!")
                      console.error(this.props.url, status, err.toString());
                  }.bind(this)
          })
  },

	render: function() {
        var that = this;

        var blogData = this.props.data.map(function(blog){
        
            if (blog.comments != undefined)
            
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
                    <form>
                    <div className="form-group">
                    <textarea className="form-control" ref="comment" placeholder="Join the conversation!" rows="3"></textarea>
                    </div>
                    <button onClick={this.handleSubmit.bind(this, blog._id)} type="submit" className="btn btn-s btn-default"> Comment</button>
                    </form>
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


