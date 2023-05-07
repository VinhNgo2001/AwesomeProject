import { StyleSheet, Text, View ,TouchableOpacity,onPress,Image,TextInput,Alert} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Icons  from 'react-native-vector-icons/AntDesign';
import ButtonLogin from '../components/ButtonLogin';

const sendOTP = () => {
  return (
    <View>
      <View style={{alignItems:"center"}}>
        <Image
            source={require('../../assets/images/anh_login.png')}
            style={{width:300,height:300, borderRadius:150,marginTop:30,marginBottom:30}}
        ></Image>
        <Text
            style={{fontWeight:"bold", fontSize:20, width:230,alignItems:"center"}}
        >Enter OTP</Text>
        </View>
    </View>
  )
}

export default sendOTP

const styles = StyleSheet.create({})