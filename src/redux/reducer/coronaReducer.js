const {
  API_LOADING_START,
  API_LOADING_SUCCESS,
  API_LOADING_FAILED,
  NULLIFY_ERROR,
  GET_CORONA,
  GET_COUNTRY_CORONA,
} = require('../type');

const INITIAL_STATE = {
  NewConfirmed: null,
  TotalConfirmed: null,
  NewDeaths: null,
  TotalDeaths: null,
  NewRecovered: null,
  TotalRecovered: null,
  Countries: [],
};

const coronaReducer = (state = INITIAL_STATE, action) => {
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
    case GET_CORONA:
      return {
        ...state,
        NewConfirmed: action.payload.NewConfirmed,
        TotalConfirmed: action.payload.TotalConfirmed,
        NewDeaths: action.payload.NewDeaths,
        TotalDeaths: action.payload.TotalDeaths,
        NewRecovered: action.payload.NewRecovered,
        TotalRecovered: action.payload.TotalRecovered,
      };
    case GET_COUNTRY_CORONA:
      return {
        ...state,
        Countries: action.payload,
      };
    default:
      return state;
  }
};

export default coronaReducer;
