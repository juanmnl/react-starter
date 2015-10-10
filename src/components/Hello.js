var React = require('react');
var Icon = require('./Icon');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hey there you mofo!!</h1>
        <h2>This is a Webpack + React boilerplate.</h2>
        <h3>No hassle, just start developping.</h3>
        <p>Checkout that cool favicon!</p>
        <hr />
        <p>Made with <Icon icon="heart" /> by
          <a href="http://www.juanmnl.com"> {this.props.name} </a>
        </p>
      </div>
    );
  }
});

module.exports = Hello;
