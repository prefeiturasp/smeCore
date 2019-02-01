import React, { Component } from 'react';
import { RadioItem } from './RadioItem';
import { LearningObjectiveItem } from './LearningObjectiveItem';
import { ObjectiveItem } from './ObjectiveItem';
import './Bimester.css';

export class Bimester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageName: "/img/Icon_" + props.image + ".svg",
            imageSrc: "/img/Icon_editar.svg",
            imageId: props.image + "Icon",
            editId: props.name + "Edit",
            contentId: "collapse" + props.name,
            contentTarget: "#collapse" + props.name,
            radioControlName: props.name + "RadioControl",
            subjects: [],
            learningObjectiveItems: [],
            objectiveItems: [],
            lastYearValue: "0",
            textareaName: "annualPlanning-textarea" + props.name,
            objectivesId: "myObjectives" + props.name
        };

        this.changeIconEditar = this.changeIconEditar.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    learningObjectiveItemClick(item, e) {
        let data = this.state.objectiveItems;
        let found = false;

        for (var i = 0; i < data.length; i++)
            if (data[i].name === item.code) {
                found = true;
                break;
            }

        if (found === false) {
            data.push({ name: item.code });

            let learningObjectiveData = this.state.learningObjectiveItems;
            for (var j = 0; j < learningObjectiveData.length; j++)
                if (learningObjectiveData[j].code === item.code) {
                    learningObjectiveData[j].selected = true;
                    break;
                }

            this.setState({ learningObjectiveItems: learningObjectiveData, objectiveItems: data });
        }
    }

    objectiveItemClick(item, e) {
        let data = [];

        for (var i = 0; i < this.state.objectiveItems.length; i++)
            if (this.state.objectiveItems[i].name !== item.name)
                data.push({ name: this.state.objectiveItems[i].name });

        let learningObjectiveData = this.state.learningObjectiveItems;
        for (var j = 0; j < learningObjectiveData.length; j++)
            if (learningObjectiveData[j].code === item.name) {
                learningObjectiveData[j].selected = false;
                break;
            }

        this.setState({ learningObjectiveItems: learningObjectiveData, objectiveItems: data });
    }

    changeIconEditar() {
        let imgSrc = this.state.imageSrc;
        if (imgSrc === '/img/Icon_editar.svg') {
            this.setState({ imageSrc: '/img/Icon_editar_outline.svg' })
        } else if (imgSrc === '/img/Icon_editar_outline.svg') {
            this.setState({ imageSrc: '/img/Icon_editar.svg' })
        }
    }

    render() {
        var year = this.props.year;

        if (year !== undefined && this.state.lastYearValue !== year) {
            var url = "api/Planejamento/ListarObjetivosAprendizagem?ano=" + year;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    for (var i = 0; i < data.length; i++)
                        data[i].selected = false;

                    this.setState({ learningObjectiveItems: data, lastYearValue: year });
                });
        }

        return (
            <div className="w-auto shadows-box-bimester rounded">
                <button className="btn btn-outline-light btn-lg btn-block border-0" type="button" data-toggle="collapse" data-target={this.state.contentTarget} aria-expanded="false" aria-controls={this.state.contentId}>
                    <div className="d-flex align-items-center">
                        <img src={this.state.imageName} alt="bimester value" id={this.state.imageId} />

                        <div className="spacing"></div>

                        <span className="text-dark"><b>Bimestre</b></span>

                        <div className="d-flex flex-fill flex-row-reverse">
                            <img src={this.state.imageSrc} alt="edit icon" id={this.state.editId} onClick={this.changeIconEditar} />
                        </div>
                    </div>
                </button>

                <div className="collapse" id={this.state.contentId}>
                    <div className="card card-body border-0">
                        <div className="w-auto row">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                <h5 className="">Objetivos de aprendizagem <img src="/img/Icon_duvida.svg" alt="help icon" id="helpIcon" data-toggle="tooltip" data-placement="top" title="Explicação sobre objetivos de aprendizagem" /></h5>

                                <ul className="list-unstyled">
                                    {this.state.learningObjectiveItems.map(learningObjectiveItem => (
                                        <LearningObjectiveItem name={learningObjectiveItem.code} description={learningObjectiveItem.description} itemClick={this.learningObjectiveItemClick.bind(this, learningObjectiveItem)} selected={learningObjectiveItem.selected} />
                                    ))}
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                <div id={this.state.objectivesId}>
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Meus Objetivos (Currículo)</h5>

                                        <div className="d-flex flex-fill flex-row-reverse">
                                            <span className="font-weight-lighter font-italic">Itens selecionados</span>
                                        </div>
                                    </div>

                                    <hr className="header-rule" />

                                    <div>
                                        <ul className="list-unstyled form-inline">
                                            {this.state.objectiveItems.map(objectiveItem => (
                                                <ObjectiveItem name={objectiveItem.name} itemClick={this.objectiveItemClick.bind(this, objectiveItem)} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div id="annualPlanning">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Planejamento Anual</h5>

                                        <div className="d-flex flex-fill flex-row-reverse">
                                            <span className="font-weight-lighter font-italic">Itens autorais do professor</span>
                                        </div>
                                    </div>

                                    <hr className="header-rule" />

                                    <div>
                                        <span className="font-weight-light">É importante seguir a seguinte estrutura:</span>
                                        <ul className="annualPlanningRules">
                                            <li>Objetivos</li>
                                            <li>Conteúdo</li>
                                            <li>Estratégia</li>
                                            <li>Avaliação</li>
                                        </ul>

                                        <textarea className="form-control" rows="5" id={this.state.textareaName}></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}