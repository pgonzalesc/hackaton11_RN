import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Splash from '../../../../screens/Splash'
import Actividad2 from '../../../../screens/Actividad2'
import TabNavigator from '../TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Splash" component={Splash} />
      <Drawer.Screen name="Actividad1" component={TabNavigator} />
      <Drawer.Screen name="Actividad2" component={Actividad2} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;