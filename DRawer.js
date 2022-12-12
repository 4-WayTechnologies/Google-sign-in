import { createDrawerNavigator } from '@react-navigation/drawer';
import Face from './Components/Face';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import StackNavigation from './Stack';

const Drawer = createDrawerNavigator();

function DRawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={StackNavigation} />
    <Drawer.Screen name="face" component={Face} />
  </Drawer.Navigator>

    </NavigationContainer>
    
  );
}
export default DRawer