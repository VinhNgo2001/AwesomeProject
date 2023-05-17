import { FlatList,StyleSheet, Text, View,Button,TouchableOpacity, } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Feather'

const PlayMovies = ({navigation}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const listEp=Array.from({ length: 64 }, (value, index) => index+1);
  return (
    <View style={styles.container}>
      
      
      <View style={styles.containerVideo}>
        <Video
          ref={video}
          style={styles.video}
          source={require('../../assets/videos/naruto_movies.mp4')}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        ></Video>
        {/* <TouchableOpacity
          style={{ paddingTop:5, paddingLeft:10}}
          onPress={() => video.current.playFromPositionAsync(5000)}
        >
          <Icon1 name='play' size={30} style={{color:Colors.WHITE}}></Icon1> 
        </TouchableOpacity> */}
         <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
      
       
        <TouchableOpacity
                    style={styles.btnBack}
                    onPress={()=> navigation.navigate("movies")}
                >   
                    <Icon
                        name="arrow-back"
                        style={{color:Colors.WHITE,marginLeft:10,marginTop:4}}
                        size={25}
                    ></Icon>
      </TouchableOpacity>
      </View>
      <View style={{width:'100%',backgroundColor:Colors.BACKGROUND_NAME_MOVIES,paddingTop:5,paddingBottom:10, paddingHorizontal:10}}>
        < View style={{width:'80%'}}>
          <Text style={styles.btnName}>Shadow Garden</Text>
          <Text style={styles.btnTag}>Adventure,Action,..</Text>
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
    video:{
      width:"100%",
      height:150,
    },
    containerVideo:{
      marginTop:20,
      backgroundColor:Colors.BLACK,
      
    },
    btnBack:{
      width:50,
      height:50,
      backgroundColor:Colors.COLOR_BUTTON_BACK_MOVIE,
      elevation: 8,
      borderRadius:30,
      paddingVertical:7,
      marginLeft:10,
      marginTop:10,
      position:'absolute'
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
    fontSize:24,
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