import React from 'react';
import {Redirect} from 'react-router-dom';

const Logout = (props) => {
    return (
        <Redirect to="/" push={true}/>
    )
};

export default Logout