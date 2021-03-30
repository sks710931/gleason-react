import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
    <Auth0Provider
      domain="altegic-studio.auth0.com"
      clientId="o5AOUeJQjRbSfVCJGqEC77XOwSRJGdpI"
      redirectUri={window.location.origin}
      audience="https://shivam-singh-blog-api.azurewebsites.net"
      scope="read:current_user update:current_user_metadata all:all"
    >
      <ToastProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToastProvider>
    </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
