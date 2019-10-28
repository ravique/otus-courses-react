import React from 'react';
import {shallow} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'
import {FormLabel} from "../components/form";

describe('FormLabel', () => {

    let output;

    beforeEach(() => {
        output = shallow(
            <FormLabel name='test'/>
        );
    });

    it('should render form label', () => expect(shallowToJson(output)).toMatchSnapshot());
    it('should render text of label', () => expect(output.text()).toContain('Test'));
});
