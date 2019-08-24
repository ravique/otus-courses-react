import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './App.scss';
import Footer from './footer/footer.js';
import {Content, CoursesContainer, LecturersContainer} from './container/container';
import Button from "./button/button";
import Header from './header/header';

const history = createBrowserHistory();


class Home extends Component {
    render() {
        return (
            <>

                <Content>
                    <h2>Courses:</h2>
                    <CoursesContainer/>
                    <Button url='/' text="Show more"/>
                    <h2>Our lecturers</h2>
                    <LecturersContainer/>
                </Content>
            </>
        );

    }
}

class AllCourses extends Component {
    render() {
        return [
            <>
                <Content>
                    <h2>Courses:</h2>
                    <CoursesContainer/>
                </Content>

            </>
        ]
    }
}

class Nav extends Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Header/>


                <Route exact path="/" component={Home}/>
                <Route path="/all_courses" component={AllCourses}/>
                <Footer/>,

            </BrowserRouter>
        )
    }
}

export default Nav;
