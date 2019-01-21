import React, { Component } from 'react';
import './CalendarDay.css';
import { Appointment } from './Appointment';

export class CalenderDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item"
        };
    }

    render() {
        return (
            <td className="border">
                {this.props.workday === "false" ?
                    (<div className="day text-small text-info text-center font-weight-bold">{this.props.day}</div>) :
                    (<div className="day text-small text-info text-center">{this.props.day}</div>)
                }

                <div className="appointments">
                    <Appointment color="red" time="7:30am" name="5° B" school="EMEF" />
                    <Appointment color="purple" time="9:30am" name="7° C" school="EMEF" />
                    <Appointment color="brown" time="1:30pm" name="9° A" school="EMEF" />
                    <Appointment color="yellow" time="3:00pm" name="9° B" school="EMEF" />
                </div>
            </td>
        );
    }
}