import { NavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';
//import { Game } from '../types/Game';
import { RootStackParamList, RouteName } from './types';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export const getNavigatorState = () => navigationRef.current?.getState();

export const getCurrentRoute = () => navigationRef.current?.getCurrentRoute();

export const navigate = (
  routeName: RouteName,
  params?: RootStackParamList[RouteName],
) => {
  if (
    routeName === RouteName.Home ||
    routeName === RouteName.AddPost ||
    routeName === RouteName.Profile
  ) {
    navigationRef.current?.navigate(RouteName.MainNavigator, {
      screen: RouteName.MainTabsNavigator,
      params: {
        screen: routeName,
        params: params as RootStackParamList[RouteName],
      },
    });
  } else if (
    routeName === RouteName.Auth ||
    routeName === RouteName.SignIn ||
    routeName === RouteName.SignUp
  ) {
    navigationRef.current?.navigate(RouteName.AuthNavigator, {
      screen: routeName,
      params: params as RootStackParamList[RouteName],
    });
  } else {
    navigationRef.current?.navigate(
      routeName as RouteName,
      params as RootStackParamList[RouteName],
    );
  }
};

export const goBack = () => {
  navigationRef.current?.goBack();
};
