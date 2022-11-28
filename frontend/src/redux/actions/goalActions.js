import axios from "axios";
import {
  ADD_GOAL_START,
  ADD_GOAL_SUCCESS,
  ADD_GOAL_FAIL,
  GET_GOALS_START,
  GET_GOALS_SUCCESS,
  GET_GOALS_FAIL,
} from "../constants/goalConstants";
import { store } from "../store";

const API = "/api/goals";

export const addGoalAsync = (goalText) => {
  return async (dispatch) => {
    try {
      const token = await store.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({ type: ADD_GOAL_START });
      const { data } = await axios.post(`${API}/add`, goalText, config);
      dispatch({ type: ADD_GOAL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ADD_GOAL_FAIL, payload: error.response.data.message });
    }
  };
};

export const getUserGoals = () => {
  return async (dispatch) => {
    try {
      const token = await store.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({ type: GET_GOALS_START });
      console.log(await axios.get(`${API}`, config));
      const { data } = await axios.get(`${API}`, config);
      dispatch({ type: GET_GOALS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_GOALS_FAIL, payload: error.response.data.message });
    }
  };
};

export const resetState = () => {
  return (dispatch) => {
    try {
      dispatch({ type: "RESET_GOAL_STATE" });
    } catch (error) {}
  };
};
