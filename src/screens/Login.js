import { StyleSheet,
     Text,
      View,
      Image,
      TextInput,
      Button,
      onPress,
      TouchableOpacity,
      Alert,
      KeyboardAvoidingView,
      ScrollView
    } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather'
import ButtonLogin from '../components/ButtonLogin';

const Login = ({navigation}) => {
    let loginSucess =()=>{
        Alert.alert(
            "Notification",
            "Login success",
            [
                {
                    text:"oke",
                    onPress: ()=>{
                        navigation.navigate('home')
                    }
                }
            ]

        )
    }
  return (
    <KeyboardAvoidingView style={{flex:1}}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    >

            <ScrollView
                contentContainerStyle={{flex:1,alignItems:"center"}}
                style={styles.loginContainer}
            >
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
                    <View style={styles.main}
                        
                    >
                        <TextInput style={{marginTop:5}}></TextInput>
                    </View>
                </View>
                <View style={styles.asembler}>
                    <View 
                        style={styles.buttonP}
                    >
                        <Icon name ="lock" size={25}  style={{marginLeft:15,
                    marginTop:5}}/>
                    </View>
                    <View style={styles.main1}>
                        <TextInput style={{marginTop:5,fontSize:22}}
                            secureTextEntry={true}
                        ></TextInput>
                        
                    </View>
                    <View style={styles.buttonPP}>
                        <TouchableOpacity>
                            <Icon
                                    name='eye'
                                    size={25}
                                    style={{}}
                                ></Icon >
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <ButtonLogin
                        title="LOGIN"
                        onPress={ loginSucess}
                    ></ButtonLogin>
                </View>
                <View>
                    <ButtonLogin
                        title="CONTINUE WITH GOOGLE"
                        onPress={ loginSucess}
                    ></ButtonLogin>
                </View>
                <View>
                    <Text style={styles.btpFogetpw} onPress={()=>navigation.navigate("fogetPW")}>Foget Password</Text>
                </View>
                <View style={{ flexDirection:"row", marginTop:5}}>
                    <Text style={{fontSize:18,}}>Alrealdy have an account? </Text>
                    <Text style={styles.btnSU} onPress={()=>navigation.navigate("signUp")}>Sign Up</Text>
                </View>
                
                
            </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        
        backgroundColor:Colors.BASIC_BACKGROUND,
        

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
        borderLeftWidth:0,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
   
    },
    main1: {
        backgroundColor:Colors.WHITE,
        width: 200,
        height:40,
        borderWidth :1,
        borderRightWidth:0,
        borderColor:Colors.SILVER,
        borderLeftWidth:0,
        
   
    },
    buttonP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :1,
        borderRightWidth:0,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,


    },
    buttonPP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :1,
        borderLeftWidth:0,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,


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