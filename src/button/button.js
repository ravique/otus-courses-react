import React, {Component} from "react";
import {classNames} from 'classnames';

class Button extends Component {
    constructor(props) {
        super(props);

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
        let btnClass = 'button';
        if (this.state.pressed) btnClass += ' button_pressed';

        return (
            <button className={btnClass} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        )
    }

}

export default Button