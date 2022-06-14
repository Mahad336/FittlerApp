import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {loginRequest} from '../../redux/action';
import {useDispatch} from 'react-redux';
import Input from '../../components/input';
import {RadioButton} from 'react-native-paper';


const SignUp = ({navigation}) => {
  const [Gender, setGender] = React.useState('male');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [goalWeight, setGoalWeight] = useState('');
  const [age, setAge] = useState('');

  

  const dispatch = useDispatch()
  const signup = () => {
    if (password2 != password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Confirm Password does not match with Password',
        visibilityTime: 3000,
      });
    } else if (
      name == '' ||
      email == '' ||
      password == '' ||
      password2 == '' ||
      feet == '' ||
      inches == '' ||
      currentWeight == '' ||
      goalWeight == '' ||
      age == ''
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please fill all fields',
        visibilityTime: 3000,
      });
    } else {
      dispatch(
        loginRequest({
          postData: {
            email: email,
            password: password,
            Gender,
            name,
            feet,
            inches,
            currentWeight,
            goalWeight,
            age,
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
            placeholder="Input Name"
            lable="Name"
            setValue={setName}
            iconName="account-plus"
            value={name}
          />

          {/* Gender Selection input */}
          <Text
            style={{
              width: '90%',
              textAlign: 'left',
              marginLeft: -10,
              fontWeight: 'bold',
              color: 'gray',
              marginBottom: 5,
            }}>
            What is Your Gender
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 40,
              justifyContent: 'flex-end',
              width: '93%',
              borderBottomWidth: 1,
              borderColor: 'gray',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 30,
              }}>
              <Text style={{color: 'black', fontSize: 13}}>Male</Text>
              <RadioButton
                color="#007fcb"
                value="male"
                status={Gender === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setGender('male')}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 13}}>Female</Text>
              <RadioButton
                color="#007fcb"
                value="female"
                status={Gender === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setGender('female')}
              />
            </View>
          </View>

          <Input
            placeholder="Input Email"
            lable="Email"
            setValue={setEmail}
            iconName="email"
            value={email}
            keyboardType="email-address"
          />

          <Input
            placeholder="Input Password"
            lable="Password"
            setValue={setPassword}
            iconName="lock"
            value={password}
            secureTextEntry={true}
          />

          <Input
            placeholder="Confirm Your Password"
            lable="Confirm Password"
            setValue={setPassword2}
            iconName="lock"
            value={password2}
            secureTextEntry={true}
          />

          <View style={{flexDirection: 'row'}}>
            <Input
              placeholder="Feets"
              lable="Enter Your Height"
              setValue={setFeet}
              value={feet}
              width="50%"
              keyboardType='numeric'
            />
            <Input
              placeholder="Inches"
              lable="Inches"
              setValue={setInches}
              iconName="human-male-height"
              value={inches}
              width="50%"
              keyboardType='numeric'
            />
          </View>

          <Input
            placeholder="weight"
            lable="What is your Current Weight in KG"
            setValue={setCurrentWeight}
            iconName="weight"
            value={currentWeight}
            keyboardType="numeric"
          />

          <Input
            placeholder="weight"
            lable="What is your Goal Weight in KG"
            setValue={setGoalWeight}
            iconName="weight"
            value={goalWeight}
            keyboardType="numeric"
          />

          <Input
            placeholder="age"
            lable="What is your Age in Years"
            setValue={setAge}
            iconName="human-queue"
            value={age}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity onPress={() => signup()} style={styles.btn}>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Jameel Noori Nastaleeq',
            }}>
            {' '}
            Register{' '}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '80%',
            margin: 30,
          }}>
          <Text
            style={{
              color: 'rgb(60, 60, 60)',
              fontSize: 17,
              fontFamily: 'Jameel Noori Nastaleeq',
            }}>
            Already Have an Account?{' '}
          </Text>
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
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%',
    alignItems: 'center',
  },
  lable: {
    color: 'red',
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
    elevation: 5,
  },
  btnBelow: {
    color: '#007fcb',
    fontSize: 16,
    fontFamily: 'Jameel Noori Nastaleeq',
    textDecorationLine: 'underline',
  },
});

export default SignUp;
