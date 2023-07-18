import { put } from "redux-saga/effects";
import { setPresetList } from "redux/actions/presetAction";
import PresetOptions from "mockdata/birdsEyeView";

export function* handlePresetList(action) {
  try {
    //  const response = yield fetchCardData(cardAPI, action.payload);
    if (action?.payload) {
      yield put(setPresetList(action?.payload));
    } else {
      yield put(setPresetList(PresetOptions));
    }
  } catch (error) {
    console.log(error);
  }
}
