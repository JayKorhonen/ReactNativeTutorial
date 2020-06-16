import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text>Getting Started With React Native</Text>;
  const name = 'Jay';

  return (
    <View>
      <Text style={styles.header}>{greeting}</Text>
      <Text style={styles.name}>My Name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  },
});

export default ComponentsScreen;
