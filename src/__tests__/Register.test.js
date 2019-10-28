import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'

import Register from "../components/pages/register";


describe('Register', () => {
    it('should render register page', () => {
        const output = shallow(
            <Register/>
        );

        expect(shallowToJson(output)).toMatchSnapshot();
    });
});