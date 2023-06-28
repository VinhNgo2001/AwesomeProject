import React, {createContext, useState} from "react";
import client from '../api/client';

export const FilmService = {
     getAllFilms :()=>{
        return client.get('/films')
    },
    searcFilm :(searchText)=>{
      console.log('check values search:',searchText)

      return client.post('/films/search',{searchText})
    }
    
  };