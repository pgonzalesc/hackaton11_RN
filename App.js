
import React from 'react';
import { } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import DrawerNavigator from './src/components/Navigation/DrawerNavigation';

const App = () => {
  
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
