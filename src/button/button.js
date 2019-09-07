import React, {Component} from "react";
const classNames = require('classnames');

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
        let btnClass = classNames({
            'button': true,
            'button_pressed': this.state.pressed
        });

        return (
            <button className={btnClass} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        )
    }

}

export default Button