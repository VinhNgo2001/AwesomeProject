import { StyleSheet, Text,Image, View,TextInput,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {FilmService} from '../services/FilmService'



const SearchScreen = ({navigation}) => {
    const [searchText,setSearchText]=useState('')
    const [data,setData] =useState([])
    useEffect(() => {
        
        fetchSearch();
    }, [searchText]);
    const fetchSearch = async ()=>{
        const res = await FilmService.searcFilm([searchText])
     //    console.log('result search:', res.data.data)
        setData(res.data.data)
        
    }
  return (
    <View style={styles.container}>
        
        <View style={{flexDirection:'row',marginTop:40}}>
            <View>
                <TouchableOpacity>
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
                <FlatList
                data={data}
                renderItem={({ item }) => <TouchableOpacity
                    // onPress={()=>navigation.navigate("movies",{data})}
                    >
                        <Text style={styles.resultText}>{item.filmName}</Text>
                        
                    </TouchableOpacity>}
                    
                keyExtractor={item => item.id.toString()}
                />
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
        marginHorizontal:25,
        marginTop:10,
    },
    resultText:{
        fontSize:18

    }
    

})