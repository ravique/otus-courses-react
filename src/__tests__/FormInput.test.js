import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';

import '../../jest.config'
import {FormInput} from "../components/form";
import {fakeEvent} from "../__mocks__";

describe('FormInput', () => {

    let output;
    const mockOnChange = jest.fn();

    beforeEach(() => {
        output = shallow(
            <FormInput
                type='text'
                name='Test input'
                className='test-class'
                placeholder='placeholder'
                value='mock-value'
                eventHandler={mockOnChange}
                accept='accept'
            />
        );
    });

    it('should render form input', () => expect(shallowToJson(output)).toMatchSnapshot());

    it('should call eventHandler', () => {
        output.instance().handleChange(fakeEvent);
        expect(mockOnChange).toBeCalled();
    });

});
