import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Introo from '../../components/IntroScreen/Intro';
// import Tabs from '../../BottomTab/Tab/tab';

import {ScrollView} from 'react-native-gesture-handler';
import LoginScreen from './MainScreen';

const Intro = ({navigation}) => {
  const [show, setShow] = useState(false);
  // const [next, setNext] = useState(0);
  const {height} = Dimensions.get('window');
  const renderNextButton = () => {
    return (
      <>
        <TouchableOpacity style={styles.renderNextButton}>
          <Text style={styles.rendertext}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  const onSkip = () => {
    setShow(true);
  };

  const renderDoneButton = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.renderNextButton}
          onPress={() => navigation.navigate('MainScreen')}>
          <Text style={styles.rendertext}>Get Started</Text>
        </TouchableOpacity>
        <View style={styles.bottomview}>
          <Text style={styles.rendertext2}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainScreen')}
            style={styles.renderview}>
            <Text style={styles.rendertext3}>Login</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <>
        {/* <ScrollView  showsVerticalScrollIndicator={false}> */}
        <ImageBackground
          source={item.ImageBackground}
          resizeMode={'stretch'}
          style={{flex: 1}}>
          <TouchableOpacity onPress={onSkip} style={styles.skip}>
            <Text style={styles.textskip}>Skip</Text>
          </TouchableOpacity>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.title1}>{item.title1}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
        {/* </ScrollView> */}
      </>
    );
  };
  return (
    <ScrollView contentContainerStyle={{height}} style={styles.safeareaview}>
      {show ? (
        <LoginScreen/>
      ) : (
        <Introo
          data={slides}
          renderItem={renderItem}
          renderNextButton={renderNextButton}
          onSkip={onSkip}
          renderDoneButton={renderDoneButton}
          showNextButton={true}
          goToSlide
          onSlideChange={data => {
            console.log(data);
          }}
        />
      )}
    </ScrollView>
  );
};
const slides = [
  {
    key: 's1',
    title: 'Fittler keeps you',
    title1: 'connected',
    text: 'Find Food Plans that suits your working routine',
    // image: require('../../assets/Intro/logo.png'),
    ImageBackground: require('../../assets/Intro/background.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's2',
    title: 'You’ve got options',
    title1: 'Find what you love',
    text: 'Search, find, and pay for your next\n experience',
    // image: require('../../assets/Intro/logo.png'),
    ImageBackground: require('../../assets/Intro/background2.png'),
    TouchableOpacity: TouchableOpacity,
  },
  {
    key: 's3',
    title: 'Welcome to',
    title1: 'The Fittler Team',
    text: 'Connect with over 10,000  people\n globally today',
    // image: require('../../assets/Intro/logo.png'),
    ImageBackground: require('../../assets/Intro/background3.png'),
    TouchableOpacity: TouchableOpacity,
  },
];
export default Intro;
const styles = StyleSheet.create({
    safeareaview: {
        flex: 1,
    },
    image: {
        alignSelf: 'center',
        marginTop: 100
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#ffffff',
        marginTop: 150,
    },
    title1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#ffffff',
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 20
    },
    renderNextButton: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#4AB5E3',
        borderRadius: 50,
        justifyContent: 'center',
    },
    rendertext: {
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    rendertext2: {
        fontSize: 13,
        color: '#FFFFFF',
    },
    rendertext3: {
        fontSize: 13,
        color: '#4AB5E3',
        // marginHorizontal: 5
    },
    renderview: {
        marginHorizontal:5,
    },
    skip: {
        height: 32,
        width: 64,
        padding: 6,
        backgroundColor: 'rgba(255,255,255,0.32)',
        borderRadius: 32,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginTop: Platform.OS == 'ios' ? 60 : 30,
        marginHorizontal: 15
    },
    textskip: {
        color: '#ffffff',
        textAlign: 'center'
    },
    bottomview:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        marginTop:20

    }
});