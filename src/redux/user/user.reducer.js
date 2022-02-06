import { userTypes } from "./user.types";

const initialState = {
  currentUser: null,
  errMsg: "",
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
        currentUser: action.payload.rows._array[0],
      };
    }

    case userTypes.LOGIN_USER_FAIL: {
      return { ...state, errMsg: action.payload };
    }

    default:
      return state;
  }
};
