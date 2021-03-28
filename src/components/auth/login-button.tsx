import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import { colors } from './../../styles/colors';

const LoginButton = () => {

  const classes: any = useStyles();
  const { loginWithRedirect } = useAuth0();

  return <button className={classes.btn} onClick={() => loginWithRedirect()}>Log In</button>;
};

const useStyles = makeStyles(()=> ({
  btn:{
    all: 'unset',
    backgroundColor: colors.primary,
    color: 'white',
    height: 40,
    width: "50%",
    borderRadius: 15,
    '&:hover':{
      opacity: .9,
      cursor: 'pointer',
    }
  }
}))
export default LoginButton;