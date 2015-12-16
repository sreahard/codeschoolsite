var React = require('react');
var ReactDOM = require('react-dom');

var StackList = React.createClass({
  propTypes: {
    data: React.PropTypes.array
  },

  render: function() {
    var stackData = this.props.data.map(function(stack) {
      return (
        <tbody>
        <tr>
        <td><a href={stack.url} target="_blank"><h3 className="panel-header">{stack.name}</h3></a>
        </td>
        </tr>
        </tbody>
      );
    });

    return (
      <div className="scroll">
      <table className="table table-hover">
      {stackData}
      </table>
      </div>
    );
  }
});

module.exports = StackList;
