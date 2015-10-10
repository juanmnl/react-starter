var React = require('react');
var Icon = require('./Icon');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Can you feel me?</h1>
        <h2>This is an NPM@3(Webpack + React.js) DevKit</h2>
        <p>A boilerplate for quick prototyping with facebook's React UI library.</p>
        <hr />
        <p>Made with <Icon icon="heart" /> by
          <a href="http://www.juanmnl.com"> {this.props.name} </a>
        </p>
      </div>
    );
  }
});

module.exports = Hello;
