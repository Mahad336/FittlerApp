import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  EditProfileBusinessIcon,
  EditProfileCircle,
  ProfileBackIcon,
  EditProfileEmailIcon,
  EditProfilePhoneIcon,
  EditProfileAddressIcon,
  ProfileDotsIcon,
  EditProfileBusinessHighLightIcon,
  EditProfileEmailHighLightIcon,
  EditProfilePhoneHighLightIcon,
  EditProfileAddressHighLightIcon,
} from '../../Svgs/Profile/ProfileVectors';
import Button from '../../components/Button/button';
import {FormInput} from '../../utilis/Text_input';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import ImagePicker from 'react-native-image-crop-picker';
import {CrossIcon} from '../../components/Svgs/Icons';
import PickerButton from '../../components/Button/pickerButton';

import Modal from 'react-native-modal';
const EditProfile = () => {
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAfocus] = useState(false);
  const [text, setText] = useState('Edit Profile');
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  const takePhotoFromCamera = () => {
    setVisible(false);
    ImagePicker.openCamera({
      width: 96,
      height: 96,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setText('Edit Profile');
    });
  };
  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openPicker({
      width: 96,
      height: 96,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      setText('Edit Profile');
    });
  };

  //  const onChangeHandler = async () => {
  //   //  navigation.navigate('accounttype');
  //    let body = {
  //      name: Nfocus,
  //      email: Efocus,
  //      Phone: Pfocus,
  //      Address : Afocus
  //    };
  //    const res = await Update_Details(body);
  //    console.log(res);
  //  };
  return (
    <SafeAreaView style={styles.container}>
    

      <ScrollView>
        <View style={styles.subContainer}>
          {image === '' ? (
            <View
              style={{
                overflow: 'hidden',
                width: 100,
                height: 100,
                borderRadius: 100,
              }}>
              <EditProfileCircle style={styles.circle} />
            </View>
          ) : (
            <>
              <View
                style={{
                  overflow: 'hidden',
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                }}>
                <Image source={{uri: image}} style={styles.circle} />
              </View>
            </>
          )}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.addLogo}>{text}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Business Name</Text>
          <Text style={styles.maxNumber}>Max 50 character (0/50)</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Nfocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Nfocus ? (
            <EditProfileBusinessIcon style={styles.userIcon} />
          ) : (
            <EditProfileBusinessHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setNFocus(text);
            }}
            style={{
              height: 50,
              borderRadius: 10,
              fontSize: 15,
              color: 'black',
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Email</Text>
          <TouchableOpacity>
            <Text style={styles.verifyEmail}>Verify Email</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Efocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Efocus ? (
            <EditProfileEmailIcon style={styles.userIcon} />
          ) : (
            <EditProfileEmailHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setEFocus(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Phone Number</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Pfocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Pfocus ? (
            <EditProfilePhoneIcon style={styles.userIcon} />
          ) : (
            <EditProfilePhoneHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setPFocus(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Address</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Afocus ? '#000' : '#F2F3F5'},
          ]}>
          {!Afocus ? (
            <EditProfileAddressIcon style={styles.userIcon} />
          ) : (
            <EditProfileAddressHighLightIcon style={styles.userIcon} />
          )}
          <FormInput
            placeholder={'Placeholder text'}
            placeholderTextColor="#798293"
            onChangeText={text => setAfocus(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>
        <Modal isVisible={visible}>
          <View style={styles.ModalView}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.modalIcon}>
              <CrossIcon style={styles.modalIcon} />
            </TouchableOpacity>

            <Text style={{color: '#08101F'}}> Click your desired Button </Text>
            <View style={styles.ModalBtnView}>
              <PickerButton
                text={'Open camera'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromCamera}
              />

              <PickerButton
                text={'Open Gallery'}
                color={'#08101F'}
                fontSize={15}
                height={45}
                width={'40%'}
                marginTop={50}
                backgroundColor="#fff"
                borderWidth={1}
                borderColor="#9BA2AE"
                marginBottom={10}
                onPress={takePhotoFromGallery}
              />
            </View>
          </View>
        </Modal>
        <View>
          <Button
            text={'Update Detail'}
            color={'#fff'}
            fontSize={15}
            height={50}
            width={'80%'}
            marginTop={'60%'}
            marginBottom={10}
            backgroundColor={
              Nfocus && Efocus && Pfocus && Afocus && image
                ? '#4AB5E3'
                : '#9BA2AE'
            }
            disabled={
              Nfocus && Efocus && Pfocus && Afocus && image ? false : true
            }
            // onPress={onChangeHandler}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
