var React = require('react');

var CommentList = React.createClass({
	render: function() {

      var commentData = this.props.data.map(function(comment){
        return (
        	<div className="containerBlog">
        	<div className="row">
        	<img className="img-circle" src="http://placecreature.com/60/60"/>
        	<p  key={comment.id}><strong>{comment.name}</strong></p>
        	<p  key={comment.id}>{comment.comment}</p>
        	<hr/>
        	</div>
        	</div>
        	)
      });
			return (
			<div>
			{commentData}
			</div>
			);
	}
});

module.exports = CommentList;