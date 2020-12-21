import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, ContactStackNavigator } from "../StackNavigator";
import Actividad2 from '../../../../screens/Actividad2'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Actividad1') {
            iconName = focused ? 'md-locate' : 'md-locate-outline';
          } else if(route.name === 'Actividad2') {
            iconName = focused ? 'md-apps' : 'md-apps-outline';
          }
          return (<Icon name={iconName} size={size} color={color}/>);
        },
      })}
      tabBarOptions={{
        activeTintColor: '#56B5C1',
        inactiveTintColor: 'gray',
      }} >
      <Tab.Screen name="Actividad1" component={MainStackNavigator} />
      <Tab.Screen name="Actividad2" component={Actividad2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;