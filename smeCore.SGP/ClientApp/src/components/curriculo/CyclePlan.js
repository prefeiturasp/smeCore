import React, { Component } from 'react';
import { KnowledgeItem } from './KnowledgeItem';
import { SustainableDevItem } from './SustainableDevItem';
import './CyclePlan.css';

export class CyclePlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            SustainableDevItems: [],
            KnowledgeItems: []
        };
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

    componentWillUnmount() {

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

    render() {
        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoCiclo" role="tabpanel" aria-labelledby="planoCiclo-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">Hoje</button>

                        <div className="spacing"></div>

                        <div className="btn-group" role="group" arial-label="Change day control">
                            <button type="button" className="btn btn-outline-secondary btn-sm sem-border">&lt;</button>
                            <button type="button" className="btn btn-outline-secondary btn-sm sem-border">&gt;</button>
                        </div>
                        &nbsp;
                        <button className="btn btn-sm">2019</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <a className="nav-link disabled">Salvamento automático...</a>
                                <button className="btn">Pesquisar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo</h5>
                    </div>

                    <div className="vertical-spacing" />

                    <span className="small-text">Este é um espaço para construção coletiva</span>
                    <br />
                    <span className="small-text">Levem em consideração os diversos ritmos de aprendizagem para planejar e traçar o percurso de cada Ciclo de Aprendizagem</span>

                    <div className="vertical-spacing-2" />

                    <div className="row">
                        <div className="col">
                            <textarea className="form-control" rows="5" id="cyclePlanning-textarea"></textarea>
                        </div>

                        <div className="col-3">
                            <div className="d-flex">
                                <h5 className="font-weight-light text-color-purple">Matriz de saberes</h5>
                            </div>

                            <hr className="header-rule" />

                            <ul className="list-unstyled">
                                {this.state.KnowledgeItems.map(knowledgeItem => (
                                    <KnowledgeItem sequence={knowledgeItem.sequence} title={knowledgeItem.title} selected={knowledgeItem.selected} buttonClick={this.knowledgeItemClick.bind(this, knowledgeItem)}/>
                                ))}
                            </ul>
                        </div>

                        <div className="col">
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
        );
    }
}
