import { StyleSheet, Text,Image, View,TextInput,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {FilmService} from '../services/FilmService'



const SearchScreen = ({navigation}) => {
    const [searchText,setSearchText]=useState('')
    const [movies,setData] =useState([])
    useEffect(() => {
        
        fetchSearch();
    }, [searchText]);
    const fetchSearch = async ()=>{
        const res = await FilmService.searcFilm([searchText])
        console.log('result search:', res.data.data)
        setData(res.data.data)
        
    }
  return (
    <View style={styles.container}>
        
        <View style={{flexDirection:'row',marginTop:40}}>
            <View style={{marginLeft:15,marginTop:4}}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate("home")}  
                >
                    <Icon name='ios-chevron-back' size={30}></Icon>
                </TouchableOpacity>
            </View>
            <View style ={styles.main}>
                <TextInput style ={styles.inputText} 
                    placeholder='Search name film'
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                >  
                </TextInput>
            
            </View>
        </View>
            <ScrollView style={styles.results}>
            {movies&&movies.map((movie)=>(
                        <TouchableOpacity key={movie.id} onPress={()=>navigation.navigate("movies",{movie})} >
                            <View style={{flexDirection:'row',height:120}}>
                                <View style={{marginBottom:10,paddingBottom:5,borderTopWidth:1,width:"70%",}}>
                                    <Text style={{fontSize:20}} >{movie.filmName}</Text>
                                    <Text  >{movie.tag}</Text>
                                </View>
                                
                                <Image source={{uri: movie.linkImage}} style={{height:100,width:100}}></Image>
                            </View>
                            
                            
                        </TouchableOpacity>
                    ))}
            </ScrollView >
            
      
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,

       
    },
    main: {
        
        width: "80%",
        height:40,
        borderWidth :0,
        borderColor:Colors.SILVER,
        backgroundColor:Colors.WHITE,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        paddingLeft:20
   
    },
    inputText:{
        marginLeft:7,
        marginTop:5,
        fontSize:18,
    },
    results:{
        marginHorizontal:35,
        marginTop:10,
        
    },
    resultText:{
        fontSize:18

    }
    

})