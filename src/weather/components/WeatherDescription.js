import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import variables from '../../../assets/variables';
import { object } from 'prop-types';

const WeatherDescription = ({ item }) => {
    return <View style={styles.container}>
        <Text testID="description" style={styles.description}>{item.description}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        backgroundColor: variables.green,
        borderRadius: 100,
    },  
    description: {
        color: variables.navyBlue,
        fontSize: 10,
        fontFamily: 'roboto-bold',
    }
});

WeatherDescription.propTypes = {
    item: object,
};

export default WeatherDescription;