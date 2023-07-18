export const cardList = {
  GET_CARD_DATA: "GET_CARD_DATA",
  SET_CARD_DATA: "SET_CARD_DATA",
};

export const getCardData = (payload) => ({
  type: cardList.GET_CARD_DATA,
  payload: payload,
});

export const setCardData = (cardData) => ({
  type: cardList.SET_CARD_DATA,
  cardData,
});

export default cardList;
