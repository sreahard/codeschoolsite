var React = require('react');

var GitEventsList = React.createClass({

  getInitialState: function(){
        return {
            fltr: null
        };
    },

    toggle: function (repo) {
        this.setState({
            fltr: repo
        })
    },

  render: function() {
    var that = this;
    
    var gitEvents = this.props.data.map(function(e){
        if (e.commits != undefined) {
          var commitMessages = e.commits.map(function(c){
              // console.log(c.message);
            var commitId = (c.url.slice(-41));
            var urlBase = (c.url.slice(0,8) + c.url.slice(12,22) + c.url.slice(28));
            var url = (urlBase.slice(0, -42) + commitId);
        return(
              <p><a href={url} target="_blank">{c.message}</a></p>
              )
            });
          };

      if (e.repo === this.state.fltr)
      return(
        <div>
            <h3 className="panel-header"><i className="fa fa-code-fork"> {commitMessages}</i> </h3>
        </div>
      )
    }.bind(this));

    var repoNames = [];
        this.props.data.map(function(e){
            if(repoNames.indexOf(e.repo) === -1) {
                repoNames.push(e.repo);  
            }
            })

    var repoButtons = repoNames.map(function(repo){
        var repoNamesRendered = (repo.charAt(9).toUpperCase() + repo.slice(10))
            return (
                <h3 className="panel-header" onClick={that.toggle.bind(that, repo)}><i className="fa fa-github">
              </i> {repoNamesRendered}</h3>
                )
        });

      return (
      <div>
      {repoButtons}
      {gitEvents}
      </div>
      );

  }
});

module.exports = GitEventsList;
