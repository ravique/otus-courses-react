import React, {Component} from 'react';
import './App.scss';
import Footer from './footer/footer.js';
import Content from './container/container';


class Logo extends Component {
    render() {
        return (
            <h1 className="header__logo">
                <a href="/index.html" className="link">Vaporwave courses</a>
            </h1>
        )
    }
}


class Menu extends Component {
    render() {
        return (
            <div className='menu'>
                <a href="/courses.html" className="menu__link">All courses</a> | <a href="/auth.html"
                                                                                    className="menu__link">Login</a>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Logo/>
                <Menu/>
            </div>
        )
    }

}



class App extends Component {
    render() {
        return [
            <Header/>,
            <Content/>,
            <Footer/>,
        ];

    }
}

export default App;
