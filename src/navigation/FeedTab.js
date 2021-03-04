import React from 'react';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, TableScreen} from '../screen/home';
import HomeStack from './HomeStack';
import {SplashScreen} from '../component';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const FeedTab = () => {
  // const {isLoading} = useSelector((state) => state.authReducer);
  // if (isLoading) {
  //   return <SplashScreen />;
  // }
  return (
    <Tab.Navigator
      initialRouteName="Home Stack"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let icon;
          if (route.name === 'Home Stack') icon = 'home';
          if (route.name === 'Table') icon = 'table';
          return (
            <Icon
              name={icon}
              type="FontAwesome"
              style={{color, fontSize: 22}}
            />
          );
        },
      })}>
      <Tab.Screen
        name="Home Stack"
        component={HomeStack}
        options={{title: ''}}
      />
      <Tab.Screen name="Table" component={TableScreen} options={{title: ''}} />
    </Tab.Navigator>
  );
};

export default FeedTab;
