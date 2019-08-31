import React from 'react';
import logo from './logo.svg';
import './App.css';

import Quote from './Quote/Quote'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Simpsons Quotes</h1>
      </header>
      <Quote />
    </div>
  );
}

export default App;
