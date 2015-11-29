var React = require('react');
var ReactDOM = require('react-dom');

var ProjectForm = React.createClass({

 handleSubmit: function(e){

   e.preventDefault();

   var name = React.findDOMNode(this.refs.name).value.trim();
   var description = React.findDOMNode(this.refs.description).value.trim();
   var url = React.findDOMNode(this.refs.url).value.trim();

   if(!name){
     return;
   }

   var data = ({name: name, description: description, url: url});

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
        <h1>Add New Project</h1>
          <form>
            <div className="form-group">
              <label>Project</label>
              <input type="text" className="form-control" ref="name" placeholder="Project"/>
            </div>
            <div className="form-group">
              <label>Url </label>
              <input type="text" className="form-control" ref="url" placeholder="Url"/>
            </div>
            <div className="form-group">
              <label>Description </label>
              <textarea rows="5" className="form-control" ref="description" placeholder="Description"/>
            </div>

            <button onClick={this.handleSubmit} type="submit" className="btn btn-default"> Submit </button>
          </form>
      </div>
    );
 }
});

ReactDOM.render(<ProjectForm url="/api/v1/projects"/>, document.getElementById('projectForm'));