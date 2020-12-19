import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Header() {
  return (
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
  )
}

function Body() {
  const [emotion, setEmotion] = useState("happy")

  return (
    <div className="App-body">
      <p>Current emotion is {emotion}</p>
      <div>
        <button onClick={() => setEmotion("frustrated")}>
          Frustrate
        </button>
        <button onClick={() => setEmotion("happy")}>
          Happy
        </button>
      </div>
    </div>
  )
}

function Footer(props) {
  return (
    <footer className="App-footer">
      Copyright © 2020 · { props.name }
    </footer>
  )
}

function App() {
  return (
    <React.Fragment className="App">
      <Header />
      <Body />
      <Footer name="Felix Garcia"/>
    </React.Fragment>
  );
}

export default App;
