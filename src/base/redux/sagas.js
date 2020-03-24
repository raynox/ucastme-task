import { all, fork } from 'redux-saga/effects';
import { watchWeatherRequests } from '../../weather/redux/sagas';

export default function* () {
  yield all([fork(watchWeatherRequests)]);
}
