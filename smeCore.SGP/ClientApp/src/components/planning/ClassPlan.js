import React, { Component } from 'react';
import './ClassPlan.css';
import { CalendarPlan } from './CalendarPlan';
import { EditAppointment } from './EditAppointment';
import { EditorState, convertFromRaw } from 'draft-js';

export class ClassPlan extends Component {
    constructor(props) {
        super(props);

        this.editAppontimentColor = "";
        this.editAppointmentTime = "";
        this.editAppointmentDate = "";

        this.state = {
            showEditAppointment: false,
            editClassSchedule: {
                date: null,
                learningObjectives: {},
                studentsAbsence: [],
                classDevelopment: EditorState.createEmpty(),
                continuousRecovery: EditorState.createEmpty(),
                homework: EditorState.createEmpty()
            },
        };

        this.editAppointmentClick = this.editAppointmentClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
        this.saveButtonClick = this.saveButtonClick.bind(this);
        this.updateEditClassSchedule = this.updateEditClassSchedule.bind(this);
        this.defaultStateOrConverter = this.defaultStateOrConverter.bind(this);
    }

    defaultStateOrConverter(result) {
        if (result === null)
            result = EditorState.createEmpty();
        else
            result = EditorState.createWithContent(convertFromRaw(JSON.parse(result)));

        return result;
    };

    editAppointmentClick(properties) {
        this.editAppontimentColor = properties.color;
        this.editAppointmentTime = properties.time;
        this.editAppointmentDate =
            (properties.day > 9 ? properties.day : "0" + properties.day) + "/" +
            (properties.month > 9 ? properties.month : "0" + properties.month) + "/" +
            properties.fullYear;

        // Fazer validação de qual bimestre usar
        var objectives = this.props.annualPlan.bimester1;
        var editClassSchedule = {
            date: null,
            learningObjectives: {},
            studentsAbsence: [],
            classDevelopment: EditorState.createEmpty(),
            continuousRecovery: EditorState.createEmpty(),
            homework: EditorState.createEmpty()
        };

        for (var i = 0; i < objectives.length; i++)
            editClassSchedule.learningObjectives[objectives[i]] = "";

        editClassSchedule.date = properties.fullYear + "-" +
            (properties.month > 9 ? properties.month : "0" + properties.month) + "-" +
            (properties.day > 9 ? properties.day : "0" + properties.day) + " " +
            properties.time;
        
        // Fazer método para buscar aula já realizada (carregar tela salva)
        var model = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            date: editClassSchedule.date,
        }

        fetch('/api/Planejamento/AbrirDesenvolvimentoAula', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    data.json().then(result => {
                        result.date = editClassSchedule.date;
                        result.classDevelopment = this.defaultStateOrConverter(result.classDevelopment);
                        result.continuousRecovery = this.defaultStateOrConverter(result.continuousRecovery);
                        result.homework = this.defaultStateOrConverter(result.homework);

                        //if (result.learningObjectives == null)
                        //    result.learningObjectives = {};

                        this.setState({
                            showEditAppointment: true,
                            editClassSchedule: result
                        });
                    });
                else
                    this.setState({
                        showEditAppointment: true,
                        editClassSchedule: editClassSchedule
                    });
            });
    }

    backButtonClick() {
        this.setState({
            showEditAppointment: false
        });
    }

    saveButtonClick() {
        this.props.saveEditClassSchedule(this.state.editClassSchedule);
    }

    updateEditClassSchedule(editClassSchedule) {
        this.setState({ editClassSchedule: editClassSchedule });
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
                        <button className="btn btn-outline-primary btn-sm border-azul btn-today">{this.props.todayDate}</button>
                    </div>

                    {this.state.showEditAppointment === true && (
                        <ul className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="form-inline">
                                    <button className="btn btn-outline-primary" onClick={this.backButtonClick}><i className="fas fa-arrow-left"></i> Voltar</button>
                                    &nbsp;
                                    <button className="btn btn-warning text-white" onClick={this.saveButtonClick}>Salvar</button>
                                </div>
                            </li>
                        </ul>
                    )}
                </nav>

                {this.state.showEditAppointment === false ?
                    (<CalendarPlan
                        name="calendarPlan"
                        calendar={this.props.calendar}
                        setSchedule={this.props.setSchedule}
                        deleteSchedule={this.props.deleteSchedule}
                        {...childProps}
                        classAppointmentClick={this.editAppointmentClick} />) :
                    (<EditAppointment
                        color={this.editAppontimentColor}
                        time={this.editAppointmentTime}
                        date={this.editAppointmentDate}
                        name="5° B"
                        students={this.props.students}
                        annualPlan={this.props.annualPlan}
                        relatedClasses={this.props.relatedClasses}
                        editClassSchedule={this.state.editClassSchedule}
                        updateEditClassSchedule={this.updateEditClassSchedule}
                        frequencyOrderBySequence={this.props.frequencyOrderBySequence}
                        frequencyOrderByName={this.props.frequencyOrderByName}
                        {...childProps} />)
                }
            </div>
        );
    }
}