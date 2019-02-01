import React, { Component } from 'react';
import './CalendarDay.css';
import { Appointment } from './Appointment';
import $ from 'jquery';

export class CalenderDay extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
           
            id: "Item" + props.name,
            classeCss: '',
            dataTarget: "#Modal" + props.name,
            modalId: "Modal" + props.name,
            modalTitle: "ModalTitle" + props.name,
            modalHourId: "ModalHour" + props.name,
            modalMinuteId: "ModalMinute" + props.name,
            appointments: []
        };

        // This binding is necessary to make `this` work in the callback
        this.addAppointmentClick = this.addAppointmentClick.bind(this);

        this.handleRadio = this.handleRadio.bind(this);

    }

    addAppointmentClick() {
        let time = document.getElementById(this.state.modalHourId).value + ":" + document.getElementById(this.state.modalMinuteId).value;
        let color = "gray";
        let radios = document.getElementsByName('colors');
        let name = "5° B";
        let school = "EMEF";
        let controleChecked = false;

        for (var i = 0, length = radios.length; i < length; i++)
            if (radios[i].checked) {
                color = radios[i].value;
                controleChecked = true;
                break;
            }


        if (controleChecked == true && time != ":") {

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
        } else {
            alert('Todos os campos são obrigatórios! Os dados não serão salvos.');
        }
    }

    handleRadio(event){

        let radioClicadoValue =  event.target.value;
        let radioClicadoId =  event.target.id;

        console.log('Ollyver Value |' + radioClicadoValue);
        console.log('Ollyver Id |' + radioClicadoId);

        this.setState({classeCss: 'lilac'});

       // debugger;

        var element = document.getElementById(radioClicadoValue);
        //element.classList.add("lilac");

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
                                                <input type="number" min="0" max="59" className="form-control form-control-sm input-minute" id={this.state.modalMinuteId} /> Formato 24 Horas

                                            </div>
                                        </div>

                                        <div className="vertical-spacing"></div>

                                        <div>
                                            <h6>Marcador</h6>
                                            <div className="form-inline">

                                                <input className={this.state.classeCss} type="radio" id="lilac" name="colors" value="lilac" onChange={this.handleRadio}  />&nbsp;
                                                <label id="label-lilac" htmlFor="lilac"><span></span></label>

                                                <input type="radio" id="purple" name="colors" value="purple" onChange={this.handleRadio} />&nbsp;
                                                <label id="label-purple" htmlFor="purple"><span></span></label>

                                                <input type="radio" id="blue" name="colors" value="blue" onChange={this.handleRadio} />&nbsp;
                                                <label id="label-blue" htmlFor="blue"><span></span></label>

                                                <input type="radio" id="green" name="colors" value="green" onChange={this.handleRadio} />&nbsp;
                                                <label id="label-green" htmlFor="green"><span></span></label>

                                                <input type="radio" id="yellow" name="colors" value="yellow" onChange={this.handleRadio} />&nbsp;
                                                <label id="label-yellow" htmlFor="yellow"><span></span></label>

                                                <input type="radio" id="red" name="colors" value="red" onChange={this.handleRadio}/>&nbsp;
                                                <label id="label-red" htmlFor="red"><span></span></label>


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