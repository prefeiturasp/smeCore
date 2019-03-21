import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import ReactGA from 'react-ga';

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
        this.validateUser = this.validateUser.bind(this);

        this.showMessage = this.showMessage.bind(this);

        this.apiGet = this.apiGet.bind(this);
        this.apiPost = this.apiPost.bind(this);



        // Configura��o do Google Analytics
        ReactGA.initialize('UA-85250794-12');
        ReactGA.pageview('/Planejamento');
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

    validateUser() {
        // Verifica se o usu�rio j� est� autenticado
        var user = JSON.parse(sessionStorage.getItem("user"));

        if (user !== null) {
            user.lastAuthentication = new Date(user.lastAuthentication);
            var currentTime = new Date();

            var diff = currentTime - user.lastAuthentication;
            //var diffDays = Math.floor(diff / 86400000); // days
            //var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
            var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes

            if (diffMins <= 10) { // Faz verifica��o se o token ainda � v�lido
                this.setState({
                    user: user,
                    isAuthenticated: true
                });
            }
            else if (diffMins <= 30) { // Faz verifica��o se o refreshToken ainda � v�lido, caso seja atualiza o token
                var credential = {
                    username: user.username,
                    refreshToken: user.refreshToken
                };

                this.apiPost("/api/Auth/RefreshLogin", credential)
                    .then(response => response.json())
                    .then(data => {
                        if (data.status !== 401) {
                            var user = {
                                name: "",
                                username: credential.username,
                                token: data.token,
                                refreshToken: data.refreshToken,
                                lastAuthentication: new Date(),
                                //TODO: Pegar valores do perfil do usu�rio
                                roles: [
                                    "Admin",
                                    "Supervisor"
                                ]
                            }

                            this.logginUser(user);
                        }
                    });
            }
        }
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
            validateUser: this.validateUser,
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

                    <div className="modal fade" id="messageWindowModal" tabIndex="-1" role="dialog" aria-labelledby="messageWindowModalLabel" aria-hidden="true">
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
                                    {this.state.messageWindow.status === 'erro' && <i className="fa fa-window-close" aria-hidden="true"></i>}
                                    {this.state.messageWindow.status === 'sucesso' && <i className="fa fa-check-circle fa-2x" aria-hidden="true"></i>}
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