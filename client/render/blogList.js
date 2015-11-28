var React = require('react');
var ReactDOM = require('react-dom');
var CommentForm = require('./commentForm');
var BlogHeader = require('./blogHeader')



var BlogList = React.createClass({
    
    getInitialState: function(){
        return {
          showing: false,
          fltr: null,
          user: []
      };
    },
    loadUser: function() {
    $.ajax({
      url: '/api/v1/blogPosts/user',
      dataType: 'json',
      cache: false,
      success: function(user) {
        // console.log("USER IN AJAX", user)
        this.setState({user: user});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function(){
    this.loadUser();
  },
    toggleBlog: function (blog) {
        this.setState({
          showing: !this.state.showing,
          fltr: blog
      })
    },

    reToggle: function (category) {
        this.setState({
            fltr: null
        })
    },


	render: function() {

        var blogPostHeader = this.props.data.map(function(blog){
        
            var divImages = {
                      backgroundImage: 'url(' + blog.img + ')',
                }

            return (
                <div className="intro-header"  style={divImages}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-heading">

                                    <h1>{blog.title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )
        });

        var that = this;

        var blogSort = this.props.data.sort(function(a, b){
           var x = a.date, y = b.date;
           return x < y ? -1 : x > y ? 1 : 0;
           });

        var blogData = blogSort.reverse().map(function(blog){

            var blogId = blog._id;
            var blogDate = new Date(blog.date).toDateString();
            var getExerpt = (blog.body.split(" ", 50).join(' ') + " ...");
            var divImages = {
                  backgroundImage: 'url(' + blog.img + ')',
            }


            var commentSort = blog.comments.sort(function(a, b){
               var x = a.date, y = b.date;
               return x < y ? -1 : x > y ? 1 : 0;
               });


            var comments = commentSort.reverse().map(function(comments){
                
                // if (comments.user.github != undefined){
                //     var githubAvatar = ("https://avatars.githubusercontent.com/u/" + comments.user.github.id)
                // } else {
                //     var githubAvatar = null
                // }

                // if (comments.user.facebook != undefined){
                //     var facebookAvatar = ("http://graph.facbook.com/" + comments.facebook.id + "/picture?type=square")
                // } else {
                //     var facebookAvatar = null
                //     }

                if (comments.user != null) {
                   if (comments.user.local != null) {
                        var hash = md5(comments.user.local.email);
                        var size = 60;
                        var genericAvatar = 'http://reahard.rocks/images/bit-me.jpg';
                        var url = 'http://gravatar.com/avatar/' + hash + "?s=" + size + "&d=" + genericAvatar;
                    console.log(comments.user.local)
                    } else if (comments.user.github != null) {
                        
                        var url = "https://avatars.githubusercontent.com/u/" + comments.user.github.id;
                    console.log(comments.user.github)
                    } else if (comments.user.facebook != null) {
                        console.log(comments.user.facebook.id)
                        var url = "http://graph.facbook.com/" + comments.user.facebook.id + "/picture?type=square";
                    } else if (comments.user.twitter != null) {
                        var url = "https://twitter.com/" + comments.user.twitter.username + "/profile_image?size=original";
                    }
                var commentDate = new Date(comments.date).toDateString();
                return (
                    <div className="containerBlog">
                        <div className="row">
                            <img className="img-circle-xs" src={url}/>
                            <p><strong>{comments.comment}</strong></p>
                            <p><span className="glyphicon glyphicon-time"></span> {commentDate}</p>
                            <hr/>
                        </div>
                    </div>
                    )
                    }
                }.bind(this));


            if (!this.state.fltr) {
                return (
                    <div>
                        <div className="container" id="oneBlog">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                	<h1>{blog.title}</h1>
                                	<p>by <strong>{blog.author}</strong> posted on <strong>{blogDate}</strong></p>
                                	<hr/>
                        			<div className = "blog" key="blogBody" dangerouslySetInnerHTML = {{__html: getExerpt}}/> 
                                    <a href="#allBlogs"><h3 className="panel-header" onClick={that.toggleBlog.bind(that, blog._id)} > Read More</h3></a>
                                <hr/>

                                 </div>
                            </div>
                        </div>
                    </div>
            	) 

            } else if (blog._id === this.state.fltr && this.state.user.user != "anonymous") {

                return (
                    <div>
                        <div className="intro-header" style={divImages}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="site-heading">

                                            <h1>{blog.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="oneBlog">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <p> by <strong>{blog.author}</strong> posted on <strong>{blogDate}</strong></p>
                                    <hr/>
                                    <div className = "blog" key="blogBody" dangerouslySetInnerHTML = {{__html: blog.body}}/>       
                                    <hr/>
                                    <a href="#top"><h3 className="panel-header" onClick={that.reToggle}> Back</h3></a>
                                      <br/>
                                    <div className="well">
  

                                        <h4>Leave a Comment:</h4>
                                        <CommentForm blogId={blog._id} onPost={that.props.newData}/>

                                    </div>
                                    <div>
                                        {comments}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) 
            } else if (blog._id === this.state.fltr && this.state.user.user === "anonymous") {

                return (
                    <div>
                        <div className="intro-header" style={divImages}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="site-heading">

                                            <h1>{blog.title}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container" id="oneBlog">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                                    <p> by <strong>{blog.author}</strong> posted on <strong>{blogDate}</strong></p>
                                    <hr/>
                                    <div className = "blog" key="blogBody" dangerouslySetInnerHTML = {{__html: blog.body}}/>       
                                    <hr/>
                                    <a href="#top"><h3 className="panel-header" onClick={that.reToggle}> Back</h3></a>
                                      <br/>
                                    <div className="well comments">

                                        {comments}
                                    </div>

                                    <h3>Join the conversation!</h3><br/>
                                        <button type="button" className="btn btn-danger btn-md" data-toggle="modal" data-target="#logIn">
                                            Login 
                                        </button> &nbsp;&nbsp;
                                        <button type="button" className="btn btn-warning btn-md" data-toggle="modal" data-target="#signUp">
                                            Sign Up
                                        </button>
                                        <br/>
                                        <br/>
                                </div>
                            </div>
                        </div>
                    </div>
                ) 
            }
        }.bind(this));

			return (
			<div> 
             {this.state.fltr ? '' : <BlogHeader/>}
			 {blogData}
			</div>
			);
	}
});

module.exports = BlogList;
// module.exports = BlogHeader;




