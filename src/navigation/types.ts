export enum RouteName {
  MainNavigator = 'MainNavigator',
  MainTabsNavigator = 'MainTabsNavigator',
  Home = 'Home',
  AddPost = 'AddPost',
  Profile = 'Profile',
  AuthNavigator = 'AuthNavigator',
  Auth = 'Auth',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
}

export type RootStackParamList = {
  AuthNavigator:
    | {
        screen: RouteName.Auth;
        params?: RootStackParamList[RouteName.Auth];
      }
    | {
        screen: RouteName.SignIn;
        params?: RootStackParamList[RouteName.SignIn];
      }
    | {
        screen: RouteName.SignUp;
        params?: RootStackParamList[RouteName.SignUp];
      };
  MainNavigator: {
    screen: RouteName.MainTabsNavigator;
    params: RootStackParamList[RouteName.MainTabsNavigator];
  };
  MainTabsNavigator:
    | {
        screen: RouteName.Home;
        params?: RootStackParamList[RouteName.Home];
      }
    | {
        screen: RouteName.AddPost;
        params?: RootStackParamList[RouteName.AddPost];
      }
    | {
        screen: RouteName.Profile;
        params?: RootStackParamList[RouteName.Profile];
      };
  Home: undefined;
  AddPost: undefined;
  Profile: undefined;
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
};
