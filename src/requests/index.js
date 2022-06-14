import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const signUp = async data => {
  const { email, password } = data;
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

const getUserData = async () => {
  const { uid } = auth().currentUser;
  try {
    const response = await firestore()
      .collection('users')
      .where('uid', '==', uid)
      .get();
    const ActiveUser = response.docs.map(docsnap => docsnap.data());
    return ActiveUser;
  } catch (e) {
    throw new Error(e?.message);
  }
};

const getCaloriesData = async () => {
  const { uid } = auth().currentUser;

  let date = new Date().toISOString().slice(0, 10)
  try {
    const res = await firestore()
      .collection('calories')
      .doc(uid + ":" + date)
      .get();
    const cal = res?._data?.cal;
    if (cal) {
      return cal;
    } else {
      return 0;
    }
  } catch (e) {
    throw new Error(e?.message);
  }
};

const addCaloriesData = async data => {
  const { uid } = auth().currentUser;
  // var date = new Date();
  let date = new Date().toISOString().slice(0, 10)
  // var dateToday = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  try {
    const response = await firestore()
      .collection('calories')
      .doc(uid + ":" + date)
      .set({
        cal: data,
        date:date,
        uid:uid
      });
    return response;
  } catch (e) {
    throw new Error(e?.message);
  }
};

const updateProfile = async data => {
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

const signIn = async data => {
  try {
    const signInResponse = await auth().signInWithEmailAndPassword(
      data.email,
      data.password,
    );
    return signInResponse;
  } catch (e) {
    throw new Error(e?.message);
  }
};

export {
  signUp,
  setUserData,
  signIn,
  updateProfile,
  getUserData,
  getCaloriesData,
  addCaloriesData,
};
