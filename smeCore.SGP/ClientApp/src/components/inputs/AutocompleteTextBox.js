import React, { Component } from 'react';

export class AutocompleteTextBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false
        }

        this.toggle = this.toggle.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.focusOut = this.focusOut.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    toggle() {
        this.setState({ toggle: !this.state.toggle });
    }

    onKeyDown(event) {
        var collection = this.props.collection;

        if (event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40) {
            var collectionList = Object.entries(collection);
            var index = -1;

            for (var i = 0; i < collectionList.length; i++)
                if (collectionList[i][1].active === true) {
                    index = i;
                    collectionList[i][1].active = false;
                    break;
                }

            if (event.keyCode === 40) {
                ++index;

                if (index >= collectionList.length)
                    index = 0;
            }

            if (event.keyCode === 38) {
                --index;

                if (index < 0)
                    index = collectionList.length - 1;
            }

            if (index >= 0) {
                var key = collectionList[index][0];
                collection[key].active = true;

                if (event.keyCode === 13) {
                    collection[key].active = false;

                    this.props.onChange(collection, collection[key].label);
                    this.setState({ toggle: false });
                }
                else {
                    this.props.onChange(collection);
                    this.setState({ toggle: true });
                }
            }
        }
        else {
            for (var item in collection)
                collection[item].active = false;

            this.props.onChange(collection);
        }
    }

    onTextChange(event) {
        this.props.onChange(this.props.collection, event.target.value);
        this.setState({ toggle: true });
    }

    focusOut() {
        this.setState({ toggle: false });
    }

    onSelect(event) {
        this.props.onChange(this.props.collection, event.target.innerText);
    }

    render() {
        return (
            <div className="w-100" style={{ position: "relative" }} onBlur={this.focusOut}>
                <input type="text" {...this.props} onClick={this.toggle} onChange={this.onTextChange} onKeyDown={this.onKeyDown} value={this.props.value} />
                {this.state.toggle &&
                    <div className="card w-100" style={{ position: 'absolute', top: '40px', maxHeight: '200px', zIndex: 5, overflow: 'hidden', overflowY: 'auto' }}>
                        {Object.entries(this.props.collection).length > 0 ?
                            <table className="table-sm table-hover border-0">
                                <tbody>
                                    {Object.entries(this.props.collection).map(([key, item]) =>
                                        item.active ?
                                            <tr key={key} style={{ cursor: 'default' }} className="table-active"><td className="border-0" onMouseDown={this.onSelect}>{item.label}</td></tr>
                                            :
                                            <tr key={key} style={{ cursor: 'default' }} className=""><td className="border-0" onMouseDown={this.onSelect}>{item.label}</td></tr>
                                    )}
                                </tbody>
                            </table>
                            :
                            <span className="px-2 py-2">Nenhum resultado encontrado...</span>
                        }
                    </div>
                }
            </div>
        );
    }
}