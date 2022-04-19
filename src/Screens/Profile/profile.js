import React, {useRef} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './style';
import {
  ProfileCameraIcon,
  ProfileCardIcon,
  ProfileChangePasswordIcon,
  ProfileEmailIcon,
  ProfileLogoutIcon,
  ProfileNotificationIcon,
  ProfileSubscriptionIcon,
  ProfileWalletIcon,
  ProfileBackIcon,
  ProfileForwardIcon,
  ProfileDotsIcon,
} from '../../Svgs/Profile/ProfileVectors';
import RBSheet from 'react-native-raw-bottom-sheet';
import LogoutButtomSheet from '../../components/LogoutButtomSheet/LogoutButtomSheet';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet.current.open();
  };
  return (
    <SafeAreaView style={styles.container}>
      


        <View>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require('./images/profile.png')}
            />
            <ProfileCameraIcon style={styles.cameraIcon} />
            <Text style={styles.profileName}>Mrh Raju</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('EditProfile')}
              style={styles.editProfile}>
              <ProfileEmailIcon style={styles.emailIcon} />
              <Text style={styles.profileEdit}>Edit Profile</Text>
            </TouchableOpacity>
            <Text style={styles.email}>hello:abcdefg@gmail.com</Text>
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

        <TouchableOpacity style={styles.logout} onPress={rbsheetOpen}>
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
          </TouchableOpacity>
     
    </SafeAreaView>
  );
};

export default Profile;
