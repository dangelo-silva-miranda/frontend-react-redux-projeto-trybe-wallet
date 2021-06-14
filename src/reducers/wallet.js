import {
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: [],
  expenses: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCIES:
    return {
      ...state,
      isFetching: payload.isFetching,
    };

  case REQUEST_CURRENCIES_SUCCESS:
    return {
      ...state,
      isFetching: payload.isFetching,
      currencies: payload.currencies,
    };

  case REQUEST_CURRENCIES_ERROR:
    return {
      ...state,
      isFetching: payload.isFetching,
      error: payload.error,
    };

  default:
    return state;
  }
};
