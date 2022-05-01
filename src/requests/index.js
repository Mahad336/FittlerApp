import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signUp = async data => {
  const {email, password} = data;
  try {
    const loginResponse = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return loginResponse;
  } catch (e) {
    throw new Error(e?.message);
  }
};

const setUserData = async data => {
  console.log('dataaaa', data)
  try {
    const response = await firestore()
      .collection('users')
      .doc(data.uid)
      .set(data);
    return response;
  } catch (e) {
    throw new Error(e?.message);
  }
};

export {signUp, setUserData};