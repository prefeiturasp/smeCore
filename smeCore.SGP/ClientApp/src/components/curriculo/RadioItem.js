import React, { Component } from 'react';

export class RadioItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            controlGroup: props.name + "RadioControl",
            value: props.value,
            id: props.name + props.value,
            label: props.label
        };
    }

    render() {
        return (
            <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor={this.state.id}>{this.state.label}</label>&nbsp;
                <input className="form-check-input" type="checkbox" name={this.state.controlGroup} id={this.state.id} value={this.state.value} />
            </div>
        );
    }
}
