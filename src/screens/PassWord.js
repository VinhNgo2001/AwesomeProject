import { StyleSheet, Text, View,Image,TextInput,Button,onPress,TouchableOpacity,Alert,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,ScrollView} from 'react-native'
import React, { useContext, useState } from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonLogin from '../components/ButtonLogin';
import Icons  from 'react-native-vector-icons/AntDesign';
import ButtonBack from '../components/ButtonBack';
import { Formik } from 'formik';
import { AuthContext } from '../context/AuthContext';
import client from '../api/client'
const PassWord = ({navigation}) => {
    const [getPassWordVisible,setPassWordVisible]=useState(false)
    const {userInfo} =useContext(AuthContext)

    const SUSuccess = async(values)=>{

       
        const res = await client 
            .put('/pass-word',{...values,'id':userInfo.data.id})
            .then(res=>{
                
                console.log("check log:",res.data.message)
                Alert.alert(
                    "Notification",
                    res.data.message,
                    [
                        {
                            text:'OK',
                            onPress:()=>{
                                if(res.data.message=='change password success'){
                                    navigation.navigate('login')
                                }
                                },
                                
        
                            
                            
                        }
                    ]
                )
            })
       
        }
  return (
    <KeyboardAvoidingView style={{flex:1,backgroundColor:Colors.BASIC_BACKGROUND,}}>
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    
                    <Image
                     source={require('../../assets/images/anh_login.png')}
                     style={{width:250,height:250, borderRadius:125,marginTop:30}}
                    ></Image>
                    <Text
                        style={{fontWeight:"bold", fontSize:18, width:230, marginLeft:0, marginTop:20}}
                    >Change your password</Text>
                    <Formik
                         initialValues={{ passWord:'',newPW:'',newPW1:'' }}
                         onSubmit={SUSuccess}

                         
                    >
                         {({ handleChange, handleBlur, handleSubmit, values }) => (
                            
                        <View>
                           <View>
                                
                                <View style={styles.inputNumber}>
                                    <Icons name='lock'
                                        size={28}
                                        style={{marginLeft:5,marginTop:3}}
                                    ></Icons>
                                    <TextInput
                                        style={{marginLeft:10, fontSize:18,width:220}}
                                        secureTextEntry={getPassWordVisible? false:true}
                                        placeholder="Enter your Password"
                                        onChangeText={handleChange('passWord')}
                                        onBlur={handleBlur('passWord')}
                                        value={values.passWord}
                                    />
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
                                <View style={styles.inputNumber}>
                                    <Icons name='lock'
                                        size={28}
                                        style={{marginLeft:5,marginTop:3}}
                                    ></Icons>
                                    <TextInput
                                        style={{marginLeft:10, fontSize:18,width:220}}
                                        secureTextEntry={getPassWordVisible? false:true}
                                        placeholder="Enter new Password"
                                        onChangeText={handleChange('newPW')}
                                        onBlur={handleBlur('newPW')}
                                        value={values.newPW}
                                    />
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
                            </View><View style={styles.inputNumber}>
                                <Icons name='lock'
                                    size={28}
                                    style={{marginLeft:5,marginTop:3}}
                                ></Icons>
                                <TextInput style={{marginLeft:10, fontSize:18,width:220}}
                                    placeholder="Confirm new Password"
                                    secureTextEntry={getPassWordVisible? false:true}
                                    onChangeText={handleChange('newPW1')}
                                    onBlur={handleBlur('newPW1')}
                                    value={values.newPW1}
                                ></TextInput>
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
                            <View style={{marginTop:20}}>
                            <ButtonLogin title="Done" style={{width:200}} onPress ={handleSubmit}  

                             ></ButtonLogin>
                            
                            </View>
                        </View>
                        )}
                    </Formik>
                    <ButtonBack onPress={()=> navigation.navigate('login')}></ButtonBack>
                    
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default PassWord

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        padding:10,
        alignItems:"center"
    },
    inputNumber:{
        flexDirection:"row",
        marginTop:20,
        backgroundColor:Colors.WHITE,
        width: 300,
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderRadius:40,
    }
    
})