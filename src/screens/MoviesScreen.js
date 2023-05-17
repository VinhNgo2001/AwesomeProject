import { StatusBar } from 'expo-status-bar';
import { Alert,ScrollView,ImageBackground,StyleSheet, Text, View, Image ,TouchableOpacity, ImageBackgroundBase} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Icon1 from 'react-native-vector-icons/Fontisto';
import { useState } from 'react';
const MoviesScreen =({navigation}) => {
    let AddSucess =()=>{
        Alert.alert(
            "Notification",
            "Added to favorites",
            [
                {
                    text:"oke",
                    onPress: ()=>{
                        setAddFavorties(!getAddFavorties)
                    }
                }
            ]

        )
    }
    const [getAddFavorties,setAddFavorties]= useState(false)
    return ( <
        View style = { styles.container } >
            <View 
                style={{height:"60%"}}
            >
             <ImageBackground 

                source={require('../../assets/images/naruto_bia.png')}
                resizeMode="cover"
                style={{height:"100%"}}
            >
                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={()=> navigation.navigate("home")}
                >   
                    <Icon
                        name="arrow-back"
                        style={{color:Colors.WHITE,marginLeft:10,marginTop:4}}
                        size={25}
                    ></Icon>
                </TouchableOpacity>
                <View style={{position:'absolute',bottom:0,height:100,width:"100%",backgroundColor:Colors.BACKGROUND_NAME_MOVIES,paddingLeft:20,paddingTop:25,flexDirection:'row'}}>
                    <View style={{width:'80%'}}>
                        <Text style={styles.btnName}>Shadow Garden</Text>
                        <Text style={styles.btnTag}>Adventure,Action,..</Text>
                    </View>
                    <View style={{width:'20%'}}>
                        <TouchableOpacity
                        onPress={ AddSucess}
                        >
                            <Icon1 name='favorite' size={60} style={getAddFavorties?{color:Colors.RED}:{color:Colors.WHITE}}></Icon1>
                            
                        </TouchableOpacity>
                    </View>
                </View>
             </ImageBackground>
           </View>
           <ScrollView style={{ paddingHorizontal:10}}>
                <Text style={styles.textND}>Shadow Garden is a mysterious hidden organization founded by Cid Kagenō also known as Shadow. Its primary goal is to eliminate the Cult of Diablos and prevent them from resurrecting the demon Diablos.

                They are the archenemy faction of the Cult of Diablos. As a relatively unknown organization, they became a threat to other nations and even the Cult of Diablos came to fear them. In return, the Cult uses their connections in the public to incrimate and blame Shadow Garden for their own evil.
                </Text>
           </ScrollView>
           <View style={{ position:'absolute',left:"20%",bottom:30,alignContent:'center',}}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("play-movies")}
                >
                    <Text style={styles.btnWatch}>Watch now</Text>
                </TouchableOpacity>
           </View>
        
        <StatusBar style = "auto" / >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BASIC_BACKGROUND,
        
        // justifyContent: 'center',
    },
    textND:{
        fontSize:18,
        marginVertical:20,
        marginHorizontal:10,
        
        
    },
    btnBack:{
        width:50,
        height:50,
        backgroundColor:Colors.COLOR_BUTTON_BACK,
        elevation: 8,
        borderRadius:30,
        paddingVertical:7,
        marginBottom:5,
        marginLeft:20,
        marginTop:35,
    },
    btnWatch:{
        fontSize:25,
        borderRadius:50,
        width:200,
        height:50,
        backgroundColor:Colors.BLUE_85P,
        paddingLeft:30,
        color:Colors.WHITE,
        paddingTop:5,

    },
    btnName:{
        color:Colors.WHITE,
        fontSize:24,
        fontWeight:"bold",
    },
    btnTag:{
        color:Colors.WHITE,

    }
});
export default MoviesScreen;