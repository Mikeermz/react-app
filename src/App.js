import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/views/Header'

const myFunction = () => {
  return 1 + 2
}

const App = () => (
  <div className="App">
    <Header  
      saludo="hola a todos desde"  
      onFunction={myFunction} 
      miNumerp={2} 
    />
  </div>
)

export default App;
