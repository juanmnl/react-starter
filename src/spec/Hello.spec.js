/* eslint-env mocha */

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'

expect.extend(expectJSX)

import Hello from './../components/Hello'
import Icon from './../components/Icon'

describe('Hello component', () => {
  it('should render the Hello component with an Icon', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<Hello />)
    const actual = renderer.getRenderOutput()
    const expected = (
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
      </div>
    )
    expect(actual).toEqualJSX(expected)
  })
})
