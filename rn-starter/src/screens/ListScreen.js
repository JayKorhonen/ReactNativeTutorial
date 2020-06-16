import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 2', age: 42},
        {name: 'Friend 1', age: 42},
        {name: 'Friend 3', age: 42},
        {name: 'Friend 4', age: 42},
        {name: 'Friend 5', age: 42},
        {name: 'Friend 9', age: 42},
        {name: 'Friend 6', age: 42},
        {name: 'Friend 7', age: 42},
        {name: 'Friend 8', age: 42},
    ];

    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.text}>{item.name} - {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    text: {
        marginVertical: 50,
    }
})

export default ListScreen;