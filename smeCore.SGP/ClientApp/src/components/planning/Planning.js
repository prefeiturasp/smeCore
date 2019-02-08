import React, { Component } from 'react';
import './Planning.css';
import { CyclePlan } from './CyclePlan';
import { AnnualPlan } from './AnnualPlan';
import { ClassPlan } from './ClassPlan';
import Select from 'react-select';

export default class Planning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedClass: null,
            myClasses: [],
            year: 0,
            classroom: "",
            school: "",
            learningObjectiveItems: []
        }

        this.getMonthByIndex = this.getMonthByIndex.bind(this);
        this.selectedChange = this.selectedChange.bind(this);
        this.changeClass = this.changeClass.bind(this);
    }

    componentDidMount() {
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

                this.setState({ myClasses: result });
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
                return ("MarĂ§o");
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

    selectedChange(selectedClass) {
        this.setState({ selectedClass: selectedClass });
    }

    changeClass() {
        var url = "api/Planejamento/ListarObjetivosAprendizagem?ano=" + this.state.selectedClass.year;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({
                    year: this.state.selectedClass.year,
                    classroom: this.state.selectedClass.description,
                    school: this.state.selectedClass.school,
                    learningObjectiveItems: data
                });
            });
    }

    render() {
        const { selectedClass } = this.state;
        const childProps = {
            getMonthByIndex: this.getMonthByIndex,
            year: this.state.year,
            classroom: this.state.classroom,
            school: this.state.school
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

                        <Select id="changeClassTextBox" type="text" value={selectedClass} onChange={this.selectedChange} options={this.state.myClasses} />

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
                    <div className="tab-content border-azul" id="myTabContent">
                        <ClassPlan name="classPlan" {...childProps} />

                        <AnnualPlan name="annualPlan" learningObjectiveItems={this.state.learningObjectiveItems} {...childProps} />

                        <CyclePlan name="cyclePlan" {...childProps} />

                        <div className="tab-pane fade border-left border-right border-bottom" id="documentos" role="tabpanel" aria-labelledby="documentos-tab">
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