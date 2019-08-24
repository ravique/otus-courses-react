import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <h1 className="header__logo">
                <Link to="/" className="link">Vaporwave courses</Link>
            </h1>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <Link to="/all_courses" className="menu__link">All courses</Link> | <a href="/auth.html"
                                                                                    className="menu__link">Login</a>
            </div>
        )
    }
}

export {Logo, Menu};