import React, {Component} from 'react';

import PreLoader from "../../common/pre-loader";
import API from "../../utils/API";
import Content from "../../container/content";
import AccountBlock from "./account_block";

export default class AccountContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            errors: [],
        };

    }

    async componentDidMount() {
        try {
            let response = await API.get('account/');
            if (response.status === 200) {
                this.setState(
                    {
                        accountData: response.data,
                        isLoading: false
                    }
                )
            }
        } catch (error) {
            this.setState({
                authError: error.response.data.detail,
                message: null
            })
        }
    }

    updateData = ({target}) => {

        let formData = new FormData();
        formData.append("username", target.username.value);
        formData.append("first_name", target.first_name.value);
        formData.append("last_name", target.last_name.value);
        formData.append("birthdate", target.birthdate.value);

        if (target.avatar.files[0]) {
            formData.append("avatar", target.avatar.files[0])
        }

        API.post('account/', formData).then(response => {
                this.setState({
                    accountData: response.data,
                    isLoading: false,
                    message: 'Your account info was updated'
                })
            }
        ).catch(
            errors => {
                this.setState({
                    errors: errors.response.data['errors'],
                    isLoading: false,
                    message: null
                })
            }
        )
    };

    render() {
        let content;
        if (!this.state.authError) {
            content = this.state.isLoading ? <PreLoader/> :
                <AccountBlock
                    accountData={this.state.accountData}
                    errors={this.state.errors}
                    updateData={this.updateData}
                    message={this.state.message}
                />
        } else {
            content = this.state.authError;
        }

        return (
            <Content>
                <h1>Account</h1>
                <div className="container">
                    {content}
                </div>
            </Content>
        )
    }
}
