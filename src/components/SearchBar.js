import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
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
            >
                
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
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :0,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,
        marginLeft:10,


    }



})