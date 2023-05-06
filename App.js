import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import Login from "./src/screens/Login";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

 const Stack = createStackNavigator()
 const Tab = createMaterialBottomTabNavigator()
export default function () {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name = "login" 
                    component={Login} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name = "home" 
                    component={HomeScreen} 
                    options={{headerShown:false}}
                />
                <Stack.Screen 
                    name = "movies" 
                    component={MoviesScreen}
                    options={{headerShown:false}}
                />

                
            </Stack.Navigator>

        </NavigationContainer>
       
    );
}

