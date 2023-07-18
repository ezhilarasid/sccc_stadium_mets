import { all, takeLatest } from "redux-saga/effects";
import { handleLogin } from "./handlers/login";
import { handleCardData } from "./handlers/cardData";
import { handlePresetList } from "./handlers/presetList";
import login from "../actions/loginActions";
import cardData from "../actions/cardAction";
import presetList from "redux/actions/presetAction";

export default function* rootSaga() {
  yield all([watchLogin(), watchCardData(), watchPresetList()]);
}

export function* watchLogin() {
  yield takeLatest(login.GET_USER_LOGIN, handleLogin);
}

export function* watchCardData() {
  yield takeLatest(cardData.GET_CARD_DATA, handleCardData);
}

export function* watchPresetList() {
  yield takeLatest(presetList.GET_PRESET_LIST, handlePresetList);
}
