import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'

import Login from '../components/pages/login'

describe('Login', () => {
    it('should render login', () => {
        const output = shallow(
            <Login/>
        );

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
