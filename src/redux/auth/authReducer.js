import {
  LOADING,
  SET_USER,
  ERROR_WHILE_LOADING_USER,
  CLEAR_MSG,
  LOGOUT,
} from "./authTypes";
const initialState = {
  info: {
    loading: false,
    userInfo: null,
    errorMsg: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        info: {
          ...state.info,
          loading: true,
        },
      };
    case ERROR_WHILE_LOADING_USER:
      return {
        info: {
          ...state.info,
          loading: false,
          errorMsg: action.errorMsg,
        },
      };
    case SET_USER: {
      return {
        info: {
          ...state.info,
          loading: false,
          userInfo: action.payload,
        },
      };
    }
    case CLEAR_MSG: {
      return {
        info: {
          ...state.info,
          errorMsg: "",
        },
      };
    }
    case LOGOUT: {
      localStorage.clear();
      sessionStorage.clear();
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
