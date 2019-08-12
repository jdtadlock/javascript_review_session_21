import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Main from './components/Main';
import Login from './components/Login';


function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
