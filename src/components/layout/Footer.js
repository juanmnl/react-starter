import React from 'react';
import Icon from './../Icon';

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className="container">
          <div className="content">
            <p className="is-text-centered">Made with <Icon icon="heart" /> by
              <a href="https://twitter.com/_juanmnl" target="_blank"> {props.name} </a>
            </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
