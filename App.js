import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
export default function App() {
  const [modalVisible,setModalVisible]=useState(false);
  const[enteredGoalText,setEnteredGoalText]=useState("");
  const[courseGoals,setCourseGoals]=useState([]);
  function startAddGoal(){
    setModalVisible(true);
  }
  function endAddGoal(){
    setModalVisible(false);
  }
  function goalInputHandler(enteredText){
      setEnteredGoalText(enteredText);
  }
  function addGoalHandler(){
      setCourseGoals(currentCourseGoals=>[
        ...currentCourseGoals,
        { text:enteredGoalText , id: Math.random().toString()},
      ]
      );
      setEnteredGoalText('');
      endAddGoal();
  }
  function deleteGoalHandler(){
    setCourseGoals(currentCourseGoals=>{
      
      return currentCourseGoals.filter((goal)=>goal.id !== id);
    });
  }
 
  return (
    <View style={styles.container}>
      <Button title='add new goal' onPress={startAddGoal} />
      <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.inputcontainer} >
        <TextInput style={styles.textinput}
        placeholder="enter your todo's" 
        onChangeText={goalInputHandler}
        value={enteredGoalText}></TextInput>
        <View style={styles.Buttoncontainer}>
          <View style={styles.Button}>
           <Button title="add todo" onPress={addGoalHandler}></Button>
        </View>
        <View style={styles.Button}>
          <Button title="cancle" onPress={endAddGoal}></Button>
      </View></View>
      </View>

      </Modal>
      <View style={styles.list}>
         <Text style={styles.title}>LIST OF ALL TODO'S</Text>
        <FlatList
        data={courseGoals}
        renderItem={(itemData)=>{
          id = itemData.item.id ;
          return ( 
            <View>
          <Pressable android_ripple={{color:'darkgrey'}} onPress={deleteGoalHandler}><View >
            <Text style={styles.act}>{itemData.item.text}</Text>
          </View></Pressable></View>);
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
  Buttoncontainer:{
    margin:10,
    flexDirection:'row',
   
    
  },
  Button:{
    margin:8,
    
    
   
    
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
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:25,
    borderBottomWidth:1,
    borderBottomColor:'grey',
    
    margin:15
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
    borderRadius:10,
    padding:10

  }
});
