﻿import React, { Component } from 'react';
import './Planning.css';
import { CyclePlan } from './CyclePlan';
import { AnnualPlan } from './AnnualPlan';
import { ClassPlan } from './ClassPlan';
import Select from 'react-select';

export default class Planning extends Component {
    constructor(props) {
        super(props);

        var today = new Date();
        var month = this.getMonthByIndex(today.getMonth());

        this.state = {
            todayDate: today.getDate() + " de " + month + " - " + today.getFullYear(),
            selectedClass: null,
            teacherClasses: [],
            relatedClasses: [],
            schoolYear: 0,
            classroom: "",
            school: "",
            calendar: {
                weeks: [
                    {},
                    {},
                    {},
                    {},
                    {}
                ]
            },
            students: [],
            learningObjectiveItems: [],
            annual: {
                classroomLabel: "",
                bimester1: [],
                bimester2: [],
                bimester3: [],
                bimester4: [],
                annualPlanningTextareaB1: "",
                annualPlanningTextareaB2: "",
                annualPlanningTextareaB3: "",
                annualPlanningTextareaB4: "",
            },
            knowledgeItems: [],
            sustainableDevItems: [],
            cycle: {
                name: "",
                description: "",
                knowledgeItems: [],
                sustainableDevItems: [],
                lastModifiedBy: "-"
            }
        }

        this.prepareCalendar = this.prepareCalendar.bind(this);
        this.setClassSchedule = this.setClassSchedule.bind(this);

        this.setAnnualPlan = this.setAnnualPlan.bind(this);
        this.saveAnnualPlan = this.saveAnnualPlan.bind(this);

        this.getMonthByIndex = this.getMonthByIndex.bind(this);
        this.getCycleName = this.getCycleName.bind(this);
        this.getCycleType = this.getCycleType.bind(this);
        this.setCycle = this.setCycle.bind(this);
        this.saveCyclePlan = this.saveCyclePlan.bind(this);

        this.selectedChange = this.selectedChange.bind(this);
        this.changeClass = this.changeClass.bind(this);
    }

