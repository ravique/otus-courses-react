import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

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

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        }
    }

    componentDidMount() {
        this.setState({loggedIn: cookies.get('loggedIn')})
    }

    render() {

        // if (!this.state.loggedIn) {
        //     return (
        //
        //     )
        // }

        return (
            <div className='menu'>


                <Link to="/all_courses" className="menu__link">All courses</Link>&nbsp;|&nbsp;<Link to="/register"
                                                                                    className="menu__link">Register</Link>&nbsp;|&nbsp;<Link to="/login"
                                                                                    className="menu__link">Login</Link>
            </div>
        )
    }
}

export {Logo, Menu};