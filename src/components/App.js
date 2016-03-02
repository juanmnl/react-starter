import React from 'react';
import Hello from './Hello';
import Footer from './layout/Footer';

const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <Hello />
        <hr />
        <Footer name='Juanmnl' />
      </div>
    );
  }
});

export default App;
