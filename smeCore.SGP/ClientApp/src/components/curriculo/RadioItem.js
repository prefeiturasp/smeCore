import React, { Component } from 'react';
import './RadioItem.css';

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
            <div className="form-check form-check-inline container-radio-itens example">
                <div>
                <span className={this.state.value}>

                <input className="form-check-input border-radio-itens" type="checkbox" name={this.state.controlGroup} id={this.state.id} value={this.state.value} />

                <label className="form-check-label" htmlFor={this.state.id}> <span></span> {this.state.label} </label>&nbsp;

                </span>



                    </div>

            </div>

        );
    }
}
