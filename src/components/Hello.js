import React from 'react'
import { Link } from 'react-router'
import Icon from './Icon'

const Hello = () => {
  return (
    <div className='jumbotron'>
      <div className='avatar'>
        <img className='juanmnl-img img-circle img-responsive' />
      </div>
      <h1 className='text-center'>
        <Icon icon='music' /> Oh! Oh! Oh-oh!<Icon icon='music' />
      </h1>
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
