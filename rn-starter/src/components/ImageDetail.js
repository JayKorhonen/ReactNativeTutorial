import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    console.log('props:', props)
    return (
        <View>
            <Text>{props.title}</Text>
            <Text>Image Score - {props.score}</Text>
            <Image source={props.image}/>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageDetail;