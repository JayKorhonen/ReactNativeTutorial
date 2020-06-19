import React, {useState, useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const STEP = 1;

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'increase':
            return {...state, count: state.count + payload};
        case 'decrease':
            return {...state, count: state.count - payload};
    
        default:
            break;
    }
}

const CounterScreen = () => {
    const[state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispatch({type: 'increase', payload: STEP});
            }}/>
            <Button title="Decrease" onPress={() => {
                dispatch({type: 'decrease', payload: STEP});
            }}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;