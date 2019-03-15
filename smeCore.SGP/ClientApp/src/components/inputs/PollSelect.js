import React, { Component } from 'react';
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
        switch (value) {
            case "ps":
                return ("custom-select custom-select-sm poll-select opt-ps text-white");
            case "ssv":
                return ("custom-select custom-select-sm poll-select opt-ssv text-white");
            case "scv":
                return ("custom-select custom-select-sm poll-select opt-scv text-white");
            case "sa":
                return ("custom-select custom-select-sm poll-select opt-sa text-white");
            case "a":
                return ("custom-select custom-select-sm poll-select opt-a text-white");
            default:
                return ("custom-select custom-select-sm poll-select");
        }
    }

    onOptionChange(event) {
        this.props.updatePollStudent(this.props.sequence, "portuguese", this.props.name, event.target.value);
    }

    render() {
        return (
            <div>
                <select id={"pollItem-" + this.props.name + "-" + this.props.sequence} className={this.getColor(this.props.value)} onChange={this.onOptionChange}>
                    {this.props.value === "" ? <option defaultValue hidden className="text-muted" value="">Selecione</option> : <option hidden className="text-muted" value="">Selecione</option>} 
                    {this.props.value === "ps" ? <option selected className="text-white bg-bluescale-5" value="ps">PS</option> : <option className="text-white bg-bluescale-5" value="ps">PS</option>} 
                    {this.props.value === "ssv" ? <option selected className="text-white bg-bluescale-4" value="ssv">SSV</option> : <option className="text-white bg-bluescale-4" value="ssv">SSV</option>}
                    {this.props.value === "scv" ? <option selected className="text-white bg-bluescale-3" value="scv">SCV</option> : <option className="text-white bg-bluescale-3" value="scv">SCV</option>}
                    {this.props.value === "sa" ? <option selected className="text-white bg-bluescale-2" value="sa">SA</option> : <option className="text-white bg-bluescale-2" value="sa">SA</option>}
                    {this.props.value === "a" ? <option selected className="text-white bg-bluescale-1" value="a">A</option> : <option className="text-white bg-bluescale-1" value="a">A</option>}
                </select>
            </div>
        );
    }
}