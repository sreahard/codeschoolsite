var React = require('react');

var GitRepoList = React.createClass({
	render: function() {


      var gitData = this.props.data.map(function(git){
        if (git.fork === false)
        return (
        	<div>
        	<h4  key={git.id}><strong><a href={git.html_url} target="_blank">{git.name}</a></strong></h4>
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


