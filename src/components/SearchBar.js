import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const SearchBar = () => {
  return (
    <View styles ={styles.main}>
      <Text>SearchBa</Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    main: {
        backgroundColor: Colors.WHITE,
        width: 250,
        height:60,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderRadius:1,
    }

})