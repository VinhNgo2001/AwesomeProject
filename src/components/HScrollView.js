import { StyleSheet, Text, View,ScrollView,Image, } from 'react-native'
import React, { Component } from 'react'

class HScrollView extends Component {
    render( ){
        return (
            
            <View style={{marginLeft:20,marginBottom:20}}>
            
                <View style={styles.images}>
                    <Image 
                        // source={require('../../assets/images/one-punch-man-chap-223-3-1021.webp')}
                        source={this.props.imageUri}
                        style={styles.img1}
                        
                        
                    ></Image>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontWeight:"bold",marginLeft:10,marginTop:5}}>{this.props.name}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:12,marginLeft:10,marginTop:5}}>{this.props.tag}</Text>
                </View>
            
            
            
            </View>
            
  )
}
}

export default HScrollView

const styles = StyleSheet.create({
    images:{
        height:150,
        width:300,
        
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