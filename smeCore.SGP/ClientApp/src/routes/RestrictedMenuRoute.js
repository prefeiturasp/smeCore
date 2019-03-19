import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { TopMenu } from '../components/navigation/TopMenu';
import { Footer } from "../components/navigation/Footer";

export default ({ component: C, props: cProps, ...rest }) => {

    return (
        <Route {...rest}
            render={
                props => cProps.isAuthenticated && cProps.user.roles.indexOf("Admin") >= 0
                    ? (
                        <div>
                            <TopMenu {...cProps} />
                            <div className="content pb-5">
                                <C {...props} {...cProps} />
                            </div>
                            <Footer />
                        </div>
                    )
                    : <Redirect to="/restricted" />
            }
        />
    );
}