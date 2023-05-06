import { StyleSheet, Text, View,Image,TextInput,Button,onPress} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
        <Image
         source={require('../../assets/images/anh_login.png')}
         style={{width:300,height:300, borderRadius:150,marginTop:30}}
         ></Image>
        <Text style={{fontSize:35, fontWeight:"bold"}}>Welcome back!</Text>
        <View style={styles.asembler}>
            <View 
                style={styles.buttonP}
            >
                <Icon name ="user" size={25}  style={{marginLeft:15,
            marginTop:5}}/>
            </View>
            <View style={styles.main}>
                <TextInput style={{marginLeft:15,marginTop:5}}></TextInput>
            </View>
        </View>
        <View style={styles.asembler}>
            <View 
                style={styles.buttonP}
            >
                <Icon name ="lock" size={25}  style={{marginLeft:15,
            marginTop:5}}/>
            </View>
            <View style={styles.main}>
                <TextInput style={{marginLeft:15,marginTop:5}}></TextInput>
            </View>
        </View>
        <View  style={{marginBottom:10,width:300,borderRadius:}}>
            <Button onPress={ ()=> navigation.navigate("home")}
                title="Login"
            
            ></Button>
        </View>
        
         <Button onPress={ ()=> navigation.navigate("home")}
            title="Continue with Google"
            
        ></Button>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        alignItems:"center"

    },
    asembler:{
        flexDirection:'row',
        marginBottom:20,
    },
    main: {
        backgroundColor:Colors.WHITE,
        width: 250,
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
   
    },
    buttonP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,


    }
})