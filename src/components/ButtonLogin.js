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
        height:60,
        backgroundColor:Colors.LIGHTSKY,
        elevation: 8,
        borderRadius:50,
        paddingVertical:7,
        marginBottom:5,
        borderColor:Colors.WHITE,
        borderWidth:1,
        
        
    },
    titleBtn:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        // textTransform: "uppercase",
        marginTop:5
    }

})