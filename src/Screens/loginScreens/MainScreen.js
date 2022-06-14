import React, {useState} from 'react';
import {StackNavigator , useNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, StatusBar, ImagePropTypes } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#007fcb" />

      <Image
        style={styles.logo}
        source={require('../../assets/images/logoT.png')}
      />

      <View style={styles.login}>
        <TouchableOpacity
          style={styles.loginText}
          onPress={() => navigation.navigate('SignIn')}> 
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user-lock" size={15} color="#007fcb" />
            <Text style={styles.txt}> Login</Text>
          </View>
          <Icon name="arrow-right" size={20} color="#007fcb" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginText}
          onPress={() => navigation.navigate('SignUp')}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="user-lock" size={15} color="#007fcb" />
            <Text style={styles.txt}> Register</Text>
          </View>
          <Icon name="arrow-right" size={20} color="#007fcb" />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain'

  },

  login: {
    width: '80%',
    height: 250,
    borderRadius: 15,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    flexDirection: 'row',
    backgroundColor: 'rgb(230, 230, 230)',
    padding: 10,
    paddingRight: 20,
    borderRadius: 30,
    width: '80%',
    justifyContent: 'space-between',
    margin: 5,
    alignItems: 'center',
  },
  txt:{
    fontFamily:'Jameel Noori Nastaleeq',
    color: '#000', 
    marginLeft: 10, 
    fontSize: 18,
    
  }
});

export default LoginScreen;