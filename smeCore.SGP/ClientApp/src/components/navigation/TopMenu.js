import React, {Component} from 'react';
import './TopMenu.css';

export class TopMenu extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-light navbar-white" id="topMenu">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <img src="/img/Icon_id professor.svg" alt="user icon" id="userIcon"/>
                                <a className="nav-link font-weight-light">Nome do professor</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline">
                                <button className="btn font-weight-light">
                                    <img src="/img/Icon_sair.svg" alt="logout icon" id="logoutIcon"/> Sair
                                </button>
                            </form>
                        </li>
                    </ul>
                </nav>

                <div className="w-auto container-content">
                    <div className="row w-100 ml-0 mr-0">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-5 ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-secondary bg-light border-0 w-100 h-100 sem-border">
                                        <img className="img-fluid d-none d-sm-block" src="/img/LogoSGP.svg" alt="logo prefeitura" id="townhallIcon"/>
                                        <img className="img-fluid d-block d-sm-none" src="/img/LogoSGP_mobile.svg" alt="logo prefeitura" id="townhallIcon"/>
                                    </button>
                                </div>
                                <div className="col-7  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary w-100 h-100 sem-border">
                                        BANNER
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="row h-100">
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu1 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_admin_rollover.svg" alt="icone admin" id="adminIcon"/>
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block">Administração</span>
                                    </button>
                                </div>
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu2 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_registro_rollover.svg" alt="icone registro" id="registerIcon"/>
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block">Registro de Classe</span>
                                    </button>
                                </div>
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu3 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_relatorios_rollover.svg" alt="icone relatorios" id="reportsIcon"/>
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block">Relatórios</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}