import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RadioButton} from 'react-native-paper';
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
import { useDispatch } from 'react-redux';
import {profileUpdateRequest} from '../../redux/action'
import {useSelector} from 'react-redux'
import Input from '../../components/input'
import Toast from 'react-native-toast-message';



const EditProfile = ({route}) => {
  const userData = useSelector(state => state.profileReducer.user)
  console.log('adadada',userData)
  const [Nfocus, setNFocus] = useState(false);
  const [Efocus, setEFocus] = useState(false);
  const [Pfocus, setPFocus] = useState(false);
  const [Afocus, setAfocus] = useState(false);

  const [text, setText] = useState('Edit Profile');
  // const [Age,setAge]=useState(route.params.data[0].age);
  // const [Height,setHeight]=useState(route.params.data[0].height);
  // const [CurrentWeight,setCurrentWeight]=useState(route.params.data[0].currentWeight);
  // const [GoalWeight,setGoalWeight]=useState(route.params.data[0].goalWeight);

  const [Gender, setGender] = React.useState(userData.gender);
  const [name, setName] = useState(userData.name);
  const [feet, setFeet] = useState(userData.feet)
  const [inches, setInches] = useState(userData.inches);
  const [currentWeight, setCurrentWeight] = useState(userData.currentWeight);
  const [goalWeight, setGoalWeight] = useState(userData.goalWeight);
  const [age, setAge] = useState(userData.age);
  

  // const [userName,setUserName]=useState(route.params.data[0].name);
  const [image, setImage] = useState('');
  const [visible, setVisible] = useState(false);
  const [ImageURL,setImageURL] = useState(userData.img? userData.img: '')
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
  const dispatch = useDispatch();
  const updateData = () =>{
    if (ImageURL === '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please Select an Image',
        visibilityTime: 3000,
      });
    } else if (
      name == '' ||
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
    }else{
      dispatch(
        profileUpdateRequest({
          postData: {
            name: name,
            gender: Gender,
            age: age,
            feet: feet,
            inches: inches,
            currentWeight: currentWeight,
            goalWeight: goalWeight,
            img: ImageURL,
            uid: userData.uid
          },
        }),
      );
    }
  }

  useEffect(() => {
// console.log(user[0])
  },[])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subContainer}>
          {ImageURL === '' ? (
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
                <Image source={{uri: ImageURL}} style={styles.circle} />
              </View>
            </>
          )}
          <TouchableOpacity onPress={() => setVisible(true)}>
            <Text style={styles.addLogo}>{text}</Text>
          </TouchableOpacity>
        </View>
       

        {/* input fields form edit data */}
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Input
            placeholder="Input Name"
            lable="Name"
            setValue={setName}
            iconName="account-plus"
            value={name}
          />

          <View style={{width: '95%', alignSelf: 'center'}}>
            <Text
              style={{
                textAlign: 'left',
                // marginLeft: 0,
                fontWeight: 'bold',
                color: 'gray',
                marginBottom: 5,
              }}>
              Gender
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 40,
                justifyContent: 'flex-end',
                // width: '90%',
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
          </View>

          <Input
            placeholder="age"
            lable="What is your Age in Years"
            setValue={setAge}
            iconName="human-queue"
            value={age}
            keyboardType="numeric"
          />

          <View style={{flexDirection: 'row'}}>
            <Input
              placeholder="Feets"
              lable="Enter Your Height"
              setValue={setFeet}
              value={feet}
              width="50%"
              keyboardType="numeric"
            />

            <Input
              placeholder="Inches"
              lable="Inches"
              setValue={setInches}
              iconName="human-male-height"
              value={inches}
              width="50%"
              keyboardType="numeric"
            />
          </View>

          <Input
            placeholder="weight"
            lable="Current Weight in KG"
            setValue={setCurrentWeight}
            iconName="weight"
            value={currentWeight}
            keyboardType="numeric"
          />
         
          <Input
            placeholder="weight"
            lable="Goal Weight in KG"
            setValue={setGoalWeight}
            iconName="weight"
            value={goalWeight}
            keyboardType="numeric"
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
            backgroundColor={'#4AB5E3'}
            onPress={updateData}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
