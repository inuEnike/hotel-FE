interface AuthState {
  [key: string]: any;
}

interface AuthAction {
  type: string;
  payload?: any;
  token?: any;
}

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: null,
        token: action.token,
        isAuthenticated: true,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
