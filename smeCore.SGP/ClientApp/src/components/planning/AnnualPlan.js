﻿import React, { Component } from 'react';
import { Bimester } from './Bimester';
import './AnnualPlan.css';

export class AnnualPlan extends Component {
    constructor(props) {
        super(props);

        var today = new Date();
        var month = props.getMonthByIndex(today.getMonth());

        this.state = {
            id: props.name + "Item",
            today: today.getDate() + " de " + month + " - " + today.getFullYear(),
            classroom: "",
            learningObjectiveItems: [],
            loadLearningObjectives: true,
            bimester1: null,
            bimester2: null,
            bimester3: null,
            bimester4: null,
            annualPlanningTextareaB1: "",
            annualPlanningTextareaB2: "",
            annualPlanningTextareaB3: "",
            annualPlanningTextareaB4: "",
        };

        this.getClassroom = this.getClassroom.bind(this);
        this.setBimester1 = this.setBimester1.bind(this);
        this.setBimester2 = this.setBimester2.bind(this);
        this.setBimester3 = this.setBimester3.bind(this);
        this.setBimester4 = this.setBimester4.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveButtonClick = this.saveButtonClick.bind(this);
    }

    getClassroom(value, childProps) {
        var index = value.indexOf("-") + 1;
        var year = value.substring(index, index + 1);
        ++index;
        var classroom = value.substring(index, index + 1);

        childProps = {
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            learningObjectiveItems: this.props.learningObjectiveItems,
            classroomLabel: year + "°" + classroom
        };

        return (childProps);
    }

    setBimester1(bimester) {
        this.setState({ bimester1: bimester.selectedLearningObjectiveItems });
    }

    setBimester2(bimester) {
        this.setState({ bimester2: bimester.selectedLearningObjectiveItems });
    }

    setBimester3(bimester) {
        this.setState({ bimester3: bimester.selectedLearningObjectiveItems });
    }

    setBimester4(bimester) {
        this.setState({ bimester4: bimester.selectedLearningObjectiveItems });
    }

    onChangeDescription(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    saveButtonClick() {
        var model = {
            username: this.props.user.username,
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            selectedLearningObjectivesB1: this.state.bimester1,
            selectedLearningObjectivesB2: this.state.bimester2,
            selectedLearningObjectivesB3: this.state.bimester3,
            selectedLearningObjectivesB4: this.state.bimester4,
            annualPlanningTextareaB1: this.state.annualPlanningTextareaB1,
            annualPlanningTextareaB2: this.state.annualPlanningTextareaB2,
            annualPlanningTextareaB3: this.state.annualPlanningTextareaB3,
            annualPlanningTextareaB4: this.state.annualPlanningTextareaB4
        };

        fetch('/api/Planejamento/SalvarPlanoAnual', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            //.then(response => response.json())
            .then(data => {
                //var txt = "";
                //for (var key in data)
                //    txt += key + ": " + data[key] + "\n";
                //alert(txt);

                if (data.status === 200)
                    alert("Plano de Ciclo salvo com sucesso!");
            });
    }

    render() {
        var childProps = {
            year: this.props.year,
            classroom: this.props.classroom,
            school: this.props.school,
            learningObjectiveItems: null,
            classroomLabel: ""
        };

        if (this.props.classroom !== "")
            childProps = this.getClassroom(this.props.classroom);

        return (
            <div className="tab-pane fade show active border-left border-right border-bottom" id="planoAnual" role="tabpanel" aria-labelledby="planoAnual-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm border-azul font-color-black">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <button className="btn btn-warning text-white" onClick={this.saveButtonClick} disabled={this.props.year <= 0}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="planoAnual-info" className="container-tabpanel-content">
                    <div className="form-inline">
                        <h5>Plano anual {childProps.classroomLabel}</h5>
                    </div>

                    <div className="vertical-spacing"></div>

                    <Bimester name="B1" image="1bimestre" setBimester={this.setBimester1} selected={this.state.bimester1} textarea={this.state.annualPlanningTextareaB1} textareaChange={this.onChangeDescription} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B2" image="2bimestre" setBimester={this.setBimester2} selected={this.state.bimester2} textarea={this.state.annualPlanningTextareaB2} textareaChange={this.onChangeDescription} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B3" image="3bimestre" setBimester={this.setBimester3} selected={this.state.bimester3} textarea={this.state.annualPlanningTextareaB3} textareaChange={this.onChangeDescription} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B4" image="4bimestre" setBimester={this.setBimester4} selected={this.state.bimester4} textarea={this.state.annualPlanningTextareaB4} textareaChange={this.onChangeDescription} {...childProps} />
                </div>
            </div>
        );
    }
}