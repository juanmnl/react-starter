import React from 'react'
import { Link } from 'react-router'
import HeaderAvatar from './HeaderAvatar'

const Hello = () => {
  return (
    <div className='jumbotron'>
      <HeaderAvatar />
      <hr/>
      <h2 className='text-center'>Yet another React-based Frontend DevKit</h2>
      <p className='text-center'>
        A boilerplate for lightning-fast prototyping with Webpack + React + Babel + Eslint + Sass & Bootstrap.
      </p>
      <p className='text-center'>
        <Link to='/routing-test' className='btn btn-default btn-lg'>
          Route test
        </Link>
      </p>
    </div>
  )
}
export default Hello
