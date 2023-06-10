import { StyleSheet, Text, View,Image, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react';
import Colors from '../constants/Colors'
import ButtonLogin from '../components/ButtonLogin'
import client from '../api/client';


const URL= 'http://172.20.33.125:5000/api/v1/users'
//http://localhost:5000/


// get data user




const UserScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const callDataUser  = async()=>{
    console.log('calling...')
    try {
      const response = await fetch('http://10.0.100.86:5000/api/v1/users/23');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    callDataUser();
  }, []);
  let data1=data
  console.log('succes',data)
  // console.log('check: ',data['data']["id"])
  
  
  
  return (
   
      <View style={styles.container}>
      
        <View style={{height:"35%",backgroundColor:Colors.BACKGROUND_USER_AVATAR,alignItems:"center", marginBottom:10}}>
        <Image
          source={require('../../assets/images/anh_login.png')}
          style={{width:200,height:200, borderRadius:100,marginTop:30}}
          ></Image>
        </View>

        {isLoading ? <ActivityIndicator/>:(
        <View style={{marginLeft:10}}> 
       <Text style={styles.textUser}>
         Name:  {data['data']["firstName"] }
        </Text>
        
        <Text style={styles.textUser}>
          Date of Birth: April 22, 2016
        </Text>
        <Text style={styles.textUser}>
          Email: {data['data']["email"]}
        </Text>
        <Text style={styles.textUser}>
          Phone: {data['data']["numberPhone"]}
        </Text>
      </View>
      )}
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
    paddingTop:30,
    paddingHorizontal:0,

  },
  textUser:{
    fontSize:18,
    marginBottom:10

  }
})