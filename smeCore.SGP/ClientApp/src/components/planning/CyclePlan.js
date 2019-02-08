import React, { Component } from 'react';
import './CyclePlan.css';
import { KnowledgeItem } from './KnowledgeItem';
import { SustainableDevItem } from './SustainableDevItem';

export class CyclePlan extends Component {
    constructor(props) {
        super(props);

        var today = new Date();
        var month = props.getMonthByIndex(today.getMonth());

        this.state = {
            SustainableDevItems: [],
            KnowledgeItems: [],
            today: today.getDate() + " de " + month + " - " + today.getFullYear(),
            title: "",
            lastModifiedBy: "Maria Blábláblá | 29/01/2019"
        };

        this.saveButtonClick = this.saveButtonClick.bind(this);
    }

    componentDidMount() {
        fetch('api/Planejamento/ListarMatrizSaberes')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ KnowledgeItems: data, loading: false });
            });

        fetch('api/Planejamento/ListarODS')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ SustainableDevItems: data, loading: false });
            });
    }

    knowledgeItemClick(item, e) {
        let data = this.state.KnowledgeItems;

        for (var i = 0; i < data.length; i++)
            if (data[i].sequence === item.sequence) {
                data[i].selected = !data[i].selected;
                break;
            }

        this.setState({ KnowledgeItems: data });
    }

    sustainableDevItemClick(item, e) {
        let data = this.state.SustainableDevItems;

        for (var i = 0; i < data.length; i++)
            if (data[i].sequence === item.sequence) {
                data[i].selected = !data[i].selected;
                break;
            }

        this.setState({ SustainableDevItems: data });
    }

    saveButtonClick() {
        alert("not implemented");
    }

    render() {
        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoCiclo" role="tabpanel" aria-labelledby="planoCiclo-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <span className="text-muted">Última acesso: {this.state.lastModifiedBy}</span>&nbsp;
                                <button className="btn btn-warning" onClick={this.saveButtonClick} disabled={this.props.year <= 0}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo | planoDeCiclo</h5>
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
                            <textarea className="form-control" rows="5" id="cyclePlanning-textarea"></textarea>
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
                                        {this.state.KnowledgeItems.map(knowledgeItem => (
                                            <KnowledgeItem sequence={knowledgeItem.sequence} title={knowledgeItem.title} selected={knowledgeItem.selected} buttonClick={this.knowledgeItemClick.bind(this, knowledgeItem)} />
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-6 col-md-12 col-lg-6 col-xl-6">
                                    <div className="d-flex">
                                        <h5 className="font-weight-light text-color-purple">Objetivos de Desenvolvimento Sustentável (ODS)</h5>
                                    </div>

                                    <hr className="header-rule" />

                                    <ul className="list-unstyled">
                                        {this.state.SustainableDevItems.map(sustainableDevItem => (
                                            <SustainableDevItem sequence={sustainableDevItem.sequence} name={sustainableDevItem.name} selected={sustainableDevItem.selected} buttonClick={this.sustainableDevItemClick.bind(this, sustainableDevItem)} />
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