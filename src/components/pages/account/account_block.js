import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import {format} from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';


import {FormInput, FormLabel} from '../../form/index';
import ThrowErrors from '../../throw_errors/index';

export default class AccountBlock extends Component {

    constructor(props) {
        super(props);
        this.state = this.props.accountData;
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({
                [name]: value
            }
        );
    };

    handleBirthdateChange = date => {
        this.setState({
            'birthdate': format(date, 'yyyy-MM-dd')
        })
    };

    handleAvatarChange = event => {
        event.preventDefault();

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        };

    };

    updateData = event => {
        event.preventDefault();
        this.props.updateData(event)
    };

    render() {

        const avatar = this.state.imagePreviewUrl ? this.state.imagePreviewUrl :
            this.state.avatar ? this.state.avatar : 'https://dummyimage.com/1000x1000/000000/0011ff.png&text=Upload+your+photo!';

        return (
            <form className="form_full_width" onSubmit={this.updateData.bind(this)}>
                <div className="form_full_width__column_half_width">
                    <FormLabel className="form" name='username'/>
                    <FormInput
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={this.state.username}
                        eventHandler={this.handleChange}
                        error={this.props.errors.username}
                    />
                    <ThrowErrors message={this.props.errors.username}/>

                    <FormLabel name='first_name' text='First name'/>
                    <FormInput
                        type="text"
                        name="first_name"
                        placeholder="Enter your first name"
                        value={this.state.first_name}
                        eventHandler={this.handleChange}
                    />

                    <FormLabel name='last_name' text='Last name'/>
                    <FormInput
                        type="text"
                        name="last_name"
                        placeholder="Enter your last name"
                        value={this.state.last_name}
                        eventHandler={this.handleChange}
                    />

                    <FormLabel name='email'/>
                    <FormInput
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        eventHandler={this.handleChange}
                    />

                    <FormLabel name='birthdate'/>
                    <DatePicker
                        name="birthdate"
                        maxDate={new Date()}
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        yearDropdownItemNumber={100}
                        scrollableYearDropdown
                        value={this.state.birthdate}
                        onChange={this.handleBirthdateChange}
                    />
                    <ThrowErrors message={this.props.errors.birthdate}/>

                    <button type="submit" className="button button_full_width">Update</button>

                    {this.props.message}
                </div>
                <div className="form_full_width__column_half_width">
                    <img className="avatar" src={avatar}/>
                    <FormInput
                        type="file"
                        name="avatar"
                        eventHandler={this.handleAvatarChange}
                        accept="image/*"
                        error={this.props.errors.avatar}
                    />
                    <ThrowErrors message={this.props.errors.avatar}/>
                </div>
            </form>
        )
    }
}