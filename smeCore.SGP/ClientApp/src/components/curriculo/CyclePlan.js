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
        this.setState({
            SustainableDevItems: [
                { number: "1", description: "Erradicação da Pobreza" },
                { number: "2", description: "Fome zero e agricultura sustentável" },
                { number: "3", description: "Saúde e Bem Estar" },
                { number: "4", description: "Educação de Qualidade" },
                { number: "5", description: "Igualdade de Gênero" },
                { number: "6", description: "Água Potável e Saneamento" },
                { number: "7", description: "Energia Limpa e Acessível" },
                { number: "8", description: "Trabaljo decente e crescimento econômico" },
                { number: "9", description: "Indústria, inovação e infraestrutura" },
                { number: "10", description: "Redução das desigualdades" },
                { number: "11", description: "Cidades e comunidades sustentáveis" },
                { number: "12", description: "Consumo e produção responsáveis" },
                { number: "13", description: "Ação contra a mudança global do clima" },
                { number: "14", description: "Vida na água" },
                { number: "15", description: "Vida terrestre" },
                { number: "16", description: "Paz, justiça e instituições eficazes" },
                { number: "17", description: "Parcerias e meios de implementação" }
            ],
            KnowledgeItems: [
                { number: "1", description: "Pensamento Científico, Crítico e Criativo" },
                { number: "2", description: "Resolução de Problemas" },
                { number: "3", description: "Comunicação" },
                { number: "4", description: "Autoconhecimento e Autocuidado" },
                { number: "5", description: "Autonomia e Determinação" },
                { number: "6", description: "Abertura à Diversidade" },
                { number: "7", description: "Responsabilidade e Participação" },
                { number: "8", description: "Empatia e Colaboração" },
                { number: "9", description: "Repertório Cultural" },
            ]
        });
    }

    componentWillUnmount() {

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
                                <h5 className="font-weight-light color-purple">Matriz de saberes</h5>
                            </div>

                            <hr className="header-rule" />

                            <ul className="list-unstyled">
                                {this.state.KnowledgeItems.map(knowledgeItem => (
                                    <KnowledgeItem number={knowledgeItem.number} description={knowledgeItem.description} />
                                ))}
                            </ul>
                        </div>

                        <div className="col">
                            <div className="d-flex">
                                <h5 className="font-weight-light color-purple">Objetivos de Desenvolvimento Sustentável (ODS)</h5>
                            </div>

                            <hr className="header-rule" />

                            <ul className="list-unstyled">
                                {this.state.SustainableDevItems.map(sustainableDevItem => (
                                    <SustainableDevItem number={sustainableDevItem.number} description={sustainableDevItem.description} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
