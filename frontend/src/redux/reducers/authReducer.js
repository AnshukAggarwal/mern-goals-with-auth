import {
  ADD_USER_FAIL,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
} from "../constants/authConstants";

const user = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  user: user ? user : null,
  loading: false,
  error: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_USER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "LOGOUT": {
      return {
        ...state,
        user: null,
      };
    }
    case "RESET_AUTH_STATE": {
      return {
        ...state,
        loading: false,
        error: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
