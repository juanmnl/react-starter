import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <section id="not-found" className="intro">
      <div className="hero">
        <div className="container">
          <i className="fa fa-odnoklassniki-square fa-5x"></i>
          <br/>
          <br/>
          <h1 className="is-text-centered">¡OOPS!</h1>
          <p className="is-text-centered">Didn't found what you where looking for.</p>
          <br/>
          <p>
            <Link to="/" className="button">
              Back
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default NotFound;
