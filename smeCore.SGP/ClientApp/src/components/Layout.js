import React, { Component } from 'react';
//import { Container } from 'reactstrap';
//import { NavMenu } from './NavMenu';
import { TopMenu } from './navigation/TopMenu';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        //return (
        //  <div>
        //    <NavMenu />
        //    <Container>
        //      {this.props.children}
        //    </Container>
        //  </div>
        //);

        return (
            <div>
                <TopMenu />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
