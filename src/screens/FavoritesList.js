import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React, { useState, useEffect,useContext } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Colors from '../constants/Colors'
import HScrollView from '../components/HScrollView'
import {FavoriteService} from '../services/FavoriteService'
import { AuthContext } from '../context/AuthContext';


const FavoritesList = ({navigation}) => {
  const {userInfo} =useContext(AuthContext)
  
  const isFocused = useIsFocused();

  const [movies, setMovies] = useState([]);
    useEffect(() => {
      if (isFocused) {
        // Gọi API khi tab được chọn
        fetchMovies();
      }
        
      }, [isFocused]);
      const fetchMovies = async () => {
        try {
          userInfo.id
          
          const response = await FavoriteService.getAllFavorite(userInfo.data.id);
          console.log('req:',response.data)
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