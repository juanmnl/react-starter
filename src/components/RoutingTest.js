import React from 'react'
import { Link } from 'react-router'

import Icon from './Icon'

const RoutingTest = () => {
  return (
    <div className='jumbotron'>
      <h1 className='text-center'>
        <Icon icon='fort-awesome fa-4x' /> Voilá! <Icon icon='fort-awesome  fa-4x' />
      </h1>
      <hr/>
      <h2 className='text-center'>You have a navigation route</h2>
      <p className='text-center'>
        <Link to='/' className='btn btn-default btn-lg'>
          Back
        </Link>
      </p>
    </div>
  )
}
export default RoutingTest
