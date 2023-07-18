import { put } from "redux-saga/effects";
import { setCardData } from "../../actions/cardAction";
import labelCards from "../../../mockdata/labelCards";
// import fetchAPIServices from "../../../services/fetchAPIServices";
// import { cardAPI } from "../../../services/endPoints";

export function* handleCardData(action) {
  try {
    // const { fetchCardData } = fetchAPIServices;
    //  const response = yield fetchCardData(cardAPI, action.payload);
    if (labelCards) {
      yield put(setCardData(labelCards));
    } else {
      yield put(setCardData({}));
    }
  } catch (error) {
    console.log(error);
  }
}
