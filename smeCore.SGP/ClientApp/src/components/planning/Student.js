import React, { Component } from 'react';
import './Student.css';

export class Student extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "Item" + props.name
        };
    }

    render() {
        return (
            <tr>
                <th>{this.props.sequence}</th>
                <td>{this.props.name}</td>
                <td><input type="checkbox" name="frequency" value="absent" /></td>
                <td>{this.props.attendance}%</td>
                <td>{this.props.attendance < 80 && (<i class="fas fa-exclamation-triangle font-weight-light text-danger"></i>)}</td>
            </tr>
        );
    }
}