import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Dashboard } from '../components/navigation/Dashboard';

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest}
        render={
            props => cProps.isAuthenticated
                ? (
                    <div>
                        <Dashboard {...cProps}>
                            <C {...props} {...cProps} />
                        </Dashboard>
                    </div>
                )
                : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />
        }
    />;