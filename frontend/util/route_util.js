import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const Auth = ({ component: Component, path, loggedIn }) => {
  return (
    <Route
    path={path}
    render={props => ( loggedIn ? <Redirect to="/" /> : <Component {...props} /> )}
    / >
  );
};

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
