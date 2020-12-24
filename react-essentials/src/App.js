import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import { Home, About, Events, Contact, NotFound } from "./pages"

function Header() {
  return (
    <header className="App-section header">
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
    <div className="App-section body">
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
      <div className="App-section github">
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    )
  }
  else {
    if (data) {
      return (
        <div className="App-section github">
          <h3>GitHub Account</h3>
          <p>{data.login}</p>
          <p>{data.bio}</p>
        </div>
      )
    }
    else {
      return (
        <div className="App-section github">
          User Doesn't Exists
        </div>
      )
    }
  }
}

function AppRoutes() {
  return (
    <div className="App-section routes">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

function Footer(props) {
  return (
    <footer className="App-section footer">
      Copyright © 2020 · { props.name }
    </footer>
  )
}

function App({ username }) {
  return (
    <React.Fragment>
      <AppRoutes />
      <Header />
      <Body />
      <GitHub username="fgarcialainez" />
      <Footer name="Felix Garcia"/>
    </React.Fragment>
  );
}

export default App;
