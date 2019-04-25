import React, { Component } from 'react';
import { PollSelectMatematica1oColumnA } from '../inputs/PollSelectMatematica1oColumnA';
import { PollSelectMatematica1oColumnB } from '../inputs/PollSelectMatematica1oColumnB';

export class StudentPollMath1o extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedClass: "custom-select custom-select-sm poll-select"
    };
  }

  render() {
    return (
      <tr>
        <th className="align-middle sondagem-matematica-student"><small className="ml-2 pr-4"><b>{this.props.student.sequence}</b></small><small>{this.props.student.name}</small></th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t1e" value="A" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t1l" value="NR" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t2e" value="E" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t4e" value={this.props.student.pollResults.portuguese.t4e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t4l" value={this.props.student.pollResults.portuguese.t4l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th colSpan="1">
          <PollSelectMatematica1oColumnB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
      </tr>
    );
  }
}
