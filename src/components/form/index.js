import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {capitalizeFirstLetter} from "../../utils/utils";
const classNames = require('classnames');

class FormLabel extends Component {
    render() {
        return (
            <label htmlFor={this.props.name} className="form__label">
                {this.props.text ? this.props.text : capitalizeFirstLetter(this.props.name)}
            </label>
        )
    }
}

class FormInput extends Component {

    handleChange = (event) => {
        this.props.eventHandler(event);
    };

    render() {
        const inputCls = classNames({
            'form__input': true,
            'form__input_error': this.props.error
        });

        return (
            <input
                type={this.props.type}
                className={inputCls}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.handleChange}
                accept={this.props.accept}
            />
        )
    }
}

FormInput.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    accept: PropTypes.string
};

export {FormLabel, FormInput};