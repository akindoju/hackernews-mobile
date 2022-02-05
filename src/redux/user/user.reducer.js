import { userTypes } from "./user.types";

const initialState = {
  //   name: "",
  //   email: "",
  //   password: "",
  currentUser: {},
  errMsg: "",
  isLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.typw) {
    case userTypes.REGISTER_USER_START: {
      return {
        ...state,
      };
    }

    case userTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload._array[0],
        isLoggedIn: true,
      };
    }

    case userTypes.REGISTER_USER_FAIL: {
      return { ...state, errMsg: action.payload };
    }

    case userTypes.LOGIN_USER_START: {
      return { ...state };
    }

    case userTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload._array[0],
        isLoggedIn: true,
      };
    }

    case userTypes.LOGIN_USER_FAIL: {
      return { ...state, errMsg: action.payload };
    }

    default:
      return state;
  }
};