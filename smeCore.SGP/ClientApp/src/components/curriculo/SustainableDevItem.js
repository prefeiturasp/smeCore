import React, { Component } from 'react';
import './SustainableDevItem.css';

export class SustainableDevItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "SustainableDevItem" + props.number
        };
    }

    render() {
        return (
            <li className="d-flex align-items-center SustainableDev-item" id={this.state.id}>
                <div className="border border-primary rounded number-icon d-flex justify-content-center align-items-center">
                    <h5>{this.props.number}</h5>
                </div>

                <div className="SustainableDev-item-description">
                    {this.props.description}
                </div>
            </li>
        );
    }
}
