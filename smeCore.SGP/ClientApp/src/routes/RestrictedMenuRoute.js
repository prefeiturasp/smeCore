import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TopMenu } from '../components/navigation/TopMenu';
import { Footer } from "../components/navigation/Footer";

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
                            <TopMenu {...cProps} />
                            <div className="content pb-5">
                                <C {...props} {...cProps} />
                            </div>
                            <Footer />
                        </div>
                    );
                else
                    return (<Redirect to="/Unauthorized" />);
            }
        }
    />;