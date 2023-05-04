
import React , {useState} from 'react';
import Data from './components/Data';
import {
  
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';
const press=()=>{
  console.warn('event performed');
 
}
const app = () =>{
  const[surname,setsurname]=useState("shah")
  function testname(){
    setsurname("doshi")
  }
  return (
    <View >
      <Text style={{fontSize:35 ,color :'red'}} >
        hello my first project app
      </Text>
      <Button title='press here' color={'green'} onPress={press}></Button>
      < Data />
      <Text style={{fontSize:25}} >surname:{surname}</Text>
      <Button title='change surname'  onPress={testname}></Button>
     <Form/>
    </View>
  );
  }
  const Form = () =>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[display,setDisplay]=useState(false);

    const resetform=()=>{
      setDisplay(false);
      setEmail("");
      setPassword("");
    }
    return(
      <View>
        <Text>LOGIN FORM</Text>
        <TextInput placeholder='enter your email id' onChangeText={(text)=>setEmail(text)} value={email}/>
        <TextInput placeholder='enter your password' secureTextEntry={true} onChangeText={(text)=>setPassword(text)} value={password}/>
        <View>
          <Button color={'green'} title='print details' onPress={()=>setDisplay(true)}/>
          <Button  title='clear details' onPress={resetform}/>
        </View>
        
        <View>
          {
            display?
            <View>
              <Text>email id : {email}</Text>
              <Text>password : {password}</Text>
              </View> :null
          }
        </View>
      </View>
      

    );
  }
  


export default app;
 