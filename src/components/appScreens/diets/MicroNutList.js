import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity ,ScrollView} from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header";

const MicroNutList = ({ navigation, route }) => {

  const [data, setData] = useState(route.params.data)
  return (
    <View style={{ flex: 1 }}>
      <Header nav={navigation.goBack} title='Micro Nutrients & Sources' />
      <ScrollView>
        {
          data.map((v, k) => {
            return (
              <View style={{ marginHorizontal: 10, marginVertical: 15, borderWidth: 1 }} key={k}>
                <View style={{ flexDirection: 'row', }}>
                  <View style={{ ...styles.row, width: '33%' }}>
                    <Text style={{ ...styles.colTxt, fontWeight: 'bold' }}>Nutrient</Text>
                  </View>
                  <View style={{ ...styles.row, width: '33%' }}>
                    <Text style={{ ...styles.colTxt, fontWeight: 'bold' }}>Sources</Text>
                  </View>
                  <View style={{ ...styles.row, width: '34%' }}>
                    <Text style={{ ...styles.colTxt, fontWeight: 'bold' }}>RDA or AI</Text>
                  </View>
                </View>
                {
                  v.nutrient.map((val, key) => {
                    return (
                      <View style={{ flexDirection: 'row', }} key={key}>
                        <View style={{ ...styles.row, width: '33%' }}>
                          <Text style={styles.colTxt}>{val}</Text>
                        </View>
                        <View style={{ ...styles.row, width: '33%' }}>
                          <Text style={styles.colTxt}>{v.sources[key]}</Text>
                        </View>
                        <View style={{ ...styles.row, width: '34%' }}>
                          <Text style={styles.colTxt}>{v.RDA[key]}</Text>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            )
          })
        }


      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 0.7
  },
  colTxt: {
    marginLeft: 2
  }

})

export default MicroNutList