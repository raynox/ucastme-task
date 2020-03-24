import React from 'react';
import { mount } from 'enzyme';
import WeatherFeed from '../../../weather/screens/WeatherFeed';
import WeatherItem from '../../../weather/components/WeatherItem';
import createStore from '../../../base/redux/configureStore';
import { Provider } from 'react-redux';

describe('WeatherFeed', () => {

    it('should render empty list', () => {

        const store = createStore();
        const wrapper = mount(<Provider store={store}>
            <WeatherFeed />
        </Provider>);

        const items = wrapper.find(WeatherItem);

        expect(items.length).toEqual(0);
    });

    it('should render weather list', () => {

        const store = createStore({
            weather: {
                items: [
                    { id: 1, dt_txt: "2020-03-23 18:00:00", main: {}, weather: [] },
                    { id: 2, dt_txt: "2020-03-23 18:00:00", main: {}, weather: [] },
                    { id: 3, dt_txt: "2020-03-23 18:00:00", main: {}, weather: [] },
                ],
            },
        });
        const wrapper = mount(<Provider store={store}>
            <WeatherFeed />
        </Provider>);

        const items = wrapper.find(WeatherItem);

        expect(items.length).toEqual(3);
    });

});