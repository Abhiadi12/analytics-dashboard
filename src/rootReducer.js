import { combineReducers } from "redux";
import authReducer from "./redux/auth/authReducer";
import dashboardReducer from "./redux/dashboard/dashboardReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

export default rootReducer;
