import React from 'react';
import {Link} from 'react-router-dom';


const Logo = () => (
    <h1 className="header__logo">
        <Link to="/" className="link">Vaporwave courses</Link>
    </h1>
);

const Menu = () => (
    <div className='menu'>
        <Link to="/all_courses" className="menu__link">All courses</Link>,
        <Link to="/login" className="menu__link">Login</Link>,
        <Link to="/logout" className="menu__link">Logout</Link>,
        <Link to="/register" className="menu__link">Register</Link>,
        <Link to="/account" className="menu__link">Account</Link>
    </div>
);

export {Logo, Menu};