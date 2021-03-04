import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
