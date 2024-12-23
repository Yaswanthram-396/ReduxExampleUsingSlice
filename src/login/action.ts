import { Dispatch } from "redux";
import Cookies from "js-cookie";

// Define Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Define Thunk Action Type
type ThunkAction = (dispatch: Dispatch) => Promise<void>;

export const login = (username: string, password: string): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    const response = await fetch("https://apis.ccbp.in/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      dispatch({ type: LOGIN_FAILURE, payload: error.error_msg });
      return;
    }

    const data = await response.json();
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt_token });
    Cookies.set("jwt_token", data.jwt_token); // Optionally store token in cookies
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: "Network error" });
  }
};
