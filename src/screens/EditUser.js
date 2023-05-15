import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import Colors from '../constants/Colors'
import Icon  from 'react-native-vector-icons/AntDesign';

const EditUser = ({navigation}) => {
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
        <TouchableOpacity>
            <Text>save</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        placeholder='Enter new name'
      >

      </TextInput>
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
    }

})