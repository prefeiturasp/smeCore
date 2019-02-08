import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Redirect to="/Planejamento" />
        );
    }
}