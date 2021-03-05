import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/login.component';
import { Route, Switch } from 'react-router';
import { Dashboard } from './components/dashboardconent';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  path="/dashboard"  component={Dashboard}></Route>
      <Route exact path="/"  component={Login}></Route>
        
      </Switch>
    </div>
  );
}

export default App;
