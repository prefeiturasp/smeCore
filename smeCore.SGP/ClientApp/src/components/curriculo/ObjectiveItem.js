import React, { Component } from 'react';
import './ObjectiveItem.css';

export class ObjectiveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.parent + props.name + "Item"
        };
    }

    render() {
        return (
            <li className="objective-item" id={this.state.id} onClick={this.props.itemClick}>
                <div className="objectiveItem-label d-flex">
                    <div className="rounded-pill border-0 d-flex align-items-center objectiveItem" >
                        <span className="objective-item-span">{this.props.name}</span>
                    </div>
                </div>
            </li>
        );
    }
}
