var React = require('react');

var Icon = React.createClass({
  render: function() {
    return (
      <div>
        <i className={"glyphicon glyphicon-" + this.props.icon}></i>
      </div>
    );
  }
});

module.exports = Icon;
