import React, { Component } from 'react';

export class DynamicDatePicker extends Component {
    constructor(props) {
        super(props);

        this.onDateChange = this.onDateChange.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
    }

    onDateChange(event) {
        this.props.dateChange({
            id: this.props.id,
            value: event.target.value
        });
    }

    deleteClick() {
        this.props.removeDate(this.props.id);
    }

    render() {
        return (
            <div className="d-flex w-100">
                <input id={this.props.id} type="date" className="form-control d-flex w-100" onChange={this.onDateChange} value={this.props.value} />
                <button className="btn btn-sm" onClick={this.deleteClick}><i className="fas fa-trash-alt text-secondary"></i></button>
            </div>
        );
    }
}