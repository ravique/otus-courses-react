import React, {Component} from 'react';
import './App.scss';
import Footer from './footer/footer.js';
import Content from './container/container';
import Header from './header/header';

class Home extends Component {
    render() {
        return [
            <Header/>,
            <Content/>,
            <Footer/>,
        ];

    }
}

export default Home;
