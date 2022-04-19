import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {CrossIcon, DeleteIcon, EditIcon} from '../Svgs/Icons';
import {ProfileDotsIcon} from '../../Svgs/Profile/ProfileVectors';
import Button from '../Button/button';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const LogoutButtomSheet= ({onPress,cancel}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <CrossIcon style={styles.icon} onPress={onPress} />
        <Text style={styles.text}>Logout</Text>
        <ProfileDotsIcon style={styles.dotsIcon} />
      </View>
      <>
        <View style={styles.border}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 20,
                  color: '#08101F',
                  marginHorizontal: 5,
                  fontWeight: '600',
                }}>
                Logout from gymble
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{fontSize: 15, color: '#08101F', marginHorizontal: 20}}>
              Sorry to see you leave. Are you sure you would like to logout your
              Fittler account?
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <View>
            <Button
              text={'Logout'}
              color={'#4AB5E3'}
              fontSize={15}
              height={50}
              width={160}
              borderWidth={1}
              marginTop={10}
              backgroundColor={'#fff'}
              marginBottom={10}
              onPress={() =>   auth()
                .signOut()
                .then(() => console.log('User signed out!'))}
            />
          </View>
          <View>
            <Button
              text={'Cancel'}
              color={'#FFF'}
              fontSize={15}
              height={50}
              width={160}
              borderWidth={1}
              marginTop={10}
              backgroundColor={'#4AB5E3'}
              marginBottom={10}
              onPress={cancel}
            />
          </View>
        </View>
      </>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  subContainer: {
    height: 30,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginHorizontal: 20,
  },
  backIcon: {
    width: 15,
    height: 18,
    marginHorizontal: 10,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  dotsIcon: {
    width: 0,
    height: 0,
    marginHorizontal: 10,
  },
  border: {
    marginTop: 15,
    marginHorizontal: 15,
    height: 50,
  },
  icon: {height: 18, width: 16},
});
export default LogoutButtomSheet;
