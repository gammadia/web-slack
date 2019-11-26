import React from 'react'
import logo from './logo.svg';
import './App.css';
import {WebClient} from "@slack/web-api"

const App: React.FC = () => {
  const web = new WebClient(process.env.REACT_APP_SLACK_TOKEN);

  (async () => {
    const list = await web.users.list()
    console.log(list)
  })();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
