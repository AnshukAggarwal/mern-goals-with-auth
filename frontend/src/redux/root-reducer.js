import { combineReducers } from "redux";

import authReducer from "./reducers/authReducer";
import goalReducer from "./reducers/goalReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  goal: goalReducer,
});

export default rootReducer;
