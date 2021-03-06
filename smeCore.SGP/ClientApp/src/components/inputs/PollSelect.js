﻿import React, { Component } from 'react';
import './PollSelect.css';

export class PollSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedClass: "custom-select custom-select-sm poll-select"
        };

        this.getColor = this.getColor.bind(this);
        this.onOptionChange = this.onOptionChange.bind(this);
    }

    getColor(value) {
        if (value > 0) {
            return ("custom-select custom-select-sm poll-select opt-1 text-white");
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
                    <option className="text-white bg-bluescale-1" value="1">Nivel 1</option>
                    <option className="text-white bg-bluescale-1" value="2">Nivel 2</option>
                    <option className="text-white bg-bluescale-1" value="3">Nivel 3</option>
                    <option className="text-white bg-bluescale-1" value="4">Nivel 4</option>
                </select>
            </div>
        );
    }
}