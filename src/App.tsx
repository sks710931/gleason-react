import React from 'react';
import './App.css';
import './pages/login.css';
import { Login } from './pages/login.component';
import { Route, Switch } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard-page.component';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route  path="/dashboard"  component={DashboardPage}></Route>
      <Route exact path="/"  component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
