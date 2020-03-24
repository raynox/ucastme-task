import React from 'react';
import { mount } from 'enzyme';
import WeatherItem from '../../../weather/components/WeatherItem';
import WeatherDescription from '../../../weather/components/WeatherDescription';

describe('WeatherItem', () => {

    it('should render weather data', () => {
        const mockedItem = {
            "dt": 1584986400,
            "main": {
                "temp": 274.44,
                "feels_like": 268.8,
                "temp_min": 274.44,
                "temp_max": 276.31,
                "pressure": 1039,
                "sea_level": 1039,
                "grnd_level": 1032,
                "humidity": 36,
                "temp_kf": -1.87
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": { "all": 0 },
            "wind": { "speed": 3.48, "deg": 99 },
            "sys": { "pod": "n" },
            "dt_txt": "2020-03-23 18:00:00"
        };

        const wrapper = mount(<WeatherItem item={mockedItem} />);

        const date = wrapper.findWhere((node) => node.prop('testID') === 'date');
        const time = wrapper.findWhere((node) => node.prop('testID') === 'time');
        const temp = wrapper.findWhere((node) => node.prop('testID') === 'temp');
        const feelsLike = wrapper.findWhere((node) => node.prop('testID') === 'feelsLike');
        const descriptions = wrapper.find(WeatherDescription);

        expect(date.text()).toEqual('Mon, 23.03.2020');
        expect(time.text()).toEqual('18:00 pm');
        expect(temp.text()).toEqual('temperature: 274.44 K');
        expect(feelsLike.text()).toEqual('feels like temperature: 268.8 K');
        expect(descriptions.length).toEqual(1);
    });

});