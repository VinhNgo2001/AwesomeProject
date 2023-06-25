import React, {createContext, useState} from "react";
import client from '../api/client';

export const FavoriteService = {
    addFavorite:async(values)=>{
        console.log('check values add favorite:',values)
        return await client.post('add-favorite',{...values})

    },
    getAllFavorite :async(id)=>{
       
        return await client.post('/get-favortite',{id})
    }
    
  };