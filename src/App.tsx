import React from "react";
import "./App.css";
import "./pages/login.css";
import { Login } from "./pages/login.component";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./layout/layout.component";
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route  path="/" component={Layout}></Route>
      </Switch>
    </div>
  );
}

export default App;
