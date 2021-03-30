import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { DashboardContent } from "../pages/dashboard-content";
import { PageNotFound } from "../pages/not-found.page";
import { PostsSection } from './../pages/sections/posts.section';
import { AddPostSection } from '../pages/sections/add-posts/add-post.section';

export const PageContent = () => {
  const classes: any = useStyles();
  return (
    <div className={classes.pageContent}>
      <Switch>
        <Route exact path="/all-posts" component={PostsSection}></Route>
        <Route exact path="/dashboard" component={DashboardContent}></Route>
        <Route exact path="/add-post" component={AddPostSection}></Route>
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