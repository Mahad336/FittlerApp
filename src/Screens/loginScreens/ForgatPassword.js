import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import AppPreLoader from '../AppPreLoader';

const ForgatPassword = ({ navigation}) => {
  
  const [Email, SetEmail] = useState();
  const [msg, setMsg] = useState();
  const [color, setColor]= useState();
  const [loader, setLoader] = useState(false)

  const [emailStyle, setEmailStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })
  


  const signin = () => {
    setLoader(true)
    if(Email===""||Email===undefined||Email===null){
      alert('Please Enter Email')
      setLoader(false)
    }else{
      auth().sendPasswordResetEmail(Email)
      .then(() => {
        setLoader(false)
        // console.log();
        setMsg('Email sent successfully\nPlese check your email and click the link')
        setColor('green')
    })
      .catch(error => {
        setLoader(false)
        if (error.code === 'auth/user-not-found') {
          setMsg("There is no user record corresponding to this email")
        }
        if (error.code === 'auth/invalid-email') {
          setMsg('That email address is invalid!')
        }
        setColor('red')
        // console.error(error);
      });
    }
  
  }
    if(loader){
        return(
        <AppPreLoader/>
        )
    }

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image style={styles.logo} source={require('../../assets/images/logoT.png')} />

        <View style={styles.form}>

          <Input
            inputStyle={{ fontSize: 13 }}
            inputContainerStyle={{ height: 40, ...emailStyle.container }}
            placeholder='Input Email'
            label="Email"
            labelStyle={emailStyle.lable}
            onChangeText={(t) => SetEmail(t)}
            onFocus={() => setEmailStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setEmailStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='email'
                size={24}
                color='#007fcb'
              />
            }
          />


          
          <Text style={{ color: color, fontSize: 12, marginBottom: 30, marginLeft:10 }}>{msg}</Text>
        </View>

        <TouchableOpacity
          onPress={()=>signin()}
          style={styles.btn}>
          <Text style={{ color: "#fff",fontFamily:'Jameel Noori Nastaleeq',fontSize: 18}}>Send Mail </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '80%', margin: 30 }}>
          <Text style={{ color: 'rgb(60, 60, 60)', fontFamily: 'Jameel Noori Nastaleeq',fontSize: 16}}> Return to</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontFamily: 'Jameel Noori Nastaleeq', color: '#007fcb',fontSize: 16}}> Login </Text>
          </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  main: {
    alignItems: "center",

  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%'
  },

  inputContainer: {
    height: 60,
    marginBottom: 20,
  },
  btn: {
    color: '#fff',
    backgroundColor: '#469433',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 20,
    elevation: 5
  },
 
});

export default ForgatPassword;
