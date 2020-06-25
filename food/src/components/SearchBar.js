import React from 'react';
import { View, TextInput, StyleSheet, ImagePropTypes } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = (props) => {
    const {term, change, search} = props;

    return (
        <View style={styles.searchbar}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search"
                style={styles.input}
                value={term}
                onChangeText={change}
                onEndEditing={search}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar: {
       backgroundColor: '#e5e5e5',
       height: 50,
       borderRadius: 5,
       marginHorizontal: 15,
       flexDirection: 'row',
       marginTop: 10,
       marginBottom: 10,
   },
   input: {
       flex: 1,
       marginLeft: 5,
       fontSize: 18,
   },
   iconStyle: {
       fontSize: 30,
       alignSelf: 'center',
       marginHorizontal: 10,
   }
});

export default SearchBar;