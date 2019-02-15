import React, { Component } from 'react';
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
    }

    editAppointmentClick() {
        this.setState(state => ({
            showEditAppointment: !state.showEditAppointment
        }));
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

                </nav>

                {this.state.showEditAppointment === false ?
                    (<CalendarPlan name="calendarPlan" {...childProps} />) :
                    (<EditAppointment color="red" time="7:30am" name="5° B" {...childProps} />)
                }
            </div>
        );
    }
}