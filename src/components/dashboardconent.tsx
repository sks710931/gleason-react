import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { DashboardContent } from "./dashboard-content";
import "./login.css";
import { UserManagement } from "./user-management.component";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-head">
          <h3>Gleason</h3>
        </div>
        <div className="sidebar-menu">
          <div className="menu">
          <Link to="/dashboard/user-management" >User Management</Link>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="header"></div>
        <div className="router-content">
        <Switch>
          <Route path="/dashboard/" component={DashboardContent} exact></Route>
          <Route  path="/dashboard/user-management" component={UserManagement} ></Route>
        </Switch>
        </div>
      </div>
    </div>
  );
};
