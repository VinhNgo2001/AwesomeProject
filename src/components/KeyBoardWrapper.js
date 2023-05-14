import { StyleSheet, Text, View,KeyboardAvoidingView,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React, { Children } from 'react'

const KeyBoardWrapper = ({Children}) => {
  return (
    <KeyboardAvoidingView
        style={{flex:1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
        <ScrollView>
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
                {Children}
            </TouchableWithoutFeedback>
        </ScrollView>

    </KeyboardAvoidingView>
  )
}

export default KeyBoardWrapper

const styles = StyleSheet.create({})