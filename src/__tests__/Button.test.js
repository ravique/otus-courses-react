import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'

import Button from '../components/button/index'

describe('Button', () => {
    it('should render button', () => {
        const output = shallow(
            <Button url='google.com' text="Show more"/>
        );

        expect(shallowToJson(output)).toMatchSnapshot();
        expect(output.hasClass('button')).toEqual(true);
    });

    it('should click', () => {
        const output = shallow(
            <Button url='google.com' text="Show more"/>
        );

        expect(output.state().pressed).toEqual(false);
        expect(output.hasClass('button_pressed')).toEqual(false);

        output.simulate('click');

        expect(output.state().pressed).toEqual(true);
        expect(output.hasClass('button_pressed')).toEqual(true);

    });
});