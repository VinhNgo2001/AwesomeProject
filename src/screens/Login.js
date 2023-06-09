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
      ScrollView,
      TouchableWithoutFeedback
    } from 'react-native'
import React, {useContext,useState} from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather'
import ButtonLogin from '../components/ButtonLogin';
import { AuthContext } from '../context/AuthContext';
import { Formik } from 'formik';
import Spinner from "react-native-loading-spinner-overlay";
import client from '../api/client';



const Login = ({navigation}) => {
    
    const {login,isTrue,isLoading,userInfo} =useContext(AuthContext)

    const loginSucess =async(values)=>{
        login(values)
        const res = await client
            .post('/log-in',{
                ...values
            })
            .then(res=>{
                
                console.log('success')
                    Alert.alert(
                        "Notification",
                        "Login success",
                        [
                            {
                                text:"oke",
                                onPress: ()=>{
                                    navigation.navigate('homeTab')
                                }
                            }
                        ]
            
                    )
            
                
                   
                
                
            })
            .catch(e=>{
                console.log('fail')
                Alert.alert(
                    "Notification",
                    "Login false",
                    [
                        {
                            text:"oke",
                            // onPress: ()=>{
                            //     navigation.navigate('homeTab')
                            // }
                        }
                    ]
        
                )
            })
        

        

        // if(isTrue){
        //     Alert.alert(
        //         "Notification",
        //         "Login success",
        //         [
        //             {
        //                 text:"oke",
        //                 onPress: ()=>{
        //                     navigation.navigate('homeTab')
        //                 }
        //             }
        //         ]
    
        //     )
        // }
        // else{
        //     Alert.alert(
        //         "Notification",
        //         "Login false",
        //         [
        //             {
        //                 text:"oke",
        //                 // onPress: ()=>{
        //                 //     navigation.navigate('homeTab')
        //                 // }
        //             }
        //         ]
    
        //     )
        // }
        
    }
//    const checkLogin= ()=>{
   
//    }
    const [getPassWordVisible,setPassWordVisible]=useState(false)
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:Colors.BASIC_BACKGROUND, }}
    behavior={Platform.OS === 'ios' ? 'padding' : null}
    >

            <ScrollView style={{flex:1}}

                
            >
                <TouchableWithoutFeedback>
                    <View style={styles.loginContainer}>
                        <Spinner visible={isLoading}></Spinner>
                        <Image
                         source={require('../../assets/images/anh_login.png')}
                         style={{width:250,height:250, borderRadius:125,marginTop:30}}
                         ></Image>
                        <Text style={{fontSize:35, fontWeight:"bold",marginBottom:10}}>Welcome back!</Text>
                        <Formik
                             initialValues={{ passWord:'',numberPhone:'' }}
                             onSubmit={loginSucess}
    
                             
                        >
                             {({ handleChange, handleBlur, handleSubmit, values }) => (
                        
                                <View>
                                    <View style={styles.asembler}>
                                        <View 
                                            style={styles.buttonP}
                                        >
                                            <Icon1 name ="user" size={25}  style={{marginLeft:15,
                                        marginTop:5}}/>
                                        </View>
                                        <View style={styles.main}
                                            
                                        >
                                            <TextInput style={{marginTop:5, fontSize:18}}
                                                
                                                placeholder="Enter your phone"
                                                onChangeText={handleChange('numberPhone')}
                                                onBlur={handleBlur('numberPhone')}
                                                value={values.numberPhone}
                                            ></TextInput>
                                        </View>
                                    </View>
                                    <View style={styles.asembler}>
                                        <View 
                                            style={styles.buttonP}
                                        >
                                            <Icon1 name ="lock" size={25}  style={{marginLeft:15,
                                        marginTop:5}}/>
                                        </View>
                                        <View style={styles.main1}>
                                            <TextInput style={{marginTop:5,fontSize:18}}
                                                secureTextEntry={getPassWordVisible? false:true}
                                                placeholder="Enter your password"
                                                onChangeText={handleChange('passWord')}
                                                onBlur={handleBlur('passWord')}
                                                value={values.passWord}
                                            ></TextInput>
                                            
                                        </View>
                                        <View style={styles.buttonPP}>
                                            <TouchableOpacity
                                                onPress={()=>{
                                                    setPassWordVisible(!getPassWordVisible)
                                                }}
                                            >
                                            {getPassWordVisible?
                                                <Icon
                                                        name='eye'
                                                        size={25}
                                                        style={{marginTop:5}}
                                                ></Icon >
                                                :
                                                <Icon
                                                        name='eye-slash'
                                                        size={25}
                                                        style={{marginTop:5}}
                                                ></Icon >
                                                }
                                                
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View>
                                        <ButtonLogin
                                            title="Login"
                                            onPress={ handleSubmit}
                                        ></ButtonLogin>
                                    </View>
                                </View>
                             )}
                        </Formik>
                        <View>
                            <ButtonLogin
                                title="Continue with Google"
                                onPress={ loginSucess}
                            ></ButtonLogin>
                        </View>
                        <View>
                            <Text style={styles.btpFogetpw} onPress={()=>navigation.navigate("fogetPW")}>Foget Password</Text>
                        </View>
                        <View style={{ flexDirection:"row", marginTop:5}}>
                            <Text style={{fontSize:18,}}>Alrealdy have an account? </Text>
                            <Text style={styles.btnSU}  onPress={()=>navigation.navigate("signUp")}>Sign Up</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                
                
            </ScrollView>

    </KeyboardAvoidingView>
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
        borderWidth :0,
        borderLeftWidth:0,
        borderColor:Colors.SILVER,
        borderTopRightRadius:40,
        borderBottomRightRadius:40,
   
    },
    main1: {
        backgroundColor:Colors.WHITE,
        width: 200,
        height:40,
        borderWidth :0,
        borderRightWidth:0,
        borderColor:Colors.SILVER,
        borderLeftWidth:0,
        
   
    },
    buttonP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :0,
        borderRightWidth:0,
        borderColor:Colors.SILVER,
        borderTopLeftRadius:40,
        borderBottomLeftRadius:40,


    },
    buttonPP:{
        backgroundColor:Colors.WHITE,
        width: 50,
        height:40,
        borderWidth :0,
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
        fontWeight:"bold"
        
    }
    
})