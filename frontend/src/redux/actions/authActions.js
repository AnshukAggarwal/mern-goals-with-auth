import axios from "axios";
import {
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
} from "../constants/authConstants";

export const addUserAsync = (userData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ADD_USER_START });
      const { data } = await axios.post("/api/users/register", userData);
      localStorage.setItem("user", JSON.stringify(data));
      // if (data) {
      //   localStorage.setItem("user", JSON.stringify(data));
      // }
      dispatch({ type: ADD_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_USER_FAIL, payload: error.response.data.message });
    }
  };
};

export const loginUserAsync = (userCred) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOGIN_USER_START });
      const { data } = await axios.post("/api/users/login", userCred);
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_USER_FAIL, payload: error.response.data.message });
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    try {
      dispatch({ type: "LOGOUT" });
      localStorage.removeItem("user");
    } catch (error) {}
  };
};

export const resetState = () => {
  return (dispatch) => {
    try {
      dispatch({ type: "RESET_AUTH_STATE" });
    } catch (error) {}
  };
};
