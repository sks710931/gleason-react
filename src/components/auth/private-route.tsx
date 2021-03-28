import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
interface PrivateRouteProps{
  component: any,
  isAuthenticated: boolean,
  [x:string]: any;
}
export const PrivateRoute = ({ component,isAuthenticated, ...rest }: PrivateRouteProps) => (
    <Route {...rest} render={props => {
        if (!isAuthenticated) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        // authorised so return component
        return <Component {...props} />
    }} />
)