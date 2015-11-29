var React = require('react');
var ReactDOM = require('react-dom');
var StackList = require('../render/stackList');


var StackLoad = React.createClass({

	getInitialState: function(){
		return {data: []};
	},

	loadStack: function() {

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
		this.loadStack();
	},


	getInitialState: function(){
		return {data: []};
	},
// Display tweets list
	render: function() {
		return (
			<div>
				<StackList data={this.state.data}/>
			</div>
			);
	}
});



ReactDOM.render(<StackLoad url="/api/v1/stack/"/>, document.getElementById("stack") );
