var React = require('react');
var Hello = require('./components/Hello');

// Styles base
// var styles = require('./styles/master.scss');

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <Hello name="Juanmnl" />
      </div>
    );
  }
});

React.render(<App />, document.body);
