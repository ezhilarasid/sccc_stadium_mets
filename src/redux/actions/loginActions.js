export const login = {
  GET_USER_LOGIN: "GET_USER_LOGIN",
  SET_USER_LOGIN: "SET_USER_LOGIN",
  GET_USER_LOGOUT: "GET_USER_LOGOUT",
  SET_USER_LOGOUT: "SET_USER_LOGOUT",
};

export const getUserLogin = (payload) => ({
  type: login.GET_USER_LOGIN,
  payload: payload,
});

export const getUserLogout = () => ({
  type: login.GET_USER_LOGIN,
  payload: { logout: true },
});

export const setUserLogin = (loginData) => ({
  type: login.SET_USER_LOGIN,
  loginData,
});

export default login;
