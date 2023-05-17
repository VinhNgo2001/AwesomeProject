import { StyleSheet, Text, View,Button,TouchableOpacity, } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Video, ResizeMode } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign'


const PlayMovies = ({navigation}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
      <View>
        <Text>Shadow Garden</Text>
      </View>
      
     
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
      width:350,
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
   
})