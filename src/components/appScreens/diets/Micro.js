import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header";

const Micro = ({ navigation, route }) => {

  const [data, setData] = useState(route.params.data)
  
  return (
    <View style={{ flex: 1 }}>
      <Header nav={navigation.goBack} title={route.params.cat} />
      {
        data != ''?
        <ScrollView>
        {
          data.description.map((v, k) => {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }} key={k}>
                <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
                <Text style={{ textAlign: 'justify', marginLeft: 5 }}>{v}</Text>
              </View>
            )
          })
        }

        <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
          Check Explanation Below:
        </Text>

        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom:15 }}>
          <View style={{ width: '80%', borderRadius: 10 }}>
            <TouchableOpacity onPress={()=>navigation.navigate('MicroNutList',{data:data.NutData})} style={styles.btn}>
              <Text style={styles.btnTxt}>List of Micro Nutrients & Food Sources</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>:
        <Text style={{textAlign:'center', marginTop:20}}>No Data Found, Please Check Your Internet.</Text>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#007fcb',
    paddingVertical: 10,
    borderRadius: 10, 
    elevation:3
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign:'center'
  }

})

export default Micro