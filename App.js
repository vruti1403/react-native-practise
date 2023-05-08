import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[enteredGoalText,setEnteredGoalText]=useState("");
  const[courseGoals,setCourseGoals]=useState([]);
  function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
      setCourseGoals(currentCourseGoals=>[
        ...currentCourseGoals,
        { text:enteredGoalText , id: Math.random().toString()},
      ]);
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer} >
        <TextInput style={styles.textinput}placeholder="enter your todo's" onChangeText={goalInputHandler}></TextInput>
        <Button title="add todo" onPress={addGoalHandler}></Button>
      </View>
      <View style={styles.list}>
         <Text style={styles.title}>LIST OF ALL TODO'S</Text>
        <FlatList
        data={courseGoals}
        renderItem={(itemData)=>{
          return(
            <View>
              <Text style={styles.act}>{itemData.item.text}</Text>
            </View>
          );
        }}
        keyExtractor={(item,index)=>{
          return item.id;
        }}
        alwaysBounceVertical={false}
        
        />
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize:25,
    color:'dodgerblue',
    fontFamily:'serif'
  },
  act:{
    fontSize:20,
    color:'darkblue',
    margin:8,
    padding:8,
    borderRadius:10,
    backgroundColor:'skyblue',

  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    padding:20,
    margin:5
  },
  inputcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingBottom:25,
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  list:{
    flex:3,
    marginTop:15
  },
  textinput:{
    borderWidth:1,
    borderColor:'grey',
    padding:10,
    width:'75%',
    marginRight:10,
    padding:10

  }
});
