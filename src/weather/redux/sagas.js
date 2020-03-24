import { all, takeEvery, put } from 'redux-saga/effects';
import weatherActions, { FETCH_WEATHER } from './actions';
import axios from 'axios';

function* fetchWeather() {
  yield takeEvery(FETCH_WEATHER, handleFetchWeather);
}

export function* handleFetchWeather({ city }) {
  try {
    const response = yield axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?appid=6a78596d062df78380eff5944c4e5567&q=${city}`
    );
    yield put(weatherActions.setWeather(response.data.list));
    yield put(weatherActions.setError(false));
  } catch (e) {
    yield put(weatherActions.setWeather([]));
    yield put(weatherActions.setError(true));
  }
}

export function* watchWeatherRequests() {
  yield all([
    fetchWeather(),
  ]);
}
