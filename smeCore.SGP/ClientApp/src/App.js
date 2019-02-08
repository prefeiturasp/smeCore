import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';

class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            user: {
                name: "",
                username: "",
                token: "",
                refreshToken: "",
                lastAuthentication: null
            }
        };

        this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
        this.loggoutUser = this.loggoutUser.bind(this);
        this.logginUser = this.logginUser.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    userHasAuthenticated(authenticated) {
        this.setState({ isAuthenticated: authenticated });
    }

    loggoutUser(event) {
        sessionStorage.setItem("user", null);
        this.setState({
            isAuthenticated: false,
            user: {
                name: "",
                username: "",
                token: "",
                refreshToken: "",
                lastAuthentication: null
            }
        });
    }

    logginUser(user) {
        sessionStorage.setItem("user", JSON.stringify(user));
        this.setState({
            isAuthenticated: true,
            user: user
        });
    }

    setUser(user) {
        this.setState({ user: user });
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            loggoutUser: this.loggoutUser,
            logginUser: this.logginUser,
            setUser: this.setUser,
            user: this.state.user
        };

        return (
            <Routes childProps={childProps} />
        );
    }
}

export default withRouter(App);