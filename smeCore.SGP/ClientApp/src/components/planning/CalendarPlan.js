import React, { Component } from 'react';
import './CalendarPlan.css';
import { CalendarDay } from './CalendarDay';

export class CalendarPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.name + "Item"
    };
  }

  render() {
    const childProps = {
    
      year: this.props.year,
      classroom: this.props.classroom,
      school: this.props.school,
      user: this.props.user,
      classAppointmentClick: this.props.classAppointmentClick,
      setSchedule: this.props.setSchedule,
      deleteSchedule: this.props.deleteSchedule,
      showMessage: this.props.showMessage,
      apiPost: this.props.apiPost
    };

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
              {this.props.calendar.weeks[0].length !== undefined && this.props.calendar.weeks[0].map(week_day => (
                <CalendarDay
                  key={week_day.name}
                  day={week_day.day}
                  month={week_day.month}
                  fullYear={week_day.year}
                  workday={week_day.workday}
                  name={week_day.name}
                  schedule={week_day.schedules}
                  editable={true}
                  {...childProps} />
              ))}
            </tr>

            <tr>
              {this.props.calendar.weeks[1].length !== undefined && this.props.calendar.weeks[1].map(week_day => (
                <CalendarDay
                  key={week_day.name}
                  day={week_day.day}
                  month={week_day.month}
                  fullYear={week_day.year}
                  workday={week_day.workday}
                  name={week_day.name}
                  schedule={week_day.schedules}
                  editable={true}
                  {...childProps} />
              ))}
            </tr>

            <tr>
              {this.props.calendar.weeks[2].length !== undefined && this.props.calendar.weeks[2].map(week_day => (
                <CalendarDay
                  key={week_day.name}
                  day={week_day.day}
                  month={week_day.month}
                  fullYear={week_day.year}
                  workday={week_day.workday}
                  name={week_day.name}
                  schedule={week_day.schedules}
                  editable={true}
                  {...childProps} />
              ))}
            </tr>

            <tr>
              {this.props.calendar.weeks[3].length !== undefined && this.props.calendar.weeks[3].map(week_day => (
                <CalendarDay
                  key={week_day.name}
                  day={week_day.day}
                  month={week_day.month}
                  fullYear={week_day.year}
                  workday={week_day.workday}
                  name={week_day.name}
                  schedule={week_day.schedules}
                  editable={true}
                  {...childProps} />
              ))}
            </tr>

            <tr>
              {this.props.calendar.weeks[4].length !== undefined && this.props.calendar.weeks[4].map(week_day => (
                <CalendarDay
                  key={week_day.name}
                  day={week_day.day}
                  month={week_day.month}
                  fullYear={week_day.year}
                  workday={week_day.workday}
                  name={week_day.name}
                  schedule={week_day.schedules}
                  editable={true}
                  {...childProps} />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
