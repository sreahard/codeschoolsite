var React = require('react');
var ReactDOM = require('react-dom');
var CommentForm = require('./commentForm');


var BlogList = React.createClass({
    
    getInitialState: function(){
        return {
          showing: false,
          fltr: null
      };
    },

    toggleBlog: function (blog) {
        this.setState({
          showing: !this.state.showing,
          fltr: blog
      })
        console.log(blog)
    },

    reToggle: function (category) {
        this.setState({
            fltr: null
        })
    },


	render: function() {
        var divImage = {
                  backgroundImage: 'url("images/hp_header1.jpg")',
            };

        var blogHeader = this.props.data.map(function(blog){
            
            if (blog.title === "Why I am learning to code good and do other things good too.")

            return (
                <div className="intro-header" id="allBlogs" style={divImage}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="site-heading">

                                    <h1>I Code Good</h1>
                                    <hr className="small"/>
                                    <span className="subheading">and Do Other Stuff Good Too!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )
        });
        var blogPostHeader = this.props.data.map(function(blog){
        
            var divImages = {
                      backgroundImage: 'url(' + blog.img + ')',
                }

            return (
                <div className="intro-header" id="allBlogs" style={divImages}>
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
                console.log(comments.user)
                if (comments.user != null) {
                var hash = md5(comments.user.local.email);
                var size = 60;
                var genericAvatar = 'https://scontent-ord1-1.xx.fbcdn.net/hphotos-xaf1/t39.1997-6/p118x90/851586_392309744199671_988013196_n.png';

                var url = 'http://gravatar.com/avatar/' + hash + "?s=" + size + "&d=" + genericAvatar;
                
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
                                <button type="button" className="btn btn-danger btn-md" data-toggle="modal" data-target="#myModal">
                                    Post Blog
                                </button>

                                 </div>
                            </div>
                        </div>
                    </div>
            	) 

            } else if (blog._id === this.state.fltr) {

                return (
                    <div>
                        <div className="intro-header" id="allBlogs" style={divImages}>
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
                                    <a href="#allBlogs"><h3 className="panel-header" onClick={that.reToggle}> Back</h3></a>

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
            }
        }.bind(this));

			return (
			<div> 
             {this.state.fltr ? '' : blogHeader}
			 {blogData}
			</div>
			);
	}
});

module.exports = BlogList;



