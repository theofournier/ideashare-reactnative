import { AppNavigator } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { navigationRef } from './navigation/navigationService';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
