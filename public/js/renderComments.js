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


var App = React.createClass({
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

React.render(<App url="/api/v1/blogComments"/>, document.getElementById("blogComments") )