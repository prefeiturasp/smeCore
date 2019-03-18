import React, { Component } from 'react';
import './MyObjectiveItem.css';

export class MyObjectiveItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.parent + props.name + "Item",
            reference: "#" + props.parent + props.name + "Item",
            textarea: props.parent + props.name + "Item-textarea",
            collapseId: props.parent + props.name + "-collapse",
            collapseTarget: "#" + props.parent + props.name + "-collapse"
        };
    }

    render() {
        return (
            <li className="MyObjective-item" id={this.state.id}>
                <div className="d-flex align-items-center gray-background">
                    <div className="MyObjective-label d-flex">
                        <div className="rounded-pill border border-primary d-flex align-items-center bg-primary text-white" >
                            <span className="MyObjective-item-span">{this.props.name}</span>
                        </div>
                    </div>

                    <div className="d-flex flex-fill flex-row-reverse">
                        <img src="/img/Icon_editar.svg" alt="edit icon" className="edit-icon-50 btn" data-toggle="collapse" data-target={this.state.collapseTarget} aria-expanded="true" aria-controls={this.state.collapseId} />
                    </div>
                </div>

                <div id={this.state.collapseId} className="collapse" aria-labelledby="headingOne" data-parent={this.state.reference}>
                    <div className="card-body">
                        <textarea className="form-control" rows="5" id={this.props.id} value={this.props.value} onChange={this.props.changeLearningObjective}></textarea>
                    </div>
                </div>
            </li>
        );
    }
}