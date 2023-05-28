import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Formik } from 'formik'
import Icons  from 'react-native-vector-icons/AntDesign';
const FormSignUp = () => {
  return (
    <View style={styles.container}>
    <Formik
     initialValues={{ email: '',passWord:'',numberPhone:'' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View>
        <View style={styles.inputNumber}>
            <Icons name='user'
                size={28}
                style={{marginLeft:5,marginTop:3}}
            ></Icons>
          <TextInput
             style={{marginLeft:10, fontSize:18}}
             placeholder="Enter your full name"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
        </View>
        <View style={styles.inputNumber}>
            <Icons name='phone'
                                size={28}
                                style={{marginLeft:5,marginTop:3}}
                            ></Icons>
          <TextInput
             style={{marginLeft:10, fontSize:18}}
             placeholder="Enter your phone"
            onChangeText={handleChange('numberPhone')}
            onBlur={handleBlur('numberPhone')}
            value={values.numberPhone}
          />
        </View>
        <View style={styles.inputNumber}>
            <Icons name='lock'
                                size={28}
                                style={{marginLeft:5,marginTop:3}}
                            ></Icons>
          <TextInput
             style={{marginLeft:10, fontSize:18}}
             placeholder="Enter your phone"
            onChangeText={handleChange('passWord')}
            onBlur={handleBlur('passWord')}
            value={values.passWord}
          />
        </View>
        <Button onPress={handleSubmit} title="Submit" />
       </View>
     )}
   </Formik>
    </View>
  )
}

export default FormSignUp

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    inputNumber:{
        flexDirection:"row",
        marginTop:20,
        backgroundColor:Colors.WHITE,
        width: 300,
        height:40,
        borderWidth :1,
        borderColor:Colors.SILVER,
        borderRadius:40,
    }
})