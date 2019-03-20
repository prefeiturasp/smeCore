import React, { Component } from 'react';
//import { RadioItem } from './RadioItem';
import { LearningObjectiveItem } from './LearningObjectiveItem';
import { ObjectiveItem } from './ObjectiveItem';
import './Bimester.css';

export class Bimester extends Component {
    constructor(props) {
        super(props);

        this.learningObjectiveItems = [];
        this.selectedLearningObjectiveItems = [];

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
            textareaName: "annualPlanningTextarea" + props.name,
            objectivesId: "myObjectives" + props.name,
            loadLearningObjectiveItems: true
        };

        this.changeIconEditar = this.changeIconEditar.bind(this);
    }

    changeIconEditar() {
        let imgSrc = this.state.imageSrc;
        if (imgSrc === '/img/Icon_editar.svg') {
            this.setState({ imageSrc: '/img/Icon_editar_outline.svg' })
        } else if (imgSrc === '/img/Icon_editar_outline.svg') {
            this.setState({ imageSrc: '/img/Icon_editar.svg' })
        }
    }

    learningObjectiveItemClick(item, e) {
        if (this.selectedLearningObjectiveItems.includes(item.code) === false) {
            this.selectedLearningObjectiveItems.push(item.code)
            var bimester = {
                selectedLearningObjectiveItems: this.selectedLearningObjectiveItems,
                textarea: document.getElementById(this.state.textareaName).value
            };
            this.props.setBimester(bimester);
        }
    }

    objectiveItemClick(item, e) {
        var removeIndex = this.selectedLearningObjectiveItems.indexOf(item);
        this.selectedLearningObjectiveItems.splice(removeIndex, 1);
        var bimester = {
            selectedLearningObjectiveItems: this.selectedLearningObjectiveItems,
            textarea: document.getElementById(this.state.textareaName).value
        };
        this.props.setBimester(bimester);
    }

    render() {
        if (this.props.learningObjectiveItems !== null) {
            this.learningObjectiveItems = this.props.learningObjectiveItems;
        }

        if (this.props.selected !== null && this.props.selected.length > 0) {
            this.selectedLearningObjectiveItems = [];

            for (var i = 0; i < this.learningObjectiveItems.length; i++) {
                if (this.props.selected.includes(this.learningObjectiveItems[i].code) === true) {
                    this.learningObjectiveItems[i].selected = true;
                    this.selectedLearningObjectiveItems.push(this.learningObjectiveItems[i].code);
                }
                else
                    this.learningObjectiveItems[i].selected = false;
            }
        }
        else {
            for (var i = 0; i < this.learningObjectiveItems.length; i++)
                this.learningObjectiveItems[i].selected = false;

            this.selectedLearningObjectiveItems = [];
        }

        return (
            <div className="w-auto shadows-box-bimester rounded">
                <button className="btn btn-outline-light btn-lg btn-block border-0" type="button" data-toggle="collapse" data-target={this.state.contentTarget} aria-expanded="false" aria-controls={this.state.contentId} onClick={this.changeIconEditar}>
                    <div className="d-flex align-items-center">
                        <img src={this.state.imageName} alt="bimester value" id={this.state.imageId} />

                        <div className="spacing"></div>

                        <span className="text-dark"><b>Bimestre</b></span>

                        <div className="d-flex flex-fill flex-row-reverse">
                            <img src={this.state.imageSrc} alt="edit icon" id={this.state.editId} />
                        </div>
                    </div>
                </button>

                <div className="collapse" id={this.state.contentId}>
                    <div className="card card-body border-0">
                        <div className="w-auto row">
                            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                <h5 className="">Objetivos de aprendizagem <img src="/img/Icon_duvida.svg" alt="help icon" id="helpIcon" data-toggle="tooltip" data-placement="top" title="Explicação sobre objetivos de aprendizagem" /></h5>

                                <ul className="list-unstyled">
                                    {this.learningObjectiveItems !== null && this.learningObjectiveItems.map(learningObjectiveItem => (
                                        <LearningObjectiveItem key={learningObjectiveItem.code} father={this.props.name} name={learningObjectiveItem.code} description={learningObjectiveItem.description} itemClick={this.learningObjectiveItemClick.bind(this, learningObjectiveItem)} selected={learningObjectiveItem.selected} />
                                    ))}
                                </ul>
                            </div>

                            <div className="col-12 col-md-6 col-lg-6 col-xl-6">
                                <div id={this.state.objectivesId}>
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Meus Objetivos (Currículo)</h5>

                                        <div className="d-flex flex-fill flex-row-reverse">
                                            <span className="font-weight-lighter font-italic text-muted">Itens selecionados</span>
                                        </div>
                                    </div>

                                    <hr className="header-rule" />

                                    <div>
                                        <ul className="list-unstyled form-inline">
                                            {this.selectedLearningObjectiveItems !== null && this.selectedLearningObjectiveItems.map(objectiveItem => (
                                                <ObjectiveItem key={objectiveItem} name={objectiveItem} itemClick={this.objectiveItemClick.bind(this, objectiveItem)} />
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div id="annualPlanning">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Planejamento Anual</h5>

                                        <div className="d-flex flex-fill flex-row-reverse">
                                            <span className="font-weight-lighter font-italic text-muted">Itens autorais do professor</span>
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

                                        <textarea className="form-control" rows="5" id={this.state.textareaName} value={this.props.textarea} onChange={this.props.textareaChange}></textarea>
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