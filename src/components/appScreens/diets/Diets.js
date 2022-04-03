import React, { useState } from 'react';
import { View, Text, Image, Dimensions, StyleSheet,ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import { ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import Covid from './Covid';
import database, { firebase } from '@react-native-firebase/database';


import data from './Data';


class DietsList extends React.Component{

  state={
    diets: data,
    slides:[],
    // catogarydata: catogaryData,
    firebaseData: [],
    covidData: {},
    nutrients: {},
  }

  componentDidMount(){
    this.getdata()
    this.getCovidData()
    this.getNutrients()
  }

  getdata = () => {
    database().ref('/').child('dietPlan').on('child_added', (m) => {
      this.state.firebaseData.push(m.val())
    })
    
  }

  getNutrients = () => {
    database().ref('/').child('MicroNutrients').on('child_added', (m) => {
      this.setState({
        nutrients: m.val()
      })
    })
    
  }

  getCovidData = () =>{
    database().ref('/').child('CovidDiets').on('child_added', (m) => {
      this.setState({
        covidData: m.val()
      })
    })
  }

  

  render(){
    
    return (
      <View style={styles.main}>
        <Header nav={this.props.navigation.goBack} title="Diets" />
  
  
  
        {/* ********** Slider *********** */}
        <View style={styles.container}>
          <SwiperFlatList
            autoplay
            autoplayLoopKeepAnimation={true}
            autoplayDelay={4}
            autoplayLoop
            index={0}
            showPagination={false}>
            {
              this.state.diets.map((val, key) => {
                return (
                  <TouchableOpacity key={key}>
                    <ImageBackground
                      style={styles.child}
                      imageStyle={{
                        backgroundColor: 'black',
                        opacity: 0.6
                      }}
                      source={val.img}>
                      <View style={{
                        position: 'absolute',
                        bottom: 20,
                        left: 10,
                        width: '95%'
                      }}>
                        <View style={{
                          backgroundColor: '#469433',
                          width: val.category.length * 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                          paddingVertical: 5
                        }}>
                          <Text style={{
                            color: "white",
                            fontSize: 16
                          }}>{val.category}</Text>
                        </View>
                        <Text numberOfLines={1} ellipsizeMode='tail'
                          style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: 'white'
                          }}>{val.title}</Text>
                        {/* <Text style={{ color: 'white' }}>
                          Servings: {val.servings} | Cook Time: {val.cookTime} Min
                        </Text> */}
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )
              })
            }
          </SwiperFlatList>
        </View>
  
  
  
  
  
        {/* *************** Categories ************** */}
        <ScrollView>
          <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 18 }}>
            Diet Plans
          </Text>
  
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Category',{data:this.state.firebaseData[0] != undefined?this.state.firebaseData[0].DietData.FatLoss:'', cat:'Fat Loss'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Fat Loss</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Category',{data:this.state.firebaseData[0] != undefined?this.state.firebaseData[0].DietData.MuscleGain:'', cat:'Muscles Gain'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Muscle Gain</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Category',{data:this.state.firebaseData[0] != undefined?this.state.firebaseData[0].DietData.Bulking:'', cat:'Bulking'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Bulking</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Category',{data:this.state.firebaseData[0] != undefined?this.state.firebaseData[0].DietData.PureHealth:'', cat:'Pure Health'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Pure Health</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>
  
          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Covid',{data:this.state.covidData.CovidDiets != undefined?this.state.covidData.CovidDiets:'', cat:'Covid-19 Protection'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Covid-19 Protection</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>





          <Text style={{ margin: 10, fontWeight: 'bold', fontSize: 18, }}>
            Micro & Macro Nutrients
          </Text>

          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Micro',{data:this.state.nutrients.Nutrients != undefined?this.state.nutrients.Nutrients:'', cat:'Micro Nutrients'})}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Micro Nutrients</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Macro')}} style={styles.card}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.cardTxt}>Macro Nutrients</Text>
            <Icon name="chevron-forward-circle" style={styles.cardIcon} size={25} />
          </TouchableOpacity>
  
          
        </ScrollView>
      </View>
    )
  }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { backgroundColor: 'black', height: '30%' },
  child: { width, justifyContent: 'center', height: "100%" },
  text: { fontSize: width * 0.5, textAlign: 'center' },
  main: {
    height: '100%'
  },
  categoryImg: {
    width: 160,
    height: 90,
    resizeMode: 'contain',
    marginLeft: 10,
    backgroundColor: 'black'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    width: '100%',
    height: 60,
    elevation: 3,
    marginBottom: 12
  },
  cardImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardIcon: {
    position: 'absolute',
    right: 10,
    color: '#469433'
  },
  cardTxt: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    color: 'rgb(80,80,80)',
    width: '74%',

  }
});


import Category from './Category';
import Micro from './Micro';
import Macro from './MacroNurtrients';
import MicroNutList from './MicroNutList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatogaryDetail from './CarogaryDetails';
const Stack = createNativeStackNavigator();

const Diets = () => {
  return (
    <Stack.Navigator initialRouteName="Works" >
      <Stack.Screen name="DietsList" component={DietsList} options={{ headerShown: false }} />
      <Stack.Screen name="Category" component={Category} options={{ headerShown: false }} />
      <Stack.Screen name="CatogaryDetail" component={CatogaryDetail} options={{ headerShown: false }} />
      <Stack.Screen name="Covid" component={Covid} options={{ headerShown: false }} />
      <Stack.Screen name="Micro" component={Micro} options={{ headerShown: false }} />
      <Stack.Screen name="MicroNutList" component={MicroNutList} options={{ headerShown: false }} />
      <Stack.Screen name="Macro" component={Macro} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default Diets;