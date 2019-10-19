import React, {Component} from 'react';
import ThrowErrors from "../../throw_errors/index";
import API from "../../../utils/API";
import {FormInput, FormLabel} from "../../form/index";


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


    handleChange = ({target: {name, value}}) => {
         this.setState({
                [name]: value
            }
        );
    };

    handlePasswordChange = (event) => {

        let check;
        event.target.name === 'password' ? check = this.state.password2 : check = this.state.password;

        console.log(event.target.value);
        console.log(check);

        event.target.value !== check ? this.setState({
            errors: {
                password: ['Passwords mismatch']
            }
        }) : this.setState({
                errors: {
                    password: null
                }
            }
        );

        this.handleChange(event);
    };

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
            <form className="form" onSubmit={this.handleSubmit}>

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
                    eventHandler={this.handlePasswordChange}
                    placeholder='Enter your password'
                />
                <ThrowErrors message={this.state.errors.password}/>

                <FormLabel name='password2' text='Confirm password' error={this.state.errors.password}/>
                <FormInput
                    type='password'
                    name='password2'
                    error={this.state.errors.password}
                    eventHandler={this.handlePasswordChange}
                    placeholder='Confirm your password'
                />
                <ThrowErrors message={this.state.errors.non_field_errors}/>

                <button type="submit" className="button button_full_width">Register</button>

                {this.state.message}
            </form>
        )
    }

}