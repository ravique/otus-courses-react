const initialState = {
    loggedIn: false,
    userType: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state,
                loggedIn: true,
                userType: action.userType
            };
        case 'LOGOUT':
            return {...state,
                loggedIn: false,
                userType: null
            };
        default:
            return state;
    }
};

export default login;