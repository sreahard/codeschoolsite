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
						<div> {dangerouslySetInnerHTML = {__html: blog.body}}  </div> 	
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


var App = React.createClass({
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

React.render(<App url="/api/v1/blogPosts"/>, document.getElementById("blogPosts") )