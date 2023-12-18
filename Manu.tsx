import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home';
import Contact from './Contact';
import Course from './Course';
import About from './About';
import StudentData from './StudentData';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

const Manu = () => {
   

  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}
        options={{
          headerShown:false,
          title: '',
          tabBarIcon: ({color,size}) => (
            <Ionicons name='home-outline' size={33}  tintColor={color?'orange':'black'} />
          )
        }}
      />
      <Tab.Screen name='Contact' component={Contact}
        options={{
          headerShown:false,
          
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='contacts' size={30}  />
          )
        }} />
      <Tab.Screen name='Course' component={Course}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='iconfontdesktop' size={35} color={'grey'} />
          )
        }} />
      <Tab.Screen name='StudentData' component={StudentData}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='document-text-outline' size={35} color={'grey'} />
          )
        }} />
      <Tab.Screen name='About' component={About}
        options={{
          headerShown: false,
          title: '',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account-group-outline' size={38} color={'grey'} />
          )
        }} />
    </Tab.Navigator>
  )
}
const styles = StyleSheet.create({

})

export default Manu
