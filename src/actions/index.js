import fetchAPI from '../services/api';

const ECONOMIA_AWESOME_API = 'https://economia.awesomeapi.com.br/json/all';

// Coloque aqui suas actions
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  payload: {
    email,
  },
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';

export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCESS';

export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

export const requestCurrenciesAction = () => ({
  type: REQUEST_CURRENCIES,
  payload: {
    isFetching: true,
  },
});

export const requestCurrenciesSuccessAction = (currenciesData) => {
  const excludedCurrency = 'USDT';
  const currencies = Object.keys(currenciesData).reduce((acc, currency) => {
    if (currency !== excludedCurrency) {
      acc[currency] = currenciesData[currency];
    }
    return acc;
  }, {});

  return {
    type: REQUEST_CURRENCIES_SUCCESS,
    payload: {
      isFetching: false,
      currencies,
    },
  };
};

export const requestCurrenciesErrorAction = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  payload: {
    isFetching: false,
    error,
  },
});

export const fetchEconomiaAwesome = () => async (dispatch) => {
  dispatch(requestCurrenciesAction());

  try {
    const results = await fetchAPI(ECONOMIA_AWESOME_API);
    dispatch(requestCurrenciesSuccessAction(results));
  } catch (error) {
    dispatch(requestCurrenciesErrorAction(error));
  }

  // .then((issLocationResponse) => dispatch(
  //   requestISSLocationSuccess(issLocationResponse),
  // ))
  // .catch((issLocationError) => dispatch(
  //   requestISSLocationError(issLocationError),
  // ));
};
