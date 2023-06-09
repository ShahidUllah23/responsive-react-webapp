import React from 'react';
import Features from './components/Features';
import Header from './components/Header';
import Services from './components/Services';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className='app'>
       <Header />
       <div className='f-heading'>
          <h1>Features</h1>
          <p>Here are some features of the Softwre.</p>
       </div>
       <Features />
       <Services />
       <Subscribe />
    </div>
  )
}

export default App;
