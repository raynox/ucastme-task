import React, { useState } from 'react';
import { TouchableWithoutFeedback, Text, StyleSheet, View } from 'react-native';
import variables from '../../../assets/variables';
import { string, func } from 'prop-types';

const Button = ({ title, onPress }) => {

    const [shadowOpacity, setShadowOpacity] = useState(0.2);
    const [elevation, setElevation] = useState(2);

    const onPressIn = () => {
        setElevation(0);
        setShadowOpacity(0);
    };

    const onPressOut = () => {
        setElevation(2);
        setShadowOpacity(0.2);
        onPress();
    };

    return <View>
        <TouchableWithoutFeedback
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            accessibilityRole='button'
            underlayColor='#fff'>
            <View style={[styles.button, { shadowOpacity, elevation }]}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: variables.orange,
        borderRadius: 3,
        paddingHorizontal: 45,
        alignSelf: "center",
        paddingVertical: 14,
        shadowRadius: 6,
        shadowColor: "black",
        shadowOffset: { x: 0, y: 3 },
        elevation: 2,
    },
    text: {
        color: '#fff',
        textAlign: "center",
        fontSize: 12,
        width: 'auto',
        fontFamily: 'roboto-bold',
    },
});

Button.propTypes = {
    title: string,
    onPress: func,
};

export default Button;
