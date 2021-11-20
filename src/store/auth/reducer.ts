import { Action, ActionType, State } from './types';

const initialState: State = {
  isAuthenticated: false,
  user: undefined,
  login: {
    isLoggingIn: false,
    error: undefined,
  },
  register: {
    isRegisteringIn: false,
    error: undefined,
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { ...state, login: { ...state.login, isLoggingIn: true } };
    case ActionType.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: Boolean(action.payload),
        user: action.payload,
        login: {
          ...state.login,
          isLoggingIn: false,
          error: undefined,
        },
      };
    case ActionType.LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        login: {
          ...state.login,
          isLoggingIn: false,
          error: action.payload,
        },
      };
    case ActionType.REGISTER:
      return {
        ...state,
        register: { ...state.register, isRegisteringIn: true },
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthenticated: Boolean(action.payload),
        user: action.payload,
        register: {
          ...state.register,
          isRegisteringIn: false,
          error: undefined,
        },
      };
    case ActionType.REGISTER_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        register: {
          ...state.register,
          isRegisteringIn: false,
          error: action.payload,
        },
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
      };
    default:
      return state;
  }
};

export { reducer as authReducer };
