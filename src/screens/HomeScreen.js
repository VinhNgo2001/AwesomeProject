import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , ScrollView,onPress, Pressable,TouchableOpacity,FlatList,TextInput,} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

import SearchFilter from '../components/SearchFilter';
import SearchBar from '../components/SearchBar';
import HScrollView from '../components/HScrollView';
import {FilmService} from '../services/FilmService'



const HomeScreen =({navigation}) => {
    const [movies, setMovies] = useState([]);
    const [resultSearch,setResult]=useState([])
    const handleSearchResult = (searchResults)=>{
        setResult(searchResults)
        console.log("result in home",resultSearch);
    }
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
                <View style={styles.containerSearch}>
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("search")}
                    >
                        <View style={styles.asembler}>
                            
                                <View 
                                    style={styles.buttonP}
                                >
                                    
                                    <Icon name ="search" size={25}  style={{marginLeft:10,
                                    marginTop:5}}/>
                                    
                                </View>
                            
                            <View style ={styles.main}>
                                <Text style ={styles.inputText} 
                                    placeholder='Search name film'
                                    // onChangeText={text => setSearchText(text)}
                                    // value={searchText}
                                > 
                                 Search name film
                                </Text>
                            
                            </View>
                    
                        </View >
                    </TouchableOpacity>
                </View>
                    
                    
                 
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
                    {movies.reverse().map((movie)=>(
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
                    YOU MAY LIKE
                </Text>
                <ScrollView 
                    horizontal={true}
                    showsVerticalScrollIndicator={false}
                    stickyHeaderHiddenOnScroll={false}
                    
                > 
                    {movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies",{movie})} style={{width:320}}>
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
        

    },
    results:{
        backgroundColor:Colors.WHITE,
        marginLeft:"5%"
    },
    containerSearch:{
        backgroundColor:Colors.WHITE,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
    },
    asembler:{
        flexDirection:'row'
    },
    main: {
        
        width: "80%",
        height:40,
        borderWidth :0,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
   
    },
    inputText:{
        marginLeft:7,
        marginTop:5,
        fontSize:18,
    },
    buttonP:{
        
        width: 50,
        height:40,
        borderWidth :0,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        marginLeft:10,


    },


});
export default HomeScreen;