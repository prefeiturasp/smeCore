import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './routes/AuthenticatedRoute';
import AuthenticatedDashboardRoute from './routes/AuthenticatedDashboardRoute';
import RestrictedDashboardRoute from './routes/RestrictedDashboardRoute';
import UnauthenticatedRoute from './routes/UnauthenticatedRoute';
import Admin from './components/admin/Admin';
import Home from './components/home/Home';
import Planning from './components/planning/Planning';
import Login from './components/authentication/Login';
import NotFound from './components/navigation/NotFound';
import Unauthorized from './components/navigation/Unauthorized';

export default ({ childProps }) =>
    <Switch>
        <UnauthenticatedRoute path="/Login" exact component={Login} props={childProps} />
        <RestrictedDashboardRoute path="/Admin" exact component={Admin} props={childProps} />
        <RestrictedDashboardRoute path="/" exact component={Home} props={childProps} />
        <RestrictedDashboardRoute path="/Planejamento" exact component={Planning} props={childProps} />
        <AuthenticatedRoute path="/Unauthorized" exact component={Unauthorized} props={childProps} />
        <Route component={NotFound} />
    </Switch>;