import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import cardReducer from "./cardReducer";
import presetReducer from "./presetReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  cardData: cardReducer,
  preset: presetReducer,
});

export default rootReducer;
