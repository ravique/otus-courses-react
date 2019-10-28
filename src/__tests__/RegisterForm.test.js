import React from 'react';
import {shallowToJson} from 'enzyme-to-json';
import {mount} from "enzyme/build/index";
import '../../jest.config'

import RegisterForm from "../components/pages/register/register_form";
import {MemoryRouter} from "react-router-dom";
import API from "../utils/API";
import MockAdapter from 'axios-mock-adapter';
import {fakeEvent} from "../__mocks__";


describe('RegisterForm', () => {

    let output;
    let mock = new MockAdapter(API);

    beforeEach(() => {
        output = mount(
            <MemoryRouter>
                <RegisterForm/>
            </MemoryRouter>
        ).find('RegisterForm');
    });

    it('should render register form', () => {
        expect(shallowToJson(output)).toMatchSnapshot();
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

            const mockChangePassword2 = {
                target: {
                    name: 'password2',
                    value: '32768'
                }
            };

            const mockChangeEmail = {
                target: {
                    name: 'email',
                    value: 'example@example.com'
                }
            };

            const expected = {
                username: 'John',
                password: '32768',
                email: 'example@example.com'
            };

            output.instance().handleChange(mockChangeUsername);
            output.instance().handleChange(mockChangePassword);
            output.instance().handleChange(mockChangePassword2);
            output.instance().handleChange(mockChangeEmail);

            expect(output.state()).toMatchObject(expected);
        }
    );

    it('should highlight no matching passwords', () => {
        const mockChangePassword = {
            target: {
                name: 'password',
                value: '32768'
            }
        };

        output.setState({
            password2: '1234'
        });

        output.instance().handlePasswordChange(mockChangePassword);

        expect(output.state()).toMatchObject({
            errors: {
                password: ['Passwords mismatch']
            }
        });

        expect(output.text()).toContain('Passwords mismatch');

    });

    it('should highlight no matching passwords', () => {
        const mockChangePassword = {
            target: {
                name: 'password',
                value: '1234'
            }
        };

        output.setState({
            password2: '32768'
        });

        output.instance().handlePasswordChange(mockChangePassword);

        expect(output.state()).toMatchObject({
            errors: {
                password: ['Passwords mismatch']
            }
        });

        expect(output.text()).toContain('Passwords mismatch');

    });

    it('should accept matching passwords', () => {
        const mockChangePassword = {
            target: {
                name: 'password',
                value: '32768'
            }
        };

        output.setState({
            password2: '32768'
        });

        output.instance().handlePasswordChange(mockChangePassword);

        expect(output.state().errors.password).toBeNull();
        expect(output.text()).not.toContain('Passwords mismatch');

    });

    it('should accept register', async () => {
        mock.onPost('register/').reply(200, {"email": "example@example.com"});

        await output.instance().handleSubmit(fakeEvent);

        const success_message = 'Registered successfully. Verification email sent to example@example.com'

        expect(output.state().message).toContain(success_message)
        expect(output.text()).toContain(success_message);

    });

    it('should decline register', async () => {

        mock.onPost('register/').reply(400, {"errors": {"username": ["A user with that username already exists."]}});

        await output.instance().handleSubmit(fakeEvent);

        expect(output.state().errors.username).toContain('A user with that username already exists.');
        expect(output.text()).toContain('A user with that username already exists.');
    })
});