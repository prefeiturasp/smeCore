import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TopMenu } from '../components/navigation/TopMenu';
import { Footer } from "../components/navigation/Footer";

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest}
        render={
            props => {
                if (cProps.isAuthenticated === false)
                    return (<Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`} />);

                const roles = [
                    "Admin",
                    "Supervisor"
                ];

                if (roles.some(role => cProps.user.roles.indexOf(role) >= 0))
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