var React    = require('react');
var ReactDOM = require('react-dom');
var Hello    = require('./components/Hello');

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

ReactDOM.render(<App />, document.getElementById('app'));
