var React = require('react');
var ReactDOM = require('react-dom');
var GitEventsList = require('../render/gitEventsList');

var GitEventsLoad = React.createClass({
	getInitialState: function(){
	return {data: []};
},

	loadEvents: function(comment) {
	$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				console.log("load events success")
				this.setState({data:data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log("Broken url is " + this.props.url)
				console.error(this.props.url, status, err.toString());
      		 }.bind(this)
					});
	},

	componentDidMount: function(){
	this.loadEvents();
},


	render: function() {
		return (
			<div>
				<GitEventsList data={this.state.data}/>
			</div>
			)
	}
})

ReactDOM.render(<GitEventsLoad url="/api/v1/github"/>, document.getElementById("gitEvents") );
