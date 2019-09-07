import React, {Component} from 'react';
import ThrowErrors from "../throw_errors/throw_errors";
import API from "../utils/API";
import {FormLabel} from "../form/form";


export default class RegisterForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errors: [],
            username: '',
            password: '',
            password2: '',
            email: '',
            message: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.password !== this.state.password2) {
            this.setState({
                    errors: {
                        password: ['Passwords mismatch']
                    }
                }
            );
        } else {
            API.post('register/', {
                "username": this.state.username,
                "password": this.state.password,
                "email": this.state.email
            }).then(response => {
                    this.setState(
                        {
                            message: `Registered successfully. Verification email sent to ${response.data.email}`,
                            errors: []
                        }
                    )
                }
            ).catch(
                errors => {
                    if (errors.response) {
                        this.setState({
                            errors: errors.response.data['errors']
                        });
                    }
                }
            )
        }
    };

    render() {
        return (
            <div className="form" onSubmit={this.handleSubmit.bind(this)}>
                <form className="Login">
                    <FormLabel name='username'/>
                    <input
                        type="text"
                        className="form__input"
                        name="username"
                        onChange={this.handleChange.bind(this)}
                        placeholder="Enter your username."
                        value={this.state.username}/>
                    <ThrowErrors message={this.state.errors.username}/>

                    <FormLabel name='email'/>
                    <input
                        type="text"
                        className="form__input"
                        name="email"
                        onChange={this.handleChange.bind(this)}
                        placeholder="Enter your email."
                        value={this.state.email}/>
                    <ThrowErrors message={this.state.errors.email}/>

                    <FormLabel name='password' errors={this.state.errors.username}/>
                    <input
                        type="password"
                        className="form__input"
                        name="password"
                        onChange={this.handlePasswordChange.bind(this)}
                        value={this.state.password}
                        placeholder="Enter your password."/>
                    <ThrowErrors message={this.state.errors.password}/>

                    <FormLabel name='password2' text='Confirm password' errors={this.state.errors.username}/>
                    <input
                        type="password"
                        className="form__input"
                        name="password2"
                        onChange={this.handlePasswordChange.bind(this)}
                        value={this.state.password2}
                        placeholder="Confirm your password."/>

                    <ThrowErrors message={this.state.errors.non_field_errors}/>

                    <button type="submit" className="button button_full_width">Register</button>
                </form>

                {this.state.message}
            </div>
        )
    }

}