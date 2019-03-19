import React, { Component } from 'react';
import './Login.css';
import { Footer } from "../navigation/Footer";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.changeEvent = this.changeEvent.bind(this);
        this.loginButtomClick = this.loginButtomClick.bind(this);

        // Verifica se o usuário já está autenticado
        var user = JSON.parse(sessionStorage.getItem("user"));

        if (user !== null) {
            user.lastAuthentication = new Date(user.lastAuthentication);
            var currentTime = new Date();

            var diff = currentTime - user.lastAuthentication;
            //var diffDays = Math.floor(diff / 86400000); // days
            //var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
            var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes

            if (diffMins <= 10) { // Faz verificação se o token ainda é válido
                this.props.setUser(user);
                this.props.userHasAuthenticated(true);
            }
            else if (diffMins <= 30) { // Faz verificação se o refreshToken ainda é válido, caso seja atualiza o token
                var credential = {
                    username: user.username,
                    refreshToken: user.refreshToken
                };

                fetch('/api/Auth/RefreshLogin', {
                    method: "post",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credential)
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.status !== 401) {
                            var user = {
                                name: "",
                                username: credential.username,
                                token: data.token,
                                refreshToken: data.refreshToken,
                                lastAuthentication: new Date()
                            }

                            this.props.logginUser(user);
                        }
                    });
            }
        }
    }

    validateForm() {
        // Arrumar validação dos campos do formulário
        return (this.state.username.length > 3 && this.state.password.length > 3);
    }

    changeEvent(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    loginButtomClick(event) {
        event.preventDefault();

        var credential = {
            username: this.state.username,
            password: this.state.password
        };

        fetch('/api/Auth/Login', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credential)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 401)
                    alert("Usuário e/ou senha incorretos");
                else {
                    var user = {
                        name: "",
                        username: credential.username,
                        token: data.token,
                        refreshToken: data.refreshToken,
                        lastAuthentication: new Date(),
                        //TODO: Pegar valores do perfil do usuário
                        roles: [
                            "Admin",
                            "Supervisor"
                        ]
                    }

                    this.props.logginUser(user);
                }
            });
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-center align-items-center login-background">
                    <div id="login-logo" className="d-flex justify-content-center align-items-center">
                        <img src="/img/Logotipo_SGP_V2.svg" alt="sgp icon" id="sgp-icon" />
                    </div>

                    <div id="white-board" className="d-flex justify-content-center">
                        <form id="login-form" onSubmit={this.loginButtomClick}>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user login-icon"></i>&nbsp;
                                <input autoFocus id="username" className="form-control login-control border-top-0 border-right-0 border-left-0" type="text" placeholder="Usuário" value={this.state.username} onChange={this.changeEvent} />
                            </div>

                            <div className="vertical-spacing"></div>

                            <div className="d-flex align-items-center">
                                <i className="fas fa-lock login-icon"></i>&nbsp;
                                <input id="password" className="form-control login-control border-top-0 border-right-0 border-left-0" type="password" placeholder="Senha" value={this.state.password} onChange={this.changeEvent} />
                            </div>

                            <div className="vertical-spacing"></div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-warning text-white" disabled={!this.validateForm()}>Entrar</button>
                            </div>
                        </form>
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}