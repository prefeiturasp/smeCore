import React, { Component } from 'react';
import { PollSelect } from '../inputs/PollSelect';
import { PollSelect2 } from '../inputs/PollSelect2';

export class StudentPoll extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedClass: "custom-select custom-select-sm poll-select"
        };
    }

    render() {
        return (
            <tr>
                <th className="align-middle"><small className="ml-2 pr-4"><b>{this.props.student.sequence}</b></small><small>{this.props.student.name}</small></th>
                <th>
                    <PollSelect sequence={this.props.student.sequence} name="t1e" value={this.props.student.pollResults.portuguese.t1e} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect2 sequence={this.props.student.sequence} name="t1l" value={this.props.student.pollResults.portuguese.t1l} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect2 sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect2 sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect sequence={this.props.student.sequence} name="t4e" value={this.props.student.pollResults.portuguese.t4e} updatePollStudent={this.props.updatePollStudent} />
                </th>
                <th>
                    <PollSelect2 sequence={this.props.student.sequence} name="t4l" value={this.props.student.pollResults.portuguese.t4l} updatePollStudent={this.props.updatePollStudent} />
                </th>
            </tr>
        );
    }
}