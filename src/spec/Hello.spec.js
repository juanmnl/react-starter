/* eslint-env mocha */

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
import { Link } from 'react-router'

expect.extend(expectJSX)

import Hello from './../components/Hello'
import HeaderAvatar from './../components/HeaderAvatar'

describe('Hello component', () => {
  it('should render the Hello component with a Header Avatar', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<Hello />)
    const actual = renderer.getRenderOutput()
    const expected = (
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
    expect(actual).toEqualJSX(expected)
  })
})
