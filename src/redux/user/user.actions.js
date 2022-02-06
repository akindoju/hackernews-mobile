import {
  logUserIntoDatabase,
  registerUserIntoDatabase,
} from "../../helpers/database";

import { userTypes } from "./user.types";

const registerUserStart = () => ({
  type: userTypes.REGISTER_USER_START,
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
      await registerUserIntoDatabase(name, email, password);
      dispatch(loginUserSuccess({ name, email }));
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
      const userObj = { ...loggedInData.rows._array[0] };
      delete userObj.password;

      dispatch(loginUserSuccess(userObj));
    } catch (error) {
      console.log(error, "errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrror");
      dispatch(loginUserFail(error));
    }
  };
};
