import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChatBot from 'react-native-chatbot';

const Chats = ({ navigation }) => {
  const steps = [
    {
      id: '2',
      message: 'Hi ',
      trigger: '5',
    },
    {
      id: '5',
      message: "what can i help you? Please Select an option below!",
      trigger: '1'
    },

    {
      id: '1',
      options: [
        { value: 1, label: 'want to do daily Excercise Workouts', trigger: '8' },
        { value: 2, label: 'want to get diet Plans ', trigger: '6' },
        { value: 3, label: 'want to sharp my mind', trigger: '13' },
        { value: 4, label: 'want to calculate my BMI', trigger: '15' },
      ],
    },
    {
      id: '6',
      message: 'Okay, Please Select One Option Below',
      trigger: '7',
    },
    {
      id: '7',
      options: [
        { value: 1, label: 'want to loss weight', trigger: '11' },
        { value: 2, label: 'want to gain muscles ', trigger: '17' },
        { value: 3, label: 'want to Bulk ', trigger: '17' },
        { value: 4, label: 'want to get ingredients for Covid protection', trigger: '17' },
        { value: 5, label: ' want to see the sources of micro Nutrients ', trigger: '17' },
        { value: 6, label: 'want to see sources of Macro Nutrients ', trigger: '17' },
      ],
    },
    {
      id: '8',
      message: 'Check These excercises',
      trigger:'9',
    },
    {
      id: '9',
      message: "...",
      trigger:'10'
    },
    {
      id: '10',
      message:() =>{navigation.replace('Workouts') },
      end:true
    },
    { 
      id:'11',
      message:"Check this plan!",
      trigger:'12'
    },
    { 
      id:'12',
      message:() =>{navigation.replace('Diets') },
      end:true
    },
    { 
      id:'13',
      message: "See out this Recommendation",
      trigger:'14'
    },
    { 
      id:'14',
      message: ()=>{navigation.replace('MentalHealth')},
     end:true
    },
  { 
    id:'15',
    message:"Okay, Navigating...",
    trigger:'16'
  },
  { 
    id:'16',
    message:()=>{navigation.replace('BMI')},
    end:true
  },
  {
    id:'17',
    message:"Okay..., navigating",
    trigger:'18'
  },
  {
    id:'18',
    message:()=>{navigation.replace('Diets')},
    end:true
  }
  ];
  return (
    <View style={styles.container}>
      <ChatBot steps={steps} />
    </View>
  )
}

export default Chats

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})