import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import HScrollView from '../components/HScrollView'

const FavoritesList = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Your Favorities List</Text>
      <View style={{marginTop:10, alignContent:"center"}}>
      <TouchableOpacity  onPress={()=>navigation.navigate("movies")}>
                    <HScrollView      
                        imageUri={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        name="One Puch Man"
                    />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/shadow_bia.jpg')}
                        name="Shadow "
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/doremon_bia.jpg')}
                        name="Doraemon"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/naruto_bia.png')}
                        name="Naruto"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("movies")}>
                    <HScrollView 
                        imageUri={require('../../assets/images/demoslayder_bia.png')}
                        name="Demon slayder"
                    />
                </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default FavoritesList

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.BASIC_BACKGROUND,
    paddingTop:20,
    paddingHorizontal:10
  },
  headerTitle:{
    fontSize:30,
    fontWeight:"bold",
  }
})