import React, { Component } from 'react';
import './KnowledgeItem.css';

export class KnowledgeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "knowledgeItem" + props.sequence
        };
    }

    render() {
        return (
            <li className="d-flex align-items-center knowledge-item" id={this.state.id}>
                <div className="border border-primary rounded-circle number-icon d-flex justify-content-center align-items-center">
                    <h5>{this.props.sequence}</h5>
                </div>

                <div className="knowledge-item-description">
                    {this.props.title}
                </div>
            </li>
        );
    }
}
