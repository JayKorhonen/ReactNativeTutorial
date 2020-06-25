import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetail from '../components/ResultDetail';

const ResultsList = ({ title, results }) => {
    console.log('results:', results)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{marginLeft: 15}}>Results: {results.length}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(x) => x.id}
                renderItem={({item}) => {
                    return (
                        <View>
                            <ResultDetail result={item}></ResultDetail>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    }
});

export default ResultsList;