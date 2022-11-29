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

const INITIAL_STATE = {
  goals: [],
  loading: false,
  error: null,
  success: false,
};

const goalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_GOAL_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        goals: action.payload,
        success: true,
      };
    case ADD_GOAL_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case GET_GOALS_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_GOALS_SUCCESS: {
      return {
        ...state,
        goals: action.payload,
        loading: false,
      };
    }
    case GET_GOALS_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case DELETE_GOAL_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case DELETE_GOAL_SUCCESS: {
      return {
        ...state,
        loading: false,
        goals: action.payload,
      };
    }
    case DELETE_GOAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case UPDATE_GOAL_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case UPDATE_GOAL_SUCCESS: {
      return {
        ...state,
        loading: false,
        goals: action.payload,
      };
    }
    case UPDATE_GOAL_FAIL: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "RESET_GOAL_STATE": {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default goalReducer;
