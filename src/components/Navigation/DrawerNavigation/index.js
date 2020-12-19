import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from '../../../../screens/Splash'
import TabNavigator from '../TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Actividad1" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;