import { FlatList,StyleSheet, Text, View,Button,TouchableOpacity, } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'
import YoutubePlayer from "react-native-youtube-iframe";

const PlayMovies = ({navigation,route}) => {
  const {movie}=route.params
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const listEp=Array.from({ length: 64 }, (value, index) => index+1);
  return (
    <View style={styles.container}>
      
    
      <View style={{paddingTop:20}}>
        <YoutubePlayer
          height={200}
          
          videoId={movie.linkYT}
          
        />
      </View>
      <View style={{width:'100%',backgroundColor:Colors.BACKGROUND_NAME_MOVIES,paddingTop:5,paddingBottom:10, paddingHorizontal:10}}>
        < View style={{width:'100%'}}>
          <Text style={styles.btnName}>{movie.filmName}</Text>
          <Text style={styles.btnTag}>{movie.tag}</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',height:60,paddingLeft:5,backgroundColor:Colors.COLOR_BUTTON_EP,borderBottomWidth:1}}>
        <TouchableOpacity
        style={styles.btnBar}
      
        >
          <Icon2 name='info' size={50} style={styles.iconBar}></Icon2>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBar}
        >
          <Icon2 name='star' size={50} style={styles.iconBar}></Icon2>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBar}
        >
          <Icon2 name='bookmark' size={50} style={styles.iconBar}></Icon2>
        </TouchableOpacity>
        
      </View>
      <View style={{marginVertical:10,marginLeft:10}}>
        <Text style={styles.textEp}>Episode</Text>
      </View>
      
      <View style={{alignItems:'center'}}>
        <FlatList
          numColumns={4}
          data={listEp}
          renderItem={({item})=>
            
            <TouchableOpacity style={styles.btnEp} key={item}>
              <Text style={styles.textEp}>{item}</Text>
             </TouchableOpacity>
            }
        >
          
        </FlatList>
      </View >

      
     
    </View>
  )
}

export default PlayMovies

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.BASIC_BACKGROUND,
        paddingTop:20,
        // paddingHorizontal:10,
    },
    
    btnBack:{
      width:50,
      height:50,
      backgroundColor:Colors.COLOR_BUTTON_BACK_MOVIE,
      elevation: 8,
      borderRadius:30,
      paddingVertical:7,
      marginLeft:10,
      marginTop:20,
      position:'absolute',
      
  },
  btnEp:{
    width:72,
    height:48,
    backgroundColor:Colors.COLOR_BUTTON_EP,
    borderRadius:8,
    alignItems:'center',
    paddingTop:5,
    marginHorizontal:5,
    marginVertical:5
  },
  textEp:{
    fontSize:24,
    fontWeight:'bold'
  },
  btnName:{
    color:Colors.WHITE,
    fontSize:18,
    fontWeight:"bold",
  },
  btnTag:{
      color:Colors.WHITE,

  },
  btnBar:{
    width:'33%',
    backgroundColor:Colors.COLOR_BUTTON_EP,
    borderWidth:1,
    alignItems:'center'

  },
  iconBar:{
    color:Colors.WHITE,
  }
   
})