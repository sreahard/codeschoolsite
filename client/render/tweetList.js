var React = require('react');
var ReactDOM = require('react-dom');

var TweetList = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function() {
    var tweetData = this.props.data.map(function(tweet) {
      var tweetDate = new Date(tweet.created_at).toDateString();
      var tweetUrl = ('https://twitter.com/reactjs/status/' + tweet.id_str);
      return (
        <div>
          <img className="img-tweet" src={tweet.user.profile_image_url_https}/>
          <a href={tweetUrl} target="_blank"><p className="tweet">{tweet.text}</p></a>
          <hr/>
        </div>
        );
    });

    return (
			<div className="scroll">
			{tweetData}
			</div>

			);
  }
});

module.exports = TweetList;
