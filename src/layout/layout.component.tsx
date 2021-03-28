import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { NavBar } from "./navbar.component";
import { PageContent } from "./page-content.component";
import { Sidebar } from "./sidebar.component";

export const Layout = ({ history }: RouteComponentProps): ReactElement => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [isSidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const classes: any = useStyles();
  const menuToggleHandler = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };
  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        console.log("hit")
        history.push("/login");
      }
    }
  }, [history, isAuthenticated, isLoading]);
  return (
    <div className={classes.dashboard}>
      <Sidebar
        isMinimized={!isSidebarExpanded}
        header="Gleason"
        minimizedHader="G"
      />
      <div
        className={`${classes.content} ${
          isSidebarExpanded ? "" : classes.collapsedSidebar
        }`}
      >
        <NavBar onToggleMenu={menuToggleHandler} />

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
  content: {
    width: `100%`,
    marginLeft: `250px`,
  },
  collapsedSidebar: {
    marginLeft: `45px`,
  },
}));
