import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {
  ProfileCameraIcon,
  ProfileEmailIcon,
  ProfileLogoutIcon,
} from '../../Svgs/Profile/ProfileVectors';
import RBSheet from 'react-native-raw-bottom-sheet';
import LogoutButtomSheet from '../../components/LogoutButtomSheet/LogoutButtomSheet';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const Profile = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const [user, setUser] = useState([{ "age": "loading...", "currentWeight": "loading...", "email": "loading...", "gender": "loading...", "goalWeight": "loading...", "height": "loading...", "name": "loading...", }]);


  const getUser = async () => {
    const { uid } = auth().currentUser;
    console.log(uid)

    try {

      const querySnap = await firestore().collection('users').where('uid', '==', uid).get();
      const ActiveUser = querySnap.docs
        .map((docsnap) => docsnap.data());
      setUser(ActiveUser)
      console.log(user)


    } catch {
      alert("Please Check Your Internet Connection")
      //do whatever
    }
  };

  // Get user on mount
  useEffect(() => {


    getUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>



      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('./images/profile.png')}
          />
          <ProfileCameraIcon style={styles.cameraIcon} />
          <Text style={styles.profileName}>{user[0].name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile',{data:user})}
            style={styles.editProfile}>
            <ProfileEmailIcon style={styles.emailIcon} />
            <Text style={styles.profileEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={styles.email}>{user[0].email}</Text>
        </View>

        <View style={styles.mainview}>
          <ScrollView>
            <Text style={styles.attributeheading}>Gender</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{user[0].gender}</Text>
            </View>
            <Text style={styles.attributeheading}>age </Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{user[0].age}</Text>
            </View>
            <Text style={styles.attributeheading}>current Weight in KG's</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{user[0].currentWeight}</Text>
            </View>
            <Text style={styles.attributeheading}>goal Weight in KG's</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{user[0].goalWeight}</Text>
            </View>
            <Text style={styles.attributeheading}>height</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{user[0].height}</Text>
            </View>
          </ScrollView>
        </View>




      </View>
      <View>
        <RBSheet
          ref={refRBSheet}
          keyboardAvoidingViewEnabled={true}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: { backgroundColor: 'rgba(0,0,0,0.4)' },
            draggableIcon: { backgroundColor: '#D7DADF' },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: '#FFFFFF',
              height: 273,
            },
          }}>
          <LogoutButtomSheet
            onPress={() => refRBSheet.current.close()}
            cancel={() => refRBSheet.current.close()}
          />
        </RBSheet>
      </View>

      <TouchableOpacity style={styles.logout} onPress={rbsheetOpen}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <ProfileLogoutIcon style={styles.wallet} />
          <Text style={{ color: '#798293', fontSize: 15 }}>Logout</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default Profile;
