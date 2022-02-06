import { displayName } from "react-native/Libraries/Text/TextAncestor";
import {
  logUserIntoDatabase,
  registerUserIntoDatabase,
} from "../../helpers/database";
import { clearStoriesState } from "../storyItems/storyItems.actions";
import { userTypes } from "./user.types";

const registerUserStart = () => ({
  type: userTypes.REGISTER_USER_START,
});

const registerUserSuccess = (currentUser) => ({
  type: userTypes.REGISTER_USER_SUCCESS,
  payload: currentUser,
});

const registerUserFail = (message) => ({
  type: userTypes.REGISTER_USER_FAIL,
  payload: message,
});

const loginUserStart = () => ({
  type: userTypes.LOGIN_USER_START,
});

const loginUserSuccess = (currentUser) => ({
  type: userTypes.LOGIN_USER_SUCCESS,
  payload: currentUser,
});

const loginUserFail = (message) => ({
  type: userTypes.LOGIN_USER_FAIL,
  payload: message,
});

export const logout = () => ({
  type: userTypes.LOGOUT,
});

export const registerUserAsync = (name, email, password) => {
  return async (dispatch) => {
    dispatch(registerUserStart());
    try {
      const registeredData = await registerUserIntoDatabase(
        name,
        email,
        password
      );
      dispatch(registerUserSuccess(registeredData));
    } catch (error) {
      dispatch(registerUserFail(error.message));
    }
  };
};

export const loginUserAsync = (email, password) => {
  return async (dispatch) => {
    dispatch(loginUserStart());
    try {
      const loggedInData = await logUserIntoDatabase(email, password);
      console.log(loggedInData, "loggedInData");
      dispatch(loginUserSuccess(loggedInData));
    } catch (error) {
      dispatch(loginUserFail(error.message));
    }
  };
};
