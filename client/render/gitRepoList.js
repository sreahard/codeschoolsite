var React = require('react');

var GitRepoList = React.createClass({

	render: function() {

      var gitData = this.props.data.map(function(git){
        if (git.fork === false)
        return (
        	<div>
        	<h3  key={git.id}><a href={git.html_url} target="_blank"><i className="fa fa-github"></i> {git.name}</a></h3>
        	<p>{git.description}</p>
        	</div>
        	)
      });

			return (
			<div>
			{gitData}
			</div>
			);
	}
});

module.exports = GitRepoList;



