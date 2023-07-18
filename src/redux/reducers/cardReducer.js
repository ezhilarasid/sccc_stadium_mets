import cardAction from "../actions/cardAction";

const initialState = {
  cardData: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cardAction.SET_CARD_DATA:
      const { cardData } = action;
      return { ...state, cardData };
    default:
      return state;
  }
};
