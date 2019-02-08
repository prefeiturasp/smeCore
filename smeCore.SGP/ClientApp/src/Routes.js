import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppliedRoute from './routes/AppliedRoute';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AuthenticatedMenuRoute from './routes/AuthenticatedMenuRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import Home from './components/Home';
import Planning from './components/planning/Planning';
import Login from './components/authentication/Login';
import NotFound from './NotFound';

export default ({ childProps }) =>
    <Switch>
        <UnauthenticatedRoute path="/Login" exact component={Login} props={childProps} />
        <AuthenticatedMenuRoute path="/" exact component={Home} props={childProps} />
        <AuthenticatedMenuRoute path="/Planejamento" exact component={Planning} props={childProps} />
        <Route component={NotFound} />
    </Switch>;