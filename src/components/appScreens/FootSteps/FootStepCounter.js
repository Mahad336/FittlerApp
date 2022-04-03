import React from 'react';

import CircularSlider from 'rn-circular-slider'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import RNPickerSelect from 'react-native-picker-select';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import RNShake from 'react-native-shake';


export default class FootStepCount extends React.Component {

  componentDidMount() {
    RNShake.addListener(() => {
      this.update()
    });
    this.getSteps()
    this.geTotDate()
    this.getWeekRecord()
    this.getStepGoal()
    this.getStepLength()
  }


  state = {
    value: 0,
    totalStep: 5000,
    stepLength: 76,
    week: [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00],
    tody: new Date().getDay(),
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    date: new Date().getDate()
  }


  update = () => {
    var newVal = this.state.value + 1
    this.setState({
      value: newVal
    })
    this.storeSteps(newVal)
    var km = (newVal * (this.state.stepLength / 100000)).toFixed(3)
    this.state.week[this.state.tody] = km
    this.setWeekRecord()
    this.storeToDate()
  }



  storeToDate = async () => {
    try {
      const jsonValue = JSON.stringify(this.state.date)
      await AsyncStorage.setItem('ToDate', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  geTotDate = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('ToDate'))
      if (val != this.state.date) {
        // this.setState({
        //   value: 0
        // })
        this.state.value=0
        this.storeSteps(0)
      }
    } catch (e) {
      // error reading value
    }
  }

  setWeekRecord = async () => {
    try {
      const jsonValue = JSON.stringify(this.state.week)
      await AsyncStorage.setItem('weeklyRecord', jsonValue)
    } catch (e) {
      // saving error
    }
    // getWeekRecord()
  }

  getWeekRecord = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('weeklyRecord'))
      if (val !== null) {
        // this.setState({
        //   week: val
        // })
        this.state.week = val;
        // setWeek(val)
      }
    } catch (e) {
      // error reading value
    }
  }

  storeSteps = async (v) => {
    try {
      const jsonValue = JSON.stringify(v)
      await AsyncStorage.setItem('walkedSteps', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  getSteps = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('walkedSteps'))
      if (val != null) {
        this.setState({
          value: val
        })
        // setValue(val)
      }
    } catch (e) {
      // error reading value
    }
  }

  storeStepGoal = async (v) => {
    try {
      const jsonValue = JSON.stringify(v)
      await AsyncStorage.setItem('stepGoal', jsonValue)
    } catch (e) {
      // saving error
    }
    this.getStepGoal()
  }

  getStepGoal = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('stepGoal'))
      if (val != null) {
        // this.setState({
        //   totalStep: val
        // })
        this.state.totalStep = val
        // setTotalStep(val)
      }
    } catch (e) {
      // error reading value
    }
  }

  storeStepLength = async (v) => {
    try {
      const jsonValue = JSON.stringify(v)
      await AsyncStorage.setItem('stepLength', jsonValue)
    } catch (e) {
      // saving error
    }
    this.getStepLength()
  }

  getStepLength = async () => {
    try {
      const val = JSON.parse(await AsyncStorage.getItem('stepLength'))
      if (val !== null) {
        // this.setState({
        //   stepLength: val
        // })
        this.state.stepLength = val;
        // setStepLength(val)
      }
    } catch (e) {
      // error reading value
    }
  }




  



  render() {
    return (

      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          if (route.name == 'Today') {
            IconName = 'home'
          }
          if (route.name == 'Settings') {
            IconName = 'settings'
          }
          return <Icon name={IconName} size={20} color={color} />
        }
      })}

        tabBarOptions={{
          activeTintColor: '#007fcb',
          inactiveTintColor: 'gray',
          showIcon: true,
          indicatorStyle: {
            backgroundColor: '#007fcb'
          },
          labelStyle: {
            fontWeight: 'bold',
            textTransform: 'capitalize'
          },
          tabStyle: {
            flexDirection: 'row'
          }
        }}>
        <Tab.Screen name="Today" component={Today}  options={{ title: "Today", }} />
        <Tab.Screen name="Settings" component={Settings} initialParams={{'storeGoal':this.storeStepGoal,'storeLength':this.storeStepLength}} options={{ title: 'Settings' }} />
      </Tab.Navigator>
    )
  }
}


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
    color: '#007fcb'
  },
  txt: {
    // fontWeight: 'bold',
    fontSize: 15,
    color: 'black'
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  innerTxt: {
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    // paddingBottom:10
  },
  days: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 10
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#007fcb',
    color: '#007fcb',
    paddingRight: 30, // to ensure the text is never behind the icon
    paddingVertical: 4,
    // backgroundColor:'yellow'
  },
  iconContainer: {
    // bottom:3
  },
  placeholder: {
    color: '#007fcb',
    fontWeight: 'bold',
  },
});


