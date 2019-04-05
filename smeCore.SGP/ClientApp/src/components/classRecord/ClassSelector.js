import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
import { useTransition, animated } from 'react-spring';
import { AutocompleteTextBox } from '../inputs/AutocompleteTextBox'
import { Select } from '../inputs/Select';

function FilterIcon(props) {
    const transitions = useTransition(props.isOpen, item => item, {
        from: { display: 'none' },
        enter: { display: 'block' },
        leave: { display: 'none' }
    });

    return (
        transitions.map(({ item, key, props }) =>
            item ?
                <animated.div style={props} key={key} className="sgp-blue">
                    <i className="fas fa-filter"></i>
                </animated.div>
                :
                <animated.div style={props} key={key} className="sgp-gray">
                    <i className="fas fa-filter"></i>
                </animated.div>
        )
    );
}

function SearchTextBox(props) {
    const transitions = useTransition(props.isOpen, item => item, {
        from: { display: 'none' },
        enter: { display: 'block' },
        leave: { display: 'none' }
    });

    const onChange = props.onChange;
    const value = props.value;
    const collection = props.collection;

    return (
        transitions.map(({ item, key, props }) =>
            item ?
                <AutocompleteTextBox style={props} key={key} value={value} className="form-control opacity-30" placeholder="Encontre sua turma" onChange={onChange} disabled />
                :
                <AutocompleteTextBox style={props} key={key} value={value} className="form-control" placeholder="Encontre sua turma" onChange={onChange} collection={collection} />
        )
    );
}

function SearchButton1(props) {
    const transitions = useTransition(props.isOpen, item => item, {
        from: { display: 'none' },
        enter: { display: 'block', width: '40px' },
        leave: { display: 'none' }
    });

    const onClick = props.onClick;

    return (
        transitions.map(({ item, key, props }) =>
            item ?
                <animated.div style={props} key={key} className="d-flex justify-content-center align-items-center sgp-gray">
                    <i className="fas fa-search"></i>
                </animated.div>
                :
                <animated.div style={props} key={key} className="round-button d-flex justify-content-center align-items-center clickable" onClick={onClick}>
                    <i className="fas fa-search"></i>
                </animated.div>
        )
    );
}

export class ClassSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFilterOpen: false,
            searchTextBox: "",
            classes: {},
            autocompleteCollection: {},
            caseSensitive: false,
        };

        this.openFilter = this.openFilter.bind(this);
        this.onTextBoxChange = this.onTextBoxChange.bind(this);
    }

    componentDidMount() {
        var url = '/api/Planejamento/CarregarTurmasProfessor?username=' + this.props.user.username;
        this.props.apiGet(url)
            .then(response => response.json())
            .then(data => {
                var result = {};

                for (var i = 0; i < data.schools.length; i++) {
                    var schoolName = data.schools[i].name;

                    for (var j = 0; j < data.schools[i].classes.length; j++)
                        result["item" + i + "" + j] = {
                            year: data.schools[i].classes[j].year,
                            description: data.schools[i].classes[j].description,
                            school: schoolName,
                            label: data.schools[i].classes[j].description + " - " + schoolName,
                            active: false
                        };
                }

                this.setState({ classes: result, autocompleteCollection: result });
            });
    }

    openFilter() {
        this.setState({ isFilterOpen: !this.state.isFilterOpen });
    }

    onTextBoxChange(collection, newValue = null) {
        var classes = this.state.classes;

        for (var key in collection)
            classes[key].active = collection[key].active;

        if (newValue === null)
            this.setState({
                classes: classes,
                autocompleteCollection: collection
            });
        else {
            if (newValue === "")
                collection = classes;
            else {
                var filter = {};

                if (this.state.caseSensitive === true)
                    Object.entries(classes).map(([key, item]) => {
                        if (item.label.toLowerCase().includes(newValue.toLowerCase()))
                            filter[key] = item;
                    });
                else
                    Object.entries(classes).map(([key, item]) => {
                        if (item.label.includes(newValue))
                            filter[key] = item;
                    });

                collection = filter;
            }

            this.setState({
                searchTextBox: newValue,
                classes: classes,
                autocompleteCollection: collection
            });

        }
    }
    
    render() {
        const options = [
            { value: "1", label: "One" },
            { value: "2", label: "Two" },
            { value: "3", label: "Three" },
            { value: "4", label: "Four" },
        ];

        return (
            <div className="card card-component">
                <div className="py-2 px-4 d-flex align-items-center">
                    <SearchTextBox value={this.state.searchTextBox} onChange={this.onTextBoxChange} isOpen={this.state.isFilterOpen} collection={this.state.autocompleteCollection} />
                    <div className="px-2">
                        <SearchButton1 isOpen={this.state.isFilterOpen} />
                    </div>
                    <div>
                        <div className="round-button-dashed d-flex justify-content-center align-items-center clickable" onClick={this.openFilter}>
                            <FilterIcon isOpen={this.state.isFilterOpen} />
                        </div>
                    </div>
                </div>

                <Spring
                    from={{
                        height: 0,
                        overflow: 'hidden'
                    }}
                    to={{
                        height: this.state.isFilterOpen ? 'auto' : 0
                    }}>
                    {props =>
                        <animated.div id="class-selector-submenu" className="" style={props}>
                            <div className="py-2 px-4 d-flex align-items-center">
                                <Select className="custom-select col-4" defaultText="Selecione a DRE" options={options}/>
                                <div className="px-2"></div>
                                <Select className="custom-select col-4" defaultText="Escola" options={options} />
                                <div className="px-2"></div>
                                <Select className="custom-select" defaultText="Ano" options={options} />
                                <div className="px-2"></div>
                                <Select className="custom-select" defaultText="Curso" options={options} />
                                <div className="px-2"></div>
                                <div>
                                    <div className="round-button d-flex justify-content-center align-items-center clickable"><i className="fas fa-search"></i></div>
                                </div>
                            </div>
                        </animated.div>
                    }
                </Spring>
            </div>
        );
    }
}