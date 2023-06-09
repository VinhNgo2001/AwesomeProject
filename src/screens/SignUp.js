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
const SignUp = ({navigation}) => {
    // const {signUp} =useContext(AuthContext)
    const SUSuccess = async(values)=>{

       
        const res = await client 
            .post('/create-user',{...values})
            .then(res=>{
                
                console.log("check log:",res.data.message)
                Alert.alert(
                    res.data.message1,
                    res.data.message2,
                    [
                        {
                            text:'OK',
                            onPress:()=>{
                                
                                navigation.navigate('login')},
                                
        
                            
                            //lam sau
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
                        style={{fontWeight:"bold", fontSize:23, width:230, marginLeft:0, marginTop:20}}
                    >Welcome to HIPPO</Text>
                    <Formik
                         initialValues={{ firstName: '',passWord:'',numberPhone:'' }}
                         onSubmit={SUSuccess}

                         
                    >
                         {({ handleChange, handleBlur, handleSubmit, values }) => (
                            
                        <View>
                           <View>
                                <View style={styles.inputNumber}>
                                    <Icons name='user'
                                        size={28}
                                        style={{marginLeft:5,marginTop:3}}
                                    ></Icons>
                                <TextInput
                                    style={{marginLeft:10, fontSize:18}}
                                    placeholder="Enter your full name"
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                />
                                </View>
                                <View style={styles.inputNumber}>
                                    <Icons name='phone'
                                                        size={28}
                                                        style={{marginLeft:5,marginTop:3}}
                                                    ></Icons>
                                <TextInput
                                    style={{marginLeft:10, fontSize:18}}
                                    placeholder="Enter your phone"
                                    onChangeText={handleChange('numberPhone')}
                                    onBlur={handleBlur('numberPhone')}
                                    value={values.numberPhone}
                                />
                                </View>
                                <View style={styles.inputNumber}>
                                    <Icons name='lock'
                                        size={28}
                                        style={{marginLeft:5,marginTop:3}}
                                    ></Icons>
                                <TextInput
                                    style={{marginLeft:10, fontSize:18}}
                                    placeholder="Enter your Password"
                                    onChangeText={handleChange('passWord')}
                                    onBlur={handleBlur('passWord')}
                                    value={values.passWord}
                                />
                                </View>
                            </View><View style={styles.inputNumber}>
                                <Icons name='lock'
                                    size={28}
                                    style={{marginLeft:5,marginTop:3}}
                                ></Icons>
                                <TextInput style={{marginLeft:10, fontSize:18}}
                                    placeholder="Confirm your Password"
                                ></TextInput>
                            </View>
                            <View style={{marginTop:20}}>
                            <ButtonLogin title="Register" style={{width:200}} onPress ={handleSubmit}  

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

export default SignUp

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