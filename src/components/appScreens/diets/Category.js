import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions,ScrollView } from 'react-native';
import Header from '../Header';
import img from '../../../images/Diets/spicy_chicken_vegetable_soup.jpg'
// import { ScrollView } from 'react-native-gesture-handler';


const Category = ({ navigation, route }) => {
  const [data, setData] = useState(route.params.data)

  const [veg, setVeg] = useState(data.veg)
  const [nonVeg, setNonVeg] = useState(data.nonVeg)
  const [vegan, setVegan] = useState(data.vegan)
  const [note, setNote] = useState(data.note)
  const [instruction, setInst] = useState(data.instruction)

  // console.log("veg", veg)
  // console.log("notveg", nonVeg)
  // console.log("vegan", vegan)
  // console.log("note", note)
  // console.log("instruction", instruction)

  return (
    <View style={styles.container}>
      <Header title={route.params.cat} nav={navigation.goBack} />

      {
        data != ""?
        <ScrollView style={{ flex: 1 }}>
        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Instructions:
        </Text>
        {
          instruction.map((val, key) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }} key={key}>
                <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>{val}</Text>
              </View>
            )
          })
        }

        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Categories:
        </Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 10 }}>
          <View style={{ width: '80%', elevation: 3, padding: 30, borderRadius: 10 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('CatogaryDetail',{data:veg, title1:route.params.cat, title2:'veg'})} style={styles.btn}>
              <Text style={styles.btnTxt}>Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('CatogaryDetail',{data:nonVeg, title1:route.params.cat, title2:'non-veg'})} style={styles.btn}>
              <Text style={styles.btnTxt}>Non-Veg</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('CatogaryDetail',{data:vegan, title1:route.params.cat, title2:'vegan'})} style={styles.btn}>
              <Text style={styles.btnTxt}>Vegan</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Note:
        </Text>
        {
          note.map((val, key) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }} key={key}>
                <Text  style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>{val}</Text>
              </View>
            )
          })
        }

      </ScrollView>:
      <Text style={{textAlign:'center', marginTop:20}}>No Data Found, Please Check Your Internet.</Text>
      }

      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#007fcb',
    paddingVertical: 10,
    borderRadius: 10
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }

})

export default Category;
