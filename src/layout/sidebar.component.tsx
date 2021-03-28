import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import {
  SidebarMenu
} from "../components/sidebar-menu/sidebar-menu.component";
import { sidebarMenus } from "../mocks/sidebar-menu";

export interface SidebarProps{
  isMinimized: boolean;
  header:string;
  minimizedHader: string;
}
export const Sidebar = (props: SidebarProps) => {
  const classes: any = useStyles();
  const {isMinimized, minimizedHader, header} = props;
  const history = useHistory();
  return (
    <div className={`${classes.sidebar} ${isMinimized? classes.minimizedSidebar: ''}`}>
      <div onClick={() => history.push("/dashboard")} className={classes.sidebarHead}>
        <h3 className={classes.h3}>{isMinimized ? minimizedHader: header}</h3>
      </div>
      <div className={classes.sidebarMenu}>
        {
          sidebarMenus.map( (menu , index)=> (<SidebarMenu key={index} {...menu} />))
        }
      </div>
    </div>
  );
};
const useStyles = makeStyles(({ palette }: Theme): any => ({
  sidebar: {
    position:`fixed`,
    width: 250,
    height: `100vh`,
    backgroundColor: palette.common.white,
    boxShadow: `4px 4px ${palette.grey[200]}`,
    
  },
  minimizedSidebar:{
    width: 45,
    overflow:`hidden`,
    
  },
  sidebarHead: {
    backgroundColor: `#709ef5`,
    color: `white`,
    display: `flex`,
    justifyContent: "center",
    alignContent: "center",
    height: 40,
    '&:hover':{
      cursor: `pointer`,
      opacity:`0.8`,
    }
  },
  h3: {
    all: "unset",
    marginTop: 8,
    fontSize: 20,
    fontWeight: 800,
  },
  sidebarMenu: {
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    margin: 0,
    width: `100%`,
  },
  menu: {
    marginTop: 20,
    height: `100%`,
    "& a": {
      textDecoration: `none`,
      color: `#709ef5`,
      fontSize: 16,
      fontWeight: 600,
    },
  },
}));
