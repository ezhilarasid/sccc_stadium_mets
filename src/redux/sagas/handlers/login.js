import { put } from "redux-saga/effects";
import { setUserLogin } from "../../actions/loginActions";
import userList from "mockdata/login";
import fetchAPIServices from "../../../services/fetchAPIServices";
import { loginApi } from "../../../services/endPoints";

export function* handleLogin(action) {
  try {
    if (action && action.payload && action.payload.logout) {
      yield put(setUserLogin({}));
    } else {
      // const { fetchLogin } = fetchAPIServices;
      // const response = yield fetchLogin(loginApi, action.payload);
      const response =
        action?.payload?.userName === "donnapaul"
          ? userList[0]
          : action?.payload?.userName === "mikeross"
          ? userList[1]
          : action?.payload?.userName === "braydentim"
          ? userList[2]
          : action?.payload?.userName === "jessicarayn"
          ? userList[3]
          : action?.payload?.userName === "florenceross"
          ? userList[4]
          : "";
      if (response) {
        yield put(setUserLogin(response));
      } else {
        yield put(setUserLogin({}));
      }
    }
  } catch (error) {
    console.log(error);
  }
}
