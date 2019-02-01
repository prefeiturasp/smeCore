import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';
import { Footer } from "../navigation/Footer";

export class HomeLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };

        this.submitButtonClick = this.submitButtonClick.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    submitButtonClick() {
        // Desenvolver verificação para checar se os campos estão preenchidos
        var credential = {
            username: document.getElementById("usernameTB").value,
            password: document.getElementById("passwordTB").value
        };

        //alert("Username: " + credential.username + "\nSenha: " + credential.password);

        fetch('/api/Auth/Login', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credential)
        })
            .then(response => response.json())
            .then(data => {
                var txt = "";
                for (var key in data)
                    txt += key + ": " + data[key] + "\n";

                if (data.status === 401)
                    alert("Usuário e/ou senha incorretos");
                else {
                    // Salvar o token de acesso na memoria
                    sessionStorage.setItem("token", data.token);
                    sessionStorage.setItem("refreshToken", data.refreshToken);
                    sessionStorage.setItem("username", credential.username);

                    window.location.href = "/";
                    //this.props.history.push('/');
                }
            });
    }

    render() {
        return (
            <div>

                <div className="d-flex justify-content-center align-items-center login-background">
                    <div id="login-logo" className="d-flex justify-content-center align-items-center">
                        <img src="/img/Logotipo_SGP_V2.svg" alt="sgp icon" id="sgpIcon" />
                    </div>

                    <div id="white-board" className="d-flex justify-content-center">
                        <div id="form">
                            <div className="d-flex align-items-center">
                                <i className="fas fa-user login-icon"></i>&nbsp;
                                <input id="usernameTB" className="form-control login-control border-top-0 border-right-0 border-left-0" type="text" placeholder="Usuário" />
                            </div>

                            <div className="vertical-spacing"></div>

                            <div className="d-flex align-items-center">
                                <i className="fas fa-lock login-icon"></i>&nbsp;
                                <input id="passwordTB" className="form-control login-control border-top-0 border-right-0 border-left-0" type="password" placeholder="Senha" />
                            </div>

                            <div className="vertical-spacing"></div>

                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-warning text-white" onClick={this.submitButtonClick}>Entrar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>

        );
    }
}