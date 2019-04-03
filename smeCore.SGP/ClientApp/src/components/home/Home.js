import React, { Component } from 'react';
import './Home.css';
import { ClassSelector } from '../classRecord/ClassSelector';

export default class Home extends Component {
    render() {
        return (
            <div className="h-100">
                <ClassSelector />
            </div>
        );
    }
}