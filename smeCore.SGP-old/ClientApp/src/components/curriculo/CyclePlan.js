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
            case 0:
                month = "Janeiro";
                break;
            case 1:
                month = "Fevereiro";
                break;
            case 2:
                month = "MarĂ§o";
                break;
            case 3:
                month = "Abril";
                break;
            case 4:
                month = "Maio";
                break;
            case 5:
                month = "Junho";
                break;
            case 6:
                month = "Julho";
                break;
            case 7:
                month = "Agosto";
                break;
            case 8:
                month = "Setembro";
                break;
            case 9:
                month = "Outubro";
                break;
            case 10:
                month = "Novembro";
                break;
            case 11:
                month = "Dezembro";
                break;
        }

        this.state = {
            SustainableDevItems: [],
            KnowledgeItems: [],
            today: today.getDate() + " de " + month + " - " + today.getFullYear(),
            title: ""
        };

        this.saveClick = this.saveClick.bind(this);
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

    saveClick() {
        if (this.props.year !== undefined) {
            var type = sessionStorage.getItem("cycleName");

            if (type === "Alfabetização")
                type = 0;
            else if (type === "Interdiciplinar")
                type = 1;
            else
                type = 2;

            var cycle = {
                school: this.props.school,
                userId: sessionStorage.getItem("username"),
                type: type,
                description: document.getElementById("cyclePlanning-textarea").value,
                selectedKnowledgeMatrix: "",
                selectedODS: "",
                modifiedBy: sessionStorage.getItem("username")
            };

            for (var i = 0; i < this.state.KnowledgeItems.length; i++)
                if (this.state.KnowledgeItems[i].selected === true) {
                    if (i === 0 || cycle.selectedKnowledgeMatrix === "")
                        cycle.selectedKnowledgeMatrix += "" + this.state.KnowledgeItems[i].sequence;
                    else
                        cycle.selectedKnowledgeMatrix += "," + this.state.KnowledgeItems[i].sequence;
                }

            for (var i = 0; i < this.state.SustainableDevItems.length; i++)
                if (this.state.SustainableDevItems[i].selected === true) {
                    if (i === 0 || cycle.selectedODS === "")
                        cycle.selectedODS += "" + this.state.SustainableDevItems[i].sequence;
                    else
                        cycle.selectedODS += "," + this.state.SustainableDevItems[i].sequence;
                }

            fetch('/api/Planejamento/SalvarPlanoCiclo', {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cycle)
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
    }

    getCycle() {
        if (sessionStorage.getItem("cyclePlanLoaded") === null) {
            var type = sessionStorage.getItem("cycleName");

            if (type === "Alfabetização")
                type = 0;
            else if (type === "Interdiciplinar")
                type = 1;
            else
                type = 2;

            var cycle = {
                school: this.props.school,
                type: type
            };

            fetch('/api/Planejamento/AbrirPlanoCiclo', {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cycle)
            })
                //.then(response => response.json())
                .then(data => {
                    if (data.status === 200) {
                        data.json().then(result => {
                            //var txt = "";
                            //for (var key in result)
                            //    txt += key + ": " + result[key] + "\n";
                            //alert(txt);
                            document.getElementById("cyclePlanning-textarea").value = result.description;

                            var selectedKnowledgeMatrix = result.selectedKnowledgeMatrix.split(",");
                            var knowledgeItems = this.state.KnowledgeItems;
                            for (var i = 0; i < knowledgeItems.length; i++)
                                if (selectedKnowledgeMatrix.indexOf(knowledgeItems[i].sequence) >= 0)
                                    knowledgeItems[i].selected = true;

                            var selectedODS = result.selectedODS.split(",");
                            var sustainableDevItems = this.state.SustainableDevItems;
                            for (var i = 0; i < sustainableDevItems.length; i++)
                                if (selectedODS.indexOf(sustainableDevItems[i].sequence) >= 0)
                                    sustainableDevItems[i].selected = true;

                            sessionStorage.setItem("cyclePlanLoaded", true);
                            this.setState({ KnowledgeItems: knowledgeItems, SustainableDevItems: sustainableDevItems });
                        });
                    }
                });
        }
    }

    render() {
        var title = this.props.year;

        if (title !== undefined) {
            if (title === "1" || title === "2" || title === "3")
                title = "Alfabetização";
            else if (title === "4" || title === "5" || title === "6")
                title = "Interdiciplinar";
            else if (title === "7" || title === "8" || title === "9")
                title = "Autoral";

            sessionStorage.setItem("cycleName", title);
            this.getCycle();
        }

        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoCiclo" role="tabpanel" aria-labelledby="planoCiclo-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <button className="btn btn-warning" onClick={this.saveClick}>Salvar</button>
                                <a className="nav-link disabled">Última acesso: Maria Blábláblá | 29/01/2019</a>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo | {title}</h5>
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