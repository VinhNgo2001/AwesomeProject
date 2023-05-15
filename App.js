import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import Login from "./src/screens/Login";
import FogetPW from "./src/screens/FogetPW";
// import SendOTP from "./src/screens/SendOTP";
import SignUp from "./src/screens/SignUp";
import UserScreen from "./src/screens/UserScreen";
import FavoritesList from "./src/screens/FavoritesList";
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';
import Colors from "./src/constants/Colors";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{headerShown:false}}
        barStyle={{
            height:60,
            backGroundColor:Colors.BACKGROUND_BOTTOMBAR,
        }}
          
    >
      <Tab.Screen name = "home" component={HomeScreen}
          
        options={
            {
                tabBarIcon: ()=>
                    <Icon name="home" size={35}
                        style={{color:Colors.WHITE}}
                    ></Icon>,
                    tabBarShowLabel:false,
                    tabBarActiveBackgroundColor:Colors.ACTIVE_BOTTOMBAR,
                    tabBarInactiveBackgroundColor:Colors.BACKGROUND_BOTTOMBAR,
                
            }
        }
      />
      <Tab.Screen name='favorites-list' component={FavoritesList}
        options={
            {
                tabBarIcon: ()=>
                    <Icon name="favorite" size={35}
                        style={{color:Colors.WHITE}}
                    ></Icon>,
                    tabBarShowLabel:false,
                    tabBarActiveBackgroundColor:Colors.ACTIVE_BOTTOMBAR,
                    tabBarInactiveBackgroundColor:Colors.BACKGROUND_BOTTOMBAR,
                
            }
        }
      />
      <Tab.Screen name='user' component={UserScreen}
        options={
            {
                tabBarIcon: ()=>
                    <Icon1 name="user" size={35}
                        style={{color:Colors.WHITE}}
                    ></Icon1>,
                    tabBarShowLabel:false,
                    tabBarActiveBackgroundColor:Colors.ACTIVE_BOTTOMBAR,
                    tabBarInactiveBackgroundColor:Colors.BACKGROUND_BOTTOMBAR,
                
            }
        }
      />
    </Tab.Navigator>
  );
}

 const Stack = createStackNavigator()

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
                    name = "fogetPW" 
                    component={FogetPW} 
                    options={{headerShown:false}}
                />
                 <Stack.Screen 
                    name = "signUp" 
                    component={SignUp} 
                    options={{headerShown:false}}
                />
                {/* <Stack.Screen 
                    name = "sendOTP" 
                    component={SendOTP} 
                    options={{headerShown:false}}
                /> */}
                {/* <Stack.Screen 
                    name = "home" 
                    component={HomeScreen} 
                    options={{headerShown:false}}
                /> */}
                <Stack.Screen
                    name='homeTab'
                    component={MyTabs}
                    options={{headerShown:false}}
                    
                ></Stack.Screen>
                <Stack.Screen 
                name = "movies" 
                component={MoviesScreen}
                options={{headerShown:false}}
                />
                
            </Stack.Navigator>

        </NavigationContainer>
       
    );
}

