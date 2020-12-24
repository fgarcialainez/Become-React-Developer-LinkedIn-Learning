import React, { useState, useEffect } from 'react';
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

function GitHub({ username }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then(setData)
      .catch(setError);
  }, [username]);

  if (error) {
    return (
      <div className="App-github">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
  else {
    if (data) {
      return (
        <div className="App-github">
          <h3>GitHub Account</h3>
          <p>{data.login}</p>
          <p>{data.bio}</p>
        </div>
      )
    }
    else {
      return (
        <div className="App-github">
          User Doesn't Exists
        </div>
      )
    }
  }
}

function Footer(props) {
  return (
    <footer className="App-footer">
      Copyright © 2020 · { props.name }
    </footer>
  )
}

function App({ username }) {
  return (
    <React.Fragment className="App">
      <Header />
      <Body />
      <GitHub username="fgarcialainez" />
      <Footer name="Felix Garcia"/>
    </React.Fragment>
  );
}

export default App;
