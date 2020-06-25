import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [search, results, error] = useBusinesses();

    const filterResults = (price) => {
        console.log('results:', results)
        return results.filter((result) => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                change={setTerm}
                search={() => search(term)}>
            </SearchBar>
            <ScrollView>
                <ResultsList results={filterResults('$')} title="Cost Effective"/>
                <ResultsList results={filterResults('$$')} title="Bit Pricer"/>
                <ResultsList results={filterResults('$$$')} title="Bit Spendier"/>
                <ResultsList results={filterResults('$$$$')} title="Expensive"/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    searchDescription: {
        fontWeight: 'bold',
        marginLeft: 15,
    }
});

export default SearchScreen;