import React from 'react'
import Icon from './../Icon'

const Footer = (props) => {
  return (
    <footer>
      <p className="text-center">Made with <Icon icon="heart" /> by
        <a href="https://twitter.com/_juanmnl" target="_blank"> {props.name} </a>
      </p>
    </footer>
  )
}
export default Footer
