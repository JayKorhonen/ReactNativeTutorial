import React, {useState} from 'react';
import { View, StyleSheet, Button, FlatList, CheckBox } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button
                title="Add a Color"
                onPress={() => {
                    setColors([...colors, randomRGB()]);
                    console.log('newColors:', colors);
                }}
            />
            <FlatList
                data={colors}
                keyExtractor={(el) => el}
                renderItem={({item}) => {
                    return (
                        <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                    )
                }}
            />
        </View>
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    box: {
        height: 100,
        width: 100,
    }
});

export default ColorScreen;