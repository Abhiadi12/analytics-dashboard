import { FETCH_DATE_RANGE, FETCH_CHARTS_DATA } from "./dashboardTypes";
import { LOGOUT } from "../auth/authTypes";
const initialState = {
  startDate: null,
  endDate: null,
  data: [],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATE_RANGE:
      return { ...state, ...action.payload };
    case FETCH_CHARTS_DATA:
      return { ...state, data: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default dashboardReducer;
