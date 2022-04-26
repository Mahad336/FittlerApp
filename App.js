import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

import MainScreen from './src/Screens/loginScreens/MainScreen'
import SignIn from './src/Screens/loginScreens/SignIn';
import SignUp from './src/Screens/loginScreens/SignUp';
import ForgatPassword from './src/Screens/loginScreens/ForgatPassword'
import HomeScreen from './src/Screens/HomeScreen';
import AppNavigation from './src/components/appScreens/AppNavigation'
import SplashScreen from 'react-native-splash-screen';
import AppIntro from './src/Screens/loginScreens/AppIntro'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();


  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }


  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={AppIntro}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgatPassword" component={ForgatPassword} options={{ headerShown: false }} />

      </Stack.Navigator>
    )
  }

  return (
    <AppNavigation initialParams={{ 'user': user }} />
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Login />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontFamily: 'Jameel Noori Nastaleeq'
  }
});
