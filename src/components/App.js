import React from 'react'
import Hello from './Hello'
import Footer from './layout/Footer'

const App = (props) => {
  return (
    <div className='container'>
      {props.children || <Hello />}
      <hr />
      <Footer name='Juanmnl' />
    </div>
  )
}
export default App
