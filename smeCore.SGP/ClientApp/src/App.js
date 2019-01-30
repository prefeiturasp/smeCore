import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
//import { Layout } from './components/Layout';
//import { Home } from './components/curriculo/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import { Home } from './components/login/Home';

export default class App extends Component {
    static displayName = App.name;

    render() {
        //return (
        //  <Layout>
        //    <Route exact path='/' component={Home} />
        //    <Route path='/counter' component={Counter} />
        //    <Route path='/fetch-data' component={FetchData} />
        //  </Layout>
        //);

        //return (
        //    <Layout>
        //        <Route exact path='/' component={Home} />
        //    </Layout>
        //);

        return (
            <Home />
        );
    }
}
