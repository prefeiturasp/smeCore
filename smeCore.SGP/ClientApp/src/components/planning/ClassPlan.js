import React, { Component } from 'react';
import './ClassPlan.css';
import { CalendarPlan } from './CalendarPlan';
import { EditAppointment } from './EditAppointment';

export class ClassPlan extends Component {
    constructor(props) {
        super(props);

        this.editAppontimentColor = "";
        this.editAppointmentTime = "";
        this.editAppointmentDate = "";

        this.state = {
            showEditAppointment: false
        };

        this.editAppointmentClick = this.editAppointmentClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    editAppointmentClick(properties) {
        this.editAppontimentColor = properties.color;
        this.editAppointmentTime = properties.time;
        this.editAppointmentDate = properties.day + "/" + properties.month + "/" + properties.fullYear;

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
                        <button className="btn btn-outline-primary btn-sm border-azul btn-today">{this.props.todayDate}</button>
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
                    (<CalendarPlan name="calendarPlan" calendar={this.props.calendar} setSchedule={this.props.setSchedule} {...childProps} classAppointmentClick={this.editAppointmentClick} />) :
                    (<EditAppointment color={this.editAppontimentColor} time={this.editAppointmentTime} date={this.editAppointmentDate} name="5° B" students={this.props.students} annualPlan={this.props.annualPlan} relatedClasses={this.props.relatedClasses} {...childProps} />)
                }
            </div>
        );
    }
}