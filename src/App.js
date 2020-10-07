import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import {Header} from "./components/header/header.component";
import NestedMainPage from "./pages/nestedcomponents/deepnested.component";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path = '/nestedContext' component={NestedMainPage}></Route>
      </Switch>

     {/*  <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
