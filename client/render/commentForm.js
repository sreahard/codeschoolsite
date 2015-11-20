var React = require('react');
var ReactDOM = require('react-dom');
var BlogList = require("./blogList")


var CommentForm = React.createClass({
    
    handleSubmit: function(id, comment){

      // e.preventDefault();
  
      var id = id;

      var comment = React.findDOMNode(this.refs.comment).value.trim();
      
      alert(id, comment);

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
                return (
                    <div className="well">
                    <h4>Leave a Comment:</h4>
                    <form>
                    <div className="form-group">
                    <textarea key={blogId + "3"} className="form-control" ref="comment" placeholder="Join the conversation!" rows="3"></textarea>
                    </div>
                    <button key={blogId + "4"} onClick={this.handleSubmit.bind(this, blog._id)} type="submit" className="btn btn-s btn-default"> Comment</button>
                    </form>
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
