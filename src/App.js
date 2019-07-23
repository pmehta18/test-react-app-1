import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let isVisible = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {
          isVisible ? <div><div>Test1</div></div> : <div><div>Test2</div></div>
      }
    </div>
  );
}

export default App;
