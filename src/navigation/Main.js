import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SplashScreen} from '../component';
import {getCoronaAction, keepLoginAction} from '../redux/action';
import {AuthStack, HomeDrawer} from './';

const Main = () => {
  const dispatch = useDispatch();
  const {isLogin, isLoading} = useSelector((state) => state.authReducer);
  useEffect(() => {
    dispatch(getCoronaAction());
    dispatch(keepLoginAction());
  }, []);
  console.log(isLogin);
  // if (isLoading) {
  //   return <SplashScreen />;
  // }
  // setTimeout(() => <SplashScreen />, 2000);
  return <>{isLogin ? <HomeDrawer /> : <AuthStack />}</>;
};

export default Main;
