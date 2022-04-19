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
  imageView: {
    display: 'flex',
  },
  image: {
    borderRadius: 100,
    height: 96,
    width: 96,
    marginTop: 38,
    marginLeft: 16,
    marginRight: 263,
  },
  profileName: {
    color: '#000',
    fontSize: 20,
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 15,
    marginLeft: 16,
    marginTop: 4,
    color: '#555',
  },
  profileEdit: {
    fontSize: 13,
    marginLeft: 16,
    marginTop: 4,
    color: '#4AB5E3',
    height: 20,
    marginRight: 16,
  },
  editProfile: {
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: -22,
  },
  options: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginHorizontal: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  optionName: {
    color: 'black',
    fontSize: 15,
  },
  logout: {
    // marginTop: 30,
   position: 'absolute',
   bottom: 0,
  },
  cameraIcon: {
    height: 24,
    width: 24,
    marginTop: -30,
    marginLeft: 85,
  },
  backIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  emailIcon: {
    width: 15,
    height: 15,
    left: 90,
    top: 5,
  },
  wallet: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
   
  },
  subs: {
    width: 18,
    height: 14,
    top: 26,
    left: 10,
  },
  card: {
    width: 18,
    height: 14,
    top: 26,
    left: 10,
  },
  notification: {
    width: 18,
    height: 17,
    top: 30,
    left: 10,
  },
  changePassword: {
    width: 18,
    height: 17,
    top: 30,
    left: 10,
  },
  Logout: {
    width: 25,
    height: 25,
    top: 28,
    left: -20,
  },
  logOutText: {
    marginHorizontal: 30,
  },
  logoutName: {
    color: 'black',
    fontSize: 17,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  forward: {
    height: 15,
    width: 10,
    marginHorizontal: 10,
  },
  dotsIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
  dots: {
    flexDirection: 'row-reverse',
    display: 'flex',
  },
});
export default styles;
