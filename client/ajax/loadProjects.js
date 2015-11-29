var React = require('react');
var ReactDOM = require('react-dom');
var ProjectList = require('../render/projectList');


var ProjectLoad = React.createClass({

	getInitialState: function(){
		return {data: []};
	},

	loadProjects: function() {

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
// mount data
	componentDidMount: function(){
		this.loadProjects();
	},


	getInitialState: function(){
		return {data: []};
	},
// Display tweets list
	render: function() {
		return (
			<div>
				<ProjectList data={this.state.data}/>
			</div>
			);
	}
});



ReactDOM.render(<ProjectLoad url="/api/v1/projects/"/>, document.getElementById("projects") );
