import React, { Component } from 'react';
import './SustainableDevItem.css';

export class SustainableDevItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "SustainableDevItem" + props.sequence
        };
    }

    render() {
        return (
            <li className="d-flex align-items-center SustainableDev-item" id={this.state.id} onClick={this.props.buttonClick}>
                <div className={this.props.selected === true ?
                    "border-0 border-primary rounded number-icon d-flex justify-content-center align-items-center SustainableDevItem-selected" :
                    "border border-primary rounded number-icon d-flex justify-content-center align-items-center"}>
                    <h5>{this.props.sequence}</h5>
                </div>

                <div className="SustainableDev-item-description">
                    {this.props.name}
                </div>
            </li>
        );
    }
}
