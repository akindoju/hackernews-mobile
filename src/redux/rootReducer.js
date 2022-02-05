import { combineReducers } from "redux";
import { storyItemsReducer } from "./storyItems/storyItems.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  storyItems: storyItemsReducer,
  user: userReducer,
});
