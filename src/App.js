import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.scss';
import HomePage from "./components/home/HomePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div id="app" className="container-fluid">
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route component={PageNotFound} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
