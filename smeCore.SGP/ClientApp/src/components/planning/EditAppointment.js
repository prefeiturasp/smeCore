import React, { Component } from 'react';
import './EditAppointment.css';
import { MyObjectiveItem } from './MyObjectiveItem';
import { EditorState } from 'draft-js';
import { RichTextBox } from '../textbox/RichTextBox';

export class EditAppointment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "dot color-" + props.color,
            myObjectiveItems: []
        };
    }

    componentDidMount() {
        this.setState({
            myObjectiveItems: [
                { name: "EF02M05", date: "04/03/2019" },
                { name: "EF02M06", date: "04/03/2019" },
                { name: "EF02M07", date: "04/03/2019" },
                { name: "EF02M08", date: "04/03/2019" },
                { name: "EF02M09", date: "04/03/2019" },
                { name: "EF02M10", date: "04/03/2019" }
            ]
        });
    }

    render() {
        return (
            <div className="editAppointment">
                <hr className="horizontal-rule bg-azul-ux" />

                <div className="editAppointment-container form-inline">
                    <div className="form-inline">
                        <div className={this.state.color}></div>&nbsp;
                        <div>{this.props.time}</div>&nbsp;
                        <div>{this.props.name}</div>&nbsp;
                        <div>-</div>&nbsp;
                        <div className="font-weight-bold">{this.props.school}</div>
                    </div>

                    <div className="ml-auto form-inline">
                        <a className="btn btn-primary" href="http://sgp.sme.prefeitura.sp.gov.br/Academico/ControleTurma/Listao.aspx" role="button">Listão</a>
                        <div className="spacing"></div>
                        <a className="btn btn-primary" href="http://sgp.sme.prefeitura.sp.gov.br/Academico/ControleTurma/Frequencia.aspx" role="button">Frequência</a>
                    </div>
                </div>

                <div className="editAppointment-container w-auto row">
                    <div className="col">
                        <div className="d-flex">
                            <h5 className="font-weight-light text-color-purple">Objetivos de aprendizagem e meus objetivos (Currículo da cidade)</h5>
                        </div>

                        <hr className="header-rule" />

                        <ul className="list-unstyled">
                            {this.state.myObjectiveItems.map(myObjectiveItem => (
                                <MyObjectiveItem name={myObjectiveItem.name} date={myObjectiveItem.date} parent="EditAppointment" />
                            ))}
                        </ul>
                    </div>

                    <div className="col">
                        <div>
                            <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample0" role="button" aria-expanded="false" aria-controls="multiCollapseExample0">
                                <h5 className="font-weight-light text-color-purple">Frequência (preenchimento obrigatório)</h5>

                                <div className="d-flex flex-fill flex-row-reverse">
                                    <i class="fas fa-chevron-circle-down"></i>
                                </div>
                            </div>

                            <hr className="header-rule" />

                            <div id="multiCollapseExample0" className="collapse">
                                <RichTextBox />
                            </div>
                        </div>

                        <div className="vertical-spacing"></div>

                        <div>
                            <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                                <h5 className="font-weight-light text-color-purple">Desenvolvimento da aula</h5>

                                <div className="d-flex flex-fill flex-row-reverse">
                                    <i class="fas fa-chevron-circle-down"></i>
                                </div>
                            </div>

                            <hr className="header-rule" />

                            <div id="multiCollapseExample1" className="collapse">
                                <RichTextBox />
                            </div>
                        </div>

                        <div className="vertical-spacing"></div>

                        <div>
                            <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
                                <h5 className="font-weight-light text-color-purple">Recuperação contínua</h5>

                                <div className="d-flex flex-fill flex-row-reverse">
                                    <i class="fas fa-chevron-circle-down"></i>
                                </div>
                            </div>

                            <hr className="header-rule" />

                            <div id="multiCollapseExample2" className="collapse">
                                <textarea className="form-control" rows="5" id="continuousRecovery-textarea"></textarea>
                            </div>
                        </div>

                        <div className="vertical-spacing"></div>

                        <div>
                            <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">
                                <h5 className="font-weight-light text-color-purple">Lição de casa</h5>

                                <div className="d-flex flex-fill flex-row-reverse">
                                    <i class="fas fa-chevron-circle-down"></i>
                                </div>
                            </div>

                            <hr className="header-rule" />

                            <div id="multiCollapseExample3" className="collapse">
                                <textarea className="form-control" rows="5" id="homework-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vertical-spacing"></div>

                <div className="d-flex editAppointment-container">
                    <button className="btn btn-warning btn-block text-white">SALVAR</button>
                </div>
            </div>
        );
    }
}