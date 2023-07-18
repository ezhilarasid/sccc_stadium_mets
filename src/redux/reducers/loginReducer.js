import loginActions from '../actions/loginActions';

const initialState = {
  loginData: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case loginActions.SET_USER_LOGIN:
      const { loginData } = action;
      return { ...state, loginData };
    default:
      return state;
  }
};