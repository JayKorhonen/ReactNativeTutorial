import React, {useReducer} from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import ColorDetails from '../components/ColorDetails';
import { setWorldAlignment } from 'expo/build/AR';

const STEP = 8;

const reducer = (state, action) => {
    const {type, payload} = action;

    switch (type) {
        case 'change_red':
            return (state.red + payload > 256 || state.red + payload < 0)? state : {...state, red: state.red + payload};
            break;
        case 'change_green':
            return (state.green + payload > 256 || state.green + payload < 0)? state : {...state, green: state.green + payload};
            break;
        case 'change_blue':
            return (state.blue + payload > 256 || state.blue + payload < 0)? state : {...state, blue: state.blue + action.step};
            break;
    
        default:
            return state;
    }
};

const AdjustColor = () => {
    const [state, dispatch] = useReducer(reducer, {red: 128, green: 128, blue: 128});
    const {red, green, blue} = state;

    return (
        <View>
            <Text style={styles.header}>Color Picker</Text>
            <ColorDetails
                color="Red"
                intensity={`rgb(${red}, 0, 0)`}
                increase={() => dispatch({type: 'change_red', payload: STEP})}
                decrease={() => dispatch({type: 'change_red', payload: -STEP})}>
            </ColorDetails>
            <ColorDetails
                color="Green"
                intensity={`rgb(0, ${green}, 0)`}
                increase={() => dispatch({type: 'change_green', payload: STEP})}
                decrease={() => dispatch({type: 'change_green', payload: -STEP})}>
            </ColorDetails>
            <ColorDetails
                color="Blue"
                intensity={`rgb(0, 0, ${blue})`}
                increase={() => dispatch({type: 'change_blue', payload: STEP})}
                decrease={() => dispatch({type: 'change_blue', payload: -STEP})}>
            </ColorDetails>
            <View style={{alignContent: 'center', marginTop: 25, height: 100, width: "100%", backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 10,
    },
    box: {
        alignSelf: 'center'
    }
});

export default AdjustColor;