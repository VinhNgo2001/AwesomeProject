import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import Colors from '../constants/Colors'
import Icon  from 'react-native-vector-icons/AntDesign';

const EditUser = ({navigation}) => {
  let ChangeName =()=>{
    Alert.alert(
        "Notification",
        "Change success",
        [
            {
                text:"oke",
                onPress: ()=>{
                    navigation.navigate('updatePF')
                }
            }
        ]

    )
}
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity
            onPress={()=>navigation.navigate("updatePF")}
        >
            <Icon name='left' size={25}>
            </Icon> 
        </TouchableOpacity>
        <Text style={{width:"80%"}}>
            Change Name
        </Text>
        <TouchableOpacity
          onPress={ChangeName}
        >
            <Text>save</Text>
        </TouchableOpacity>
      </View>
     <View style={{alignItems:'center'}}>
       <TextInput
         style={styles.inputText}
         placeholder='Enter new name'
       >
      
       </TextInput>
     </View>
    </View>
  )
}

export default EditUser

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        paddingTop:20,
        paddingHorizontal:0,
    },
    inputText:{
      borderWidth:1,
      width:"90%",
      marginVertical:10,
    }

})