import React, { Component } from 'react';
import './CyclePlan.css';
import { KnowledgeItem } from './KnowledgeItem';
import { SustainableDevItem } from './SustainableDevItem';

export class CyclePlan extends Component {
    constructor(props) {
        super(props);

        var today = new Date();
        var month = props.getMonthByIndex(today.getMonth());

        this.isLoaded = false;

        this.state = {
            cyclePlanningDescription: "",
            SustainableDevItems: [],
            KnowledgeItems: [],
            today: today.getDate() + " de " + month + " - " + today.getFullYear(),
            title: "",
            lastModifiedBy: "Maria Blábláblá | 29/01/2019"
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.getCycleName = this.getCycleName.bind(this);
        this.getCycleType = this.getCycleType.bind(this);
        this.saveButtonClick = this.saveButtonClick.bind(this);
    }

    componentDidMount() {
        fetch('api/Planejamento/ListarMatrizSaberes')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ KnowledgeItems: data });
            });

        fetch('api/Planejamento/ListarODS')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; i++)
                    data[i].selected = false;

                this.setState({ SustainableDevItems: data });
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

    onTextChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    getCycleName() {
        var cycleName = "";

        switch (this.props.year) {
            case 1:
            case 2:
            case 3:
                cycleName = "| Alfabetização";
                break;
            case 4:
            case 5:
            case 6:
                cycleName = "| Interdiciplinar";
                break;
            case 7:
            case 8:
            case 9:
                cycleName = "| Autoral";
                break;
            default:
                cycleName = "";
                break;
        }

        if (cycleName !== "")
            this.loadData();

        return (cycleName);
    }

    getCycleType() {
        var cycleType = -1;

        switch (this.props.year) {
            case 1:
            case 2:
            case 3:
                cycleType = 0;
                break;
            case 4:
            case 5:
            case 6:
                cycleType = 1;
                break;
            case 7:
            case 8:
            case 9:
                cycleType = 2;
                break;
            default:
                cycleType = -1;
                break;
        }

        return (cycleType);
    }

    saveButtonClick() {
        var knowledgeItems = [];
        for (var i = 0; i < this.state.KnowledgeItems.length; i++)
            if (this.state.KnowledgeItems[i].selected === true)
                knowledgeItems.push(this.state.KnowledgeItems[i].sequence);

        var sustainableDevItems = [];
        for (var i = 0; i < this.state.SustainableDevItems.length; i++)
            if (this.state.SustainableDevItems[i].selected === true)
                sustainableDevItems.push(this.state.KnowledgeItems[i].sequence);

        var model = {
            school: this.props.school,
            type: this.getCycleType(),
            description: this.state.cyclePlanningDescription,
            selectedKnowledgeMatrix: knowledgeItems.toString(),
            selectedODS: sustainableDevItems.toString(),
            modifiedBy: this.props.user.username
        }

        fetch('/api/Planejamento/SalvarPlanoCiclo', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200)
                    alert("Plano de Ciclo salvo com sucesso!");
            });
    }

    loadData() {
        var model = {
            school: this.props.school,
            type: this.getCycleType()
        };

        fetch('/api/Planejamento/AbrirPlanoCiclo', {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(model)
        })
            .then(data => {
                if (data.status === 200) {
                    data.json().then(result => {
                        var auxKnowledgeItems = this.state.KnowledgeItems;
                        var KnowledgeItems = result.selectedKnowledgeMatrix.split(",");
                        var auxSustainableDevItems = this.state.SustainableDevItems;
                        var SustainableDevItems = result.selectedODS.split(",");

                        for (var i = 0; i < auxKnowledgeItems.length; i++)
                            if (KnowledgeItems.indexOf(auxKnowledgeItems[i].sequence.toString()) >= 0)
                                auxKnowledgeItems[i].selected = true;

                        for (var i = 0; i < auxSustainableDevItems.length; i++)
                            if (SustainableDevItems.indexOf(auxSustainableDevItems[i].sequence.toString()) >= 0)
                                auxSustainableDevItems[i].selected = true;

                        var modifiedAt = new Date(result.modifiedAt);
                        var date = modifiedAt.getDate() > 9 ? modifiedAt.getDate() : "0" + modifiedAt.getDate();
                        date += "/";
                        date += (modifiedAt.getMonth() + 1) > 9 ? (modifiedAt.getMonth() + 1) : "0" + (modifiedAt.getMonth() + 1);
                        date += "/" + modifiedAt.getFullYear();

                        this.setState({
                            cyclePlanningDescription: result.description,
                            KnowledgeItems: auxKnowledgeItems,
                            SustainableDevItems: auxSustainableDevItems,
                            lastModifiedBy: result.modifiedBy + " | " + date
                        });
                    });
                }

                if (data.status === 404) {
                    var auxKnowledgeItems = this.state.KnowledgeItems;
                    var auxSustainableDevItems = this.state.SustainableDevItems;

                    for (var i = 0; i < auxKnowledgeItems.length; i++)
                        auxKnowledgeItems[i].selected = false;

                    for (var i = 0; i < auxSustainableDevItems.length; i++)
                        auxSustainableDevItems[i].selected = false;

                    this.setState({
                        cyclePlanningDescription: "",
                        KnowledgeItems: auxKnowledgeItems,
                        SustainableDevItems: auxSustainableDevItems,
                        lastModifiedBy: "-"
                    });
                }
            });
    }

    render() {
        var cycleName = this.getCycleName();

        return (
            <div className="tab-pane fade border-left border-right border-bottom" id="planoCiclo" role="tabpanel" aria-labelledby="planoCiclo-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">

                                <span className="text-muted text-color-purple">Última acesso: {this.state.lastModifiedBy}</span>&nbsp;

                                <button className="btn btn-warning" onClick={this.saveButtonClick} disabled={this.props.year <= 0}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="cyclePlan-info" className="container-tabpanel-content">
                    <div className="container row">
                        <h5 className="">Plano de Ciclo {cycleName}</h5>
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

                            <textarea className="form-control" rows="5" id="cyclePlanningDescription" value={this.state.cyclePlanningDescription} onChange={this.onTextChange}></textarea>
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