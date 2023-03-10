import React from "react";
import {View, Text, Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import HomeScreen from "../Screen/HomeScreen";
import SearchScreen from "../Screen/SearchScreen";
import filterScreen from "../Screen/filterScreen";
import userScreen from "../Screen/userScreen";


const bottom = createBottomTabNavigator ();

const Tab = () => {
    return (
    <bottom.Navigator tabBarOptions={{showLabel: false}}>
        <Tab.Screen options={{
            tabBarIcon: ({focused}) => (
                <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Icon color={focused? "#E66607" : "black"} size={focused? 27 : 24} name="home" />
              </View> )}} name="Home" component={HomeScreen} />

        
    </bottom.Navigator>
    );
};

const Navigation = () => {
    return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} />
            <Tab.Screen name="filterScreen" component={filterScreen} />
            <Tab.Screen name="userScreen" component={userScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
};

export default Navigation;
