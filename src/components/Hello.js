import React from 'react';
import Icon from './Icon';

const Hello = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="avatar">
          <img className="juanmnl-img" />
        </div>
        <h1 className="is-text-centered">
          <Icon icon="music" /> Oh! Oh! Oh-oh!<Icon icon="music" />
        </h1>
        <hr/>
        <h2 className="is-text-centered">Yet another React-based Frontend DevKit</h2>
        <p className="is-text-centered">
          A boilerplate for lightning-fast prototyping with Webpack + React + Babel + Eslint + Sass & Bootstrap.
        </p>
      </div>
    </div>
  )
}
export default Hello;
