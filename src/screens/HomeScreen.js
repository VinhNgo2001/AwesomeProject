import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , ScrollView,onPress, Pressable,TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';
import HScrollView from '../components/HScrollView';
import {FilmService} from '../services/FilmService'



const HomeScreen =({navigation}) => {
    const images=[
        require('../../assets/images/gifs/kimetsu_no_yaiba.webp'),
        require('../../assets/images/gifs/OPM.webp'),
        require('../../assets/images/gifs/nezuko.webp'),
        require('../../assets/images/gifs/7vienbirong.webp'),

    ]
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
    return ( <
        ScrollView style = { styles.container } >
                      
            <View style={{marginTop:20,width:"90%",alignSelf:"center"}}>
                <SearchBar /> 
            </View>     
            <View>
                

            </View>    
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}
                >
                    POPULAR MOVIES
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    
                > 
                    {movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies",{movie})} style={{width:330}}>
                            <HScrollView      
                                imageUri={{ uri: movie.linkImage }}
                                name={movie.filmName}
                                tag={movie.tag}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>


            </View>
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}>
                    NEW MOVIES
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    
                > 
                    {movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies")} style={{width:330}}>
                            <HScrollView      
                                imageUri={{ uri: movie.linkImage }}
                                name={movie.filmName}
                                tag={movie.tag}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>


            </View>
            <View style = {styles.header}>               
                <Text style ={styles.headerTitle}>
                    YOU MAY LIKE
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    
                > 
                    {movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies")} style={{width:320}}>
                            <HScrollView      
                                imageUri={{ uri: movie.linkImage }}
                                name={movie.filmName}
                                tag={movie.tag}
                            />
                        </TouchableOpacity>
                    ))}
                </ScrollView>


            </View>

            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Colors.BASIC_BACKGROUND, 
        paddingTop:20,       
    },
    header: {
        marginTop:20,
        marginLeft:10,
        paddingBottom:10,

    },
    headerTitle:{
        fontSize:24,
        marginBottom:10,
        fontWeight:"bold"

    },
    navContainer:{
        position:"absolute",
        alignItems:"center",
        bottom:50
    },
    navBar:{
        flexDirection:"row",
        backgroundColor:Colors.SILVER,
        width:"90%",
        justifyContent:"space-evenly",
        

    }


});
export default HomeScreen;