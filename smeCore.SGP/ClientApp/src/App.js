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
            },
            messageWindow: {
                title: "",
                message: ""
            }
        };

        this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
        this.loggoutUser = this.loggoutUser.bind(this);
        this.logginUser = this.logginUser.bind(this);
        this.setUser = this.setUser.bind(this);

        this.showMessage = this.showMessage.bind(this);
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



    showMessage(message, title = "Aviso") {
        this.setState({
            messageWindow: {
                title: title,
                message: message
            }
        });

        var modal = document.getElementById("messageWindowButton");
        modal.click();
    }



    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated,
            loggoutUser: this.loggoutUser,
            logginUser: this.logginUser,
            setUser: this.setUser,
            user: this.state.user,
            showMessage: this.showMessage,
        };

        return (
            <div>
                <Routes childProps={childProps} />

                <div>
                    <button id="messageWindowButton" type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#messageWindowModal"></button>

                    <div className="modal fade" id="messageWindowModal" tabindex="-1" role="dialog" aria-labelledby="messageWindowModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="messageWindowModalLabel">{this.state.messageWindow.title}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.state.messageWindow.message}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(App);