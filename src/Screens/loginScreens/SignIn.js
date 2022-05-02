import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from '../../components/input';
import {signInRequest} from '../../redux/action';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import storage from '@react-native-firebase/storage';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const signin = () => {
    if (
      email === '' ||
      email === undefined ||
      email === null ||
      password === '' ||
      password === null ||
      password === undefined
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'please fill All Information',
        visibilityTime: 3000,
      });
    } else {
      dispatch(
        signInRequest({
          postData: {
            email,
            password,
          },
        }),
      );
    }
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logoT.png')}
        />

        <View style={styles.form}>
          <Input
            placeholder="Input Email"
            lable="Email"
            setValue={setEmail}
            value={email}
            iconName="email"
          />

          <Input
            placeholder="Input Password"
            lable="Password"
            setValue={setPassword}
            value={password}
            secureTextEntry
            iconName="lock"
          />
        </View>

        <TouchableOpacity onPress={() => signin()} style={styles.btn}>
          <Text
            style={{
              color: '#fff',
              fontFamily: 'Jameel Noori Nastaleeq',
              fontSize: 18,
            }}>
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            margin: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgatPassword')}>
            <Text style={styles.btnBelow}>Forgot Password</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.btnBelow}>Register Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%',
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
    elevation: 5,
  },
  btnBelow: {
    color: '#007fcb',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontFamily: 'Jameel Noori Nastaleeq',
  },
});

export default SignIn;
