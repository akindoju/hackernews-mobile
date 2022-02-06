import { userTypes } from "./user.types";

const initialState = {
  currentUser: null,
  loginErrMsg: "",
  registerErrMsg: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.REGISTER_USER_START: {
      return {
        ...state,
      };
    }

    case userTypes.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.rows._array[0],
        loginErrMsg: "",
        registerErrMsg: "",
      };
    }

    case userTypes.REGISTER_USER_FAIL: {
      return { ...state, registerErrMsg: action.payload };
    }

    case userTypes.LOGIN_USER_START: {
      return { ...state };
    }

    case userTypes.LOGIN_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        loginErrMsg: "",
        registerErrMsg: "",
      };
    }

    case userTypes.LOGIN_USER_FAIL: {
      return { ...state, loginErrMsg: action.payload };
    }

    case userTypes.LOGOUT: {
      return initialState;
    }

    default:
      return state;
  }
};
