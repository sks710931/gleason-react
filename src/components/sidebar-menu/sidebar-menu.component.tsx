import { Icon } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";

export interface SidebarMenuProps {
  icon: string;
  menuTitle: string;
  isParent: boolean;
  routeToNavigate: string;
}
export const SidebarMenu = (
  props: SidebarMenuProps
): ReactElement<SidebarMenuProps> => {
  const history = useHistory();
  const { icon, menuTitle , routeToNavigate} = props;
  const classes: any = useStyles();

  const clickHandler = () => {
    history.push(routeToNavigate);
  }
  return (
    <div onClick={clickHandler} className={classes.menu}>
      <div>
        <Icon>{icon}</Icon>
        <p>{menuTitle}</p>
      </div>
    </div>
  );
};
const useStyles = makeStyles(({ palette }: Theme): any => ({
  menu: {
    width: `100%`,
    display: `flex`,
    justifyContent: `flex-start`,
    height: 40,
    "& div": {
      padding: 10,
      display: `flex`,
      flexDirection: `row`,
      alignItems: `center`,
      color: `#709ef5`,
      width: `100%`,
      "&:hover": {
        cursor: `pointer`,
        backgroundColor: `#5587e6`,
        color: `white`,
      },
      "& p": {
        all: `unset`,
        marginLeft: 10,
      },
    },
  },
}));
