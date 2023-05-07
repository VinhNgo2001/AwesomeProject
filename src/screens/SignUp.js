import { StyleSheet, Text, View,Image,TextInput,Button,onPress,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonLogin from '../components/ButtonLogin';
import Icons  from 'react-native-vector-icons/AntDesign';

const SignUp = ({navigation}) => {
    let SUSuccess =()=>{
        Alert.alert(
            "Notification",
            'Sign Up Success ',
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
    <View style={styles.container}>
        <Image
         source={require('../../assets/images/anh_login.png')}
         style={{width:250,height:250, borderRadius:125,marginTop:30}}
        ></Image>
        <Text
            style={{fontWeight:"bold", fontSize:24, width:230, marginLeft:20, marginTop:20}}
        >Welcome to HIPPO</Text>
        <View>
            <View style={styles.inputNumber}>
                <Icons name='user'
                    size={28}
                    style={{marginLeft:5,marginTop:3}}
                ></Icons>
                <TextInput style={{marginLeft:10, fontSize:18}}
                    placeholder="Enter your full name"
                ></TextInput>
            </View>
                <View style={styles.inputNumber}>
                <Icons name='phone'
                    size={28}
                    style={{marginLeft:5,marginTop:3}}
                ></Icons>
                <TextInput style={{marginLeft:10, fontSize:18}}
                    placeholder="Enter your phone"
                    
                ></TextInput>
            </View><View style={styles.inputNumber}>
                <Icons name='lock'
                    size={28}
                    style={{marginLeft:5,marginTop:3}}
                ></Icons>
                <TextInput style={{marginLeft:10, fontSize:18}}
                    placeholder="Enter your Password"
                ></TextInput>
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
            <ButtonLogin title="Register" style={{width:200}} onPress={SUSuccess} ></ButtonLogin>
            </View>
        </View>
    </View>
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