    componentDidMount() {
        this.prepareCalendar();

        var url = '/api/Planejamento/CarregarTurmasProfessor?username=' + this.props.user.username;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                var result = []
                for (var i = 0; i < data.schools.length; i++) {
                    var schoolName = data.schools[i].name;

                    for (var j = 0; j < data.schools[i].classes.length; j++)
                        result.push({
                            year: data.schools[i].classes[j].year,
                            description: data.schools[i].classes[j].description,
                            school: schoolName,
                            label: data.schools[i].classes[j].description + " - " + schoolName
                        });
                }

                this.setState({ teacherClasses: result });
            });

        fetch('api/Planejamento/ListarMatrizSaberes')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ knowledgeItems: data });
            });

        fetch('api/Planejamento/ListarODS')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ sustainableDevItems: data });
            });
    }



    prepareCalendar() {
        var calendar = {
            weeks: []
        };
        var today = new Date();
        var week_day = today.getDay();
        today.setDate(today.getDate() - week_day);

        function getWeek(sunday) {
            var week = [];

            for (var i = 0; i < 7; i++) {
                let current = new Date(sunday);
                current.setDate(sunday.getDate() + i);
                week[i] = {};
                week[i].day = current.getDate();
                week[i].month = current.getMonth() + 1;
                week[i].year = current.getFullYear();

                if (i === 0)
                    week[i].workday = false;
                else
                    week[i].workday = true;

                week[i].name = current.getDate() + "-" + current.getMonth() + "-" + current.getFullYear();
            }

            return (week);
        }

        calendar.weeks[0] = getWeek(today);

        today.setDate(today.getDate() + 7);
        calendar.weeks[1] = getWeek(today);

        today.setDate(today.getDate() + 7);
        calendar.weeks[2] = getWeek(today);

        today.setDate(today.getDate() + 7);
        calendar.weeks[3] = getWeek(today);

        today.setDate(today.getDate() + 7);
        calendar.weeks[4] = getWeek(today);

        this.setState({ calendar: calendar });
    }

    setClassSchedule(schedule) {
        var model = {
            username: this.props.user.username,
            year: this.state.schoolYear,
            classroom: this.state.classroom,
            school: this.state.school,
            date: schedule.fullYear + "-" + schedule.month + "-" + schedule.day + " " + schedule.time,
            tagColor: schedule.color
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

        var calendar = this.state.calendar;
        for (var i = 0; i < calendar.weeks.length; i++)
            for (var j = 0; j < calendar.weeks[i].length; j++)
                if (calendar.weeks[i][j].day === schedule.day && calendar.weeks[i][j].month === schedule.month && calendar.weeks[i][j].year === schedule.fullYear) {
                    calendar.weeks[i][j].schedules.push({
                        color: schedule.color,
                        time: schedule.time,
                        name: this.state.classroom,
                        school: schedule.school,
                        day: schedule.day,
                        month: schedule.month,
                        fullYear: schedule.fullYear
                    });
                    break;
                }

        this.setState({ calendar: calendar });
    }



    setAnnualPlan(annual) {
        this.setState({ annual: annual });
    }

    saveAnnualPlan() {
        var model = {
            username: this.props.user.username,
            year: this.state.schoolYear,
            classroom: this.state.classroom,
            school: this.state.school,
            selectedLearningObjectivesB1: this.state.annual.bimester1.toString(),
            selectedLearningObjectivesB2: this.state.annual.bimester2.toString(),
            selectedLearningObjectivesB3: this.state.annual.bimester3.toString(),
            selectedLearningObjectivesB4: this.state.annual.bimester4.toString(),
            descriptionB1: this.state.annual.annualPlanningTextareaB1,
            descriptionB2: this.state.annual.annualPlanningTextareaB2,
            descriptionB3: this.state.annual.annualPlanningTextareaB3,
            descriptionB4: this.state.annual.annualPlanningTextareaB4
        };

        fetch('/api/Planejamento/SalvarPlanoAnual', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    alert("Plano de Ciclo salvo com sucesso!");
            });
    }



    getMonthByIndex(index) {
        switch (index) {
            default:
            case 0:
                return ("Janeiro");
            case 1:
                return ("Fevereiro");
            case 2:
                return ("Março");
            case 3:
                return ("Abril");
            case 4:
                return ("Maio");
            case 5:
                return ("Junho");
            case 6:
                return ("Julho");
            case 7:
                return ("Agosto");
            case 8:
                return ("Setembro");
            case 9:
                return ("Outubro");
            case 10:
                return ("Novembro");
            case 11:
                return ("Dezembro");
        }
    }

    getCycleName(schoolYear) {
        var cycleName = "";

        switch (schoolYear) {
            case 1:
            case 2:
            case 3:
                cycleName = "| Alfabetização";
                break;
            case 4:
            case 5:
            case 6:
                cycleName = "| Interdiciplinar";
                break;
            case 7:
            case 8:
            case 9:
                cycleName = "| Autoral";
                break;
            default:
                cycleName = "";
                break;
        }

        return (cycleName);
    }

    getCycleType(schoolYear) {
        var cycleType = -1;

        switch (schoolYear) {
            case 1:
            case 2:
            case 3:
                cycleType = 0;
                break;
            case 4:
            case 5:
            case 6:
                cycleType = 1;
                break;
            case 7:
            case 8:
            case 9:
                cycleType = 2;
                break;
            default:
                cycleType = -1;
                break;
        }

        return (cycleType);
    }

    setCycle(cycle) {
        this.setState({ cycle: cycle });
    }

    saveCyclePlan() {
        var knowledgeItems = [];
        for (var i = 0; i < this.state.cycle.knowledgeItems.length; i++)
            if (this.state.cycle.knowledgeItems[i].selected === true)
                knowledgeItems.push(this.state.cycle.knowledgeItems[i].sequence);

        var sustainableDevItems = [];
        for (var j = 0; j < this.state.cycle.sustainableDevItems.length; j++)
            if (this.state.cycle.sustainableDevItems[j].selected === true)
                sustainableDevItems.push(this.state.cycle.sustainableDevItems[j].sequence);

        var model = {
            school: this.state.school,
            type: this.getCycleType(this.state.schoolYear),
            description: this.state.cycle.description,
            selectedKnowledgeMatrix: knowledgeItems.toString(),
            selectedODS: sustainableDevItems.toString(),
            modifiedBy: this.props.user.username
        }

        fetch('/api/Planejamento/SalvarPlanoCiclo', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    alert("Plano de Ciclo salvo com sucesso!");
            });
    }



    selectedChange(selectedClass) {
        var relatedClasses = [];

        for (var i = 0; i < this.state.teacherClasses.length; i++)
            if (this.state.teacherClasses[i].description !== selectedClass.description && this.state.teacherClasses[i].year === selectedClass.year)
                relatedClasses.push(this.state.teacherClasses[i]);

        this.setState({
            selectedClass: selectedClass,
            relatedClasses: relatedClasses
        });
    }

    changeClass() {
        var planningModel = {
            username: this.props.user.username,
            schoolYear: this.state.selectedClass.year,
            classroom: this.state.selectedClass.description,
            school: this.state.selectedClass.school
        };


        // Carrega informações do Planejamento Anual (objetivos de aprendizagem) atrvés do ano letivo
        var url = "api/Planejamento/ListarObjetivosAprendizagem?ano=" + planningModel.schoolYear;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({
                    schoolYear: planningModel.schoolYear,
                    classroom: planningModel.classroom,
                    school: planningModel.school,
                    learningObjectiveItems: data
                });
            });



        // Carrega informações do Planejamento de Classe
        var classPlanModel = {
            username: planningModel.username,
            year: planningModel.schoolYear,
            classroom: planningModel.classroom,
            school: planningModel.school
        };
        fetch('/api/Planejamento/AbrirCalendarioAula', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(classPlanModel)
        })
            .then(data => {
                if (data.status === 200)
                    data.json().then(result => {
                        this.setState({ calendar: result });
                    });
            });
        fetch('/api/Planejamento/CarregarAlunosMock', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(classPlanModel)
        })
            .then(data => {
                if (data.status === 200)
                    data.json().then(result => {
                        this.setState({ students: result });
                    });
            });



        // Carrega informações do Planejamento Anual
        var annualPlanModel = {
            username: planningModel.username,
            year: planningModel.schoolYear,
            classroom: planningModel.classroom,
            school: planningModel.school
        };
        fetch('/api/Planejamento/AbrirPlanoAnual', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(annualPlanModel)
        })
            .then(data => {
                var index = planningModel.classroom.indexOf("-") + 1;
                var year = planningModel.classroom.substring(index, index + 1);
                ++index;
                var classroom = planningModel.classroom.substring(index, index + 1);

                if (data.status === 200) {
                    data.json().then(result => {
                        var annual = {
                            classroomLabel: year + "°" + classroom,
                            bimester1: result.selectedLearningObjectivesB1.split(","),
                            bimester2: result.selectedLearningObjectivesB2.split(","),
                            bimester3: result.selectedLearningObjectivesB3.split(","),
                            bimester4: result.selectedLearningObjectivesB4.split(","),
                            annualPlanningTextareaB1: result.descriptionB1,
                            annualPlanningTextareaB2: result.descriptionB2,
                            annualPlanningTextareaB3: result.descriptionB3,
                            annualPlanningTextareaB4: result.descriptionB4,
                        }

                        this.setState({ annual: annual });
                    });
                }
                
                if (data.status === 404) {
                    var annual = {
                        classroomLabel: year + "°" + classroom,
                        bimester1: [],
                        bimester2: [],
                        bimester3: [],
                        bimester4: [],
                        annualPlanningTextareaB1: "",
                        annualPlanningTextareaB2: "",
                        annualPlanningTextareaB3: "",
                        annualPlanningTextareaB4: "",
                    }

                    this.setState({ annual: annual });
                }
            });


        // Carrega informações do Planejamento de Ciclo
        var cyclePlanModel = {
            school: planningModel.school,
            type: this.getCycleType(planningModel.schoolYear)
        };
        fetch('/api/Planejamento/AbrirPlanoCiclo', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cyclePlanModel)
        })
            .then(data => {
                if (data.status === 200) {
                    data.json().then(result => {
                        var modifiedAt = new Date(result.modifiedAt);
                        var date = modifiedAt.getDate() > 9 ? modifiedAt.getDate() : "0" + modifiedAt.getDate();
                        date += "/";
                        date += (modifiedAt.getMonth() + 1) > 9 ? (modifiedAt.getMonth() + 1) : "0" + (modifiedAt.getMonth() + 1);
                        date += "/" + modifiedAt.getFullYear();

                        var cycle = {
                            name: this.getCycleName(planningModel.schoolYear),
                            description: result.description,
                            knowledgeItems: this.state.knowledgeItems,
                            sustainableDevItems: this.state.sustainableDevItems,
                            lastModifiedBy: result.modifiedBy + " | " + date
                        };

                        var knowledgeItems = result.selectedKnowledgeMatrix.split(",");
                        for (var i = 0; i < cycle.knowledgeItems.length; i++)
                            if (knowledgeItems.indexOf(cycle.knowledgeItems[i].sequence.toString()) >= 0)
                                cycle.knowledgeItems[i].selected = true;

                        var sustainableDevItems = result.selectedODS.split(",");
                        for (var j = 0; j < cycle.sustainableDevItems.length; j++)
                            if (sustainableDevItems.indexOf(cycle.sustainableDevItems[j].sequence.toString()) >= 0)
                                cycle.sustainableDevItems[j].selected = true;

                        this.setState({ cycle: cycle });
                    });
                }

                if (data.status === 404) {
                    var cycle = {
                        name: this.getCycleName(planningModel.schoolYear),
                        description: "",
                        knowledgeItems: this.state.knowledgeItems,
                        sustainableDevItems: this.state.sustainableDevItems,
                        lastModifiedBy: "-"
                    };

                    for (var i = 0; i < cycle.knowledgeItems.length; i++)
                        cycle.knowledgeItems[i].selected = false;

                    for (var j = 0; j < cycle.sustainableDevItems.length; j++)
                        cycle.sustainableDevItems[j].selected = false;

                    this.setState({ cycle: cycle });
                }
            });
    }

    render() {
        const { selectedClass } = this.state;
        const childProps = {
            todayDate: this.state.todayDate,
            getMonthByIndex: this.getMonthByIndex,
            year: this.state.schoolYear,
            classroom: this.state.classroom,
            school: this.state.school,
            user: this.props.user
        };

        return (
            <div id="homeRoot">
                <div id="breadcrumb">
                    <span className="titulo-breadcrumb">Você está em: &nbsp;</span>
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Home</button>
                    &gt;
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Registro de Classe</button>
                    &gt;
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Planejamento</button>
                </div>

                <div id="changeClass">
                    <div className="form-inline">

                        <Select id="changeClassTextBox" type="text" value={selectedClass} onChange={this.selectedChange} options={this.state.teacherClasses} />

                        <button type="submit" className="btn btn-primary btn-sm bt-breadcrumb-azul" onClick={this.changeClass} disabled={this.state.selectedClass === null}>Alterar turma</button>
                    </div>
                </div>

                <div id="curriculoContent">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="planoAula-tab" data-toggle="tab" href="#planoAula" role="tab" aria-controls="planoAula" aria-selected="true">Plano de Aula</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active azul-ux" id="planoAnual-tab" data-toggle="tab" href="#planoAnual" role="tab" aria-controls="planoAnual" aria-selected="false">Plano Anual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="planoCiclo-tab" data-toggle="tab" href="#planoCiclo" role="tab" aria-controls="planoCiclo" aria-selected="false">Plano de Ciclo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="documentos-tab" data-toggle="tab" href="#documentos" role="tab" aria-controls="documentos" aria-selected="false">Documentos</a>
                        </li>
                    </ul>
                    <div className="tab-content border-azul rounded" id="myTabContent">
                        <ClassPlan name="classPlan" calendar={this.state.calendar} students={this.state.students} setSchedule={this.setClassSchedule} relatedClasses={this.state.relatedClasses} annualPlan={this.state.annual} {...childProps} />

                        <AnnualPlan name="annualPlan" annual={this.state.annual} setAnnualPlan={this.setAnnualPlan} saveAnnualPlan={this.saveAnnualPlan} learningObjectiveItems={this.state.learningObjectiveItems} {...childProps} />

                        <CyclePlan name="cyclePlan" cycle={this.state.cycle} setCycle={this.setCycle} saveCyclePlan={this.saveCyclePlan} {...childProps} />

                        <div className="tab-pane fade border-0" id="documentos" role="tabpanel" aria-labelledby="documentos-tab">
                            <div className="container-tabpanel">
                                <h4 className="display-4">Em construção...</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}