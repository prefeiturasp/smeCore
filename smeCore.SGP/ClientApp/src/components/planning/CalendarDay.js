import React, { Component } from 'react';
import './CalendarDay.css';
import { Appointment } from './Appointment';

export class CalendarDay extends Component {
    constructor(props) {
        super(props);

        var todayDate = props.day + "/" + props.month + "/" + props.fullYear;

        this.state = {
            id: "Item" + props.name,
            dataTarget: "#Modal" + props.name,
            modalId: "Modal" + props.name,
            modalTitle: "ModalTitle" + props.name,
            modalHourId: "ModalHour" + props.name,
            modalMinuteId: "ModalMinute" + props.name,
            modalRadioColorName: "colors" + props.name,
            modalRadioClassQuantityName: "quantities" + props.name,
            modalRadioRepeatName: "repeat" + props.name,
            todayDate: todayDate
        };

        this.addAppointmentClick = this.addAppointmentClick.bind(this);
        this.removeAppointmentClick = this.removeAppointmentClick.bind(this);
    }

    addAppointmentClick() {
        var time = document.getElementById(this.state.modalHourId).value + ":" + document.getElementById(this.state.modalMinuteId).value;
        var color = "gray";
        var radios = document.getElementsByName('colors');
        var school = this.props.school.substring(0, this.props.school.indexOf("-"));

        for (var i = 0, length = radios.length; i < length; i++)
            if (radios[i].checked) {
                color = radios[i].value;
                break;
            }

        var schedule = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: school,
            day: this.props.day,
            month: this.props.month,
            fullYear: this.props.fullYear,
            color: color,
            time: time
        };

        //radios[i].checked = false;
        //document.getElementById(this.state.modalHourId).value = '';
        //document.getElementById(this.state.modalMinuteId).value = '';
        debugger;
        this.props.setSchedule(schedule);
    }

    removeAppointmentClick(appointment) {
        var txt = 


        alert(appointment.time);
    }

    render() {
        var todayDate =
            (this.props.day > 9 ? this.props.day : "0" + this.props.day) + "/" +
            (this.props.month > 9 ? this.props.month : "0" + this.props.month) + "/" +
            this.props.fullYear

        return (
            <td className={this.props.workday === true ? "border-calendar-day" : "border-calendar-day not-workday"}>
                {this.props.workday === true && (<div className="day text-small text-info text-center">{this.props.day}</div>)}

                <div className="appointments">
                    {this.props.schedule !== undefined && this.props.schedule.map(appointment => (
                        <Appointment day={appointment.day} month={appointment.month} fullYear={appointment.fullYear} color={appointment.color} time={appointment.time} name={appointment.name} school={appointment.school} classAppointmentClick={this.props.classAppointmentClick} removeAppointment={this.removeAppointmentClick} />
                    ))}
                </div>

                {this.props.workday === true && this.props.editable === true &&
                    <div className="calendarDay-controls d-flex justify-content-end">
                        <button type="button" className="btn btn-danger btn-sm calendarDay-btn" data-toggle="modal" data-target={this.state.dataTarget}><i className="fas fa-plus text-white"></i></button>
                        <div className="modal fade" id={this.state.modalId} tabIndex="-1" role="dialog" aria-labelledby={this.state.modalTitle} aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id={this.state.modalTitle}>Novo horario de aula - {todayDate}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <small>Horário</small>
                                            <div className="form-inline">
                                                <input type="number" min="0" max="23" className="form-control form-control-sm" id={this.state.modalHourId} />
                                                <span className="px-1">:</span>
                                                <input type="number" min="0" max="59" className="form-control form-control-sm" id={this.state.modalMinuteId} />
                                                <small className="text-muted pl-1"><small>Formato 24 Horas</small></small>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Quantidade de aulas</small>
                                            <div className="form-inline">
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id={this.state.modalRadioClassQuantityName + "1"} name={this.state.modalRadioClassQuantityName} className="custom-control-input" checked="true" />
                                                    <label className="custom-control-label" for={this.state.modalRadioClassQuantityName + "1"}>1</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id={this.state.modalRadioClassQuantityName + "2"} name={this.state.modalRadioClassQuantityName} className="custom-control-input" />
                                                    <label className="custom-control-label" for={this.state.modalRadioClassQuantityName + "2"}>2</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Repete</small>
                                            <div>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "1"} name={this.state.modalRadioRepeatName} className="custom-control-input" checked="true" />
                                                    <label className="custom-control-label" for={this.state.modalRadioRepeatName + "1"}>N&atilde;o Repetir</label>
                                                </div>

                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "2"} name={this.state.modalRadioRepeatName} className="custom-control-input" />
                                                    <label className="custom-control-label" for={this.state.modalRadioRepeatName + "2"}>Repetir no Bimestre vigente</label>
                                                </div>

                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "3"} name={this.state.modalRadioRepeatName} className="custom-control-input" />
                                                    <label className="custom-control-label" for={this.state.modalRadioRepeatName + "3"}>Repetir para todos os Bimestres</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Marcador</small>
                                            <div className="form-inline">
                                                <input type="radio" name={this.state.modalRadioColorName} value="lilac" />
                                                <div className="px-1" />
                                                <input type="radio" name={this.state.modalRadioColorName} value="purple" />
                                                <div className="px-1" />
                                                <input type="radio" name={this.state.modalRadioColorName} value="blue" />
                                                <div className="px-1" />
                                                <input type="radio" name={this.state.modalRadioColorName} value="green" />
                                                <div className="px-1" />
                                                <input type="radio" name={this.state.modalRadioColorName} value="yellow" />
                                                <div className="px-1" />
                                                <input type="radio" name={this.state.modalRadioColorName} value="red" />
                                            </div>
                                        </div>
                                    </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addAppointmentClick} disabled={this.props.year <= 0}>SALVAR</button>
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