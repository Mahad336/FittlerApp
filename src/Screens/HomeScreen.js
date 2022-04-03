import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

// import { useSelector, useDispatch } from 'react-redux';
// import {increment, decrement} from '../Redux/action/index'

// import {getUserFetch} from '../Redux/action/index'  // for saga
// import { getUserRequest } from '../Redux/thunk';  //for thunk


const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.main}>
      <Text>HomeScreen </Text>
      <Button  title="Logout" onPress={()=>{
          auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      }} />
      <Button  title="Goto" onPress={()=>{
        navigation.navigate('EditProfile')
      }} />
      

    </View>
  )
}

export default HomeScreen;




const styles = StyleSheet.create({
    main:{
        flex: 1,
    }
})