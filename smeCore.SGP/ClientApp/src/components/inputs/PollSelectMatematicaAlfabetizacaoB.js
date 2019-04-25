import React, { Component } from 'react';
import './PollSelectMatematicaAlfabetizacaoB.css';

export class PollSelectMatematicaAlfabetizacaoB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedClass: "custom-select custom-select-sm poll-select"
    };

    this.getColor = this.getColor.bind(this);
    this.onOptionChange = this.onOptionChange.bind(this);
  }

  getColor(value) {
    if (value === "") {
      return ("custom-select custom-select-sm text-white");
    } else {
      return ("custom-select custom-select-sm text-white bg-bluescale-alfabetizacao-b");
    }
  }

  onOptionChange(event) {
    this.props.updatePollStudent(this.props.sequence, "matematica1o", this.props.name, event.target.value);
  }

  render() {
    return (
      <div>
        <select id={"pollItem-" + this.props.name + "-" + this.props.sequence} value={this.props.value} className={this.getColor(this.props.value)} onChange={this.onOptionChange}>
          <option defaultValue hidden className="text-muted" value=""></option>
          <option className="text-white bg-bluescale-alfabetizacao-b" value="S">S</option>
          <option className="text-white bg-bluescale-alfabetizacao-b" value="N">N</option>
        </select>
      </div>
    );
  }
}
