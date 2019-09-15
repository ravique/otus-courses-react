import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import './App.scss';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/pages/home'
import AllCourses from './components/pages/courses'
import Login from './components/pages/login/index'
import Register from './components/pages/register/index'
import Logout from "./components/pages/logout";
import AccountContainer from "./components/pages/account/index";

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


