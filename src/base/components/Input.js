import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import variables from '../../../assets/variables';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, placeholder, error, errorText }) => {

    const [borderWidth, setBorderWidth] = useState(1);
    const borderColor = error ? variables.orange : variables.navyBlue;
    const color = error ? variables.orange : variables.navyBlue;

    return <View>
        <Text style={[styles.placeholder, {color}]}>
            {error ? errorText : placeholder}
        </Text>

        <TextInput
            onFocus={() => setBorderWidth(2)}
            onBlur={() => setBorderWidth(1)}
            value={value}
            onChange={onChange}
            style={[styles.input, {borderWidth, borderColor}]} />
    </View>
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 45,
        borderRadius: 5,
        fontFamily: 'roboto-medium',
        fontSize: 16,
        textAlign: "center",
    },
    placeholder: {
        textAlign: "center",
        fontSize: 16,
        fontFamily: 'roboto',
        marginBottom: 15,
    },
});

Input.defaultProps = {
    value: '',
    onChange: () => ({}),
    placeholder: '',
    error: false,
    errorText: '',
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    error: PropTypes.bool,
    errorText: PropTypes.string,
};

export default Input;
