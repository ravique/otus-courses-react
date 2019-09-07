import React, {Component} from 'react';
import {capitalizeFirstLetter} from "../utils/utils";


class FormLabel extends Component {
    render() {
        return (
            <label htmlFor={this.props.name} className="form__label">
                {this.props.text ? this.props.text : capitalizeFirstLetter(this.props.name)}
            </label>
        )
    }
}

export {FormLabel};