import React, { Component } from 'react';
import { AccessPermission } from './AccessPermission';
import { Roles } from './Roles';
import './Admin.css';

export default class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeMenu: undefined,
            menuItems: [
                {
                    dropdown: true, items: [
                        { id: "roles", label: "Grupos/Perfis" },
                        { id: "accessPermission", label: "Permissões" },
                    ]
                },
                { id: "test", label: "Teste" },
                { id: "test2", label: "Teste2" },
                {
                    dropdown: true, items: [
                        { id: "roles", label: "Grupos/Perfis" },
                        { id: "accessPermission", label: "Permissões" },
                    ]
                },
            ],
            menuElements: [
                { id: "accessPermission", render: () => <AccessPermission {...props} /> },
                { id: "roles", render: () => <Roles {...props} /> }
            ]
        }

        this.changeMenu = this.changeMenu.bind(this);
    }

    changeMenu(event) {
        this.setState({ activeMenu: event.target.id });
    }

    render() {
        return (
            <div id="admin-component" className="mx-5">
                <nav id="admin-menu" className="navbar navbar-expand-lg border-bottom">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            {this.state.menuItems.map(menuItem =>
                                menuItem.dropdown === true ?
                                    <li key={menuItem.id} className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle admin-menu-item" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Gerenciamento</a>
                                        <div className="dropdown-menu admin-menu-item" aria-labelledby="navbarDropdownMenuLink">
                                            {menuItem.items.map(item =>
                                                <span key={item.id} id={item.id} className="dropdown-item" onClick={this.changeMenu}>{item.label}</span>
                                            )}
                                        </div>
                                    </li> :
                                    <li key={menuItem.id} className="nav-item">
                                        <span id={menuItem.id} className="nav-link admin-menu-item" onClick={this.changeMenu}>{menuItem.label}</span>
                                    </li>
                            )}
                        </ul>
                    </div>
                </nav>

                <div id="admin-menu-content">
                    {this.state.menuElements.map(element =>
                        element.id === this.state.activeMenu && element.render()
                    )}
                </div>
            </div>
        );
    }
}