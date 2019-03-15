import React, { Component } from 'react';
import { Bimester } from './Bimester';
import './AnnualPlan.css';

export class AnnualPlan extends Component {
    constructor(props) {
        super(props);

        this.isLoaded = false;

        this.state = {
            id: props.name + "Item",
        };
        
        this.setBimester1 = this.setBimester1.bind(this);
        this.setBimester2 = this.setBimester2.bind(this);
        this.setBimester3 = this.setBimester3.bind(this);
        this.setBimester4 = this.setBimester4.bind(this);
        this.onChangeDescriptionB1 = this.onChangeDescriptionB1.bind(this);
        this.onChangeDescriptionB2 = this.onChangeDescriptionB2.bind(this);
        this.onChangeDescriptionB3 = this.onChangeDescriptionB3.bind(this);
        this.onChangeDescriptionB4 = this.onChangeDescriptionB4.bind(this);
    }

    setBimester1(bimester) {
        var annual = this.props.annual;
        annual.bimester1 = bimester.selectedLearningObjectiveItems;

        this.props.setAnnualPlan(annual);
    }

    setBimester2(bimester) {
        var annual = this.props.annual;
        annual.bimester2 = bimester.selectedLearningObjectiveItems;

        this.props.setAnnualPlan(annual);
    }

    setBimester3(bimester) {
        var annual = this.props.annual;
        annual.bimester3 = bimester.selectedLearningObjectiveItems;

        this.props.setAnnualPlan(annual);
    }

    setBimester4(bimester) {
        var annual = this.props.annual;
        annual.bimester4 = bimester.selectedLearningObjectiveItems;

        this.props.setAnnualPlan(annual);
    }

    onChangeDescriptionB1(event) {
        var annual = this.props.annual;
        annual.annualPlanningTextareaB1 = event.target.value;

        this.props.setAnnualPlan(annual);
    }

    onChangeDescriptionB2(event) {
        var annual = this.props.annual;
        annual.annualPlanningTextareaB2 = event.target.value;

        this.props.setAnnualPlan(annual);
    }

    onChangeDescriptionB3(event) {
        var annual = this.props.annual;
        annual.annualPlanningTextareaB3 = event.target.value;

        this.props.setAnnualPlan(annual);
    }

    onChangeDescriptionB4(event) {
        var annual = this.props.annual;
        annual.annualPlanningTextareaB4 = event.target.value;

        this.props.setAnnualPlan(annual);
    }

    render() {
        var childProps = {
            learningObjectiveItems: this.props.learningObjectiveItems,
        };

        return (
            <div className="tab-pane fade show active border-left border-right border-bottom" id="planoAnual" role="tabpanel" aria-labelledby="planoAnual-tab">
                <nav className="container-tabpanel navbar">
                    <div className="form-inline">
                        <button className="btn btn-outline-primary btn-sm border-azul font-color-black">{this.props.todayDate}</button>
                    </div>

                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="form-inline">
                                <button className="btn btn-warning text-white" onClick={this.props.saveAnnualPlan} disabled={this.props.year <= 0}>Salvar</button>
                            </div>
                        </li>
                    </ul>
                </nav>

                <hr className="horizontal-rule bg-azul-ux" />

                <div id="planoAnual-info" className="container-tabpanel-content">
                    <div className="form-inline">
                        <h5>Plano anual {this.props.annual.classroomLabel}</h5>
                    </div>

                    <div className="vertical-spacing"></div>

                    <Bimester name="B1" image="1bimestre" setBimester={this.setBimester1} selected={this.props.annual.bimester1} textarea={this.props.annual.annualPlanningTextareaB1} textareaChange={this.onChangeDescriptionB1} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B2" image="2bimestre" setBimester={this.setBimester2} selected={this.props.annual.bimester2} textarea={this.props.annual.annualPlanningTextareaB2} textareaChange={this.onChangeDescriptionB2} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B3" image="3bimestre" setBimester={this.setBimester3} selected={this.props.annual.bimester3} textarea={this.props.annual.annualPlanningTextareaB3} textareaChange={this.onChangeDescriptionB3} {...childProps} />

                    <div className="vertical-spacing"></div>

                    <Bimester name="B4" image="4bimestre" setBimester={this.setBimester4} selected={this.props.annual.bimester4} textarea={this.props.annual.annualPlanningTextareaB4} textareaChange={this.onChangeDescriptionB4} {...childProps} />
                </div>
            </div>
        );
    }
}