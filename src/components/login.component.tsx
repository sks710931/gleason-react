import React, { ReactElement, useState } from "react";
import axios from "axios";
import "./login.css";
import { IUserLoginRequest, IUserLoginSuccessResponse } from "../data/IUser";
import { useHistory } from "react-router-dom";

interface LoginProps {}
export const Login = ({}: LoginProps): ReactElement<LoginProps> => {
  const loginEndpoint = "https://localhost:44331/api/login/login-user";
  const [loginUser, setLoginUser] = useState<IUserLoginRequest>({
    password:"",
    username:""
  });

  const history = useHistory();
  const handleUserNameChange = (e: any) =>{
    setLoginUser({
      ...loginUser,
      username: e.target.value
    });
  }
  const handlePasswordChange = (e: any) =>{
    setLoginUser({
      ...loginUser,
      password: e.target.value
    });
  }
  const loginHandler = () => {


    axios.post<IUserLoginSuccessResponse>(loginEndpoint,loginUser,{
      headers:{'content-type':'application/json'}
    })
    .then(response => {
      if(response.status === 200){
        alert("login successful - "+ JSON.stringify(response.data));
        history.push("/dashboard");
      }
      else{
        alert(response.data.message);
      }
    })
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <h3>GEMS Cloud Web Application</h3>

        <input onChange={handleUserNameChange} value={loginUser.username} className="input" placeholder="Username" type="text" />
        <input onChange={handlePasswordChange} value={loginUser.password} className="input" placeholder="Password" type="password" />
        <button onClick={loginHandler} className="btn">Login</button>
        <a className="link" href="http://google.com">
          Forgot Password
        </a>
      </div>
    </div>
  );
};
