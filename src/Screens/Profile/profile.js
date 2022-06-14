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
import { useSelector } from 'react-redux';
import img from './images/profile.png'

const Profile = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  const [bmi, setBmi] = useState('calculating...')
  const [iw,setiw] = useState('calculating...')

  const userState = useSelector(state => state.profileReducer.user)

  const bmiCal = () =>{
    var ft = parseInt(userState.feet) * 0.3048;
    var ich = parseInt(userState.inches) * 0.0254;
    var mt = ft + ich;
    var mtSq = mt * mt;
    var BMI = parseInt(userState?.currentWeight) / mtSq;
    setBmi(BMI.toFixed(1));
  }
  const IdealWeightCal = () =>{
    var ft = parseInt(userState.feet) * 30.48;
    var ich = parseInt(userState.inches) * 2.54;
    var mt = ft + ich;
    mt = mt/100 
    var iw = mt;
    var iwf = iw*44
    setiw(iwf.toFixed(1))
  }

// Get user on mount
  useEffect(() => {
    bmiCal();
    IdealWeightCal();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            // source={require('./images/profile.png')}
            source={userState?.img?{uri: userState.img}: img}
          />
          <ProfileCameraIcon style={styles.cameraIcon} />
          <Text style={styles.profileName}>{userState?.name}</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('EditProfile')}
            style={styles.editProfile}>
            <ProfileEmailIcon style={styles.emailIcon} />
            <Text style={styles.profileEdit}>Edit Profile</Text>
          </TouchableOpacity>
          <Text style={styles.email}>{userState?.email}</Text>
        </View>
        <View style={styles.mainview}>
          <ScrollView>
            <Text style={styles.attributeheading}>BMI</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>
                {bmi}
                {'  '}(
                 {bmi <= 18.4
                  ? 'You are under weight'
                  : bmi >= 18.5 && bmi <= 24.9
                  ? 'Your have Healthy Weight'
                  : bmi >= 25
                  ? 'Your are over weight'
                  : null}
                  )
              </Text>
            </View>

            <Text style={styles.attributeheading}>Ideal Weight</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>
                {iw} Kg
                </Text>
            </View>
            <Text style={styles.attributeheading}>Gender</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{userState?.gender}</Text>
            </View>
            <Text style={styles.attributeheading}>Age </Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{userState?.age}</Text>
            </View>
            <Text style={styles.attributeheading}>Current Weight(KG's)</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>
                {userState?.currentWeight}
              </Text>
            </View>
            <Text style={styles.attributeheading}>Goal Weight(KG's)</Text>
            <View style={styles.fieldview}>
              <Text style={styles.attributevalue}>{userState?.goalWeight}</Text>
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
            wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
            draggableIcon: {backgroundColor: '#D7DADF'},
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

      {/* <TouchableOpacity style={styles.logout} onPress={rbsheetOpen}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
            marginBottom: 10,
          }}>
          <ProfileLogoutIcon style={styles.wallet} />
          <Text style={{color: '#798293', fontSize: 15}}>Logout</Text>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Profile;
