import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AddPostScreen } from '../../screens/add-post';
import { RootStackParamList, RouteName } from '../types';

const AddPost = createStackNavigator<RootStackParamList>();

export const AddPostNavigator = () => {
  return (
    <AddPost.Navigator>
      <AddPost.Screen name={RouteName.AddPost} component={AddPostScreen} />
    </AddPost.Navigator>
  );
};
