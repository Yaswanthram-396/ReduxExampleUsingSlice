import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./action";

interface AuthState {
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  token: null,
};

const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
