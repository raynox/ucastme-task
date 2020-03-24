const prefix = '@weather/';

export const FETCH_WEATHER = `${prefix}FETCH_WEATHER`;
export const SET_WEATHER = `${prefix}SET_WEATHER`;
export const SET_ERROR = `${prefix}SET_ERROR`;

export default {
  fetchWeather: city => ({ type: FETCH_WEATHER, city }),
  setWeather: items => ({ type: SET_WEATHER, items }),
  setError: error => ({ type: SET_ERROR, error })
};
