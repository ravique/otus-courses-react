import React, {Component} from "react";
import {Logo, Menu} from '../menu/menu'


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

export default Header;