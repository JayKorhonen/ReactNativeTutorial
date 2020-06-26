import React, {useState, useEffect} from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';
import yelp from '../api/yelp';

const SingleResultScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getBusiness = async (id) => {
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getBusiness(id);
    }, []);

    if(!result) {
        return null;
    }

    return (
        <>
            <Text>Single Result Screen: {result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
    }
});

export default SingleResultScreen;