import { combineReducers } from "redux";
import { storyItemsReducer } from "./storyItems/storyItems.reducer";

export const rootReducer = combineReducers({
  storyItems: storyItemsReducer,
});
