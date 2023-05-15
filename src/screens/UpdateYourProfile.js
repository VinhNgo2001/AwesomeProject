import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { TextInput } from 'react-native-paper'
import Icon  from 'react-native-vector-icons/AntDesign';

const UpdateYourProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{height:"35%",backgroundColor:Colors.BACKGROUND_USER_AVATAR,alignItems:"center", marginBottom:10}}>
        <Image
          source={require('../../assets/images/anh_login.png')}
          style={{width:200,height:200, borderRadius:100,marginTop:30}}
          ></Image>
      </View>
      <View style={{marginLeft:10,marginHorizontal:10}}>
        <View style={{flexDirection:'row', borderBottomWidth:1, }}>
            <View style={{width:"90%"}}>
                <Text style={styles.textUser}>
                  Name:Oggy
                </Text>
            </View>
            

            <TouchableOpacity style={{marginTop:5,flex:1}}
                onPress={()=>navigation.navigate("edit-user")}
            >
                <Icon name='right' size={25}>

                </Icon>

            </TouchableOpacity>
            
        </View>
        <View style={{flexDirection:'row', borderBottomWidth:1}}>
            <View style={{width:"90%"}}>
                <Text style={styles.textUser}>
                Date of Birth: April 22, 2016
                </Text>
            </View>
            

            <TouchableOpacity style={{ marginTop:5,flex:1}}>
                <Icon name='right' size={25}>

                </Icon>

            </TouchableOpacity>
            
        </View><View style={{flexDirection:'row', borderBottomWidth:1}}>
            <View style={{width:"90%"}} >
                <Text style={styles.textUser}>
                Email: Oggy*****@gmail.com
                </Text>
            </View >
            

            <TouchableOpacity style={{ marginTop:5,flex:1}}>
                <Icon name='right' size={25}>

                </Icon>

            </TouchableOpacity>
            
        </View><View style={{flexDirection:'row', borderBottomWidth:1}}>
            <View style={{width:"90%"}} >
                <Text style={styles.textUser}>
                Phone: *******89
                </Text>
            </View >
            

            <TouchableOpacity style={{ marginTop:5,flex:1}}>
                <Icon name='right' size={25}>

                </Icon>

            </TouchableOpacity>
            
        </View>
       
        
      </View>
    </View>
  )
}

export default UpdateYourProfile

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        paddingTop:20,
        paddingHorizontal:0,
    
      },
      textUser:{
        fontSize:24,
        marginBottom:10,
       
    
      },
      userInput:{
        width:250, 
        backgroundColor:Colors.BASIC_BACKGROUND,
        
        


    }

})