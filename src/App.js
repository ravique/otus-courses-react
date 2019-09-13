import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './App.scss';
import Footer from './footer';
import Header from './header';
import Home from './pages/home'
import AllCourses from './pages/courses'
import Login from './pages/login/index'
import Register from './pages/register/index'
import Logout from "./pages/logout";
import AccountContainer from "./pages/account/index";

const history = createBrowserHistory();


export default class App extends Component {
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


