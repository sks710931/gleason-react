import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactElement, useState } from "react";
import { NavBar } from "./navbar.component";
import { PageContent } from "./page-content.component";
import { Sidebar } from "./sidebar.component";

export const Layout = (): ReactElement => {
  const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const classes: any = useStyles();
  const menuToggleHandler = () => {
    setSidebarExpanded(!isSidebarExpanded)
  }
  return (
    <div className={classes.dashboard}>
      <Sidebar isMinimized={!isSidebarExpanded} header="Gleason" minimizedHader="G" />
      <div className={`${classes.content} ${isSidebarExpanded? '' : classes.collapsedSidebar}`}>
        <NavBar onToggleMenu={menuToggleHandler}/>
        
        <PageContent />
      </div>
    </div>
  );
};

const useStyles = makeStyles(({ palette }: Theme): any => ({
  dashboard: {
    display: `flex`,
    flexDirection: `row`,
    width: `100%`,
    justifyContent: `flex-start`,
  },
  content:{
    width:`100%`,
    marginLeft: `250px`, 
  },
  collapsedSidebar: {
    marginLeft: `45px`, 
  }
}));
