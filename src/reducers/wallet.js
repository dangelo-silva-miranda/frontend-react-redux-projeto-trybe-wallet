import {
  REQUEST_CURRENCIES,
  REQUEST_CURRENCIES_SUCCESS,
  REQUEST_CURRENCIES_ERROR,
  ADD_EXPENSE,
} from '../actions';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const initialState = {
  currencies: {},
  expenses: [],
  isFetching: false,
  totalExpenses: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_CURRENCIES: {
    const { isFetching } = payload;
    return {
      ...state,
      isFetching,
    };
  }

  case REQUEST_CURRENCIES_SUCCESS: {
    const { isFetching, currencies } = payload;
    // const currenciesArray = Object.keys(currencies)
    //   .reduce(
    //     (acc, currency) => {
    //       acc.push({ [currency]: currencies[currency] });
    //       return acc;
    //     }, [],
    //   );
    return {
      ...state,
      isFetching,
      currencies/* : currenciesArray */,
    };
  }

  case REQUEST_CURRENCIES_ERROR: {
    const { isFetching, error } = payload;
    return {
      ...state,
      isFetching,
      error,
    };
  }

  case ADD_EXPENSE: {
    const { expense, expense: { exchangeRates, currency, value } } = payload;
    const totalExpense = exchangeRates[currency].ask * value;
    return {
      ...state,
      expenses: [...state.expenses, expense],
      totalExpenses: state.totalExpenses + totalExpense,
    };
  }

  default:
    return state;
  }
};
