import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'

expect.extend(expectJSX)

import App from './../components/App'
import Hello from './../components/Hello'
import Footer from './../components/layout/Footer'
import Icon from './../components/Icon'

describe('App', () => {

  it('should render the container with a Hello and Footer components', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<App />)
    const actual = renderer.getRenderOutput()
    const expected = (
      <div className='container'>
        <Hello />
        <hr />
        <Footer name='Juanmnl' />
      </div>
    )
    expect(actual).toEqualJSX(expected)
  })
})
