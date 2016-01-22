import React from 'react';
import Hello from '../components/Hello';

const App = React.createClass({
  render() {
    return (
      <div className='container'>
        <Hello name='Juanmnl' />
      </div>
    );
  }
});

export default App;
