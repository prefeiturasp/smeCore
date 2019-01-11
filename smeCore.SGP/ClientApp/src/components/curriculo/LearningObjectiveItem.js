import React, { Component } from 'react';
import './LearningObjectiveItem.css';

export class LearningObjectiveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.name + "Item"
        };
    }

    render() {
        return (
            <li className="d-flex align-items-center LearningObjective-item">
                <div className="LearningObjective-label">
                    <button className="btn rounded-pill border border-primary">
                        <span>{this.props.name}</span>
                    </button>
                </div>

                <div className="LearningObjective-item-description">
                    {this.props.description}
                </div>
            </li>
        );
    }
}
