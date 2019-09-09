import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './App.scss';
import Footer from './footer/footer.js';
import Header from './header/header';
import Home from './pages/home'
import AllCourses from './pages/all_courses'
import Login from './pages/login'
import Register from './pages/register'
import Logout from "./pages/logout";
import AccountContainer from "./pages/account";

const history = createBrowserHistory();


class Nav extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/all_courses" component={AllCourses}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/account" component={AccountContainer}/>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default Nav;

