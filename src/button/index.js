import React, {Component} from "react";
import {Link} from 'react-router-dom';

const classNames = require('classnames');

class Button extends Component {
    constructor() {
        super();

        this.state = {
            pressed: false
        };
    }


    handleClick() {
        this.setState(prevState => ({
            pressed: !prevState.pressed
        }));
    }

    render() {
        let btnClass = classNames({
            'button': true,
            'button_pressed': this.state.pressed
        });

        return (
            <Link to={this.props.url} className={btnClass}>{this.props.text}</Link>
        )
    }

}

export default Button