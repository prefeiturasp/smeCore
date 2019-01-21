import React, { Component } from 'react';
import './CalendarPlan.css';
import { CalenderDay } from './CalendarDay';

export class CalenderPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item"
        };
    }

    render() {
        return (
            <div className="d-flex w-auto" id={this.props.name}>
                <table id="calendar" className="">
                    <thead>
                        <tr>
                            <th className="text-small text-info text-center calendar-col" scope="col">DOM</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">SEG</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">TER</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">QUA</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">QUI</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">SEX</th>
                            <th className="text-small text-info text-center calendar-col" scope="col">SAB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <CalenderDay day="27" workday="false" />
                            <CalenderDay day="28" workday="true" />
                            <CalenderDay day="29" workday="true" />
                            <CalenderDay day="30" workday="true" />
                            <CalenderDay day="31" workday="true" />
                            <CalenderDay day="1" workday="true" />
                            <CalenderDay day="2" workday="false" />
                        </tr>

                        <tr>
                            <CalenderDay day="3" workday="false" />
                            <CalenderDay day="4" workday="true" />
                            <CalenderDay day="5" workday="true" />
                            <CalenderDay day="6" workday="true" />
                            <CalenderDay day="7" workday="true" />
                            <CalenderDay day="8" workday="true" />
                            <CalenderDay day="9" workday="false" />
                        </tr>

                        <tr>
                            <CalenderDay day="10" workday="false" />
                            <CalenderDay day="11" workday="true" />
                            <CalenderDay day="12" workday="true" />
                            <CalenderDay day="13" workday="true" />
                            <CalenderDay day="14" workday="true" />
                            <CalenderDay day="15" workday="true" />
                            <CalenderDay day="16" workday="false" />
                        </tr>

                        <tr>
                            <CalenderDay day="17" workday="false" />
                            <CalenderDay day="18" workday="true" />
                            <CalenderDay day="19" workday="true" />
                            <CalenderDay day="20" workday="true" />
                            <CalenderDay day="21" workday="true" />
                            <CalenderDay day="22" workday="true" />
                            <CalenderDay day="23" workday="false" />
                        </tr>

                        <tr>
                            <CalenderDay day="24" workday="false" />
                            <CalenderDay day="25" workday="true" />
                            <CalenderDay day="26" workday="true" />
                            <CalenderDay day="27" workday="true" />
                            <CalenderDay day="28" workday="true" />
                            <CalenderDay day="1" workday="true" />
                            <CalenderDay day="2" workday="false" />
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}