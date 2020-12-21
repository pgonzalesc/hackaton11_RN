import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Actividad1 from "../../../../screens/Actividad1";
import Actividad2 from "../../../../screens/Actividad2";
import Splash from "../../../../screens/Splash";

const Stack = createStackNavigator();
//const RootStack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    // <Stack.Navigator screenOptions={screenOptionStyle}>
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Actividad1" component={Actividad1} />
      <Stack.Screen name="Actividad2" component={Actividad2}/>
      <Stack.Screen name="Splash" component={Splash}/>
    </Stack.Navigator>
    // <NavigationContainer>
    //     <RootStack.Navigator mode="modal" headerMode="none">
    //     <RootStack.Screen name="Splash" component={Splash} />
    //     <RootStack.Screen name="Home" component={Home} />
    //     </RootStack.Navigator>
    // </NavigationContainer>
  );
}

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      {/* <Stack.Screen name="Contact" component={Contact} /> */}
    </Stack.Navigator>
  );
}

export { MainStackNavigator, ContactStackNavigator };