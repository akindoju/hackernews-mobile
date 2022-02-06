import { combineReducers } from "redux";
import { storyItemsReducer } from "./storyItems/storyItems.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { userReducer } from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

export const rootReducer = combineReducers({
  storyItems: storyItemsReducer,
  user: userReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
