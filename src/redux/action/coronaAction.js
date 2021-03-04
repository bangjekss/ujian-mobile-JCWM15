import axios from 'axios';
import {
  API_LOADING_FAILED,
  API_LOADING_START,
  API_LOADING_SUCCESS,
  NULLIFY_ERROR,
  GET_CORONA,
  GET_COUNTRY_CORONA,
} from '../type';
import {api_url} from '../../api';

const getCoronaAction = () => {
  return async (dispatch) => {
    try {
      dispatch({type: NULLIFY_ERROR});
      dispatch({type: API_LOADING_START});
      const response = await axios.get(`${api_url}`);
      console.log(response.data);
      dispatch({type: GET_CORONA, payload: response.data.Global});
      dispatch({type: API_LOADING_SUCCESS});
    } catch (err) {
      console.log(err);
      dispatch({type: API_LOADING_FAILED, payload: err.message});
    }
  };
};
const getCountry = () => {
  return async (dispatch) => {
    try {
      dispatch({type: NULLIFY_ERROR});
      dispatch({type: API_LOADING_START});
      const response = await axios.get(`${api_url}`);
      console.log(response.data);
      dispatch({type: GET_COUNTRY_CORONA, payload: response.data.Countries});
      dispatch({type: API_LOADING_SUCCESS});
    } catch (err) {
      console.log(err);
      dispatch({type: API_LOADING_FAILED, payload: err.message});
    }
  };
};

export {getCoronaAction, getCountry};
