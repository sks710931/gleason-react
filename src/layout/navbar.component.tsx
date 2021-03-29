import { useAuth0 } from "@auth0/auth0-react";
import { Icon } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { useState } from "react";
import {headerService} from '../services/content-header.service';
interface NavBarProps {
  onToggleMenu: () => void;
}
export const NavBar = (props: NavBarProps) => {
  const [header,setHeader] = useState('Dashboard');
  headerService.getHeader().subscribe(header => {
    setHeader(header);
  });
  const { logout, isAuthenticated } = useAuth0();
  const { onToggleMenu } = props;
  const classes: any = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.left}>
        <button onClick={onToggleMenu} className={classes.icon}>
          <Icon>menu</Icon>
        </button>
        <span>{header}</span>
      </div>
      <div className={classes.right}>
        <button className={classes.icon}>
          <Icon>settings</Icon>
        </button>
        <button className={classes.icon}>
          <Icon>more_vert</Icon>
        </button>

        {isAuthenticated && (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className={classes.icon}
          >
            <span>Logout</span>
            <Icon>logout</Icon>
          </button>
        )}
      </div>
    </div>
  );
};

const useStyles = makeStyles(({ palette }: Theme): any => ({
  header: {
    position: `sticky`,
    top: 0,
    backgroundColor: palette.common.white,
    height: 40,
    padding: `0px 10px 0px 10px`,
    boxShadow: `4px 4px ${palette.grey[200]}`,
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    color: `#709ef5`,
    width: `auto`,
  },
  right: {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-end`,
    "& button": {
      marginLeft: `8px`,
    },
    alignItems: "center",
  },
  left: {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-start`,
    alignItems:"center",
    "& button": {
      marginRight: `8px`,
    },
    "& span":{
      fontWeight: 500,
    }
  },
  icon: {
    all: `unset`,
    "&:hover": {
      cursor: `pointer !important`,
      opacity: `0.7`,

    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& span": {
      paddingRight: 10,
    },
  },
}));
