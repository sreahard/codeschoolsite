var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


var GitEventsList = React.createClass({

  getInitialState: function(){
    return {
      showing: false,
      fltr: null
    };
  },

  toggle: function (repo) {
    this.setState({
      showing: !this.state.showing,
      fltr: repo
    })
  },

  render: function() {
    var that = this;

    var shouldShow = this.state.showing;

    var gitEvents = this.props.data.map(function(e){
      if (e.commits != undefined) {
        var commitMessages = e.commits.map(function(c){
              // console.log(c.message);
              var commitId = (c.url.slice(-41));
              var urlBase = (c.url.slice(0,8) + c.url.slice(12,22) + c.url.slice(28));
              var url = (urlBase.slice(0, -42) + commitId);
              // console.log(urlBase.slice(0, -42));
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

      if (e.repo === this.state.fltr && shouldShow)
        return(
          <div>
                {commitMessages}
          </div>
          )
    }.bind(this));

    var repoNames = [];
    this.props.data.map(function(e){
      if(repoNames.indexOf(e.repo) === -1) {
        repoNames.push(e.repo);  
      }
    })

    var repoButtons = repoNames.map(function(repo, showing){
      var repoNamesRendered = (repo.charAt(9).toUpperCase() + repo.slice(10))
      return (
              <a><h3 className="panel-header" onClick={that.toggle.bind(that, repo)}>
              <i className="fa fa-github"></i> {repoNamesRendered}</h3></a>

        )
    });

    return (
      <div className="col-md-4">
        <div className="feedbox">
          <h4>Github Repositories</h4>
          <div className="row scroll">
            <div className="col-lg-12">

        {repoButtons}
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
           {gitEvents}
        </ReactCSSTransitionGroup>
                            </div>
          </div>
        </div>
      </div>
      );

  }
});

module.exports = GitEventsList;
