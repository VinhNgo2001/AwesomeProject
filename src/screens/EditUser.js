import { StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native'
import React ,{useEffect, useState, useContext} from 'react'
import { TextInput } from 'react-native-paper'
import Colors from '../constants/Colors'
import Icon  from 'react-native-vector-icons/AntDesign';
import client from '../api/client'
import { AuthContext } from '../context/AuthContext';


const EditUser = ({navigation,route}) => {
      const {userInfo} =useContext(AuthContext)
      const [dataInput,setDataInput]=useState('')
      const value= route.params.value
      const handleInputChange = (text) => {
        setDataInput(text);
      };

  

 
  console.log('log:',route.params)
  let ChangeName =async()=>{
      
      
      const values=userInfo.data
      const value= route.params.value
      values[value]=dataInput
      console.log('check log data input', values)
      const req = await client 
        .put('/update-user',{...values})
        .then(res=>{
          console.log(res.data)
        })
    Alert.alert(
        "Notification",
        "Change success",
        [
            {
                text:"oke",
                onPress: ()=>{
                    navigation.navigate('login')
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
            Change {route.params.title}
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
        //  placeholder
         onChangeText={handleInputChange}
         values = {dataInput}
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
        paddingTop:30,
        paddingHorizontal:0,
    },
    inputText:{
      borderWidth:1,
      width:"90%",
      marginVertical:10,
    }

})