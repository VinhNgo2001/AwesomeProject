import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MoviesScreen from "./src/screens/MoviesScreen";

 const Stack = createStackNavigator()
export default function () {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
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

