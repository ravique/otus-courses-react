import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Links from './links'

const Logo = () => (
    <h1 className="header__logo">
        <Link to="/" className="link">Vaporwave courses</Link>
    </h1>
);

class Menu extends Component {
    render() {

        const {loggedIn, userType} = this.props;

        let links = [
            {name: 'All courses', url: '/all_courses'},
        ];

        userType === 'lecturer' && links.push({name: 'Table', url: '/table'});

        loggedIn ? links.push({name: 'Account', url: '/account'}, {name: 'Logout', url: '/logout'}) :
            links.push({name: 'Login', url: '/login'}, {name: 'Register', url: '/register'});

        return (
            <div className='menu'>
                <Links links={links}/>
            </div>
        )
    }
}

const mapStateToProps = ({loggedIn, userType}) => {
    return {
        loggedIn: loggedIn,
        userType: userType
    }
};

const SmartMenu = connect(mapStateToProps)(Menu);

export {Logo, SmartMenu};