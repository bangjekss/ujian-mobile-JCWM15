const {
  API_LOADING_START,
  API_LOADING_SUCCESS,
  API_LOADING_FAILED,
  NULLIFY_ERROR,
  AUTH_LOGOUT,
  AUTH_SIGN,
} = require('../type');

const INITIAL_STATE = {
  username: null,
  isLogin: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case API_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case API_LOADING_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case NULLIFY_ERROR:
      return {
        ...state,
        isError: false,
        errorMessage: null,
      };
    case AUTH_SIGN:
      return {
        ...state,
        username: action.payload,
        isLogin: true,
      };
    case AUTH_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default authReducer;
