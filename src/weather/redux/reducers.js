import { SET_WEATHER, SET_ERROR } from './actions';

const initialState = {
  items: [],
  error: false,
};

export default (state = initialState, { type, items, error }) => {
  switch (type) {
    case SET_WEATHER: {
      return { ...state, items };
    }

    case SET_ERROR: {
      return { ...state, error };
    }

    default: return state;
  }
};
