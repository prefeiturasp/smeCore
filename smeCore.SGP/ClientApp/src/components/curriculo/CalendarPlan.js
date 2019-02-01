import React, { Component } from 'react';
import './CalendarPlan.css';
import { CalenderDay } from './CalendarDay';

export class CalenderPlan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item",
            current_week: [],
            week1: [],
            week2: [],
            week3: [],
            week4: [],
        };
    }

    componentDidMount() {
        let today = new Date();
        let week_day = today.getDay();
        today.setDate(today.getDate() - week_day);

        function getWeek(sunday) {
            let week = [];

            for (var i = 0; i < 7; i++) {
                let current = new Date(sunday);
                current.setDate(sunday.getDate() + i);
                week[i] = {};
                week[i].day = current.getDate();

                if (i === 0 || i === 6)
                    week[i].workday = "false";
                else
                    week[i].workday = "true";

                week[i].name = current.getDate() + "-" + current.getMonth() + "-" + i;
            }

            return (week);
        }

        this.setState({ current_week: getWeek(today) });

        today.setDate(today.getDate() + 7);
        this.setState({ week1: getWeek(today) });

        today.setDate(today.getDate() + 7);
        this.setState({ week2: getWeek(today) });

        today.setDate(today.getDate() + 7);
        this.setState({ week3: getWeek(today) });

        today.setDate(today.getDate() + 7);
        this.setState({ week4: getWeek(today) });
    }

    componentWillUnmount() {
    }

    render() {
        if (this.props.year !== undefined)
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
                                {this.state.current_week.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week1.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week2.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week3.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week4.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} year={this.props.year} classroom={this.props.classroom} school={this.props.school} />
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        else
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
                                {this.state.current_week.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week1.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week2.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week3.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} />
                                ))}
                            </tr>

                            <tr>
                                {this.state.week4.map(week_day => (
                                    <CalenderDay day={week_day.day} workday={week_day.workday} name={week_day.name} />
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
    }
}