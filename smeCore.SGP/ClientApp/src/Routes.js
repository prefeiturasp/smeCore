import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import AppliedRoute from './routes/AppliedRoute';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import RestrictedMenuRoute from './routes/RestrictedMenuRoute';
import AuthenticatedMenuRoute from './routes/AuthenticatedMenuRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import Admin from './components/admin/Admin';
import Home from './components/Home';
import Planning from './components/planning/Planning';
import Login from './components/authentication/Login';
import NotFound from './components/navigation/NotFound';
import Unauthorized from './components/navigation/Unauthorized';

export default ({ childProps }) =>
    <Switch>
        <UnauthenticatedRoute path="/Login" exact component={Login} props={childProps} />
        <RestrictedMenuRoute path="/Admin" exact component={Admin} props={childProps} />
        <AuthenticatedMenuRoute path="/" exact component={Home} props={childProps} />
        <AuthenticatedMenuRoute path="/Planejamento" exact component={Planning} props={childProps} />
        <AuthenticatedRoute path="/Unauthorized" exact component={Unauthorized} props={childProps} />
        <Route component={NotFound} />
    </Switch>;