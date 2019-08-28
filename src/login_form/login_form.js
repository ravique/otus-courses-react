import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import Cookies from 'universal-cookie';

import API from "../utils/API";

const cookies = new Cookies();

const ThrowErrors = errors => (
    // Object.keys(errors.error).forEach(item => item);
    <span className="login_form__errors">
        <span className="login_form__errors__message">
            {errors.field ? Object.values(errors.field).shift() : ''}
        </span>
    </span>
);

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: '',
            password: '',
            errors: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const field = target.name;
        const value = target.value;

        this.setState({
            [field]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        API.post('login/', {"username": this.state.username, "password": this.state.password})
            .then(response => {
                    cookies.set('loggedIn', true);
                    this.setState({
                        loggedIn: true
                    })
                }
            ).catch(
            errors => {
                if (errors.response) {
                    this.setState({errors: errors.response.data['Error']});
                }
                // console.log(errors.response.data)
            }
        )
    };


    render() {

        if (!this.state.loggedIn) {

            return (
                <div className="login_form" onSubmit={this.handleSubmit}>
                    <form className="Login">
                        <label htmlFor="username" className="login_form__label">Username</label>
                        <input
                            type="text"
                            className="login_form__input"
                            name="username"
                            onChange={this.handleChange}
                            placeholder="Enter your username."
                            value={this.state.username}/>
                        <ThrowErrors field={this.state.errors.username}/>

                        <label htmlFor="password" className="login_form__label">Password</label>
                        <input
                            type="password"
                            className="login_form__input"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                            placeholder="Enter your password."/>
                        <ThrowErrors field={this.state.errors.password}/>

                        <ThrowErrors field={this.state.errors.non_field_errors}/>

                        <button type="submit" className="button button_full_width">Login</button>
                    </form>
                </div>

            )

        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
}

export default LoginContainer;
