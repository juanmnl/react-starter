import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <section id="not-found">
      <div>
        <div>
          <i className="fa fa-odnoklassniki-square fa-5x"></i>
          <br/>
          <br/>
          <h1>¡OOPS!</h1>
          <p>Didn't found what you where looking for.</p>
          <br/>
          <p>
            <Link to="/">
              Back
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default NotFound;
