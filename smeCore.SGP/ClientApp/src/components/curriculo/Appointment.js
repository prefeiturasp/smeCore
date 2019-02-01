import React, { Component } from 'react';
import './Appointment.css';

export class Appointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "dot color-" + props.color
        };
    }

    abrirModal() {
    }

    render() {
        return (
            <div className="appointment">
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