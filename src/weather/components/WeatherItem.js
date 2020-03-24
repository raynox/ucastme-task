import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import variables from '../../../assets/variables';
import WeatherDescription from './WeatherDescription';
import moment from 'moment';
import { object } from 'prop-types';

const WeatherItem = ({ item }) => {

    const weatherDate = new Date(Date.parse(item.dt_txt.replace(' ', 'T')));
    const momentDate = moment(weatherDate);

    return <View style={styles.container}>
        <View style={styles.dateTimeContainer}>
            <Text testID="date" style={styles.date}>{momentDate.format('ddd, DD.MM.YYYY')}</Text>
            <Text testID="time" style={styles.time}>{momentDate.format('HH:mm a')}</Text>
        </View>

        <View style={styles.temperatureContainer}>
            <Text testID="temp" style={styles.temperature}>temperature: {item.main.temp} K</Text>
            <Text testID="feelsLike" style={styles.temperature}>feels like temperature: {item.main.feels_like} K</Text>
        </View>

        {item.weather.map(weather => <WeatherDescription key={weather.id} item={weather} />)}
    </View >
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: variables.navyBlue,
        borderRadius: 5,
        padding: 21,
    },
    dateTimeContainer: {
        flexDirection: 'row',
    },
    date: {
        flex: 1,
        fontFamily: 'roboto-bold',
        color: variables.orange,
    },
    time: {
        flex: 1,
        textAlign: 'right',
        fontFamily: 'roboto-bold',
        color: variables.orange,
    },
    temperatureContainer: {
        marginBottom: 20,
        marginTop: 10,
    },
    temperature: {
        color: variables.navyBlue,
        fontSize: 16,
        fontFamily: 'roboto-bold',
        marginBottom: 5,
    },
});

WeatherItem.propTypes = {
    item: object,
};

export default WeatherItem;