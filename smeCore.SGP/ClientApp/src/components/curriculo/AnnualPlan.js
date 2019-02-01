import React, { Component } from 'react';
import { Bimester } from './Bimester';
import './AnnualPlan.css';

export class AnnualPlan extends Component {
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
            id: props.name + "Item",
            today: today.getDate() + " de " + month + " - " + today.getFullYear()
        };

        this.saveButtonClick = this.saveButtonClick.bind(this);
    }

    saveButtonClick() {
        if (this.props.year !== undefined) {
            var annual = {
                schoolYear: this.props.year,
                classroom: this.classroom,
                school: this.props.school,
                userId: sessionStorage.getItem("username"),
                selectedLearningObjectivesB1: "",
                selectedLearningObjectivesB2: "",
                selectedLearningObjectivesB3: "",
                selectedLearningObjectivesB4: "",
                descriptionB1: document.getElementById("annualPlanning-textareaB1").value,
                descriptionB2: document.getElementById("annualPlanning-textareaB2").value,
                descriptionB3: document.getElementById("annualPlanning-textareaB3").value,
                descriptionB4: document.getElementById("annualPlanning-textareaB4").value
            };

            var bimenster = document.getElementById("myObjectivesB1");
            var elements = bimenster.getElementsByClassName("objective-item-span");

            for (var i = 0; i < elements.length; i++)
                if (i === 0 || annual.selectedLearningObjectivesB1 === "")
                    annual.selectedLearningObjectivesB1 += "" + elements[i].innerHTML;
                else
                    annual.selectedLearningObjectivesB1 += "," + elements[i].innerHTML;

            bimenster = document.getElementById("myObjectivesB2");
            elements = bimenster.getElementsByClassName("objective-item-span");

            for (var i = 0; i < elements.length; i++)
                if (i === 0 || annual.selectedLearningObjectivesB2 === "")
                    annual.selectedLearningObjectivesB2 += "" + elements[i].innerHTML;
                else
                    annual.selectedLearningObjectivesB2 += "," + elements[i].innerHTML;

            bimenster = document.getElementById("myObjectivesB3");
            elements = bimenster.getElementsByClassName("objective-item-span");

            for (var i = 0; i < elements.length; i++)
                if (i === 0 || annual.selectedLearningObjectivesB3 === "")
                    annual.selectedLearningObjectivesB3 += "" + elements[i].innerHTML;
                else
                    annual.selectedLearningObjectivesB3 += "," + elements[i].innerHTML;

            bimenster = document.getElementById("myObjectivesB4");
            elements = bimenster.getElementsByClassName("objective-item-span");

            for (var i = 0; i < elements.length; i++)
                if (i === 0 || annual.selectedLearningObjectivesB4 === "")
                    annual.selectedLearningObjectivesB4 += "" + elements[i].innerHTML;
                else
                    annual.selectedLearningObjectivesB4 += "," + elements[i].innerHTML;

            fetch('/api/Planejamento/SalvarPlanoAnual', {
                method: "post",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(annual)
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

    render() {
        return (
            <div className="tab-pane fade show active border-left border-right border-bottom" id="planoAnual" role="tabpanel" aria-labelledby="planoAnual-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm border-azul font-color-black">{this.state.today}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <button className="btn btn-warning" onClick={this.saveButtonClick}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="planoAnual-info" className="container-tabpanel-content">
                    <div className="form-inline">
                        <h5>Plano anual {this.props.year}°{this.props.classroom}</h5>
                    </div>

                    <div className="vertical-spacing"></div>

                    <Bimester name="B1" image="1bimestre" year={this.props.year} classroom={this.props.classroom} school={this.props.school} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B2" image="2bimestre" year={this.props.year} classroom={this.props.classroom} school={this.props.school} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B3" image="3bimestre" year={this.props.year} classroom={this.props.classroom} school={this.props.school} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B4" image="4bimestre" year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                </div>
            </div>
        );
    }
}