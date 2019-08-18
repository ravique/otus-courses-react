import React, {Component} from "react";

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            pressed: !state.pressed
        }));

    }

    render() {

        const {text, url} = this.props;

        let className = 'button';
        className += this.state.pressed ? ' button_pressed': '';

        return (
            <button className={className} onClick={this.handleClick}>{text}</button>
        )
    }

}

export default Button