import React, {createContext, useState} from "react";
import client from '../api/client';

export const FilmService = {
     getAllFilms :()=>{
        return client.get('/films')
    }
    

  };