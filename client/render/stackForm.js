var React = require('react');
var ReactDOM = require('react-dom');

var StackForm = React.createClass({

 handleSubmit: function(e){

   e.preventDefault();

   var name = React.findDOMNode(this.refs.name).value.trim();
   var url = React.findDOMNode(this.refs.url).value.trim();

   if(!name){
     return;
   }

   var data = ({name: name, url: url});

   $.ajax({
     url: this.props.url,
     dataType: 'json',
     data: data,
     type:'POST',
     success: function(response){
       console.log("posting data!",data, response)
       document.location='/post_blog'
     }.bind(this),
     error: function(xhr, status, err){
       console.log("not posting data!")
       console.error(this.props.url, status, err.toString());
     }.bind(this)
   })

        this.refs.name.value = ''
        this.refs.url.value = ''

 }
 ,

 render: function() {

   return (
      <div>
        <h1>Add Proficiency to Stack </h1>
          <form>
            <div className="form-group">
              <label>Proficiency</label>
              <input type="text" className="form-control" ref="name" placeholder="Proficiency"/>
            </div>
            <div className="form-group">
              <label>Url </label>
              <input type="author" className="form-control" ref="url" placeholder="Url"/>
            </div>
            <button onClick={this.handleSubmit} type="submit" className="btn btn-default"> Submit </button>
          </form>
      </div>
    );
 }
});

ReactDOM.render(<StackForm url="/api/v1/stack"/>, document.getElementById('stackForm'));