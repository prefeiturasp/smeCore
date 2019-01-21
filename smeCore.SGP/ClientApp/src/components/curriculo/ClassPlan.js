import React, { Component } from 'react';
import './ClassPlan.css';
import { CalenderPlan } from './CalendarPlan';


export class ClassPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item"
        };
    }

    render() {
        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoAula" role="tabpanel" aria-labelledby="planoAula-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">Hoje</button>

                        <div className="spacing"></div>

                        <div className="btn-group" role="group" arial-label="Change day control">
                            <button type="button" className="btn btn-outline-secondary btn-sm">&lt;</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm">&gt;</button>
                        </div>
                        &nbsp;
                        <button className="btn btn-sm">Março de 2019</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <button className="btn"><i className="fas fa-cog"></i></button>

                                <select className="form-control">
                                    <option hidden disabled defaultValue value>Mês</option>
                                    <option value="janeiro">Janeiro</option>
                                    <option value="fevereiro">Fevereiro</option>
                                    <option value="marco">Março</option>
                                    <option value="abril">Abril</option>
                                    <option value="maio">Maio</option>
                                    <option value="junho">Junho</option>
                                    <option value="julho">Julho</option>
                                    <option value="agosto">Agosto</option>
                                    <option value="setembro">Setembro</option>
                                    <option value="outubro">Outubro</option>
                                    <option value="novembro">Novembro</option>
                                    <option value="dezembro">Dezembro</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </nav>

                <CalenderPlan name="calendarPlan" />
            </div>
        );
    }
}