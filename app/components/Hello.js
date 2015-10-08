var React = require('react');
var Icon = require('./Icon');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>This is a react boilerplate.</h2>
        <p>Checkout that cool favicon!</p>
        <hr />
        <p>Made with <Icon icon="heart" /> by {this.props.name} :P </p>
      </div>
    );
  }
});

module.exports = Hello;
