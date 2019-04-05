import React, { Component } from 'react';
import './Home.css';
import { ClassSelector } from '../classRecord/ClassSelector';

export default class Home extends Component {
    render() {
        return (
            <div className="h-100">
                <ClassSelector {...this.props}/>
                <div className="py-2"></div>
                <div className="card card-component">
                    <div className="py-2 px-4">
                        {this.props.user.username}
                    </div>
                </div>
            </div>
        );
    }
}