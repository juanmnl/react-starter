var React = require('react');

var Icon = React.createClass({
  render: function() {
    return (
      <i className={"glyphicon glyphicon-" + this.props.icon}></i>
    );
  }
});

module.exports = Icon;
