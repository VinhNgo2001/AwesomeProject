import { StyleSheet, Text, View,Image,TextInput,Button,onPress,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonLogin from '../components/ButtonLogin';

const Login = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
        <Image
         source={require('../../assets/images/anh_login.png')}
         style={{width:250,height:250, borderRadius:125,marginTop:30}}
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
        <View>
            <ButtonLogin
                title="LOGIN"
                onPress={ ()=> navigation.navigate("home")}
            ></ButtonLogin>
        </View>
        <View>
            <ButtonLogin
                title="CONTINUE WITH GOOGLE"
                onPress={ ()=> navigation.navigate("home")}
            ></ButtonLogin>
        </View>
        <View>
            <Text style={styles.btpFogetpw} onPress={()=>navigation.navigate("home")}>Foget Password</Text>
        </View>
        <View style={{ flexDirection:"row", marginTop:5}}>
            <Text style={{fontSize:18,}}>Alrealdy have an account? </Text>
            <Text style={styles.btnSU} onPress={()=>navigation.navigate("home")}>Sign Up</Text>
        </View>
        
        
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


    },
    btnLogin:
    {
        marginBottom:10,
        width:300,

    },
    btpFogetpw:{
        fontSize:18,
        textDecorationLine:"underline",
        color:Colors.LIGHTSKY,
        marginVertical:5,
    },
    btnSU:{
        fontSize:18,
        textDecorationLine:"underline",
        color:Colors.DEEPBLU,
        
    }
    
})