import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <section id='not-found' className='intro'>
      <div className='container'>
        <div className='jumbotron'>
          <i className='fa fa-odnoklassniki-square fa-5x'></i>
          <br/>
          <br/>
          <h1>¡OOPS!</h1>
          <p>Didn't found what you where looking for.</p>
          <br/>
          <p>
            <Link to='/' className='btn btn-default btn-lg'>
              Back
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
export default NotFound
