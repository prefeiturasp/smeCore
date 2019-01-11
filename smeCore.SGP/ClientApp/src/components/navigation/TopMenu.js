import React, { Component } from 'react';
import './TopMenu.css';

export class TopMenu extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light navbar-white" id="topMenu" >
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <img src="/img/Icon_id professor.svg" alt="user icon" id="userIcon" />
                                <a className="nav-link font-weight-light">Nome do professor</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline">
                                <button className="btn font-weight-light"><img src="/img/Icon_sair.svg" alt="logout icon" id="logoutIcon" /> Sair</button>
                            </form>
                        </li>
                    </ul>
                </nav>

                <div className="w-auto container-content">
                    <div className="btn-group btn-group-lg w-100" role="group" aria-label="menu">
                        <button type="button" className="btn btn-secondary bg-light border-0">
                            <img src="/img/Logo_prefeituraSP.svg" alt="logo prefeitura" id="townhallIcon" />
                        </button>
                        <button type="button" className="btn btn-primary w-100">
                            BANNER
                        </button>
                        <button type="button" className="btn btn-primary background-color-menu1 border-0">
                            <div className="container d-flex flex-column">
                                <img src="/img/Icon_admin_rollover.svg" alt="icone admin" id="adminIcon" />
                                <span className="h6 font-weight-light no-white-space">Administração</span>
                            </div>
                        </button>
                        <button type="button" className="btn btn-primary background-color-menu2 border-0">
                            <div className="container d-flex flex-column">
                                <img src="/img/Icon_registro_rollover.svg" alt="icone registro" id="registerIcon" />
                                <span className="h6 font-weight-light no-white-space">Registro de Classe</span>
                            </div>
                        </button>
                        <button type="button" className="btn btn-primary background-color-menu3 border-0">
                            <div className="container d-flex flex-column">
                                <img src="/img/Icon_relatorios_rollover.svg" alt="icone relatorios" id="reportsIcon" />
                                <span className="h6 font-weight-light no-white-space">Relatórios</span>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        );
    }
}