import { SAVE_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email: payload.email,
    };

  default:
    return state;
  }
};
