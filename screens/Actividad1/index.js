import React from 'react';
import {StyleSheet, View} from 'react-native';
import Autocomplete from '../../src/components/Maps/Autocomplete';

const Actividad1 = ()=> {
    return (
        <>
            <Autocomplete />
        </>
    );
}

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

export default Actividad1;