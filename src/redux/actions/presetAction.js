export const presetList = {
  GET_PRESET_LIST: "GET_PRESET_LIST",
  SET_PRESET_LIST: "SET_PRESET_LIST",
};

export const getPresetList = (payload) => ({
  type: presetList.GET_PRESET_LIST,
  payload: payload,
});

export const setPresetList = (presetListData) => ({
  type: presetList.SET_PRESET_LIST,
  presetListData,
});

export default presetList;
