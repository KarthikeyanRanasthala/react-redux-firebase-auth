import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from "./actions";

const initState = {
  isRegisterSuccess: "",
  isLoginSuccess: ""
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return { isRegisterSuccess: true };
    }
    case REGISTER_FAIL: {
      return { isRegisterSuccess: false };
    }
    case LOGIN_SUCCESS: {
      return { isLoginSuccess: true };
    }
    case LOGIN_FAIL: {
      return { isLoginSuccess: false };
    }
    default:
      return state;
  }
};
