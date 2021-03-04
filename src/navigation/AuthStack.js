import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screen/auth';
import {useSelector} from 'react-redux';
import {SplashScreen} from '../component';

const Stack = createStackNavigator();

const AuthStack = () => {
  const {isLoading} = useSelector((state) => state.authReducer);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
