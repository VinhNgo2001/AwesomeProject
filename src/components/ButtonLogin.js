import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ButtonLogin = ({onPress,title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerBtn}>
        <Text style={styles.titleBtn}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLogin

const styles = StyleSheet.create({
    containerBtn:{
        width:300,
        height:40,
        backgroundColor:Colors.LIGHTSKY,
        elevation: 8,
        borderRadius:30,
        paddingVertical:7,
        marginBottom:5,
        
        
    },
    titleBtn:{
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

})