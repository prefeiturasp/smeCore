import React, { Component } from 'react';
import { Bimester } from './Bimester';
import './AnnualPlan.css';

export class AnnualPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item"
        };
    }

    render() {
        return (
            <div className="tab-pane fade show active border-left border-right border-bottom" id="planoAnual" role="tabpanel" aria-labelledby="planoAnual-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">Hoje</button>

                        <div className="spacing"></div>

                        <div className="btn-group" role="group" arial-label="Change day control">
                            <button type="button" className="btn btn-outline-secondary btn-sm">&lt;</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm">&gt;</button>
                        </div>
                        &nbsp;
                                    <button className="btn btn-sm">2019</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <a className="nav-link disabled">Salvamento automático...</a>
                                <button className="btn">Pesquisar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule" />

                <div id="planoAnual-info" className="container-tabpanel-content">
                    <div className="form-inline">
                        <span className="red-dot"></span>

                        <div className="spacing"></div>

                        <span>5° B</span>

                        <div className="spacing"></div>
                        -
                        <div className="spacing"></div>

                        <span><b>EMEF</b></span>
                    </div>

                    <div>
                        <span>Plano de aula 5° B*</span>
                    </div>

                    <div className="vertical-spacing"></div>

                    <Bimester name="B1" image="1bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B2" image="2bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B3" image="3bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B4" image="4bimestre" />
                </div>
            </div>
        );
    }
}
