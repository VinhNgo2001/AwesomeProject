import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import ButtonLogin from '../components/ButtonLogin'

const UserScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height:"35%",backgroundColor:Colors.BACKGROUND_USER_AVATAR,alignItems:"center", marginBottom:10}}>
        <Image
          source={require('../../assets/images/anh_login.png')}
          style={{width:200,height:200, borderRadius:100,marginTop:30}}
          ></Image>
      </View>
      <View style={{marginLeft:10}}>
        <Text style={styles.textUser}>
          Name :Oggy
        </Text>
        <Text style={styles.textUser}>
          Date of Birth: April 22, 2016
        </Text>
        <Text style={styles.textUser}>
          Email: Oggy*****@gmail.com
        </Text>
        <Text style={styles.textUser}>
          Phone: *******89
        </Text>
      </View>
      <View style={{alignItems:"center", marginTop:20}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("updatePF")}
        >
          <Text
            style={{textDecorationLine:"underline", color:Colors.LIGHTSKY,fontSize:20}}
          >Update your profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{textDecorationLine:"underline", color:Colors.LIGHTSKY,fontSize:20}}
          >Change your password</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems:"center", marginTop:20}}>
        <ButtonLogin title="Log out"
          onPress={()=>navigation.navigate("login")}
        >

        </ButtonLogin>
      </View>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.BASIC_BACKGROUND,
    paddingTop:20,
    paddingHorizontal:0,

  },
  textUser:{
    fontSize:18,
    marginBottom:10

  }
})