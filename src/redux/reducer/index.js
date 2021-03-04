import {combineReducers} from 'redux';
import authReducer from './authReducer';
import coronaReducer from './coronaReducer';

export default combineReducers({
  authReducer,
  coronaReducer,
});
