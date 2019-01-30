import React, { Component } from 'react';
import './Home.css';
import { CyclePlan } from './CyclePlan';
import { AnnualPlan } from './AnnualPlan';
import { ClassPlan } from './ClassPlan';
import { Footer} from "../navigation/Footer";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div id="homeRoot">
                <div id="breadcrumb">
                    <span className="titulo-breadcrumb">Você está em: &nbsp;</span>
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Home</button>
                    &gt;
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Registro de Classe</button>
                    &gt;
                    <button type="button" className="btn btn-link btn-sm bt-breadcrumb">Planejamento</button>
                </div>

                <div id="changeClass">
                    <form className="form form-inline">
                        <input id="changeClassTextBox" className="form-control form-control-sm border border-azul-2px" type="text" />
                        <button type="submit" className="btn btn-primary btn-sm bt-breadcrumb-azul">Alterar turma</button>
                    </form>
                </div>

                <div id="curriculoContent">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="planoAula-tab" data-toggle="tab" href="#planoAula" role="tab" aria-controls="planoAula" aria-selected="true">Plano de Aula</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active azul-ux" id="planoAnual-tab" data-toggle="tab" href="#planoAnual" role="tab" aria-controls="planoAnual" aria-selected="false">Plano Anual</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="planoCiclo-tab" data-toggle="tab" href="#planoCiclo" role="tab" aria-controls="planoCiclo" aria-selected="false">Plano de Ciclo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link azul-ux" id="documentos-tab" data-toggle="tab" href="#documentos" role="tab" aria-controls="documentos" aria-selected="false">Documentos</a>
                        </li>
                    </ul>
                    <div className="tab-content border-azul" id="myTabContent">
                        <ClassPlan name="classPlan" />

                        <AnnualPlan name="annualPlan" />

                        <CyclePlan name="cyclePlan" />

                        <div className="tab-pane fade border-left border-right border-bottom" id="documentos" role="tabpanel" aria-labelledby="documentos-tab">
                            <div className="container-tabpanel">
                                <h4 className="display-4">Em construção...</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>

            </div>
        );
    }
}