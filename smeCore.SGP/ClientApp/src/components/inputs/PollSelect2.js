import React, { Component } from 'react';
import './PollSelect2.css';

export class PollSelect2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedClass: "custom-select custom-select-sm poll-select"
        };

        this.getColor = this.getColor.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    getColor(value) {
        if (value!=="") {
            return ("custom-select custom-select-sm poll-select opt text-white");
        } else {
            return ("custom-select custom-select-sm poll-select");
        }
    }

    onOptionChange(event) {
        this.props.updatePollStudent(this.props.sequence, "portuguese", this.props.name, event.target.value);
    }

    render() {
        return (
            <div>
                <select id={"pollItem-" + this.props.name + "-" + this.props.sequence} value={this.props.value} className={this.getColor(this.props.value)} onChange={this.onOptionChange}>
                    <option defaultValue hidden className="text-muted" value="">Selecione</option>
                    <option className="text-white bg-bluescale" value="ps">PS</option>
                    <option className="text-white bg-bluescale" value="ssv">SSV</option>
                    <option className="text-white bg-bluescale" value="scv">SCV</option>
                    <option className="text-white bg-bluescale" value="sa">SA</option>
                    <option className="text-white bg-bluescale" value="a">A</option>
                </select>
            </div>
        );
    }
}