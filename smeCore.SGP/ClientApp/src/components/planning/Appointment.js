import React, { Component } from 'react';
import './Appointment.css';

export class Appointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "dot color-" + props.color
        };

        this.classAppointmentClick = this.classAppointmentClick.bind(this);
    }

    classAppointmentClick() {
        var properties = {
            color: this.state.color,
            time: this.props.time,
            day: this.props.day,
            month: this.props.month,
            fullYear: this.props.fullYear
        };

        this.props.classAppointmentClick(properties);
    }

    render() {
        return (
            <div className="appointment" onClick={this.classAppointmentClick}>
                <div className="border-bottom form-inline d-flex justify-content-center container-appointment">
                    <div className={this.state.color}></div>&nbsp;
                    <div className="appointment-hora">{this.props.time}</div>&nbsp;
                    <div className="appointment-classe">{this.props.name}</div>&nbsp;
                    <div className="appointment-separador">-</div>&nbsp;
                    <div className="font-weight-bold appointment-escola">{this.props.school}</div>
                </div>
            </div>
        );
    }
}