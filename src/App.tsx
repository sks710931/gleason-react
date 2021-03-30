import React from "react";
import "./App.css";
import "./pages/login.css";
import { Login } from "./pages/login.component";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./layout/layout.component";
import './styles/styles.scss';
// import axios from 'axios';

function App() {
  // const setupInterceptor = () => {
  //   axios.interceptors.request.use(request => {
  //     console.log(request.url);
  //     return request;
  //   }, error => {
  //     return Promise.reject(error);
  //   })
  // };

  // setupInterceptor();
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
