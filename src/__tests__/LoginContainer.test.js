import React from 'react';
import {mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'
import {MemoryRouter} from "react-router-dom";

import {LoginContainer} from '../components/pages/login/login_form'
import API from "../utils/API";
import MockAdapter from 'axios-mock-adapter';
import {fakeEvent} from "../__mocks__";



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
                loggedIn: false
            };

            output.instance().handleChange(mockChangeUsername);
            output.instance().handleChange(mockChangePassword);

            expect(output.state()).toMatchObject(expected);
        }
    );

    it('should login', async () => {

        let mock = new MockAdapter(API);
        mock.onPost('login/').reply(200);

        await output.instance().handleSubmit(fakeEvent);

        expect(output.state().loggedIn).toEqual(true);
    });

    it('should fail login', async () => {

        let mock2 = new MockAdapter(API);
        mock2.onPost('login/').reply(400, {"errors":{"non_field_errors":["Incorrect email or password."]}});

        await output.instance().handleSubmit(fakeEvent);

        expect(output.state().loggedIn).toEqual(false);
        expect(output.state().errors.non_field_errors).toContain('Incorrect email or password.');
        expect(output.text()).toContain('Incorrect email or password.');
    })
});