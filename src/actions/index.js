export const logIn = (userType) => {
  return {
    type: 'LOGIN',
    userType: userType
  }
};

export const logOut = () => {
  return {
    type: 'LOGOUT'
  }
};