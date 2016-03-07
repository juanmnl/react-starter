import React from 'react';
import Icon from './Icon';

const Hello = () => {
  return (
    <div>
      <div className="avatar">
        <img className="juanmnl-img" />
      </div>
      <h1>
        <Icon icon="music" /> Oh! Oh! Oh-oh!<Icon icon="music" />
      </h1>
      <hr/>
      <h2>Yet another React-based Frontend DevKit</h2>
      <p>
        A boilerplate for lightning-fast prototyping with Webpack + React + Babel + Eslint + Sass & Bootstrap.
      </p>
    </div>
  )
}
export default Hello;
