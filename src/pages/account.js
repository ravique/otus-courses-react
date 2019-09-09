import React, {Component} from 'react';

import PreLoader from "../common/pre-loader";
import API from "../utils/API";
import Content from "../container/content";
import AccountBlock from "../account/account_block";

class AccountContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            errors: [],
        };

        this.updateData = this.updateData.bind(this);
    }

    async componentDidMount() {
        let accountData = await API.get('account/');

        this.setState({
                accountData: accountData.data,
                isLoading: false,

            }
        )
    }

    updateData(event) {
        API.post('account/', {
            "username": event.target.username.value,
            "first_name": event.target.first_name.value,
            "last_name": event.target.last_name.value,
        }).then(response => {
                this.setState({
                    accountData: response.data,
                    message: 'Your account info was updated'
                })
            }
        ).catch(
            errors => {
                this.setState({
                    errors: errors.response.data['errors'],
                    message: null
                })
            }
        )
    }

    render() {
        const content = this.state.isLoading ? <PreLoader/> :
            <AccountBlock
                accountData={this.state.accountData}
                errors={this.state.errors}
                updateData={this.updateData}
                message={this.state.message}
            />;
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

export default AccountContainer;