import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import API from "../../../utils/API";
import ThrowErrors from "../../throw_errors/index";
import {FormInput, FormLabel} from "../../form/index";

export default class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            loggedIn: false,
            errors: '',
            username: '',
            password: ''
        };
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    };

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
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <FormLabel name="login"/>
                    <FormInput
                        type="text"
                        name="username"
                        eventHandler={this.handleChange}
                        placeholder="Enter your username."
                        value={this.state.username}
                        error={this.state.errors.username}
                    />
                    <ThrowErrors message={this.state.errors.username}/>

                    <FormLabel name="password"/>
                    <FormInput
                        type="password"
                        name="password"
                        eventHandler={this.handleChange}
                        placeholder="Enter your password."
                        value={this.state.password}
                        error={this.state.errors.password}
                    />
                    <ThrowErrors message={this.state.errors.password}/>

                    <ThrowErrors message={this.state.errors.non_field_errors}/>

                    <button type="submit" className="button button_full_width">Login</button>
                </form>
            )
        } else {
            return (
                <Redirect to="/"/>
            )
        }
    }
}

