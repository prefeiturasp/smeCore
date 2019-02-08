import React, { Component } from 'react';
import './TopMenu.css';

export class TopMenu extends Component {
    constructor(props) {
        super(props);

        this.loggoutButtonClick = this.loggoutButtonClick.bind(this);
    }

    loggoutButtonClick() {
        this.props.loggoutUser();
    }

    render() {
        return (
            <header>

                <div className="w-auto container-content">
                    <div className="d-flex flex-row-reverse">

                        <div className="pb-2 container-sair">
                            <button className="btn font-weight-light" onClick={this.loggoutButtonClick}>
                                <img src="/img/Icon_sair.svg" alt="logout icon" id="logoutIcon" /> Sair
                            </button>
                        </div>

                        <div className="pb-2 mt-2 container-nome-professor">
                            <img src="/img/Icon_id professor.svg" alt="user icon" id="userIcon" />
                            <a className="nav-link font-weight-light">{this.props.user.username}</a>
                        </div>
                    </div>
                </div>

                <div className="w-auto container-content">
                    <div className="row w-100 ml-0 mr-0 {/*borda-top-menu*/}">
                        <div className="col-12 col-lg-8 borda-left-menu">
                            <div className="row">
                                <div className="col-5 ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-secondary bg-light border-0 w-100 h-100 sem-border">
                                        <img className="img-fluid d-none d-sm-block rounded-left" src="/img/LogoSGP.svg" alt="logo prefeitura" id="townhallIcon" />
                                        <img className="img-fluid d-block d-sm-none rounded-left" src="/img/LogoSGP_mobile.svg" alt="logo prefeitura" id="townhallIcon" />
                                    </button>
                                </div>
                                <div className="col-7  ml-0 mr-0 pl-0  pr-0">
                                    <a href="#" className="link-bg-banner-menu">
                                        <div className="d-flex p-2 align-items-center bg-banner-top-menu">
                                            <span className="texto-bg-banner-top">Olá, queremos saber sua opinião, participe da pesquisa sobre a nova versão do planejamento no SGP.</span>

                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 borda-right-menu">
                            <div className="row h-100">
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu1 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_admin.svg" alt="icone admin" id="adminIcon" />
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block texto">Administração</span>
                                    </button>
                                </div>
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu2 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_registro_rollover.svg" alt="icone registro" id="registerIcon" />
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block texto-bold">Registro de Classe</span>
                                    </button>
                                </div>
                                <div className="col-4  ml-0 mr-0 pl-0  pr-0">
                                    <button type="button" className="btn btn-primary background-color-menu3 border-0 w-100 h-100 sem-border">
                                        <img className="icones-top-menu townhallIcon" src="/img/Icon_relatorios.svg" alt="icone relatorios" id="reportsIcon" />
                                        <span className="h6 font-weight-light no-white-space d-none d-sm-block texto">Relatórios</span>
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