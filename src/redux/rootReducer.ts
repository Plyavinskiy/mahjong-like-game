import { combineReducers } from "@reduxjs/toolkit";
import gameCardsReducer from "./features/gameCards/gameCardsSlice";

export default combineReducers({
  gameCards: gameCardsReducer,
});
