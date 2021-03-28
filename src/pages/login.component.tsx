/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactElement, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import LoginButton from "../components/auth/login-button";
import { useAuth0 } from "@auth0/auth0-react";
import { RouteComponentProps } from "react-router";

interface LoginProps {
  
}
export const Login = ({history}: RouteComponentProps<LoginProps>): ReactElement<RouteComponentProps<LoginProps>> => {
  const classes: any = useStyles();
  const { isAuthenticated, isLoading } = useAuth0();
  useEffect(()=> {
    if(isAuthenticated){
      history.push('/');
    }
  },[isLoading, isAuthenticated])
  return (
    <div className={classes.loginContainer}>
      {!isAuthenticated && (
        <div className={classes.loginBox}>
          <h3>Login to Shivam Singh Blog Admin Portal</h3>
          <LoginButton />
        </div>
      )}
    </div>
  );
};

const useStyles = makeStyles(({ palette }: Theme) => ({
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
    "&:hover": {
      cursor: `pointer`,
      opacity: 0.8,
    },
  },
  loginContainer: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: 800,
    borderRadius: 20,
  },
  loginBox: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: 25,
    paddingLeft: 70,
    paddingRight: 70,
    backgroundColor: `white`,
    borderRadius: 10,
    boxShadow: `5px 5px ${palette.grey[200]}`,
  },
}));
