import React, { Component } from 'react';
import './Appointment.css';

export class Appointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "dot color-" + props.color
        };

        this.classAppointmentClick = this.classAppointmentClick.bind(this);
        this.removeAppointment = this.removeAppointment.bind(this);
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

    removeAppointment() {
        this.props.removeAppointment({
            color: this.state.color,
            time: this.props.time,
            day: this.props.day,
            month: this.props.month,
            fullYear: this.props.fullYear
        });
    }

    render() {
        var classroom = this.props.name;//.substring(this.props.name.indexOf("-"), this.props.name.length);

        return (
            <div className="appointment d-flex border-bottom mx-2">
                <div className="form-inline d-flex container-appointment" onClick={this.classAppointmentClick}>
                    <div className={this.state.color}></div>&nbsp;
                    <div className="appointment-hora"><small>{this.props.time}</small></div>&nbsp;
                    <div className="appointment-classe"><small>{classroom}</small></div>&nbsp;
                    <div className="appointment-separador"><small>-</small></div>&nbsp;
                    <div className="font-weight-bold appointment-escola"><small>{this.props.school}</small></div>
                </div>

                <div className="d-flex flex-fill flex-row-reverse">
                    <button type="button" className="close" aria-label="Close" onClick={this.removeAppointment}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        );
    }
}