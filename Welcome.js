
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';



const Welcome=() =>{
  const press=()=>{
    Alert.alert("login","user logged in")
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Travel Easy</Text>
      <Image  style={styles.image}source={require('../assets/i1.jpg')}/>
      <View style={styles.formview}>
         <Text style={styles.text1}>login form</Text>
         <TextInput style={styles.textinput} placeholder='enter your username'></TextInput>
         <TextInput style={styles.textinput} placeholder='enter your password'></TextInput>
      </View>
      <View style={styles.loginview}>
        <Button  title='login here' onPress={press} ></Button>
        <Button  color='black' title='clear'  ></Button>
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  view:{
margin:10,
backgroundColor:'skyblue',
flex:1,
flexWrap:'wrap'
  },
  text:
  {
    textAlign:'center',
    color:'black',
    fontSize:40
   
  },
  text1:
  {
    textAlign:'center',
    color:'darkblue',
    fontFamily:'serif',
    fontSize:25
   
  },
  textinput:
  {
    borderWidth:1,
    borderRadius:9,
    margin:2,
    color:'black',
    fontSize:20
   
  },
  image:{
    height:200,
    margin:40,
    padding:25
  },
  loginview:{
    margin:10,
backgroundColor:'#fff',
borderColor:'black',
flexBasis:100,
    justifyContent:'center',
    padding:20,
    
  },
  formview:{
    margin:10,
    backgroundColor:'#fff',
    borderColor:'black',
    flexBasis:170,
        justifyContent:'center',
        padding:20
  }
  
})

export default Welcome;
 