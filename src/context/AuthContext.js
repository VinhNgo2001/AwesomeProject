import React, {createContext, useState} from "react";

import client from '../api/client';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext()

export const AuthProvider =({children})=>{
    const [userInfo,setUserInfo]=useState({})
    const [isLoading,setLoading]=useState(false)
    const [isTrue,setTrue]=useState(false)
    
    const login =async(values)=>{
        setLoading(true);
        const res = await client
            .post('/log-in', {
                ...values,})
            .then (res =>{
                let userInfo =res.data
                setUserInfo(userInfo)
                AsyncStorage.setItem('userInfo',JSON.stringify(userInfo))
                
                setTrue(true)
                console.log('user info from login: ', userInfo)
                
                
            })
            .catch(e =>{
            
                console.log('err', e)
                
                
            })


    }   
    const signUp =async(values)=>{
        

        const res = await client
            .post('/create-user', {
                ...values,})
                
            .then(res=>{
                let userInfo=res.data
                console.log("log check sign Up ",userInfo)
            })
            
        
    }
    const logOut = () =>{
        setTrue(false)
        AsyncStorage.removeItem('userInfo');

        console.log('log out---')
        
    }
    return (
        <AuthContext.Provider value={{login,signUp,userInfo,isTrue,logOut}}>{children}</AuthContext.Provider>
    )
}