import React, {useState} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ColorDetails = ({increase, decrease, color, intensity}) => {
    return (
        <View style={{borderWidth: 5, borderRadius: '15px', borderColor: intensity}}>
            <Text style={styles.header}>{color}:</Text>
            <Button
                title={"Increase " + color}
                onPress={() => increase()}
            />
            <Button
                title={"Decrease " + color}
                onPress={() => decrease()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 10,
    }
});

export default ColorDetails;