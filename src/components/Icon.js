import React from 'react';

const Icon = React.createClass({
  render() {
    return (
      <i className={'glyphicon glyphicon-' + this.props.icon}></i>
    );
  }
});

export default Icon;
