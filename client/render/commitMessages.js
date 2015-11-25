var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var CommitMessages = React.createClass({
  render: function() {

    var gitEvents = this.props.data.map(function(e){
      if (e.commits != undefined) {
        var commitMessages = e.commits.map(function(c){
              console.log(c.message);
              var commitId = (c.url.slice(-41));
              var urlBase = (c.url.slice(0,8) + c.url.slice(12,22) + c.url.slice(28));
              var url = (urlBase.slice(0, -42) + commitId);
              console.log(urlBase.slice(0, -42));
              if (c.message.includes('README')) {
              return(
                null
                )
              } else {
              return(
                <p className="panel-header"><i className="fa fa-code-fork"></i><a href={url} target="_blank"> {c.message}</a></p>
                )
            }
            });
      };
    });

    console.log(commitMessages)

    // return (
    //   <div>
    //   {commitMessages}
    //   </div>
    //   );

  }
});

module.exports = CommitMessages;
