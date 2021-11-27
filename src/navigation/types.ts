export enum RouteName {
  MainNavigator = 'MainNavigator',
  MainTabsNavigator = 'MainTabsNavigator',
  Home = 'Home',
  Profile = 'Profile',
  AuthNavigator = 'AuthNavigator',
  Auth = 'Auth',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  AddPostNavigator = 'AddPostNavigator',
  StartAddPost = 'StartAddPost',
  AddPost = 'AddPost',
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
  MainNavigator:
    | {
        screen: RouteName.MainTabsNavigator;
        params: RootStackParamList[RouteName.MainTabsNavigator];
      }
    | {
        screen: RouteName.AddPostNavigator;
        params: RootStackParamList[RouteName.AddPostNavigator];
      };
  MainTabsNavigator:
    | {
        screen: RouteName.Home;
        params?: RootStackParamList[RouteName.Home];
      }
    | {
        screen: RouteName.StartAddPost;
        params: RootStackParamList[RouteName.StartAddPost];
      }
    | {
        screen: RouteName.Profile;
        params?: RootStackParamList[RouteName.Profile];
      };
  AddPostNavigator: {
    screen: RouteName.AddPost;
    params?: RootStackParamList[RouteName.AddPost];
  };
  Home: undefined;
  StartAddPost: undefined;
  Profile: undefined;
  Auth: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddPost: undefined;
};
