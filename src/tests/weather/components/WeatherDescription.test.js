import React from 'react';
import { mount } from 'enzyme';
import WeatherDescription from '../../../weather/components/WeatherDescription';

describe('WeatherDescription', () => {

    it('should render weather description', () => {
        const mockedItem = {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }

        const wrapper = mount(<WeatherDescription item={mockedItem} />);
        const description = wrapper.findWhere((node) => node.prop('testID') === 'description');

        expect(description.text()).toEqual('clear sky');
    });

});