import React from "react";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import Login from "./src/screens/Login";
import FogetPW from "./src/screens/FogetPW";
import PassWord from "./src/screens/PassWord";
// import SendOTP from "./src/screens/SendOTP";
import SignUp from "./src/screens/SignUp";
import UserScreen from "./src/screens/UserScreen";
import EditUser from "./src/screens/EditUser";
import UpdateYourProfile from "./src/screens/UpdateYourProfile";
import FavoritesList from "./src/screens/FavoritesList";
import Icon from 'react-native-vector-icons/Fontisto';
import Icon1 from 'react-native-vector-icons/Feather';
import Colors from "./src/constants/Colors";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PlayMovies from "./src/screens/PlayMovies";

import { AuthProvider } from "./src/context/AuthContext";

const Tab = createBottomTabNavigator();
// tab home : home screen, favorite list , user
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
      <Tab.Screen name='tab-user' component={TabUser}
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
      >
      </Tab.Screen>
    </Tab.Navigator>
  );
}

const StackUser = createStackNavigator();
// tab user - update profile - edit user
function TabUser() {
  return (
    <StackUser.Navigator
        initialRouteName="user"
        screenOptions={
            {
                title:null,
                headerShown:false
            }
        }
        

    >
      <StackUser.Screen name="user" component={UserScreen}  />
      <StackUser.Screen name="updatePF" component={UpdateYourProfile} />
      <StackUser.Screen name="edit-user" component={EditUser} />
      <StackUser.Screen name="pass-word" component={PassWord} />
      
    </StackUser.Navigator>
  );
}

 const Stack = createStackNavigator()
// tab login - foget password - sign up - get opt
function TabLogin (){
    return(
        
            <Stack.Navigator
                initialRouteName="login"
                screenOptions={
                    {
                        title:null,
                        headerShown:false
                    }
                }
            >
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
            </Stack.Navigator>
        
    )
}

// tab main 
export default function () {
    return ( 
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                
                    <Stack.Screen
                        name='loginTab'
                        component={TabLogin}
                        options={{headerShown:false}}
                        
                    ></Stack.Screen>
                    <Stack.Screen
                        name='homeTab'
                        component={MyTabs}
                        options={{headerShown:false}}
                        
                    ></Stack.Screen>
                    <Stack.Screen
                        name='search'
                        component={SearchScreen}
                        options={{headerShown:false}}
                        
                    ></Stack.Screen>
                    <Stack.Screen 
                        name = "movies" 
                        component={MoviesScreen}
                        options={{headerShown:false}}
                    />
                    <Stack.Screen 
                        name = "play-movies" 
                        component={PlayMovies}
                        options={{headerShown:false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}

