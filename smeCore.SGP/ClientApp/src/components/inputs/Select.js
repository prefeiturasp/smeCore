import React, { Component } from 'react';

export class Select extends Component {
    render() {
        var { defaultText, options, ...rest } = this.props;
        defaultText = (defaultText === undefined ? "Selecione uma opção" : " " + defaultText);
        options = options === undefined ? [] : options;

        return (
            <select {...rest}>
                <option defaultValue hidden className="text-muted" value="">{defaultText}</option>
                {options.map(option =>
                    <option value={option.value}>{option.label}</option>
                )};
            </select>
        );
    }
}