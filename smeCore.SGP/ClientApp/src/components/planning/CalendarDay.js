import React, { Component } from 'react';
import './CalendarDay.css';
import { Appointment } from './Appointment';

export class CalendarDay extends Component {
    constructor(props) {
        super(props);

        this.isLoaded = false;

        this.state = {
            id: "Item" + props.name,
            dataTarget: "#Modal" + props.name,
            modalId: "Modal" + props.name,
            modalTitle: "ModalTitle" + props.name,
            modalHourId: "ModalHour" + props.name,
            modalMinuteId: "ModalMinute" + props.name,
            appointments: []
        };

        this.addAppointmentClick = this.addAppointmentClick.bind(this);
        this.getClassSchedules = this.getClassSchedules.bind(this);
        //this.clickRadioHora = this.clickRadioHora.bind(this);
    }

    addAppointmentClick() {
        var date = this.props.fullYear + "-" + this.props.month + "-" + this.props.day;
        var time = document.getElementById(this.state.modalHourId).value + ":" + document.getElementById(this.state.modalMinuteId).value;
        var color = "gray";
        var radios = document.getElementsByName('colors');
        var name = this.props.year + "° " + this.props.classroom;
        var school = this.props.school.substring(0, this.props.school.indexOf("-"));

        for (var i = 0, length = radios.length; i < length; i++)
            if (radios[i].checked) {
                color = radios[i].value;
                break;
            }

        var model = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            date: date + " " + time,
            tagColor: color
        };

        fetch('/api/Planejamento/SalvarHorarioAula', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    alert("Plano de Ciclo salvo com sucesso!");
            });

        this.setState({
            appointments: this.state.appointments.concat({
                color: color,
                time: time,
                name: name,
                school: school,
                day: this.props.day,
                month: this.props.month,
                fullYear: this.props.fullYear
            }),
        });

        radios[i].checked = false;
        document.getElementById(this.state.modalHourId).value = '';
        document.getElementById(this.state.modalMinuteId).value = '';
    }

    getClassSchedules() {
        var date = this.props.fullYear + "-" + this.props.month + "-" + this.props.day
        var model = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            date: date + " 00:00"
        };

        fetch('/api/Planejamento/AbrirHorarioAula', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    data.json().then(result => {
                        var classSchedules = [];
                        var name = this.props.year + "° " + this.props.classroom;
                        var school = this.props.school.substring(0, this.props.school.indexOf("-"));

                        for (var i = 0; i < result.length; i++) {
                            var date = new Date(result[i].date);
                            var time = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
                            time += ":";
                            time += date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();

                            classSchedules.push({
                                color: result[i].tagColor,
                                time: time,
                                name: name,
                                school: school,
                                day: this.props.day,
                                month: this.props.month,
                                fullYear: this.props.fullYear
                            });
                        }

                        this.isLoaded = true;
                        this.setState({ appointments: classSchedules });
                    });
            });
    }

    render() {
        if (this.props.year > 0 && this.isLoaded === false)
            this.getClassSchedules();

        return (
            <td className={this.props.workday === "true" ? "border-calendar-day" : "border-calendar-day not-workday"}>
                {this.props.workday === "true" && (<div className="day text-small text-info text-center">{this.props.day}</div>)}

                <div className="appointments">
                    {this.state.appointments.map(appointment => (
                        <Appointment day={appointment.day} month={appointment.month} fullYear={appointment.fullYear} color={appointment.color} time={appointment.time} name={appointment.name} school={appointment.school} classAppointmentClick={this.props.classAppointmentClick} />
                    ))}
                </div>

                {this.props.workday === "true" && this.props.editable === true &&
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
                                            &nbsp;
                                                <span className="text-muted"><small>Formato 24 Horas</small></span>
                                            </div>
                                        </div>

                                        <div className="vertical-spacing"></div>

                                        <div>
                                            <h6>Marcador</h6>
                                            <div className="form-inline">
                                                <input type="radio" name="colors" value="lilac" onClick={this.clickRadioHora} />&nbsp;
                                                <input type="radio" name="colors" value="purple" />&nbsp;
                                                <input type="radio" name="colors" value="blue" />&nbsp;
                                                <input type="radio" name="colors" value="green" />&nbsp;
                                                <input type="radio" name="colors" value="yellow" />&nbsp;
                                                <input type="radio" name="colors" value="red" />
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