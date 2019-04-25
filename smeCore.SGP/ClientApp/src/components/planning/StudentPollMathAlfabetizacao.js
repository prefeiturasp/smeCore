import React, { Component } from 'react';
import { PollSelectMatematicaAlfabetizacaoA } from '../inputs/PollSelectMatematicaAlfabetizacaoA';
import { PollSelectMatematicaAlfabetizacaoB } from '../inputs/PollSelectMatematicaAlfabetizacaoB';

export class StudentPollMathAlfabetizacao extends Component {
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
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t1e" value="N" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t1l" value="S" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t2e" value="S" updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t4e" value={this.props.student.pollResults.portuguese.t4e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t4l" value={this.props.student.pollResults.portuguese.t4l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t2e" value={this.props.student.pollResults.portuguese.t2e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t2l" value={this.props.student.pollResults.portuguese.t2l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t3e" value={this.props.student.pollResults.portuguese.t3e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t3l" value={this.props.student.pollResults.portuguese.t3l} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoA sequence={this.props.student.sequence} name="t4e" value={this.props.student.pollResults.portuguese.t4e} updatePollStudent={this.props.updatePollStudent} />
        </th>
        <th>
          <PollSelectMatematicaAlfabetizacaoB sequence={this.props.student.sequence} name="t4l" value={this.props.student.pollResults.portuguese.t4l} updatePollStudent={this.props.updatePollStudent} />
        </th>
      </tr>
    );
  }
}
