import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { DashboardContent } from "../pages/dashboard-content";
import { PageNotFound } from "../pages/not-found.page";
import { UserManagement } from "../pages/user-management.component";

export const PageContent = () => {
  const classes: any = useStyles();
  return (
    <div className={classes.pageContent}>
      <Switch>
        <Route exact path="/user-management" component={UserManagement}></Route>
        <Route exact path="/dashboard" component={DashboardContent}></Route>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
};

const useStyles = makeStyles(({palette}: Theme): any => ({
  pageContent: {
    margin: 20,
    padding: 20,
    backgroundColor: `white`,
    boxShadow: `4px 4px ${palette.grey[200]}`
  }
}));