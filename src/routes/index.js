import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'

export function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authed === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )}
      />
    );
  }
  
  export function PublicRoute({ component: Component, authed, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          authed === false ? (
            <Component {...props} />
          ) : (
            <Redirect to="/dashboard" />
          )}
      />
    );
  }
  