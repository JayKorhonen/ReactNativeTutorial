import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import{Context as AuthContext} from '../context/AuthContext'
import Spacer from '../components/Spacer';
import NavLink from '../components/NavLink';

const AccountScreen = () => {
  const {signout} = useContext(AuthContext)

  return (
    <SafeAreaView forceInset={{top: 'always'}}>
      <View>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer>
          <Button
            title="Sign Out"
            onPress={signout}
          />
        </Spacer>
      </View>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  button: {
    width: 100,
  }
});

export default AccountScreen;
