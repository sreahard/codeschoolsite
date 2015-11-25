var React = require('react');
var ReactDOM = require('react-dom');
var BlogHeader = require('./blogHeader')

var BlogForm = React.createClass({

 handleSubmit: function(e){

   e.preventDefault();

   var title = React.findDOMNode(this.refs.title).value.trim();
   var author = React.findDOMNode(this.refs.author).value.trim();
   var img = React.findDOMNode(this.refs.image).value.trim();
   var body = React.findDOMNode(this.refs.body).value.trim();

   if(!title){
     return;
   }

   var data = ({title: title, author: author, body: body, img: img});

   $.ajax({
     url: this.props.url,
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
 }
 ,
 render: function() {

   return (
      <div>
        <BlogHeader/>
        <div className="container">
          <form>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control" ref="title" placeholder="title"/>
            </div>
            <div className="form-group">
              <label>Author </label>
              <input type="author" className="form-control" ref="author" placeholder="author"/>
            </div>
            <div className="form-group">
              <label>Image </label>
              <input type="input" className="form-control" ref="image" placeholder="image"/>
            </div>

            <div className="form-group">
              <label>Post</label>
              <textarea  rows="15" className="form-control" ref="body" placeholder="body"></textarea>
            </div>
            <button onClick={this.handleSubmit} type="submit" className="btn btn-default"> Submit </button>
          </form>
        </div>
      </div>
    );
 }
});

ReactDOM.render(<BlogForm url="/api/v1/blogPosts"/>, document.getElementById('blogForm'));

