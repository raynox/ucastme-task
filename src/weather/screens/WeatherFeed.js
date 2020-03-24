import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Input from '../../base/components/Input';
import variables from '../../../assets/variables';
import Button from '../../base/components/Button';
import { useDispatch, useSelector } from 'react-redux';
import weatherActions from '../redux/actions';
import WeatherItem from '../components/WeatherItem';

const WeatherFeed = () => {

    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const error = useSelector(state => state.weather.error);
    const weatherItems = useSelector(state => state.weather.items);

    return <View>
        <Text style={styles.headerOne}>Hello Sunshine!</Text>
        <Text style={styles.headerTwo}>
            Can you please tell me the weather in Germany?
        </Text>

        <View style={styles.inputContainer}>
            <Input
                error={error}
                errorText="Please try another city"
                value={city}
                onChange={event => setCity(event.nativeEvent.text)}
                placeholder="Please enter a city" />
        </View>

        <View style={styles.buttonContainer}>
            <Button
                onPress={() => dispatch(weatherActions.fetchWeather(city))}
                title="Have a look" />
        </View>

        {weatherItems.map((item, index) => <View key={index} style={styles.itemContainer}>
            <WeatherItem item={item} />
        </View>)}
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={require('../../../assets/taxi-design.png')} />
        </View>

    </View>
};

const styles = StyleSheet.create({
    headerOne: {
        fontSize: 30,
        color: variables.orange,
        textAlign: "center",
        fontFamily: 'nunito-black',
        marginTop: 35,
    },
    headerTwo: {
        fontSize: 30,
        color: variables.navyBlue,
        textAlign: "center",
        flexDirection: 'row',
        fontFamily: 'nunito-black',
        lineHeight: 35,
        paddingHorizontal: 50,
        marginTop: 40,
    },
    buttonContainer: {
        marginBottom: 30,
    },
    inputContainer: {
        marginTop: 35,
        paddingHorizontal: 60,
        marginBottom: 30,
    },
    itemContainer: {
        padding: 20,
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'flex-end',
    },
    image: {
        width: 350,
        height: 350,
        marginRight: -70,
        resizeMode: "contain",
        marginTop: 100,
    },
});

export default WeatherFeed;