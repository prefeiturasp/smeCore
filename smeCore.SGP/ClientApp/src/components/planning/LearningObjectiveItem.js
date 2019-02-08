import React, { Component } from 'react';
import './LearningObjectiveItem.css';

export class LearningObjectiveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "Item" + props.name + props.father
        };
    }

    render() {
        return (
            <li className="d-flex align-items-center LearningObjective-item" onClick={this.props.itemClick}>
                <div className="LearningObjective-label">
                    <div className={this.props.selected === false ? "btn rounded-pill border border-primary" : "btn rounded-pill border-0 border-primary LearningObjectiveItem-selected"}>
                        <span>{this.props.name}</span>
                    </div>
                </div>

                <div className="LearningObjective-item-description">
                    {this.props.description}
                </div>
            </li>
        );
    }
}