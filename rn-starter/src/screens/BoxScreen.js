import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.text1Style}>Child #1</Text>
            <Text style={styles.text2Style}>Child #2</Text>
            <Text style={styles.text3Style}>Child #3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 2,
        borderColor: 'black',
        height: 200,

    },
    text1Style: {
        borderWidth: 4,
        borderColor: 'red',
    },
    text2Style: {
        borderWidth: 4,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject,
    },
    text3Style: {
        top: 10,
        borderWidth: 4,
        borderColor: 'red',
    },
});

export default BoxScreen;