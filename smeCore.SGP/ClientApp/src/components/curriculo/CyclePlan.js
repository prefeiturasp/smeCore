import React, { Component } from 'react';
import { KnowledgeItem } from './KnowledgeItem';
import { SustainableDevItem } from './SustainableDevItem';
import './CyclePlan.css';

export class CyclePlan extends Component {
    constructor(props) {
        super(props);

        let today = new Date();
        let month = today.getMonth();

        switch (month) {
            default:
            case "0":
                month = "Janeiro";
                break;
            case "1":
                month = "Fevereiro";
                break;
            case "2":
                month = "Março";
                break;
            case "3":
                month = "Abril";
                break;
            case "4":
                month = "Maio";
                break;
            case "5":
                month = "Junho";
                break;
            case "6":
                month = "Julho";
                break;
            case "7":
                month = "Agosto";
                break;
            case "8":
                month = "Setembro";
                break;
            case "9":
                month = "Outubro";
                break;
            case "10":
                month = "Novembro";
                break;
            case "11":
                month = "Dezembro";
                break;
        }

        this.state = {
            SustainableDevItems: [],
            KnowledgeItems: [],
            today: today.getDate() + " de " + month + " - " + today.getFullYear()
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
                        <button className="btn btn-outline-primary btn-sm">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <a className="nav-link disabled">Salvamento automático...</a>
                                <a className="nav-link disabled">Última acesso: Maria Blábláblá | 29/01/2019</a>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo</h5>
                    </div>


                    <div className="vertical-spacing-2" />

                    <div className="row">

                        <div className="col-12 col-md-6 col-lg-6 col-xl-6">

                            <div className="col-12">
                                <div className="row">
                                    <span className="small-text">Este é um espaço para construção coletiva</span>
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

                                    <span className="small-text">Este é um espaço para construção coletiva</span>
                                    <br />
                                    <span className="small-text">Levem em consideração os diversos ritmos de aprendizagem para planejar e traçar o percurso de cada Ciclo de Aprendizagem</span>


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
                                            <KnowledgeItem sequence={knowledgeItem.sequence} title={knowledgeItem.title} selected={knowledgeItem.selected} buttonClick={this.knowledgeItemClick.bind(this, knowledgeItem)}/>
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
