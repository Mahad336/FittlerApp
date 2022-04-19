import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    fontWeight: '500',
  },
  backIcon: {
    width: 15,
    height: 18,
    marginHorizontal: 10,
  },
  circle: {
    width: '100%',
    height: '100%',
    // marginTop: 15,
    resizeMode: 'contain',
  },
  subContainer: {
    alignSelf: 'center',
    paddingTop:15
  },
  addLogo: {
    color: '#4AB5E3',
    textAlign: 'center',
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  businessName: {
    color: '#08101F',
    fontSize: 14,
  },
  maxNumber: {
    color: '#798293',
    fontSize: 11,
    alignSelf: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  userIcon: {
    marginHorizontal: 10,
    height: 24,
    width: 24,
    alignSelf: 'center',
    flex: 1,
  },
  name: {
    color: '#08101F',
    fontSize: 14,
  },
  forminputView: {
    height: 50,
    borderColor: '#F2F3F5',
    marginHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  verifyEmail: {
    fontSize: 13,
    color: '#4AB5E3',
    height: 20,
  },
  icon: {
    width: 14,
    height: 18,
    color: '#798293',
    marginLeft: 17,
    position: 'absolute',
    marginTop: 10,
  },
  dotsIcon: {
    width: 15,
    height: 18,
    marginHorizontal: 10,
  },
  dots: {
    flexDirection: 'row-reverse',
    display: 'flex',
  },
  ModalView: {
    backgroundColor: '#FFFFFF',
    //  flex:1,
    height: 280,
    width: '100%',

    // marginHorizontal:10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  ModalBtnView: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-evenly',
    // marginVertical:-50
  },
  Modalbtn: {
    borderRadius: 40,
    backgroundColor: 'white',
    height: 50,
    width: 130,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'lightgrey',
    borderWidth: 0.2,
  },
  Modalbtntext: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 15,
    flex: 1,
  },
  images: {
    width: 96,
    height: 96,
    marginTop: 15,
  },
  modalIcon: {
    width: 18,
    height: 18,
    position: 'absolute',
    right: 10,
    top: 10,
  },
});

export default styles;
