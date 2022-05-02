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
import storage from '@react-native-firebase/storage'
import firestore from '@react-native-firebase/firestore'
import Modal from 'react-native-modal';
const EditProfile = ({route}) => {
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAfocus] = useState(false);

  const [text, setText] = useState('Edit Profile');
  const [Age,setAge]=useState(route.params.data[0].age);
  const [Height,setHeight]=useState(route.params.data[0].height);
  const [CurrentWeight,setCurrentWeight]=useState(route.params.data[0].currentWeight);
  const [GoalWeight,setGoalWeight]=useState(route.params.data[0].goalWeight);
  

  const [userName,setUserName]=useState(route.params.data[0].name);
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const [ImageURL,setImageURL] = useState()
  const navigation = useNavigation();

  const takePhotoFromCamera = () => {
    setVisible(false);
    ImagePicker.openCamera({
      width: 96,
      height: 96,
      cropping: true,
    }).then(image => {
      setImage(image.path);
      const storageRef = storage().ref().child(`/userprofile/${Date.now()}`)
            
      const uploadTask = storageRef.putFile(String(image.path))
      
      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == 100) alert('image uploaded')
      }, (error) => {
        // Handle unsuccessful uploads
        alert('error uploading image')
      }, () => {
        storageRef.getDownloadURL().then((downloadURL) => {
          setImageURL(downloadURL)
        });
      });
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

      const storageRef = storage().ref().child(`/userprofile/${Date.now()}`)
            
          const uploadTask = storageRef.putFile(String(image.path))
          
          uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress == 100) alert('image uploaded')
          }, (error) => {
            // Handle unsuccessful uploads
            alert('error uploading image')
          }, () => {
            storageRef.getDownloadURL().then((downloadURL) => {
              setImageURL(downloadURL)
            });
          });

    });
  };

 
  useEffect(() => {
// console.log(user[0])
  },[])
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
          <Text style={styles.name}>User Name</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Afocus ? '#000' : '#F2F3F5'},
          ]}>
          <FormInput
            placeholder={'Goal Weight'}
            placeholderTextColor="#798293"
            value={userName}
            onChangeText={text => setUserName(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.businessName}>Age</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Nfocus ? '#000' : '#F2F3F5'},
          ]}>
        
          <FormInput
            placeholder={'Age...'}
            placeholderTextColor="#798293"
            onChangeText={text => {
              setAge(text);
            }}
            value={Age}
            style={{
              height: 50,
              borderRadius: 10,
              fontSize: 15,
              color: 'black',
            }}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>Height</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Efocus ? '#000' : '#F2F3F5'},
          ]}>
         
          <FormInput
            placeholder={'Email...'}
            placeholderTextColor="#798293"
            value={Height}
            onChangeText={text => setHeight(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.name}>CurrentWeight</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Pfocus ? '#000' : '#F2F3F5'},
          ]}>
          <FormInput
            placeholder={"5'9"}
            placeholderTextColor="#798293"
            value={CurrentWeight}
            onChangeText={text => setCurrentWeight(text)}
            style={{height: 50, borderRadius: 10, fontSize: 15, color: 'black'}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>Goal Weight</Text>
        </View>
        <View
          style={[
            styles.forminputView,
            {borderColor: Pfocus ? '#000' : '#F2F3F5'},
          ]}>
          <FormInput
            placeholder={"5'9"}
            placeholderTextColor="#798293"
            value={GoalWeight}
            onChangeText={text => setGoalWeight(text)}
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
              '#4AB5E3'
            }
           
            onPress={()=>{}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
