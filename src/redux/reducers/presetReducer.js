import presetListActions from "redux/actions/presetAction";

const initialState = {
  presetListData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case presetListActions.SET_PRESET_LIST:
      const { presetListData } = action;
      return { ...state, presetListData };
    default:
      return state;
  }
};
