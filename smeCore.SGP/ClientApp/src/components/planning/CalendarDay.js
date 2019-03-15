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
            modalSelectedHour: "",
            modalSelectedMinute: "",
            modalSelectedClassQuantity: null,
            modalSelectedRepeat: null,
            modalSelectedColor: null,
            todayDate: todayDate,
            removeModalId: "RemoveModal" + props.name,
            removeSchedule: {
                name: "",
                color: "",
                time: "",
                day: "",
                month: "",
                fullYear: "",
                school: ""
            },
            removeModalRepeatName: "RemoveModalRepeat" + props.name,
            modalSelectedRemoveRepeat: null
        };

        this.textChange = this.textChange.bind(this);
        this.changeClassQuantity = this.changeClassQuantity.bind(this);
        this.changeRepeat = this.changeRepeat.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.addAppointmentClick = this.addAppointmentClick.bind(this);
        this.removeAppointmentClick = this.removeAppointmentClick.bind(this);
        this.changeRemoveRepeat = this.changeRemoveRepeat.bind(this);
        this.removeScheduleClick = this.removeScheduleClick.bind(this);
    }

    textChange(event) {
        if (event.target.id.startsWith("ModalHour"))
            this.setState({
                modalSelectedHour: event.target.value
            });
        else if (event.target.id.startsWith("ModalMinute"))
            this.setState({
                modalSelectedMinute: event.target.value
            });
    }

    changeClassQuantity(event) {
        this.setState({ modalSelectedClassQuantity: event.target.value });
    }

    changeRepeat(event) {
        this.setState({ modalSelectedRepeat: event.target.value });
    }

    changeColor(event) {
        this.setState({ modalSelectedColor: event.target.value });
    }

    addAppointmentClick() {
        var time = this.state.modalSelectedHour + ":" + this.state.modalSelectedMinute;
        var classQuantity = this.state.modalSelectedClassQuantity;
        var repeat = this.state.modalSelectedRepeat;
        var color = this.state.modalSelectedColor;
        var school = this.props.school.substring(0, this.props.school.indexOf("-") - 1);

        var schedule = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: school,
            day: this.props.day,
            month: this.props.month,
            fullYear: this.props.fullYear,
            color: color,
            time: time,
            classQuantity: classQuantity,
            repeat: repeat
        };

        this.props.setSchedule(schedule);

        this.setState({
            modalSelectedHour: "",
            modalSelectedMinute: "",
            modalSelectedClassQuantity: null,
            modalSelectedRepeat: null,
            modalSelectedColor: null,
        });

        var radiosName = [
            this.state.modalRadioClassQuantityName,
            this.state.modalRadioRepeatName,
            this.state.modalRadioColorName
        ];

        for (var i = 0; i < radiosName.length; i++) {
            var radios = document.getElementsByName(radiosName[i]);

            for (var j = 0; j < radios.length; j++)
                radios[j].checked = false;
        }
    }

    removeAppointmentClick(appointment) {
        this.setState({ removeSchedule: appointment });
    }

    changeRemoveRepeat(event) {
        this.setState({ modalSelectedRemoveRepeat: event.target.value });
    }

    removeScheduleClick() {
        var txt =
            "Name: " + this.state.removeSchedule.name + "\n" +
            "Time: " + this.state.removeSchedule.time + "\n" +
            "School: " + this.state.removeSchedule.school + "\n" +
            "Selected Repeat: " + this.state.modalSelectedRemoveRepeat;

        this.props.deleteSchedule(txt);
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
                        <Appointment
                            day={appointment.day}
                            month={appointment.month}
                            fullYear={appointment.fullYear}
                            color={appointment.color}
                            time={appointment.time}
                            name={appointment.name}
                            school={appointment.school}
                            classAppointmentClick={this.props.classAppointmentClick}
                            removeModalId={this.state.removeModalId}
                            removeAppointment={this.removeAppointmentClick}
                        />
                    ))}
                </div>

                <div className="modal fade" id={this.state.removeModalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id={"title-" + this.state.removeModalId}>Excluir aula - {todayDate}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-inline d-flex container-appointment">
                                    <div className={this.state.removeSchedule.color}></div>
                                    <div className="appointment-hora px-1">{this.state.removeSchedule.time}</div>
                                    <div className="appointment-classe">{this.state.removeSchedule.name}</div>
                                    <div className="appointment-separador px-1">-</div>
                                    <div className="font-weight-bold appointment-escola">{this.state.removeSchedule.school}</div>
                                </div>

                                <div className="pt-3">
                                    <small>Realizar exclus&atilde;o</small>
                                    <div onChange={this.changeRemoveRepeat}>
                                        <div className="custom-control custom-radio">
                                            <input type="radio" id={this.state.removeModalRepeatName + "1"} name={this.state.removeModalRepeatName} className="custom-control-input" value="once" />
                                            <label className="custom-control-label" htmlFor={this.state.removeModalRepeatName + "1"}>Somente o dia</label>
                                        </div>

                                        <div className="custom-control custom-radio">
                                            <input type="radio" id={this.state.removeModalRepeatName + "2"} name={this.state.removeModalRepeatName} className="custom-control-input" value="bimester" />
                                            <label className="custom-control-label" htmlFor={this.state.removeModalRepeatName + "2"}>Bimestre vigente</label>
                                        </div>

                                        <div className="custom-control custom-radio">
                                            <input type="radio" id={this.state.removeModalRepeatName + "3"} name={this.state.removeModalRepeatName} className="custom-control-input" value="all" />
                                            <label className="custom-control-label" htmlFor={this.state.removeModalRepeatName + "3"}>Todos os Bimestres</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.removeScheduleClick}>Confirmar</button>
                            </div>
                        </div>
                    </div>
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
                                                <input type="number" min="0" max="23" className="form-control form-control-sm" id={this.state.modalHourId} value={this.state.modalSelectedHour} onChange={this.textChange} />
                                                <span className="px-1">:</span>
                                                <input type="number" min="0" max="59" className="form-control form-control-sm" id={this.state.modalMinuteId} value={this.state.modalSelectedMinute} onChange={this.textChange} />
                                                <small className="text-muted pl-1"><small>Formato 24 Horas</small></small>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Quantidade de aulas</small>
                                            <div className="form-inline" onChange={this.changeClassQuantity}>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id={this.state.modalRadioClassQuantityName + "1"} name={this.state.modalRadioClassQuantityName} className="custom-control-input" value="1" />
                                                    <label className="custom-control-label" htmlFor={this.state.modalRadioClassQuantityName + "1"}>1</label>
                                                </div>

                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id={this.state.modalRadioClassQuantityName + "2"} name={this.state.modalRadioClassQuantityName} className="custom-control-input" value="2" />
                                                    <label className="custom-control-label" htmlFor={this.state.modalRadioClassQuantityName + "2"}>2</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Repete</small>
                                            <div onChange={this.changeRepeat}>
                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "1"} name={this.state.modalRadioRepeatName} className="custom-control-input" value="once" />
                                                    <label className="custom-control-label" htmlFor={this.state.modalRadioRepeatName + "1"}>N&atilde;o Repetir</label>
                                                </div>

                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "2"} name={this.state.modalRadioRepeatName} className="custom-control-input" value="bimester" />
                                                    <label className="custom-control-label" htmlFor={this.state.modalRadioRepeatName + "2"}>Repetir no Bimestre vigente</label>
                                                </div>

                                                <div className="custom-control custom-radio">
                                                    <input type="radio" id={this.state.modalRadioRepeatName + "3"} name={this.state.modalRadioRepeatName} className="custom-control-input" value="all" />
                                                    <label className="custom-control-label" htmlFor={this.state.modalRadioRepeatName + "3"}>Repetir para todos os Bimestres</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-3">
                                            <small>Marcador</small>
                                            <div className="form-inline" onChange={this.changeColor}>
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