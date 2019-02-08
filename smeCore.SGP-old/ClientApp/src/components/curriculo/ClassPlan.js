import React, { Component } from 'react';
import './ClassPlan.css';
import { CalenderPlan } from './CalendarPlan';
import { EditAppointment } from './EditAppointment';

export class ClassPlan extends Component {
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
            showEditAppointment: false,
            today: today.getDate() + " de " + month + " - " + today.getFullYear()
        };

        // This binding is necessary to make `this` work in the callback
        this.editAppointmentClick = this.editAppointmentClick.bind(this);
    }

    editAppointmentClick() {
        this.setState(state => ({
            showEditAppointment: !state.showEditAppointment
        }));
    }

    render() {
        var year = this.props.year;

        if (year !== undefined)
            return (
                <div className="tab-pane fade border-left border-right border-bottom" id="planoAula" role="tabpanel" aria-labelledby="planoAula-tab">
                    <nav className="container-tabpanel navbar">
                        <div className="form-inline">
                            <button className="btn btn-outline-primary btn-sm border-azul btn-today" onClick={this.editAppointmentClick}>{this.state.today}</button>
                        </div>

                    </nav>

                    {this.state.showEditAppointment === false ?
                        (<CalenderPlan name="calendarPlan" year={this.props.year} classroom={this.props.classroom} school={this.props.school} />) :
                        (<EditAppointment color="red" time="7:30am" name="5° B" school="EMEF" />)
                    }
                </div>
            );
        else
            return (
                <div className="tab-pane fade border-left border-right border-bottom" id="planoAula" role="tabpanel" aria-labelledby="planoAula-tab">
                    <nav className="container-tabpanel navbar">
                        <div className="form-inline">
                            <button className="btn btn-outline-primary btn-sm border-azul btn-today" onClick={this.editAppointmentClick}>{this.state.today}</button>
                        </div>

                    </nav>

                    {this.state.showEditAppointment === false ?
                        (<CalenderPlan name="calendarPlan" />) :
                        (<EditAppointment color="red" time="7:30am" name="5° B" school="EMEF" />)
                    }
                </div>
            );
    }
}