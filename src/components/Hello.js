var React = require('react');
var Icon = require('./Icon');

var Hello = React.createClass({
  render: function() {
    return (
      <div>
        <img className="juanmnl-img" />
        <h1>Can you feel me?</h1>
        <h2>Yet another NPM@3(Webpack + React.js) Frontend DevKit</h2>
        <p>A boilerplate for lightning-fast prototyping with Webpack + Sass + React & Bootstrap.</p>
        <hr />
        <p>Made with <Icon icon="heart" /> by
          <a href="http://www.juanmnl.com" target="_blank"> {this.props.name} </a>
        </p>
      </div>
    );
  }
});

module.exports = Hello;
