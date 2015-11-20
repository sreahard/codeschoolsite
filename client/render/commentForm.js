var React = require('react');
var ReactDOM = require('react-dom');

var CommentForm = React.createClass({
    
    handleCommentSubmit: function(e){
        e.preventDefault();
        var comment = this.refs.comment.getDOMNode().value;
        if(!comment){
            return;
        }

        var data = ({ comment: comment });
        var id = this.props.blogId;
        var self = this;

        $.ajax({
            url: '/api/v1/blogPosts/' + id + '/comment',
            dataType: 'json',
            data: data,
            type:'POST',
                success: function(response){
                console.log("posting data!",data, response)
                document.location='/blog'
                // if(self.props.onPost){
                //   self.props.onPost()
                // }
                }.bind(this),
                error: function(xhr, status, err){
                    console.log("not posting data!")
                    console.error( status, err.toString());
                }.bind(this)
        })
        this.refs.comment.getDOMNode().value = ''
        
    },
    render: function() {
      return (
        <div>
          <form>
              <div className="form-group">
                  <input type="text" className="form-control" ref="comment" placeholder="comment"/>
              </div>
              <button onClick={this.handleCommentSubmit} type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
          );
    }
});

module.exports = CommentForm;
