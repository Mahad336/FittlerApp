import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import AppPreLoader from '../../components/appScreens/AppPreLoader';
import { RadioButton } from 'react-native-paper';


const SignUp = ({ navigation }) => {

  const [userType, setUserType] = React.useState('user');
  const [Name, SetName] = useState("");
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");
  const [Password2, SetPassword2] = useState("");
  const [wrongAlert, setWrongAlert] = useState("");
  // const [loader, setLoader] = useState(false)


  const [name, setName] = useState({
    lable: {
      color: 'gray',
      fontSize: 16
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })


  const [email, setEmail] = useState({
    lable: {
      color: 'gray',
      fontSize: 16
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })
  const [password, setPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 16
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })

  const [confirmPassword, setConfirmPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 16
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    },
  })


  const signup = () => {
    // setLoader(true)
    if (Password2 != Password) {
      //   setLoader(false)
      setConfirmPassword({
        lable: { color: 'red', fontSize: 14 },
        container: { borderBottomColor: 'red', borderBottomWidth: 1 }
      })
      setWrongAlert("Confirm Password does not match with Password")
    } else if (Name == "" || Email == "" || Password == "" || Password2 == "") {
      alert("Please all the fill fields")
    } else {
      auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then((res) => {
          //   setLoader(false)
          // res.user.updateProfile({
          //   displayName: Name,
          //   photoURL: userType,
          // })
          setWrongAlert('User account created & signed in!')

        })
        .catch(error => {
          //   setLoader(false)
          if (error.code === 'auth/email-already-in-use') {
            setWrongAlert('That email address is already in use!')
          }

          if (error.code === 'auth/invalid-email') {
            setWrongAlert('That email address is invalid!')
          }
          if (error.code === 'auth/weak-password') {
            setWrongAlert('Week Password, password should be atleast 6 characters!')
          }
          if (error.code === 'auth/network-request-failed') {
            setWrongAlert('Network error, Please check your connection')
          }

          // console.error(error);
        });
    }

  }

  //   if (loader) {
  //     return (
  //       <AppPreLoader />
  //     )
  //   }

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image style={styles.logo} source={require('../../assets/images/logoT.png')} />

        <View style={styles.form}>

          <Input
            inputStyle={{ fontSize: 13 }}
            inputContainerStyle={{ height: 40, ...name.container }}
            placeholder='Input Name'
            label="Name"
            value={Name}
            onChangeText={(t) => SetName(t)}
            labelStyle={name.lable}
            onFocus={() => setName({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setName({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='account-plus'
                size={20}
                color='#007fcb'
              />
            }
          />

{/* <Text style={{ width: '90%', textAlign: 'left', marginLeft: -10, fontWeight: 'bold', color: 'gray', marginBottom: 5 }}>User Type</Text>
          <View style={{ flexDirection: 'row', marginBottom: 40, justifyContent: 'flex-end', width: '93%', borderBottomWidth: 1, borderColor: 'gray' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 30 }}>
              <Text style={{ color: 'black', fontSize: 13 }}>User</Text>
              <RadioButton
                color="#007fcb"
                value="user"
                status={userType === 'user' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('user')}
              />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ color: 'black', fontSize: 13 }}>Expert</Text>
              <RadioButton
                color="#007fcb"
                value="expert"
                status={userType === 'expert' ? 'checked' : 'unchecked'}
                onPress={() => setUserType('expert')}
              />
            </View>
          </View> */}





          <Input
            inputStyle={{ fontSize: 13 }}
            inputContainerStyle={{ height: 40, ...email.container }}
            placeholder='Input Email'
            value={Email}
            label="Email"
            labelStyle={email.lable}
            onChangeText={(t) => SetEmail(t)}
            onFocus={() => setEmail({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setEmail({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='email'
                size={24}
                color='#007fcb'
              />
            }
          />


          <Input
            inputStyle={{ fontSize: 13, }}
            inputContainerStyle={{ height: 40, ...password.container }}
            placeholder='Input Password'
            label="Password"
            value={Password}
            secureTextEntry
            labelStyle={password.lable}
            onChangeText={(t) => SetPassword(t)}
            onFocus={() => setPassword({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setPassword({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='lock'
                size={24}
                color='#007fcb'
              />
            }
          />

          <Input
            inputStyle={{ fontSize: 13, }}
            inputContainerStyle={{ height: 40, ...confirmPassword.container }}
            placeholder='Confirm Your Password'
            label="Confirm Password"
            value={Password2}
            secureTextEntry
            labelStyle={confirmPassword.lable}
            onChangeText={(t) => SetPassword2(t)}
            onFocus={() => setConfirmPassword({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setConfirmPassword({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={{ ...styles.inputContainer, marginBottom: 10 }}
            rightIcon={
              <Icon
                name='lock-check'
                size={24}
                color='#007fcb'
              />
            }
          />
          <Text style={{ color: 'red', fontSize: 10, marginBottom: 20 }}>{wrongAlert}</Text>

        </View>




        <TouchableOpacity
          onPress={() => signup()}
          style={styles.btn}>
          <Text style={{ color: "#fff", fontSize: 18, fontFamily: 'Jameel Noori Nastaleeq', }}> Register </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'center', width: '80%', margin: 30 }}>
          <Text style={{ color: 'rgb(60, 60, 60)', fontSize: 17, fontFamily: 'Jameel Noori Nastaleeq' }}>Already Have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.btnBelow}> Login </Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
};




const styles = StyleSheet.create({

  main: {
    alignItems: "center"
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%',
    alignItems: 'center'
  },
  lable: {
    color: 'red'
  },
  inputContainer: {
    // backgroundColor: 'rgb(230, 230, 230)',
    height: 60,
    marginBottom: 40,
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
  btnBelow: {
    color: '#007fcb',
    fontSize: 16,
    fontFamily: 'Jameel Noori Nastaleeq',
    textDecorationLine: 'underline',
  }
});

export default SignUp;
