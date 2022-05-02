import React,{useState, useEffect} from 'react';
import { Button, View, StatusBar } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './Home';
import Workouts from './Workouts'
import FootStepCount from './FootSteps/FootStepCounter';
import Diets from './diets/Diets';
import Water from './water/Water';
import Chats from './Chat/Chats';
import BMI from './BMI/BMIcalculator';
import database from '@react-native-firebase/database';
import MentalHealth from './MentalHealth/MentalHealth';
import Meditation from './MentalHealth/Meditation';
import Quotes from './MentalHealth/Quotes';
import Profile from '../../Screens/Profile/profile';
import EditProfile from '../../Screens/EditProfile/EditProfile';
import CaloriesCount from '../../components/appScreens/CaloriesCount/CaloriesCount'
import Ranking from './Ranking/Ranking'

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


export default function AppNavigation({initialParams}) {
  useEffect(() => {
    saveUser();
  }, []);
  
  const [userData, setUserData] = useState({
    name: initialParams.user.displayName,
    email: initialParams.user.email,
    profilePic: initialParams.user.photoURL,
    uid: initialParams.user.uid
  })
  
   const saveUser = () =>{
    database().ref('/').child(`users/${userData.uid}`).set(userData)
  }


  return (   
    <Stack.Navigator initialRouteName="Home"  screenOptions={{ 
      headerStyle: { backgroundColor: '#007fcb', },
      headerTitleStyle:{color: 'white', fontSize: 16, fontWeight: 'bold'}, 
      headerTintColor:"white" }}>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Workouts" component={Workouts} options={{headerShown:false}}/>
        <Stack.Screen name="Diets" component={Diets}  options={{headerShown:false}} />
        <Stack.Screen name="Water" component={Water} options={{title: "Daily Drink Target"}} />
        <Stack.Screen name="Footsteps Counter" component={FootStepCount} options={{title: "Footsteps Tracker"}} />
        <Stack.Screen name="Chats" component={Chats} options={{headerShown:false}} initialParams={{'user': initialParams.user}} />
        <Stack.Screen name="BMI" component={BMI} options={{title:'BMI Calculator'}}/>
        <Stack.Screen name="MentalHealth" component={MentalHealth} options={{title:'Mental Health'}}/>
        <Stack.Screen name="Meditation" component={Meditation} options={{title:'Meditation Techniques'}}/>
        <Stack.Screen name="Quotes" component={Quotes} options={{title:'Quotes'}}/>
        <Stack.Screen name="Profile" component={Profile} options={{title:'Profile'}}/>
        <Stack.Screen name="EditProfile" component={EditProfile} options={{title:'Edit Profile'}}/>
        <Stack.Screen name="CaloriesCount" component={CaloriesCount} options={{title:'Calories Count'}}/>
        <Stack.Screen name="Ranking" component={Ranking} options={{title:'Global Ranking'}}/>
        
    </Stack.Navigator>
  );
}