import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';

const doLogIn = data => {
    console.log(data);
    axios.post('/api/login/', data)
        .then(response => showSuccessAndRedirect(response))
        .catch(error => throwLoginErrors(error.response.data)
    );
};

const removeErrors = () => document.querySelectorAll('.login_form__errors__message').forEach(element => element.remove());

const showSuccessAndRedirect = response => {
    removeErrors()
    alert('Logged in! Then we will do something like redirect to nextHref or mainpage');
};

const throwLoginErrors = error => {
    let error_msg = error.error;
    console.log(error_msg);
    Object.keys(error_msg).forEach(item => {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'login_form__errors__message';
        errorSpan.innerText = `${item}: ${error_msg[item]}`;
        document.querySelector('.login_form__errors').appendChild(errorSpan);
    });
};

document.querySelector('#submit').onclick = () => {
    removeErrors()

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const data = {
        'username': username,
        'password': password
    };
    doLogIn(data);

};
