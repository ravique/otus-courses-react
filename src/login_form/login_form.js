import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import API from "../utils/API";
import ThrowErrors from "../throw_errors/throw_errors";
import {FormLabel} from "../form/form";

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            errors: '',
            username: '',
            password: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        API.post('login/', {"username": this.state.username, "password": this.state.password})
            .then(response => {
                    this.setState({
                        loggedIn: true
                    })
                }
            ).catch(
            errors => {
                if (errors.response) {
                    console.log(errors.response.data['errors']);
                    this.setState(
                        {
                            errors: errors.response.data['errors']
                        }
                    );
                }
            }
        )
    };

    render() {

        if (!this.state.loggedIn) {
            return (
                <div className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <form className="Login">
                        <FormLabel name="login"/>
                        <input
                            type="text"
                            className="form__input"
                            name="username"
                            onChange={this.handleChange.bind(this)}
                            placeholder="Enter your username."
                            value={this.state.username}/>
                        <ThrowErrors message={this.state.errors.username}/>

                        <FormLabel name="password"/>
                        <input
                            type="password"
                            className="form__input"
                            name="password"
                            onChange={this.handleChange.bind(this)}
                            value={this.state.password}
                            placeholder="Enter your password."/>
                        <ThrowErrors message={this.state.errors.password}/>

                        <ThrowErrors message={this.state.errors.non_field_errors}/>

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

