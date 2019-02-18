﻿import React, { Component } from 'react';
import './ClassPlan.css';
import { CalendarPlan } from './CalendarPlan';
import { EditAppointment } from './EditAppointment';

export class ClassPlan extends Component {
    constructor(props) {
        super(props);

        let today = new Date();
        var month = props.getMonthByIndex(today.getMonth());

        this.state = {
            showEditAppointment: false,
            today: today.getDate() + " de " + month + " - " + today.getFullYear()
        };

        this.editAppointmentClick = this.editAppointmentClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    editAppointmentClick() {
        this.setState(state => ({
            showEditAppointment: true
        }));
    }

    backButtonClick() {
        this.setState(state => ({
            showEditAppointment: false
        }));
    }

    saveButtonClick() {
        alert("not implemented");
    }

    render() {
        const childProps = {
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            user: this.props.user
        };

        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoAula" role="tabpanel" aria-labelledby="planoAula-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm border-azul btn-today" onClick={this.editAppointmentClick}>{this.state.today}</button>
                    </div>

                    {this.state.showEditAppointment === true && (
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="form-inline">
                                    <button className="btn btn-outline-primary" onClick={this.backButtonClick}><i class="fas fa-arrow-left"></i> Voltar</button>
                                    &nbsp;
                                    <button className="btn btn-warning text-white" onClick={this.saveButtonClick}>Salvar</button>
                                </div>
                            </li>
                        </ul>
                    )}
                </nav>

                {this.state.showEditAppointment === false ?
                    (<CalendarPlan name="calendarPlan" {...childProps} />) :
                    (<EditAppointment color="red" time="7:30am" name="5° B" {...childProps} />)
                }
            </div>
        );
    }
}