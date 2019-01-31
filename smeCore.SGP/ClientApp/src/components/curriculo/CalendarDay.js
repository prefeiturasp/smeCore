import React, { Component } from 'react';
import './CalendarDay.css';
import { Appointment } from './Appointment';
import $ from 'jquery';

export class CalenderDay extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
           
            id: "Item" + props.name,
            dataTarget: "#Modal" + props.name,
            modalId: "Modal" + props.name,
            modalTitle: "ModalTitle" + props.name,
            modalHourId: "ModalHour" + props.name,
            modalMinuteId: "ModalMinute" + props.name,
            appointments: []
        };

      

        // This binding is necessary to make `this` work in the callback
        this.addAppointmentClick = this.addAppointmentClick.bind(this);
     
    }

    addAppointmentClick() {
        let time = document.getElementById(this.state.modalHourId).value + ":" + document.getElementById(this.state.modalMinuteId).value;
        let color = "gray";
        let radios = document.getElementsByName('colors');
        let name = "5° B";
        let school = "EMEF";

        for (var i = 0, length = radios.length; i < length; i++)
            if (radios[i].checked) {
                color = radios[i].value;
                break;
            }


        this.setState({
            appointments: this.state.appointments.concat({
                color: color,
                time: time,
                name: name,
                school: school
            }),

        });
      
        radios[i].checked = false;
        document.getElementById(this.state.modalHourId).value = '';
        document.getElementById(this.state.modalMinuteId).value = '';
    }
   
    render() {
        console.log("render");
        return (
            <td className={this.props.workday === "true" ? "border-calendar-day" : "border-calendar-day not-workday"}>
                {this.props.workday === "true" && (<div className="day text-small text-info text-center">{this.props.day}</div>)}

                <div className="appointments">
                    {this.state.appointments.map(appointment => (
                        <Appointment color={appointment.color} time={appointment.time} name={appointment.name} school={appointment.school} />
                    ))}
                </div>

                {this.props.workday === "true" &&
                    <div className="calendarDay-controls d-flex justify-content-end">
                    <button type="button" className="btn btn-danger btn-sm calendarDay-btn" data-toggle="modal" data-target={this.state.dataTarget}><i className="fas fa-plus text-white"></i></button>
                        <div className="modal fade" id={this.state.modalId} tabIndex="-1" role="dialog" aria-labelledby={this.state.modalTitle} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={this.state.modalTitle}>Minha aula</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <h6>Horário</h6>
                                            <div className="form-inline">
                                            <input type="number" min="0" max="23" className="form-control form-control-sm" id={this.state.modalHourId} />
                                                &nbsp;
                                                <span>:</span>
                                                &nbsp;
                                                <input type="number" min="0" max="59" className="form-control form-control-sm" id={this.state.modalMinuteId} />
                                                Formato 24 Horas
                                            </div>
                                        </div>

                                        <div className="vertical-spacing"></div>

                                        <div>
                                            <h6>Marcador</h6>
                                            <div className="form-inline">
                                                <input type="radio" name="colors" value="lilac" />&nbsp;
                                                <input type="radio" name="colors" value="purple" />&nbsp;
                                                <input type="radio" name="colors" value="blue" />&nbsp;
                                                <input type="radio" name="colors" value="green" />&nbsp;
                                                <input type="radio" name="colors" value="yellow" />&nbsp;
                                                <input type="radio" name="colors" value="red" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addAppointmentClick}>SALVAR</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </td>
        );
    }
}