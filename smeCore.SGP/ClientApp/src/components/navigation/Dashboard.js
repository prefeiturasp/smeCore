import React, { Component } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import { animated } from 'react-spring';
import { SideMenuItem } from './SideMenuItem';

export class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftMenuToggle: false,
            viewportWidth: 0,
            viewportHeight: 0,
            menuItems: [
                {
                    icon: "fas fa-calendar-check left-menu-item-icon",
                    name: "Registro de Classe",
                    selected: false,
                    subitems: [
                        { selected: false, name: "Plano de Aula", link: "/Planejamento" },
                        { selected: false, name: "Plano Anual", link: "/Planejamento" },
                        { selected: false, name: "Plano de Ciclo", link: "/Planejamento" },
                        { selected: false, name: "Sondagem", link: "/Planejamento" },
                        { selected: false, name: "Documentos", link: "/Planejamento" },
                        { selected: false, name: "Plano de Aula1", link: "/Planejamento" },
                        { selected: false, name: "Plano Anual1", link: "/Planejamento" },
                        { selected: false, name: "Plano de Ciclo1", link: "/Planejamento" },
                        { selected: false, name: "Sondagem1", link: "/Planejamento" },
                        { selected: false, name: "Documentos1", link: "/Planejamento" },
                        { selected: false, name: "Plano de Aula2", link: "/Planejamento" },
                        { selected: false, name: "Plano Anual2", link: "/Planejamento" },
                        { selected: false, name: "Plano de Ciclo2", link: "/Planejamento" },
                        { selected: false, name: "Sondagem2", link: "/Planejamento" },
                        { selected: false, name: "Documentos2", link: "/Planejamento" },
                    ]
                },
                {
                    icon: "fas fa-file-signature left-menu-item-icon",
                    name: "Relatórios",
                    selected: false,
                    subitems: [
                        { selected: false, name: "Plano de Aula", link: "/Planejamento" },
                        { selected: false, name: "Plano Anual", link: "/Planejamento" },
                        { selected: false, name: "Plano de Ciclo", link: "/Planejamento" },
                        { selected: false, name: "Sondagem", link: "/Planejamento" },
                        { selected: false, name: "Documentos", link: "/Planejamento" },
                    ]
                },
                {
                    icon: "fas fa-cog left-menu-item-icon",
                    name: "Administração",
                    selected: false,
                    subitems: [
                        { selected: false, name: "Área Administrativa", link: "/Admin" },
                    ]
                },
            ],
        }

        this.leftMenuToggleClick = this.leftMenuToggleClick.bind(this);
        this.selectMenuItem = this.selectMenuItem.bind(this);
        this.selectMenuSubItem = this.selectMenuSubItem.bind(this);
        this.logoutButtonClick = this.logoutButtonClick.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ viewportWidth: window.innerWidth, viewportHeight: window.innerHeight });
    }

    leftMenuToggleClick() {
        this.setState({
            leftMenuToggle: !this.state.leftMenuToggle
        });
    }

    selectMenuItem(name) {
        var menuItems = this.state.menuItems;

        for (var i = 0; i < menuItems.length; i++)
            if (menuItems[i].name === name)
                menuItems[i].selected = !menuItems[i].selected;
            else
                menuItems[i].selected = false;

        this.setState({ menuItems: menuItems });
    }

    selectMenuSubItem(menuItemName, name) {
        var menuItems = this.state.menuItems;

        for (var index = 0; index < menuItems.length; index++)
            if (menuItems[index].name === menuItemName)
                for (var j = 0; j < menuItems[index].subitems.length; j++) {
                    if (menuItems[index].subitems[j].name === name)
                        menuItems[index].subitems[j].selected = true;
                    else
                        menuItems[index].subitems[j].selected = false;
                }
            else
                for (var k = 0; k < menuItems[index].subitems.length; k++)
                    menuItems[index].subitems[k].selected = false;

        this.setState({ menuItems: menuItems });
    }

    logoutButtonClick() {
        this.props.loggoutUser();
    }

    render() {
        return (
            <div id="dashboard-component">
                <div id="top-menu" className="fixed-top d-flex w-auto">
                    <div id="logo-content-top-menu" className="d-flex justify-content-center align-items-center clickable" onClick={() => window.location.href = "/"}>
                        <img id="logo-top-menu" src="./img/LogoSGP_mobile.svg" alt="Logo SGP" />
                    </div>

                    <div id="top-menu-bar" className="d-flex flex-fill align-items-center">
                        <div id="breadcrumb-top-menu" className="d-flex flex-fill ml-4">
                            <small className="font-weight-light text-muted">Home</small>
                            <small className="mx-2"><i className="fas fa-chevron-circle-right text-muted"></i></small>
                            <small className="font-weight-light text-muted">Registro de Classe</small>
                        </div>

                        <div className="d-flex">
                            <small className="d-flex align-items-center font-weight-light text-muted">Sair</small>
                            <div id="logout-button" className="btn btn-outline-light rounded-circle d-flex justify-content-center align-items-center ml-2 mr-3" onClick={this.logoutButtonClick}>
                                <i id="logout-button-icon" className="fas fa-power-off"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <Spring
                    from={{
                        left: 0,
                    }}
                    to={{
                        left: this.state.leftMenuToggle ? 265 : 0,
                    }}>
                    {props =>
                        <animated.div id="left-menu-button" className="d-flex justify-content-center align-items-center" onClick={this.leftMenuToggleClick} style={props}>
                            <i id="left-menu-button-icon" className="fas fa-bars text-white"></i>
                        </animated.div>
                    }
                </Spring>

                <Spring
                    from={{
                        left: -265,
                    }}
                    to={{
                        left: this.state.leftMenuToggle ? 0 : -265,
                    }}>
                    {props =>
                        <animated.div id="left-menu" className="h-100 pt-5 d-flex flex-column justify-items-center" style={props}>
                            <div id="user-info" className="d-flex flex-column align-content-start align-items-center">
                                <div id="user-info-avatar" className="rounded-circle"></div>
                                <div id="user-info-fullName" className="pt-2 pb-1 text-white">Daniel Matsumoto</div>
                                <div id="user-info-email" className="px-2 py-1 text-white">daniel.matsumoto@amcom.com.br</div>
                                <div id="user-info-profile" className="pt-1 clickable"><i className="fas fa-user-edit clickable"></i> Perfil</div>
                            </div>

                            <div className="d-flex flex-column align-content-start align-items-center flex-fill pt-4">
                                {this.state.menuItems.map(item =>
                                    <SideMenuItem menuItem={item} selectMenuItem={this.selectMenuItem} selectMenuSubItem={this.selectMenuSubItem} />
                                )}
                            </div>

                            <div className="d-flex justify-content-center flex-column">
                                <img src="./img/logo_prefeitura_white.svg" className="pb-3" alt="Logo Prefeitura SP" />
                                <div className="text-white text-center" style={{ fontSize: '9px' }}>SME-SP - SGP</div>
                                <div className="text-white text-center pb-4" style={{ fontSize: '9px' }}>Todos os direitos reservados.</div>
                            </div>
                        </animated.div>
                    }
                </Spring>

                <Spring
                    from={{
                        left: 0,
                        width: this.state.viewportWidth
                    }}
                    to={{
                        left: this.state.leftMenuToggle ? 265 : 0,
                        width: this.state.leftMenuToggle ? (this.state.viewportWidth - 265) : this.state.viewportWidth,
                    }}>
                    {props =>
                        <animated.div id="dashboard-content" className="px-5 py-5" style={props}>
                            {this.props.children}
                        </animated.div>
                    }
                </Spring>
            </div>
        );
    }
}