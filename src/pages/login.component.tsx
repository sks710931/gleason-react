import React, { ReactElement, useState } from "react";
import axios from "axios";
import { IUserLoginRequest, IUserLoginSuccessResponse } from "../data/IUser";
import { useHistory } from "react-router-dom";
import { InputBox } from "../components/input-box/input-box.component";
import { makeStyles, Theme } from "@material-ui/core";

interface LoginProps {}
export const Login = (): ReactElement<LoginProps> => {
  const loginEndpoint = "https://localhost:44331/api/login/login-user";
  const [loginUser, setLoginUser] = useState<IUserLoginRequest>({
    password: "",
    username: "",
  });

  const history = useHistory();
  const handleUserNameChange = (e: string) => {
    setLoginUser({
      ...loginUser,
      username: e,
    });
  };
  const handlePasswordChange = (e: string) => {
    setLoginUser({
      ...loginUser,
      password: e,
    });
  };
  const loginHandler = () => {
    axios
      .post<IUserLoginSuccessResponse>(loginEndpoint, loginUser, {
        headers: { "content-type": "application/json" },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("login successful - " + JSON.stringify(response.data));
          history.push("/dashboard");
        } else {
          alert(response.data.message);
        }
      });
  };

  const classes: any = useStyles();
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginBox}>
        <h3>GEMS Cloud Web Application</h3>
        <div className={classes.input}>
          <InputBox
            onTextChange={($event) => handleUserNameChange($event)}
            value={loginUser.username}
            placeholder="Username"
            type="text"
            icon="perm_identity"
          />
        </div>
        <div className={classes.input}>
          <InputBox
            onTextChange={($event) => handlePasswordChange($event)}
            value={loginUser.password}
            placeholder="Password"
            type="password"
            icon="lock"
          />
        </div>
        <div className={classes.input}>
          <button onClick={loginHandler} className={classes.btn}>
            Sign In
          </button>
        </div>

        <a className={classes.link} href="http://google.com">
          Forgot Password
        </a>
      </div>
    </div>
  );
};

const useStyles = makeStyles(({palette}: Theme) => ({
  input: {
    marginTop: 10,
    width: 350,
  },
  link: {
    marginTop: 10,
    fontSize: 10,
  },
  btn: {
    height: 40,
    backgroundColor: `#709ef5`,
    borderRadius: 5,
    border: `1px solid white`,
    color: `white`,
    fontWeight: 500,
    fontSize: 16,
    width: `100%`,
    '&:hover':{
      cursor: `pointer`,
      opacity: 0.8,
    }
  },
  loginContainer:{
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: 800,
    borderRadius: 20,
  },
  loginBox:{
    display: `flex`,
    flexDirection: `column`,
    padding: 25,
    paddingLeft:70,
    paddingRight:70,
    backgroundColor: `white`,
    borderRadius: 10,
    boxShadow: `5px 5px ${palette.grey[200]}`
  }
}));
