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
            id: props.name + "Item",
            today: today.getDate() + " de " + month + " - " + today.getFullYear()
        };
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
                                <a className="nav-link disabled">Salvamento automático...</a>
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

                    <Bimester name="B1" image="1bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B2" image="2bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B3" image="3bimestre" />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B4" image="4bimestre" />
                </div>
            </div>
        );
    }
}
