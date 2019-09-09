import React, {Component} from 'react';
import ThrowErrors from "../throw_errors/throw_errors";
import API from "../utils/API";
import {FormInput, FormLabel} from "../form/form";


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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
                [event.target.name]: event.target.value
            }
        );
    }

    handlePasswordChange(event) {

        let check;
        event.target.name === 'password' ? check = this.state.password2 : check = this.state.password;

        if (event.target.value !== check) {
            this.setState({
                    errors: {
                        password: ['Passwords mismatch']
                    }
                }
            );
        } else {
            this.setState({
                    errors: {
                        password: []
                    }
                }
            );
        }

        this.handleChange(event);
    }

    handleSubmit = event => {
        event.preventDefault();

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

    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit.bind(this)}>

                <FormLabel name='username' error={this.state.errors.username}/>
                <FormInput
                    type='text'
                    name='username'
                    error={this.state.errors.username}
                    eventHandler={this.handleChange}
                    placeholder='Enter your username'
                />
                <ThrowErrors message={this.state.errors.username}/>

                <FormLabel name='email' error={this.state.errors.email}/>
                <FormInput
                    type='email'
                    name='email'
                    error={this.state.errors.email}
                    eventHandler={this.handleChange}
                    placeholder='Enter your email'
                />
                <ThrowErrors message={this.state.errors.email}/>

                <FormLabel name='password' error={this.state.errors.password}/>
                <FormInput
                    type='password'
                    name='password'
                    error={this.state.errors.password}
                    eventHandler={this.handleChange}
                    placeholder='Enter your password'
                />
                <ThrowErrors message={this.state.errors.password}/>

                <FormLabel name='password2' text='Confirm password' error={this.state.errors.password}/>
                <FormInput
                    type='password'
                    name='password2'
                    error={this.state.errors.password}
                    eventHandler={this.handleChange}
                    placeholder='Confirm your password'
                />
                <ThrowErrors message={this.state.errors.non_field_errors}/>

                <button type="submit" className="button button_full_width">Register</button>

                {this.state.message}
            </form>
        )
    }

}