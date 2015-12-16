var React = require('react');
var ReactDOM = require('react-dom');

var ProjectList = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },
  render: function() {

    var projectSort = this.props.data.sort(function(a, b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });

    var projectData = projectSort.reverse().map(function(project) {

      return (
        <tbody>
        <tr>
        <td><a href={project.url} target="_blank"><h3 className="panel-header">{project.name}</h3></a>
        <p>{project.description}</p>
        </td>
        </tr>
        </tbody>
       );
    });

    return (
      <div className="scroll">
      <table className="table table-hover">
      {projectData}
      </table>
      </div>
    );
  }
});

module.exports = ProjectList;
