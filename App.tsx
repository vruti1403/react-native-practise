
import React , {useState}from 'react';
//import Data from './components/Data';
//import Image from './Image';
//import Form from './Form';
//import Changesurname from './Changesurname';
//import Welcome from './components/Welcome';''
//import User from './components/User';
//import Showhide from './components/showhide';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';


const App=()=>{
  const[show,setshow]=useState(false);
 
  return(
 <View style={styles.view}>
  <Text style={styles.text}>Form using show/hide</Text>
  <View style={styles.view1}>
  <Button title='show' onPress={() =>setshow(true)}/>
  </View>
  <View style={styles.view1}>
  <Button title='hide' onPress={() =>setshow(false)}/>
  </View>
  {
    show ? < User /> : null
  }
 </View>
  )
}
const User=()=>{
  const[name,setname]=useState("");
  const[email,setemail]=useState("");
  const[phone,setphone]=useState("");
  const[address,setaddress]=useState("");
  const[display,setDisplay]=useState(false);

  const resetform=()=>{
    setDisplay(false);
    setemail("");
    setname("");
    setphone("");
    setaddress("");
  }
  return(
    <View>
      
      <View>
        <Text style={styles.text1}>REGISTRATION FORM</Text>
        <TextInput style={styles.textinput} placeholder='enter your name' onChangeText={(text)=>setname(text)} value={name}/>
        <TextInput style={styles.textinput} placeholder='enter your email' onChangeText={(text)=>setemail(text)} value={email}/>
        <TextInput style={styles.textinput} placeholder='enter your phone number' onChangeText={(text)=>setphone(text)} value={phone} />
        <TextInput style={styles.textinput} placeholder='enter your address' onChangeText={(text)=>setaddress(text)} value={address}/>
        <View style={styles.view1}>
          <Button  title='print details' onPress={()=>setDisplay(true)}/>
          </View>
          <View style={styles.view1}>
          <Button  title='clear details' onPress={resetform}/>
        </View>
        
        <View >
          {
            display?
            <View >
              <Text style={styles.displayview}>name of user: {name}</Text>
              <Text style={styles.displayview}>email id : {email}</Text>
              <Text style={styles.displayview}>phone number : {phone}</Text>
              <Text style={styles.displayview}>address : {address}</Text>
              </View> :null
          }
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'yellowgreen',
    margin:10,
    padding:30,

  },
  text:
  {
    textAlign:'center',
    color:'white',
    fontSize:25,
    margin:10
   
  },
  text1:
  {
    textAlign:'center',
    color:'darkblue',
    fontFamily:'serif',
    fontSize:20,
    marginTop:15,
    marginBottom:15
   
  },
  view1:{
    backgroundColor:'black',
    padding:15,
  },
  textinput:
  {
    borderWidth:1,
    borderRadius:9,
    margin:2,
    color:'black',
    fontSize:15
   
  },
  formview:{
    margin:10,
    backgroundColor:'#fff',
    borderColor:'black',
    flexBasis:170,
        justifyContent:'center',
        padding:20
  },
  displayview:{
    color:'white',
    fontSize:20,
    fontFamily:'serif'
  }
})

export default App;
 