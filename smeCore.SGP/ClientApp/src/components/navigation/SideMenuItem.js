import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Spring, Transition } from 'react-spring/renderprops';
import { useTransition, animated } from 'react-spring';

function ChevronIcon(props) {
    const transitions = useTransition(props.toggle, item => item, {
        from: { display: 'none' },
        enter: { display: 'block' },
        leave: { display: 'none' }
    });

    return (
        transitions.map(({ item, key, props }) =>
            item ?
                <animated.div style={props} key={key}><i className="fas fa-chevron-up left-menu-item-icon"></i></animated.div> :
                <animated.div style={props} key={key}><i className="fas fa-chevron-down left-menu-item-icon"></i></animated.div>
        )
    );
}

function SelectedItem(props) {
    const transitions = useTransition(props.selected, item => item, {
        from: { display: 'none' },
        enter: { display: 'block' },
        leave: { display: 'none' }
    });

    return (
        transitions.map(({ item, key, props }) =>
            item ?
                <animated.div className="col-1" style={props} key={key}><i className="fas fa-dot-circle left-menu-item-selected"></i></animated.div> :
                <animated.div className="col-1" style={props} key={key}></animated.div>
        )
    );
}

export class SideMenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItem: {}
        }

        this.openSubMenu = this.openSubMenu.bind(this);
        this.menuItemClicked = this.menuItemClicked.bind(this);
    }

    componentDidMount() {
        this.setState({ menuItem: this.props.menuItem });
    }

    openSubMenu() {
        this.props.selectMenuItem(this.props.menuItem.name);
    }

    menuItemClicked(event) {
        this.props.selectMenuSubItem(this.state.menuItem.name, event.target.innerText);
    }

    render() {
        return (
            <div className="left-menu-item d-flex flex-column align-content-start align-items-center w-100 row pb-2" style={{ fontSize: '12px' }}>
                <Spring
                    from={{
                        background: "rgba(11, 92, 138, 0)",
                        height: "30px"
                    }}
                    to={{
                        background: this.props.menuItem.selected ? "rgba(11, 92, 138, 1)" : "rgba(11, 92, 138, 0)",
                        height: "30px"
                    }}>
                    {props =>
                        <animated.div className="clickable w-100 d-flex align-items-center justify-content-center px-4" onClick={this.openSubMenu} style={props}>
                            <div className="col-1">
                                <i className={this.props.menuItem.icon}></i>
                            </div>
                            <div className="col">
                                <span className="left-menu-item-name px-2">{this.props.menuItem.name}</span>
                            </div>
                            <div className="col-1" style={{ marginLeft: "-20px!important" }}>
                                <ChevronIcon toggle={this.props.menuItem.selected} />
                            </div>
                        </animated.div>
                    }
                </Spring>

                <Transition
                    items={this.props.menuItem.selected}
                    from={{
                        display: 'none',
                        height: 0,
                        opacity: 0,
                        overflow: 'hidden'
                    }}
                    enter={{
                        display: 'block',
                        height: 'auto',
                        maxHeight: '130px',
                        opacity: 1,
                        overflow: 'hidden',
                        overflowY: this.props.menuItem.subitems.length > 5 ? 'auto' : 'hidden'
                    }}
                    leave={{
                        height: 0,
                        opacity: 0,
                        overflow: 'hidden'
                    }}>
                    {toggle => toggle && (props =>
                        <animated.div className="open-left-menu w-100 d-flex flex-column align-content-start align-items-center" style={props}>
                            {this.props.menuItem.subitems.map(item =>
                                <div className="w-100 d-flex align-items-center py-1" onClick={this.menuItemClicked}>
                                    <div className="col-3"></div>

                                    <Link className="d-flex align-items-center" to={item.link}>
                                        <SelectedItem selected={item.selected} />

                                        <div className="col">
                                            <div className="text-white">{item.name}</div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </animated.div>
                    )}
                </Transition>
            </div>
        );
    }
}