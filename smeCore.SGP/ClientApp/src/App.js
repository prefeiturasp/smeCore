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
                status: "",
                message: ""
            }
        };

        this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
        this.loggoutUser = this.loggoutUser.bind(this);
        this.logginUser = this.logginUser.bind(this);
        this.setUser = this.setUser.bind(this);

        this.showMessage = this.showMessage.bind(this);

        this.apiGet = this.apiGet.bind(this);
        this.apiPost = this.apiPost.bind(this);
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

    showMessage(message, status, title = "Aviso") {
        debugger;
        this.setState({
            messageWindow: {
                status: status,
                title: title,
                message: message
            }
        });

        var modal = document.getElementById("messageWindowButton");
        modal.click();
    }



    apiPost(url, data) {
        return (fetch(url, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }));
    }

    apiGet(url) {
        return (fetch(url));
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
            apiGet: this.apiGet,
            apiPost: this.apiPost
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
                                    {this.state.messageWindow.status === 'sucesso' && <h5 className="modal-title" id="messageWindowModalLabel">Sucesso!</h5>}
                                    {this.state.messageWindow.status === 'erro' && <h5 className="modal-title" id="messageWindowModalLabel">Erro!</h5>}
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {this.state.messageWindow.status === 'erro' && <i class="fa fa-window-close" aria-hidden="true"></i>}
                                    {this.state.messageWindow.status === 'sucesso' && <i class="fa fa-check-circle fa-2x" aria-hidden="true"></i>}
                                    { ' ' + this.state.messageWindow.message}
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