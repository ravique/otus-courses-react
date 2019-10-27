import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'
import MockAdapter from 'axios-mock-adapter';

import {LoginContainer} from '../components/pages/login/login_form'
import API from "../utils/API";
import {MemoryRouter} from "react-router-dom";


describe('LoginContainer', () => {

    let output;

    beforeEach(() => {
        output = mount(
            <MemoryRouter>
                <LoginContainer/>
            </MemoryRouter>
        ).find('LoginContainer');
    });

    it('should render login container', () => {


        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should login', () => {


        expect(output.state().loggedIn).toBeFalsy();
    });

    it('should change state on fields change', () => {
            const mockChangeUsername = {
                target: {
                    name: 'username',
                    value: 'John'
                }
            };

            const mockChangePassword = {
                target: {
                    name: 'password',
                    value: '32768'
                }
            };

            const expected = {
                username: 'John',
                password: '32768',
                errors: '',
                loggedIn: false
            };

            output.instance().handleChange(mockChangeUsername);
            output.instance().handleChange(mockChangePassword);

            expect(output.state()).toEqual(expected);
        }
    );

    it('should login', async () => {

        let mock = new MockAdapter(API);
        mock.onPost('login/').reply(200);

        const fakeEvent = {
            preventDefault: () => {}
        };

        await output.instance().handleSubmit(fakeEvent);
        output.update();

        expect(output.state().loggedIn).toEqual(true)
    })
});


describe('LoginContainer', () => {

});

