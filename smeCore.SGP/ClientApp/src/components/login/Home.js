import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import {Footer} from "../navigation/Footer";

export class Home extends Component {
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

        alert("Username: " + credential.username + "\nSenha: " + credential.password);

        //fetch('http://smecore.sme.prefeitura.sp.gov.br/api/Auth/LoginJWT')
        //    .then(response => response.json())
        //    .then(data => {
        //        alert(data);
        //        // Desenvolver rotina para redirecionar o usuário para a página do curriculo/Home.js
        //    });
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


                    <Footer/>


                </div>





        );
    }
}
