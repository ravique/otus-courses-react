import React, {Component} from "react";
import {Link} from 'react-router-dom';

const classNames = require('classnames');

export default class Button extends Component {

    constructor() {
        super();
        this.state = {
            pressed: false
        };
    }

    handleClick = () => {
         this.setState(prevState => ({
            pressed: !prevState.pressed
        }));
    };

    render() {

        const {url, text} = this.props;

        let btnClass = classNames({
            'button': true,
            'button_pressed': this.state.pressed
        });

        return (
            <Link to={url} className={btnClass} onClick={this.handleClick}>{text}</Link>
        )
    }
}

