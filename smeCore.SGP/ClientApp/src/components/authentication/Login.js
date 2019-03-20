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

        this.props.validateUser();
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
        
        this.props.apiPost("/api/Auth/Login", credential)
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