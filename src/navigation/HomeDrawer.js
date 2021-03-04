import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AccountStack, FeedTab} from '.';
import {useSelector} from 'react-redux';
import {SplashScreen} from '../component';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen name="Feed" component={FeedTab} />
      <Drawer.Screen name="Account" component={AccountStack} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