class Today extends FootStepCount{
  render(){
    return (
      <View style={styles.container}>
      
        <ScrollView>
  
          <CircularSlider
            style={{ marginTop: 30 }}
            // step={200}
            min={0}
            max={this.state.totalStep}
            value={this.state.value <= this.state.totalStep? this.state.value : this.state.totalStep}
            contentContainerStyle={styles.contentContainerStyle}
            strokeWidth={10}
            buttonStrokeWidth={10}
            openingRadian={Math.PI / 4}
            buttonRadius={0}
            linearGradient={[{ stop: '0%', color: '#3FE3EB' }, { stop: '100%', color: '#7E84ED' }]}
          >
            <Text style={styles.value}>{this.state.value}/{this.state.totalStep}</Text>
            <Text style={styles.txt}>Daily Target</Text>
          </CircularSlider>
  
  
  
          <View style={styles.card}>
            <Text style={styles.heading}>Today's Distance Covered:</Text>
            <Text style={styles.text}>{(this.state.value * (this.state.stepLength / 100000)).toFixed(3)} <Text style={{ color: 'gray', fontSize: 14 }}>Km</Text></Text>
          </View>
  
  
          <View style={{ ...styles.card, flexDirection: 'column', alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold', color: 'gray' }}>Last Week Record</Text>
  
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody != 0 ? this.state.days[this.state.tody - 1] : this.state.days[this.state.week.length - 1]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody != 0 ? this.state.week[this.state.tody - 1] : this.state.week[this.state.week.length - 1]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody > 1 ? this.state.days[this.state.tody - 2] : this.state.days[this.state.week.length - 2 + this.state.tody]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody > 1 ? this.state.week[this.state.tody - 2] : this.state.week[this.state.week.length - 2 + this.state.tody]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody > 2 ? this.state.days[this.state.tody - 3] : this.state.days[this.state.week.length - 3 + this.state.tody]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody > 2 ? this.state.week[this.state.tody - 3] : this.state.week[this.state.week.length - 3 + this.state.tody]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody > 3 ? this.state.days[this.state.tody - 4] : this.state.days[this.state.week.length - 4 + this.state.tody]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody > 3 ? this.state.week[this.state.tody - 4] : this.state.week[this.state.week.length - 4 + this.state.tody]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody > 4 ? this.state.days[this.state.tody - 5] : this.state.days[this.state.week.length - 5 + this.state.tody]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody > 4 ? this.state.week[this.state.tody - 5] : this.state.week[this.state.week.length - 5 + this.state.tody]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
            <View style={styles.days}>
              <Text style={{ ...styles.heading, marginTop: 10 }}>{this.state.tody > 5 ? this.state.days[this.state.tody - 6] : this.state.days[this.state.week.length - 6 + this.state.tody]}</Text>
              <Text style={styles.innerTxt}>{this.state.tody > 5 ? this.state.week[this.state.tody - 6] : this.state.week[this.state.week.length - 6 + this.state.tody]} <Text style={{ fontSize: 12, color: 'gray' }}>Km</Text></Text>
            </View>
  
          </View>
        </ScrollView>
      </View>
    )
  }
}

class Settings extends FootStepCount{
  item = [
    { label: '1000', value: 1000 },
    { label: '2000', value: 2000 },
    { label: '3000', value: 3000 },
    { label: '4000', value: 4000 },
    { label: '5000', value: 5000 },
    { label: '6000', value: 6000 },
    { label: '7000', value: 7000 },
    { label: '8000', value: 8000 },
    { label: '9000', value: 9000 },
    { label: '10000', value: 10000 },
  ]

  item2 = [
    { label: '65', value: 65 },
    { label: '66', value: 66 },
    { label: '67', value: 67 },
    { label: '68', value: 68 },
    { label: '69', value: 69 },
    { label: '70', value: 70 },
    { label: '71', value: 71 },
    { label: '72', value: 72 },
    { label: '73', value: 73 },
    { label: '74', value: 74 },
    { label: '75', value: 75 },
    { label: '76', value: 76 },
    { label: '77', value: 77 },
    { label: '78', value: 78 },
    { label: '79', value: 79 },
    { label: '80', value: 80 },
    { label: '81', value: 81 },
    { label: '82', value: 82 },
    { label: '83', value: 83 },
    { label: '84', value: 84 },
    { label: '85', value: 85 },
    { label: '86', value: 86 },
    { label: '87', value: 87 },
    { label: '88', value: 88 },
    { label: '89', value: 89 },
    { label: '90', value: 90 },
  ]
  // picker palaceholder
  placeholder = {
    label: `${this.state.totalStep}`,
    value: null,
    color: '#007fcb',
  }
  placeholder2 = {
    label: `${this.state.stepLength} cm`,
    value: null,
    color: '#007fcb',
  }
  render(){
    console.log(this.state.stepLength)
    return (
      <View style={styles.container}>
        <View style={{ ...styles.card, marginTop: 30 }}>
          <Text style={styles.heading}>Step Goal</Text>
  
          <RNPickerSelect
            itemKey={1}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => this.storeStepGoal(value)}
            placeholder={this.placeholder}
            items={this.item}
            style={pickerSelectStyles}
            Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#007fcb' />); }}
          />
        </View>
  
        <View style={{ ...styles.card, }}>
          <Text style={styles.heading}>Step Length</Text>
  
          <RNPickerSelect
            itemKey={1}
            useNativeAndroidPickerStyle={false}
            onValueChange={(value) => this.storeStepLength(value)}
            placeholder={this.placeholder2}
            items={this.item2}
            style={pickerSelectStyles}
            Icon={() => { return (<Icons name="arrow-drop-down" size={30} color='#007fcb' />); }}
          />
        </View>
      </View>
    )
  }
}