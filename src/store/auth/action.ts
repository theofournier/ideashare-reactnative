import { Dispatch } from 'redux';
import { authService } from '../../services';
import { ActionType, Action } from './types';

export const onLogin =
  ({ email, password }: { email: string; password: string }) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.LOGIN });
      const user = await authService.signInWithEmailAndPassword({
        email,
        password,
      });
      dispatch({ type: ActionType.LOGIN_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: ActionType.LOGIN_ERROR, payload: error });
    }
  };

export const onRegister =
  ({
    firstname,
    lastname,
    email,
    password,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionType.REGISTER });
      const user = await authService.createUserWithEmailAndPassword({
        firstname,
        lastname,
        email,
        password,
      });
      dispatch({ type: ActionType.REGISTER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: ActionType.REGISTER_ERROR, payload: error });
    }
  };

export const onLogOut = () => async (dispatch: Dispatch<Action>) => {
  await authService.signOut();
  dispatch({ type: ActionType.LOGOUT });
};
