import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import FileUpload from './Components/FileUpload';
import FileUploadCode from './Components/FileUploadCode';
const Tab = createMaterialTopTabNavigator();
export default function Material(props) {


  return (
    <Tab.Navigator screenOptions={{
      // tabBarShowLabel:false,
        tabBarStyle:{
         
        }
        
    }}
    >
      <Tab.Screen name="File Upload" component={FileUpload}   initialParams={ props.route} />
      <Tab.Screen name="File Upload Code" component={FileUploadCode} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})