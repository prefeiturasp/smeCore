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
                <div className="border-bottom form-inline d-flex justify-content-center">
                    <div className={this.state.color}></div>&nbsp;
                    <div>{this.props.time}</div>&nbsp;
                    <div>{this.props.name}</div>&nbsp;
                    <div>-</div>&nbsp;
                    <div className="font-weight-bold">{this.props.school}</div>
                </div>
            </div>
        );
    }
}