import { StyleSheet, Text, View,TextInput,TouchableOpacity,FlatList,ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import {FilmService} from '../services/FilmService'

const SearchBar = ({navigation}) => {
    const [searchText,setSearchText]=useState('')
    console.log('search text',searchText)
    const [data,setData] =useState([])
    const gotoMovie =()=>{
        // navigation.navigate('movies',{item})

    }
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
    <View style={styles.asembler}>
        
            <View 
                style={styles.buttonP}
            >
                <TouchableOpacity>
                <Icon name ="search" size={25}  style={{marginLeft:10,
                 marginTop:5}}/>
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

    </View >
        <ScrollView style={styles.results}>
            <FlatList
            data={data}
            renderItem={({ item }) => <TouchableOpacity
                onPress={gotoMovie}
                >
                    <Text>{item.filmName}</Text>
                </TouchableOpacity>}
            keyExtractor={item => item.id.toString()}
        />
        </ScrollView >
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
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
    results:{
        
        
        
        paddingLeft:30
        
    }
    



})