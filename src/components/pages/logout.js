import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from "../../actions";
import API from "../../utils/API";

class DumbLogout extends Component {

    componentDidMount() {
        this.props.dispatch(logOut());
        API.post('logout/')
    }

    render() {
        return (
            <Redirect to="/" push={true}/>
        )
    }
};

const Logout = connect()(DumbLogout);

export default Logout