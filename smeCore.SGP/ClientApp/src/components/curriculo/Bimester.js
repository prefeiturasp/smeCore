import React, { Component } from 'react';
import { RadioItem } from './RadioItem';
import { LearningObjectiveItem } from './LearningObjectiveItem';
import { MyObjectiveItem } from './MyObjectiveItem';
import './Bimester.css';

export class Bimester extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageName: "/img/Icon_" + props.image + ".svg",
            imageId: props.image + "Icon",
            editId: props.name + "Edit",
            contentId: "collapse" + props.name,
            contentTarget: "#collapse" + props.name,
            radioControlName: props.name + "RadioControl",
            subjects: [],
            learningObjectiveItems: [],
            myObjectiveItems: []
        };
    }

    componentDidMount() {
        this.setState({
            subjects: [
                { label: "Ciências", value: "ciencias" },
                { label: "Ling. Port.", value: "portugues" },
                { label: "História", value: "hsitoria" },
                { label: "Geografia", value: "geografia" },
                { label: "Matemática", value: "matemativa" },
            ],
            learningObjectiveItems: [
                { name: "EF02M01", description: "Explorar números no contexto diário como indicadores de quantidade, ordem, medida e código; ler e produzir escritas numéricas, identificando algumas regularidades do sistema de numeração decimal" },
                { name: "EF02M02", description: "Compor e decompor números naturais de diversas maneiras" },
                { name: "EF02M03", description: "Explorar diferentes estratégias para quantificar elementos de uma coleção: contagem uma um, formação de pares, agrupamentos e estimativas" },
                { name: "EF02M04", description: "Explorar números no contexto diário como indicadores de quantidade, ordem, medida e código; ler e produzir escritas numéricas, identificando algumas regularidades do sistema de numeração decimal" },
                { name: "EF02M05", description: "Compor e decompor números naturais de diversas maneiras" },
                { name: "EF02M06", description: "Explorar diferentes estratégias para quantificar elementos de uma coleção: contagem uma um, formação de pares, agrupamentos e estimativas" },
                { name: "EF02M07", description: "Compor e decompor números naturais de diversas maneiras" },
            ],
            myObjectiveItems: [
                { name:"EF02M05", date:"04/03/2018" }
            ]
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="w-auto shadows-box-bimester rounded">
                <button className="btn btn-outline-light btn-lg btn-block border-0" type="button" data-toggle="collapse" data-target={this.state.contentTarget} aria-expanded="false" aria-controls={this.state.contentId}>
                    <div className="d-flex align-items-center">
                        <img src={this.state.imageName} alt="bimester value" id={this.state.imageId} />

                        <div className="spacing"></div>

                        <span className="text-dark"><b>Bimestre</b></span>

                        <div className="d-flex flex-fill flex-row-reverse">
                            <img src="/img/Icon_editar.svg" alt="edit icon" id={this.state.editId} />

                            <div className="spacing"></div>

                            <span className="text-dark">0% completo</span>
                        </div>
                    </div>
                </button>

                <div className="collapse" id={this.state.contentId}>
                    <div className="card card-body border-0">
                        <div className="form-inline">
                            {this.state.subjects.map(subjectItem => (
                                <RadioItem name={this.props.name} label={subjectItem.label} value={subjectItem.value} />
                            ))}
                        </div>

                        <div className="vertical-spacing"></div>

                        <div className="w-auto row">
                            <div className="col">
                                <h5 className="">Objetivos de aprendizagem <img src="/img/Icon_duvida.svg" alt="help icon" id="helpIcon" data-toggle="tooltip" data-placement="top" title="Explicação sobre objetivos de aprendizagem" /></h5>

                                <ul className="list-unstyled">
                                    {this.state.learningObjectiveItems.map(learningObjectiveItem => (
                                        <LearningObjectiveItem name={learningObjectiveItem.name} description={learningObjectiveItem.description} />
                                    ))}
                                </ul>
                            </div>

                            <div className="col">
                                <div id="myObjectives">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Meus Objetivos (Currículo)</h5>

                                        <div className="d-flex flex-fill flex-row-reverse">
                                            <span className="font-weight-lighter font-italic">Itens selecionados</span>
                                        </div>
                                    </div>

                                    <hr className="header-rule" />

                                    <div>
                                        <ul className="list-unstyled">
                                            {this.state.myObjectiveItems.map(myObjectiveItem => (
                                                <MyObjectiveItem name={myObjectiveItem.name} date={myObjectiveItem.date} parent={this.props.name} />     
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

                                        <textarea className="form-control" rows="5" id="annualPlanning-textarea"></textarea>
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