import React, {Component} from 'react';

import {FormInput, FormLabel} from "../form/form";
import ThrowErrors from "../throw_errors/throw_errors";

export default class AccountBlock extends Component {

    constructor(props) {
        super(props);

        this.state = this.props.accountData;
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
                [event.target.name]: event.target.value
            }
        );
    }

    updateData(event) {
        event.preventDefault();
        this.props.updateData(event)
    }

    render() {
        const accountData = this.state;
        return (
            <form className="form" onSubmit={this.updateData.bind(this)}>
                <FormLabel className="form" name='username'/>
                <FormInput
                    type="text"
                    name="username"
                    placeholder="Enter your username"
                    value={accountData.username}
                    eventHandler={this.handleChange}
                    error={this.props.errors.username}
                />
                <ThrowErrors message={this.props.errors.username}/>

                <FormLabel name='first_name' text='First name'/>
                <FormInput
                    type="text"
                    name="first_name"
                    placeholder="Enter your first name"
                    value={accountData.first_name}
                    eventHandler={this.handleChange}
                />

                <FormLabel name='last_name' text='Last name'/>
                <FormInput
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    value={accountData.last_name}
                    eventHandler={this.handleChange}
                />

                <FormLabel name='email'/>
                <FormInput
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={accountData.email}
                    eventHandler={this.handleChange}
                />

                 <button type="submit" className="button button_full_width">Update</button>
                {this.props.message}
            </form>
        )
    }
}