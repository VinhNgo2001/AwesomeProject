import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={styles.asembler}>
        <View 
            style={styles.buttonP}
        >
            <Icon name ="search" size={25}  style={{marginLeft:7,
        marginTop:3}}/>
        </View>
        <View style ={styles.main}>
            <TextInput style ={styles.inputText} >
                
            </TextInput>
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    asembler:{
        flexDirection:'row'
    },
    main: {
        backgroundColor:Colors.WHITE,
        width: "80%",
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
   
    },
    inputText:{
        marginLeft:7,
        marginTop:3
    },
    buttonP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,


    }



})