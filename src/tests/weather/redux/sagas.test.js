import moxios from 'moxios';
import faker from 'faker';
import { runSaga } from 'redux-saga';
import { handleFetchWeather } from '../../../weather/redux/sagas';
import weatherActions from '../../../weather/redux/actions';

describe('users sagas', () => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('fetchWeather saga sets weather and clear error', async () => {

        const mockedWeather = {
            list: [
                { id: 1 }, { id: 2 }, { id: 3 },
            ]
        };

        const dispatchedActions = [];

        const fakeStore = {
            getState: () => ({ weather: { items: [], error: true } }),
            dispatch: action => dispatchedActions.push(action),
        }

        const city = 'Berlin';

        moxios.stubRequest(`http://api.openweathermap.org/data/2.5/forecast?appid=6a78596d062df78380eff5944c4e5567&q=${city}`, {
            status: 200,
            response: mockedWeather,
        });

        await runSaga(fakeStore, handleFetchWeather, { city }).toPromise();
        expect(dispatchedActions).toContainEqual(weatherActions.setWeather(mockedWeather.list));
        expect(dispatchedActions).toContainEqual(weatherActions.setError(false));
    });

    test('fetchWeather saga sets error on failed response', async () => {
        const dispatchedActions = [];

        const fakeStore = {
            getState: () => ({ weather: { items: [], error: true } }),
            dispatch: action => dispatchedActions.push(action),
        }

        const city = 'Ber';

        moxios.stubRequest(`http://api.openweathermap.org/data/2.5/forecast?appid=6a78596d062df78380eff5944c4e5567&q=${city}`, {
            status: 400,
        });

        await runSaga(fakeStore, handleFetchWeather, { city }).toPromise();
        expect(dispatchedActions).toContainEqual(weatherActions.setError(true));
    });
});