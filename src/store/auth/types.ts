import { User } from '../../shared/models';

export enum ActionType {
  LOGIN = '@@auth/LOGIN',
  LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS',
  LOGIN_ERROR = '@@auth/LOGIN_ERROR',
  REGISTER = '@@auth/REGISTER',
  REGISTER_SUCCESS = '@@auth/REGISTER_SUCCESS',
  REGISTER_ERROR = '@@auth/REGISTER_ERROR',
  LOGOUT = '@@auth/LOGOUT',
}

export type Action =
  | { type: ActionType.LOGIN }
  | { type: ActionType.LOGIN_SUCCESS; payload: User }
  | { type: ActionType.LOGIN_ERROR; payload: any }
  | { type: ActionType.REGISTER }
  | { type: ActionType.REGISTER_SUCCESS; payload: User }
  | { type: ActionType.REGISTER_ERROR; payload: any }
  | { type: ActionType.LOGOUT };

export interface State {
  readonly isAuthenticated: boolean;
  readonly user?: User;
  readonly login: {
    isLoggingIn: boolean;
    error?: any;
  };
  readonly register: {
    isRegisteringIn: boolean;
    error?: any;
  };
}
