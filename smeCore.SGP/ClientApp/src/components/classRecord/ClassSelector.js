import React, { Component } from 'react';

export class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="card card-component">
                <div className="py-2 px-4 d-flex align-items-center">
                    <input type="text" className="form-control" placeholder="Encontre sua turma" />
                    <div><i className="fas fa-search"></i></div>
                </div>
            </div>
        );
    }
}