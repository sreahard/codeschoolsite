var React = require('react');
var ReactDOM = require('react-dom');
var TweetList = require('../render/tweetList');


var TweetLoad = React.createClass({

	getInitialState: function(){
		return {data: []};
	},

	loadTweets: function() {
		var handle ="reactjs";
		$.ajax({
			url: this.props.url + handle,
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
		this.loadTweets();
	},


	getInitialState: function(){
		return {data: []};
	},
// Display tweets list
	render: function() {
		return (
			<div>
				<TweetList data={this.state.data}/>
			</div>
			);
	}
});



ReactDOM.render(<TweetLoad url="/api/twitter/handle/"/>, document.getElementById("tweets") );
