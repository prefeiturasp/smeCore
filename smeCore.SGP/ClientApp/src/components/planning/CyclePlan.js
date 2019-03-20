import React, { Component } from 'react';
import './CyclePlan.css';
import { KnowledgeItem } from './KnowledgeItem';
import { SustainableDevItem } from './SustainableDevItem';

export class CyclePlan extends Component {
    constructor(props) {
        super(props);

        this.isLoaded = false;

        this.state = {
            cyclePlanningDescription: "",
            lastModifiedBy: "Maria Blábláblá | 29/01/2019"
        };

        this.onTextChange = this.onTextChange.bind(this);
    }

    knowledgeItemClick(item, e) {
        var cycle = this.props.cycle;
        for (var i = 0; i < cycle.knowledgeItems.length; i++)
            if (cycle.knowledgeItems[i].sequence === item.sequence) {
                cycle.knowledgeItems[i].selected = !cycle.knowledgeItems[i].selected;
                break;
            }

        this.props.setCycle(cycle);
    }

    sustainableDevItemClick(item, e) {
        var cycle = this.props.cycle;
        for (var i = 0; i < cycle.sustainableDevItems.length; i++)
            if (cycle.sustainableDevItems[i].sequence === item.sequence) {
                cycle.sustainableDevItems[i].selected = !cycle.sustainableDevItems[i].selected;
                break;
            }

        this.props.setCycle(cycle);
    }

    onTextChange(event) {
        var cycle = this.props.cycle;
        cycle.description = event.target.value;

        this.props.setCycle(cycle);
    }

    render() {
        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoCiclo" role="tabpanel" aria-labelledby="planoCiclo-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">{this.props.todayDate}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">

                                <span className="text-muted text-color-purple px-2">Última acesso: {this.props.cycle.lastModifiedBy}</span>&nbsp;

                                <button className="btn btn-warning text-white" onClick={this.props.saveCyclePlan} disabled={this.props.year <= 0}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo {this.props.cycle.name}</h5>
                    </div>

                    <div className="vertical-spacing-2" />

                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">

                            <div className="col-12">
                                <div className="row">
                                    <span className="small-text">Este é um espaço para construção coletiva.</span>
                                    <br />
                                    <span className="small-text">Levem em consideração os diversos ritmos de aprendizagem para planejar e traçar o percurso de cada Ciclo de Aprendizagem</span>
                                </div>
                            </div>

                            <div className="vertical-spacing" />

                            <textarea className="form-control" rows="5" id="cyclePlanningDescription" value={this.props.cycle.description} onChange={this.onTextChange}></textarea>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">

                            <div className="row">

                                <div className="col-12">

                                    <span className="small-text">Considerando as especificidades de cada Ciclo dessa Unidade Escolar e o Currículo da Cidade, selecione os itens da Matriz do Saber e dos Objetivos de Desenvolvimento e Sustentabilidade
                                    que contemplam as propostas que planejaram:</span>
                                    <br />

                                </div>

                                <div className="col-12">
                                    <div className="vertical-spacing" />
                                </div>

                                <div className="col-6 col-md-12 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Matriz de saberes</h5>
                                    </div>

                                    <hr className="header-rule" />

                                    <ul className="list-unstyled">
                                        {this.props.cycle.knowledgeItems.map(knowledgeItem => (
                                            <KnowledgeItem key={knowledgeItem.sequence} sequence={knowledgeItem.sequence} title={knowledgeItem.title} selected={knowledgeItem.selected} buttonClick={this.knowledgeItemClick.bind(this, knowledgeItem)} />
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-6 col-md-12 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Objetivos de Desenvolvimento Sustentável (ODS)</h5>
                                    </div>

                                    <hr className="header-rule" />

                                    <ul className="list-unstyled">
                                        {this.props.cycle.sustainableDevItems.map(sustainableDevItem => (
                                            <SustainableDevItem key={sustainableDevItem.sequence} sequence={sustainableDevItem.sequence} name={sustainableDevItem.name} selected={sustainableDevItem.selected} buttonClick={this.sustainableDevItemClick.bind(this, sustainableDevItem)} />
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}