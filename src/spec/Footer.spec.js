/* eslint-env mocha */

import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'

expect.extend(expectJSX)

import Footer from './../components/layout/Footer'
import Icon from './../components/Icon'

describe('Layout components', () => {
  describe('Footer', () => {
    it('should render the footer component with an Icon and a name as prop', () => {
      const renderer = TestUtils.createRenderer()
      renderer.render(<Footer name='juanmnl' />)
      const actual = renderer.getRenderOutput()
      const expected = (
        <footer>
          <p className='text-center'>Made with <Icon icon='heart' /> by
            <a href='https://twitter.com/_juanmnl' target='_blank'> juanmnl </a>
          </p>
        </footer>
      )
      expect(actual).toEqualJSX(expected)
    })
  })
})
