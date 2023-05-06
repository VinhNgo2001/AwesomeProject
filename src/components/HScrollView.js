import { StyleSheet, Text, View,ScrollView,Image } from 'react-native'
import React, { Component } from 'react'

class HScrollView extends Component {
    render(){
        return (
            <View style={{marginLeft:20}}>
            
                <View style={styles.images}>
                    <Image 
                        // source={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        source={this.props.imageUri}
                        style={styles.img1}
                    ></Image>
                </View>
                <View style={{flex:1}}>
                    <Text>{this.props.name}</Text>
                </View>

            

            </View>
  )
}
}

export default HScrollView

const styles = StyleSheet.create({
    images:{
        height:130,
        width:180,
        
        flex:2,
    },
    img1 :{
        flex:1,
        height:null,
        width:null,
        borderRadius:20,
        resizeMode:'cover',

    }
})