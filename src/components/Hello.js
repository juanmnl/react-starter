import React from 'react';
import Icon  from './Icon';

const Hello = React.createClass({
  render() {
    return (
      <div className="jumbotron">
        <img className="juanmnl-img img-circle img-responsive" />
        <h1>
          <Icon icon="music" /> Oh! Oh! Oh-oh!<Icon icon="music" />
        </h1>
        <h2>Yet another React-based Frontend DevKit</h2>
        <p>
          A boilerplate for lightning-fast prototyping with Webpack + React + Babel + Eslint + Sass & Bootstrap.
        </p>
        <hr />
        <p>Made with <Icon icon="heart" /> by
          <a href="http://www.juanmnl.com" target="_blank"> {this.props.name} </a>
        </p>
      </div>
    );
  }
});

export default Hello;
