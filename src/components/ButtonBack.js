import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';

const ButtonBack = ({onPress}) => {
  return (   
    <TouchableOpacity
        style={styles.btnBack}
        onPress={onPress}
    >
        <Icon name='ios-chevron-back' size={30} style={styles.iconBack}></Icon>
    </TouchableOpacity>  
  )
}

export default ButtonBack

const styles = StyleSheet.create({
    iconBack:{
        color:Colors.WHITE,
        marginLeft:8
    },
    btnBack:{
        width:50,
        height:50,
        backgroundColor:Colors.GREY,
        elevation: 8,
        borderRadius:30,
        paddingVertical:7,
        marginBottom:5,
        position:'absolute',
        left:24,
        top:24,
    }
})