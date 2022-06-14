import 'react-native-gesture-handler';
import {StyleSheet, Modal, Text, View, Button, TextInput} from 'react-native';
import React, {useState, useEffect, Component} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './Redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import AppPreLoader from './src/components/appScreens/AppPreLoader';
import Toast from 'react-native-toast-message';

import MainScreen from './src/Screens/loginScreens/MainScreen';
import SignIn from './src/Screens/loginScreens/SignIn';
import SignUp from './src/Screens/loginScreens/SignUp';
import ForgatPassword from './src/Screens/loginScreens/ForgatPassword';
import HomeScreen from './src/Screens/HomeScreen';
import AppNavigation from './src/components/appScreens/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import AppIntro from './src/Screens/loginScreens/AppIntro';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import BmiProvider from './src/global/BmiContext';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Login() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const loader = useSelector(state => state.testReducer.appLoader);

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

  // if (loader) {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="AppPreLoader"
  //         component={AppPreLoader}
  //         options={{headerShown: false}}
  //       />
  //     </Stack.Navigator>
  //   );
  // }

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="intro"
          component={AppIntro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgatPassword"
          component={ForgatPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return <AppNavigation initialParams={{user: user}} />;
}

const Navigation = () => {
  const loader = useSelector(state => state.testReducer.appLoader);
  return (
    <>
      <NavigationContainer>
        <Login />
      </NavigationContainer>

      <Toast ref={Toast.setRef} />
      <Modal visible={loader} transparent>
        <AppPreLoader />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 30,
    fontFamily: 'Jameel Noori Nastaleeq',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BmiProvider>
          <Navigation />
        </BmiProvider>
      </PersistGate>
    </Provider>
  );
};
export default App;
