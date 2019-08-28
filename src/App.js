import React, {Component} from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './App.scss';
import Footer from './footer/footer.js';
import {Content, CoursesContainer, LecturersContainer} from './container/container';
import Button from "./button/button";
import Header from './header/header';
import LoginContainer from './login_form/login_form'

const history = createBrowserHistory();


class Home extends Component {
    render() {
        return (
            <Content>
                <h2>Courses:</h2>
                <CoursesContainer/>
                <Button url='/' text="Show more"/>
                <h2>Our lecturers</h2>
                <LecturersContainer/>
            </Content>
        );

    }
}

class AllCourses extends Component {
    render() {
        return (
            <Content>
                <h2>Courses:</h2>
                <CoursesContainer/>
            </Content>
        )
    }
}

class Register extends Component {
    render() {
        return (
            <Content>
                <h2>Register:</h2>
            </Content>
        )
    }
}

class Login extends Component {
    render() {
        return (
            <Content>
                <h2>Login:</h2>
            <LoginContainer/>
            </Content>
        )
    }
}

class Nav extends Component {
    render() {
        return (
            <Router history={history}>
                <Header/>

                <Route exact path="/" component={Home}/>
                <Route path="/all_courses" component={AllCourses}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>

                <Footer/>
            </Router>
        )
    }
}


export default Nav;
