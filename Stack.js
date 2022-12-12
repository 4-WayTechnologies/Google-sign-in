import { StyleSheet} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Material from './Tab';
import ImageCard from './Components/ImageCard';
const Stack = createNativeStackNavigator();
export default function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
    <Stack.Screen  name="face" component={ImageCard} />
    <Stack.Screen name="Tab" component={Material} />
    

  </Stack.Navigator>
    </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({})