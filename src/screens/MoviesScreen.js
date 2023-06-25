import { StatusBar } from 'expo-status-bar';
import { Alert,ScrollView,ImageBackground,StyleSheet, Text, View, Image ,TouchableOpacity, ImageBackgroundBase} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import Icon1 from 'react-native-vector-icons/Fontisto';
import React, { useState, useEffect,useContext } from 'react';
import {FavoriteService} from '../services/FavoriteService'
import { AuthContext } from '../context/AuthContext';



const MoviesScreen =({navigation,route}) => {
    const {userInfo} =useContext(AuthContext)



    const {movie}=route.params
    console.log.movie
    let AddSucess = async()=>{
        const req = await FavoriteService.addFavorite([userInfo.data.id,movie.id])
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
                style={{height:"70%"}}
            >
             <ImageBackground 

                source={{uri: movie.linkImage}}
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
                <View style={{position:'absolute',bottom:0,width:"100%",backgroundColor:Colors.BACKGROUND_NAME_MOVIES,paddingLeft:20,paddingTop:25,flexDirection:'row'}}>
                    <View style={{width:'80%'}}>
                        <Text style={styles.btnName}>{movie.filmName}</Text>
                        <Text style={styles.btnTag}>{movie.tag}</Text>
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
                <Text style={styles.textND}>
                    {movie.description}
                </Text>
           </ScrollView>
           <View style={{ position:'absolute',left:"20%",bottom:30,alignContent:'center',}}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("play-movies",{movie})}
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