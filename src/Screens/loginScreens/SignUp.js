import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Input} from 'react-native-elements';
import Toast from 'react-native-toast-message';
import {loginRequest} from '../../redux/action';
import {useDispatch} from 'react-redux';

import {RadioButton} from 'react-native-paper';

const SignUp = ({navigation}) => {
  const [Gender, setGender] = React.useState('male');
  const [Name, SetName] = useState('');
  const [Email, SetEmail] = useState('');
  const [Password, SetPassword] = useState('');
  const [Password2, SetPassword2] = useState('');
  const [wrongAlert, setWrongAlert] = useState('');
  const [loader, setLoader] = useState(false);
  const [Height, SetHeight] = useState('');
  const [CurrentWeight, SetCurrentWeight] = useState('');
  const [GoalWeight, SetGoalWeight] = useState('');
  const [Age, SetAge] = useState('');

  const [name, setName] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

  const [email, setEmail] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [password, setPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

  const [confirmPassword, setConfirmPassword] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [height, setHeight] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [currentWeight, setCurrentWeight] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [goalWeight, setGoalWeight] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });
  const [age, setAge] = useState({
    lable: {
      color: 'gray',
      fontSize: 16,
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1,
    },
  });

  const dispatch = useDispatch()
  const signup = () => {
    if (Password2 != Password) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Confirm Password does not match with Password',
        visibilityTime: 3000,
      });
    } else if (
      Name == '' ||
      Email == '' ||
      Password == '' ||
      Password2 == '' ||
      Height == '' ||
      CurrentWeight == '' ||
      GoalWeight == '' ||
      Age == ''
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
            email: Email,
            password: Password,
            Gender,
            Name,
            Height,
            CurrentWeight,
            GoalWeight,
            Age,
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
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...name.container}}
            placeholder="Input Name"
            label="Name"
            value={Name}
            onChangeText={t => SetName(t)}
            labelStyle={name.lable}
            onFocus={() =>
              setName({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setName({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={styles.inputContainer}
            rightIcon={<Icon name="account-plus" size={20} color="#007fcb" />}
          />

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
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...email.container}}
            placeholder="Input Email"
            value={Email}
            label="Email"
            labelStyle={email.lable}
            onChangeText={t => SetEmail(t)}
            onFocus={() =>
              setEmail({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setEmail({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={styles.inputContainer}
            rightIcon={<Icon name="email" size={24} color="#007fcb" />}
          />
          <Text style={{color: 'red', fontSize: 10, marginBottom: 10}}>
            {wrongAlert}
          </Text>

          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...password.container}}
            placeholder="Input Password"
            label="Password"
            value={Password}
            secureTextEntry
            labelStyle={password.lable}
            onChangeText={t => SetPassword(t)}
            onFocus={() =>
              setPassword({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setPassword({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={styles.inputContainer}
            rightIcon={<Icon name="lock" size={24} color="#007fcb" />}
          />

          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...confirmPassword.container}}
            placeholder="Confirm Your Password"
            label="Confirm Password"
            value={Password2}
            secureTextEntry
            labelStyle={confirmPassword.lable}
            onChangeText={t => SetPassword2(t)}
            onFocus={() =>
              setConfirmPassword({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setConfirmPassword({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={{...styles.inputContainer, marginBottom: 10}}
            rightIcon={<Icon name="lock-check" size={24} color="#007fcb" />}
          />

          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...height.container}}
            placeholder="5'9"
            label="What is Your Height"
            value={Height}
            labelStyle={height.lable}
            onChangeText={t => SetHeight(t)}
            onFocus={() =>
              setHeight({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setHeight({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={{...styles.inputContainer, marginBottom: 10}}
            rightIcon={
              <Icon name="human-male-height" size={24} color="#007fcb" />
            }
          />
          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...currentWeight.container}}
            placeholder="weight"
            label="What is your Current Weight in KG"
            value={CurrentWeight}
            labelStyle={currentWeight.lable}
            onChangeText={t => SetCurrentWeight(t)}
            onFocus={() =>
              setCurrentWeight({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setCurrentWeight({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={{...styles.inputContainer, marginBottom: 10}}
            rightIcon={<FontAwesome5 name="weight" size={24} color="#007fcb" />}
          />
          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...goalWeight.container}}
            placeholder="weight"
            label="What is your Goal Weight in KG"
            value={GoalWeight}
            labelStyle={goalWeight.lable}
            onChangeText={t => SetGoalWeight(t)}
            onFocus={() =>
              setGoalWeight({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setGoalWeight({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={{...styles.inputContainer, marginBottom: 10}}
            rightIcon={<FontAwesome5 name="weight" size={24} color="#007fcb" />}
          />
          <Input
            inputStyle={{fontSize: 13}}
            inputContainerStyle={{height: 40, ...age.container}}
            placeholder="65..."
            label="What is your Age in Years"
            value={Age}
            labelStyle={age.lable}
            onChangeText={t => SetAge(t)}
            onFocus={() =>
              setAge({
                lable: {color: '#007fcb', fontSize: 14},
                container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
              })
            }
            onBlur={() =>
              setAge({
                lable: {color: 'gray', fontSize: 14},
                container: {borderBottomColor: 'gray', borderBottomWidth: 1},
              })
            }
            containerStyle={{...styles.inputContainer, marginBottom: 10}}
            rightIcon={<Icon name="human-queue" size={24} color="#007fcb" />}
          />

          {/* <TextInput
            multiline={true} 
            numberOfLines={4}
            style={{backgroundColor:'red',width:'90%',textAlignVertical: 'top',}}
          /> */}
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
