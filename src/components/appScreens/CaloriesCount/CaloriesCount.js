import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppPreLoader from '../AppPreLoader';
import {useSelector, useDispatch} from 'react-redux';
import {addCalories, updatedCalories} from '../../../redux/action';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import CaloriesData from './CaloriesData';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Water = ({navigation}) => {
  const [crrDate, setCrrDate] = useState(new Date());
  const [flag, setFlag] = useState(true);
  const [totalcalories, setTotalCalories] = useState(0);
  console.log(crrDate);
  const dispatch = useDispatch();

  const getCaloriesData = async () => {
    const {uid} = auth().currentUser;
    let date = new Date().toISOString().slice(0, 10)

    try {
      const res = await firestore()
      .collection('calories')
      .doc(uid + ":" + date)
      .get();
      const cal = res?._data?.cal;
      dispatch(updatedCalories(cal));
    } catch (e) {
      console.log(e);
    }
  
  };

  const allCalories = useSelector(state => state.testReducer.allCalories);
  // console.log('ccal', stateData);

  useEffect(() => {
    setFlag(false);
    getCaloriesData();
  }, []);

  const check = async data => {
    console.log('eeeee', data);
    const res = await dispatch(
      addCalories({
        postData: {
          data,
        },
      }),
    );
    navigation.navigate('CaloriesCount');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          let num = parseInt(item.Calories);
          check(num);
        }}
        key={item.food}
        style={{
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'white',
          borderBottomWidth: 1,
          borderBottomColor: 'grey',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black', fontSize: 16}}>
            {item.Food}
          </Text>
          <Text style={{color: 'grey', fontSize: 11}}>{item.Serving}</Text>
        </View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>
          {item.total_Calories}
        </Text>
      </TouchableOpacity>
    );
  };

  if (flag) {
    return <AppPreLoader />;
  } else {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          {/* <Slider /> */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
              alignItems: 'center',
              height: 100,
            }}>
            <Text style={{color: 'grey'}}>Total Calories Gain Today:</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
              {allCalories}
            </Text>
          </View>

          {/* <Text style={{ alignSelf: 'center' }}>Drink a Glass</Text> */}
        </View>

        <View style={{backgroundColor: '#F5FCFF', flex: 1, paddingTop: 10}}>
          <FlatList data={CaloriesData} renderItem={renderItem} />
        </View>
      </View>
    );
  }
};

export default Water;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#007fcb',
  },
  txt: {
    // fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
  },
  imgBG: {
    position: 'absolute',
    bottom: 20,
  },
  glass: {
    width: 60,
    resizeMode: 'contain',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'red'
  },
  card: {
    width: '94%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 6,
    elevation: 2,
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
});
