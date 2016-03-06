import React from 'react';
import Icon from './../Icon';

const Footer = React.createClass({
  render () {
    return (
      <footer>
        <p>Made with <Icon icon="heart" /> by
          <a href="https://twitter.com/_juanmnl" target="_blank"> {this.props.name} </a>
        </p>
      </footer>
    );
  }
});

export default Footer;
