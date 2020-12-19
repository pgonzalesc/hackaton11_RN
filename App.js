
import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, PermissionsAndroid } from 'react-native';
import LocationMap from './src/components/Maps/LocationMap';
import Autocomplete from './src/components/Maps/Autocomplete';

const App = () => {
  
  return (
    // <View style={styles.container}>
    //   {/* <LocationMap /> */}
    // </View>
    <Autocomplete />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});

export default App;
