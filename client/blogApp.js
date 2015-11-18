var React = require ('react');
var BlogLoad = require ('./loadBlogs')
var CommentLoad = require ('./loadComments')

React.render(<CommentLoad url="/api/v1/blogComments"/>, document.getElementById("blogComments") );
React.render(<BlogLoad url="/api/v1/blogPosts"/>, document.getElementById("blogPosts") );
