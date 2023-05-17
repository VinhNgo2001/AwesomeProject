import { StyleSheet, Text, View ,TouchableOpacity,onPress,Image,TextInput,Alert,KeyboardAvoidingView,ScrollView,Keyboard,TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Icons  from 'react-native-vector-icons/AntDesign';
import ButtonLogin from '../components/ButtonLogin';
import KeyBoardWrapper from '../components/KeyBoardWrapper';


const FogetPW = ({navigation}) => {
    let sendSuces =()=>{
        Alert.alert(
            "Notification",
            'OTP has been sent to your phone ',
            [
                {
                    text:"Close",
                    onPress:()=>navigation.navigate('login')
                    //lam sau
                }
            ]
        )
        }
    

  return (
    
    <KeyboardAvoidingView style={{flex:1,backgroundColor:Colors.BASIC_BACKGROUND,}}
        behavior={Platform.OS === 'ios' ? 'padding' : 10}
    >
        <ScrollView>
            <TouchableWithoutFeedback>
                <View style={styles.container}>
                  <View style={{flexDirection:"row", marginTop:20}}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={()=> navigation.navigate("login")}
                
                    >   
                        <Icon
                            name="arrow-back"
                            style={{color:Colors.WHITE,marginLeft:10,marginTop:4}}
                            size={25}
                        ></Icon>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10,marginTop:10,fontSize:24,fontWeight:"bold"}}>Foget Password</Text>
                  </View>
                  <View style={{alignItems:"center"}}>
                    <Image
                        source={require('../../assets/images/anh_login.png')}
                        style={{width:300,height:300, borderRadius:150,marginTop:30,marginBottom:30}}
                    ></Image>
                    <Text
                        style={{fontWeight:"bold", fontSize:20, width:230}}
                    >Enter your phone number to recover your password</Text>
                    
                        <View style={styles.inputNumber}>
                            <Icons name='phone'
                                size={28}
                                style={{marginLeft:5,marginTop:3}}
                            ></Icons>
                            <TextInput style={{marginLeft:10, fontSize:18,width:200}}></TextInput>
                        </View>
                    
                    <View style={{marginTop:20}}>
                        <ButtonLogin title="Done" style={{width:200}} onPress={sendSuces}></ButtonLogin>
                    </View>
                  </View>
                  
                
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default FogetPW

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        padding:10,

    },
    btnBack:{
        width:50,
        height:50,
        backgroundColor:Colors.GREY,
        elevation: 8,
        borderRadius:30,
        paddingVertical:7,
        marginBottom:5,
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