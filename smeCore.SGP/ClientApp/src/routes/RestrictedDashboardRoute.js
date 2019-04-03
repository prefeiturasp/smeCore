import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Dashboard } from '../components/navigation/Dashboard';

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest}
        render={
            props => {
                var permission = null;

                for (var i = 0; i < cProps.permissions.length; i++)
                    if (cProps.permissions[i].location.toLowerCase() === props.location.pathname.toLowerCase()) {
                        permission = cProps.permissions[i];
                        break;
                    }

                if (cProps.isAuthenticated === false)
                    return (<Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />);

                if (permission.roles.some(role => cProps.user.roles.indexOf(role) >= 0))
                    return (
                        <div>
                            <Dashboard {...cProps}>
                                <C {...props} {...cProps} />
                            </Dashboard>
                        </div>
                    );
                else
                    return (<Redirect to="/Unauthorized" />);
            }
        }
    />;