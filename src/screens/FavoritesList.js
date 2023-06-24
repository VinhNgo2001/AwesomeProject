import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors'
import HScrollView from '../components/HScrollView'
import {FilmService} from '../services/FilmService'

const FavoritesList = ({navigation}) => {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
        
        fetchMovies();
      }, []);
      const fetchMovies = async () => {
        try {
          const response = await FilmService.getAllFilms();
          
          const moviesData = response.data.data;
          setMovies(moviesData);
          console.log('data film------: \n', movies)
          
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Your Favorities List</Text>
      <View style={{marginTop:10, alignContent:"center"}}>
        {movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies",{movie})} style={{width:330}}>
                            <HScrollView      
                                imageUri={{ uri: movie.linkImage }}
                                name={movie.filmName}
                                tag={movie.tag}
                            />
                        </TouchableOpacity>
                    ))}
                
               
      </View>
    </ScrollView>
  )
}

export default FavoritesList

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.BASIC_BACKGROUND,
    paddingTop:30,
    paddingHorizontal:10
  },
  headerTitle:{
    fontSize:30,
    fontWeight:"bold",
  }
})