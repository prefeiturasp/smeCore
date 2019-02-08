import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TopMenu } from '../components/navigation/TopMenu';
import { Footer } from "../components/navigation/Footer";

export default ({ component: C, props: cProps, ...rest }) =>
    <Route {...rest}
        render={props => cProps.isAuthenticated
            ? (
                <div>
                    <TopMenu {...cProps} />
                    <div className="content">
                        <C {...props} {...cProps} />
                    </div>
                    <Footer />
                </div>
            )
            : <Redirect to={`/login?redirect=${props.location.pathname}${props.location.search}`}
            />}
    />;