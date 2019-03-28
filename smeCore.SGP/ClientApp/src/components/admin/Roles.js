import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Roles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchRole: "",
            newRoleToggle: false,
            newRole: "",
            roles: [
                { name: "Admin" },
                { name: "Diretor" },
                { name: "Professor" }
            ],
            onEdit: false
        };

        this.changeText = this.changeText.bind(this);
        this.newRoleClick = this.newRoleClick.bind(this);
        this.addRole = this.addRole.bind(this);
        this.deleteRole = this.deleteRole.bind(this);
        this.editRole = this.editRole.bind(this);
    }

    changeText(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    newRoleClick() {
        this.setState({ newRoleToggle: !this.state.newRoleToggle });
    }

    addRole() {
        var roles = this.state.roles;
        roles.push({ name: this.state.newRole })

        this.setState({
            newRole: "",
            roles: roles,
            onEdit: false
        });
    }

    deleteRole(event) {
        if (this.state.onEdit)
            alert();

        var roles = this.state.roles;

        for (var index = 0; index < roles.length; index)
            if (("delete-" + roles[index].name) === event.currentTarget.id) {
                roles.splice(index, 1);
                break;
            }

        this.setState({ roles: roles });
    }

    editRole(event) {
        var roles = this.state.roles;
        var editRole = "";

        for (var index = 0; index < roles.length; index++)
            if (("edit-" + roles[index].name) === event.currentTarget.id) {
                editRole = event.currentTarget.id.substring(5);
                roles.splice(index, 1);
                break;
            }

        this.setState({
            newRole: editRole,
            roles: roles
        });
    }

    render() {
        var filter = this.state.roles;

        for (var i = 0; i < filter.length; i++)
            filter[i].key = i;

        // Fazer filtro de texto aqui

        return (
            <div id="rolesContent">
                <h4 className="pt-4 pb-3">Painel de Grupos/Perfis</h4>

                <div className="form-inline pb-2">
                    <div className="input-group input-group-sm">
                        <input type="text" id="searchRole" className="form-control" placeholder="Pesquisar" aria-label="Pesquisar Grupo/Perfil" aria-describedby="searchRole" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                        </div>
                    </div>

                    <button type="button" className="btn btn-sm btn-outline-success ml-2" onClick={this.newRoleClick}><i className="fas fa-plus"></i></button>
                </div>

                <Spring
                    from={{
                        opacity: 0,
                        height: 0
                    }}
                    to={{
                        opacity: this.state.newRoleToggle ? 1 : 0,
                        height: this.state.newRoleToggle ? 'auto' : 0
                    }}>
                    {props =>
                        <div id="addRoleCollapse" style={props}>
                            <div className="card card-body">
                                <h5 className="lead pb-2">Adicionar Novo Grupo/Perfil</h5>

                                <div className="form-inline">
                                    <input type="text" id="newRole" className="form-control form-control-sm mr-2" placeholder="Nome" />

                                    <button type="submit" className="btn btn-sm btn-success">Adicionar</button>
                                </div>
                            </div>
                        </div>
                    }
                </Spring>

                <div>
                    <table className="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th className="border-top-0" scope="col">Nome</th>
                                <th className="border-top-0" scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {filter.map(role =>
                                <tr key={role.key}>
                                    <td className="border-top-0">{role.name}</td>
                                    <td className="border-top-0 form-inline float-right">
                                        <a id={"edit-" + role.name} className="text-info clickable pr-3" onClick={this.editRole}><i className="fas fa-pencil-alt"></i></a>
                                        <a id={"delete-" + role.name} className="text-danger clickable" onClick={this.deleteRole}><i className="far fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}