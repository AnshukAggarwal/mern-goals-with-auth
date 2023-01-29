import axios from "axios";
import {
  ADD_GOAL_START,
  ADD_GOAL_SUCCESS,
  ADD_GOAL_FAIL,
  GET_GOALS_START,
  GET_GOALS_SUCCESS,
  GET_GOALS_FAIL,
  DELETE_GOAL_START,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_FAIL,
  UPDATE_GOAL_START,
  UPDATE_GOAL_SUCCESS,
  UPDATE_GOAL_FAIL,
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

      const { data } = await axios.get(`${API}`, config);
      dispatch({ type: GET_GOALS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_GOALS_FAIL, payload: error.response.data.message });
    }
  };
};

export const deleteGoalAsync = (id) => {
  return async (dispatch) => {
    const token = await store.getState().auth.user.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      dispatch({ type: DELETE_GOAL_START });
      const { data } = await axios.delete(`${API}/delete/${id}`, config);
      dispatch({ type: DELETE_GOAL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: DELETE_GOAL_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const updateGoalAsync = (goalText, id) => {
  return async (dispatch) => {
    try {
      const token = await store.getState().auth.user.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      dispatch({ type: UPDATE_GOAL_START });
      const { data } = await axios.put(`${API}/edit/${id}`, goalText, config);
      dispatch({ type: UPDATE_GOAL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_GOAL_FAIL,
        payload: error.response.data.message,
      });
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
