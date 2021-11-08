export type RootStackParamList = {
  MainNavigator: {
    screen: 'MainTabsNavigator';
    params: RootStackParamList['MainTabsNavigator'];
  };
  MainTabsNavigator: {
    screen: 'Home' | 'AddPost' | 'Profile';
    params?: any;
  };
  Home: undefined;
  AddPost: undefined;
  Profile: undefined;
};

export type RouteName = keyof RootStackParamList;
