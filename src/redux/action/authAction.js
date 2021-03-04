import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  API_LOADING_FAILED,
  API_LOADING_START,
  API_LOADING_SUCCESS,
  AUTH_LOGOUT,
  AUTH_SIGN,
  NULLIFY_ERROR,
} from '../type';

const keepLoginAction = () => {
  return async (dispatch) => {
    dispatch({type: NULLIFY_ERROR});
    dispatch({type: API_LOADING_START});
    try {
      const user = await AsyncStorage.getItem('data');
      console.log(user);
      dispatch({type: AUTH_SIGN, payload: user});
      dispatch({type: API_LOADING_SUCCESS});
    } catch (err) {
      console.log(err);
      dispatch({type: API_LOADING_FAILED, payload: err.message});
    }
  };
};

const logoutAction = () => {
  return async (dispatch) => {
    dispatch({type: NULLIFY_ERROR});
    dispatch({type: API_LOADING_START});
    await AsyncStorage.removeItem('data');
    dispatch({type: AUTH_LOGOUT});
    dispatch({type: API_LOADING_SUCCESS});
  };
};

export {keepLoginAction, logoutAction};
