import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" image={require('../../assets/images/forest.jpg')} score="3"/>
            <ImageDetail title="Beach" image={require('../../assets/images/beach.jpg')} score="123"/>
            <ImageDetail title="Mountains" image={require('../../assets/images/mountain.jpg')} score="2"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen;