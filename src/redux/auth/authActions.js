import axios from "axios";
import { LOADING, SET_USER, ERROR_WHILE_LOADING_USER } from "./authTypes";
import jwt_decode from "jwt-decode";

export const fetchUser = ({ email, password, rememberMe }) => {
  return async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      const response = await axios.post(
        "https://sigviewauth.sigmoid.io/signIn",
        {
          email,
          password,
          rememberMe,
        }
      );
      dispatch({ type: SET_USER, payload: response.data });
      const decoded_token = jwt_decode(response.data.token);
      if (rememberMe) {
        debugger;
        localStorage.setItem("jwt_exp", decoded_token.exp);
        localStorage.setItem("token", response.data.token);
      } else {
        sessionStorage.setItem("jwt_exp", decoded_token.exp);
        sessionStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ERROR_WHILE_LOADING_USER,
        errorMsg: error.response.data.statusMessage,
      });
    }
  };
};
