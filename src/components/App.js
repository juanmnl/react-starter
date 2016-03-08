import React from 'react';
import Hello from './Hello';
import Footer from './layout/Footer';

const App = () => {
  return (
    <div className='container is-fluid'>
      <Hello />
      <Footer name='Juanmnl' />
    </div>
  )
}
export default App;
