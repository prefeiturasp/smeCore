import React, { Component } from 'react';
import './EditAppointment.css';
import { MyObjectiveItem } from './MyObjectiveItem';

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

    componentWillUnmount() {

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
                        <button className="btn btn-primary">Listão</button>
                        <div className="spacing"></div>
                        <button className="btn btn-primary">Frequência</button>
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
                            <div className="d-flex">
                                <h5 className="font-weight-light text-color-purple">Desenvolvimento da aula</h5>
                            </div>

                            <hr className="header-rule" />

                            <textarea className="form-control" rows="5" id="classDevelopment-textarea"></textarea>
                        </div>

                        <div className="vertical-spacing"></div>

                        <div>
                            <div className="d-flex">
                                <h5 className="font-weight-light text-color-purple">Lição de casa</h5>
                            </div>

                            <hr className="header-rule" />

                            <textarea className="form-control" rows="5" id="homework-textarea"></textarea>
                        </div>

                        <div className="vertical-spacing"></div>

                        <div>
                            <div className="d-flex">
                                <h5 className="font-weight-light text-color-purple">Recuperação contínua</h5>
                            </div>

                            <hr className="header-rule" />

                            <textarea className="form-control" rows="5" id="continuousRecovery-textarea"></textarea>
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