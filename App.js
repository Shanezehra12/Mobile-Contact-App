import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import HomeScreen from './Src/Screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native'
import SearchScreen from './Src/Screen/SearchScreen';
import filterScreen from './Src/Screen/filterScreen';
import userScreen from './Src/Screen/userScreen';
import {Icon} from 'react-native-elements/dist/icons/Icon'


const Tab = createBottomTabNavigator();


export default function App () {
  return (
    <>

    <View>
      <HomeScreen />
    </View>

    <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown: false}} tabBarOptions={{showLabel: false}} >

      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Filter" component={filterScreen} />
      <Tab.Screen name="User" component={userScreen} />
    </Tab.Navigator>
    </NavigationContainer>  

    </>
    
      );
    }
    
    

    

    
    
  


        





















