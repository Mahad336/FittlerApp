import React, { useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Header from '../Header';


const CatogaryDetail = (props) => {
  const [data, setData] = useState(props.route.params.data)
  return (
    <View style={{ flex: 1, }}>
      <Header title={`${props.route.params.title1} (${props.route.params.title2})`} nav={props.navigation.goBack} />

      {
        data != '' ?
          <ScrollView>
            {
              data.map((val, key) => {
               
                if (val.ingredients != '') {
                  return (
                    <View key={key} style={{ flex: 1, width: '95%', alignSelf: 'center' }}>
                      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{val.title}</Text>
                      <View style={{ flex: 1, borderWidth: 1 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                          <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '34%' }}>
                            <Text style={{ paddingHorizontal: 3, fontWeight: 'bold' }}>INGREDIENTS</Text>
                          </View>
                          <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '33%' }}>
                            <Text style={{ paddingHorizontal: 3, fontWeight: 'bold' }}>QUANTITY</Text>
                          </View>
                          <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '33%' }}>
                            <Text style={{ paddingHorizontal: 3, fontWeight: 'bold' }}>ALTERNATE FOOD</Text>
                          </View>
                        </View>
                        {
                          val.ingredients.map((v, k) => {
                            return (
                              <View style={{ flexDirection: 'row', flex: 1 }} key={k}>
                                <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '34%' }}>
                                  <Text style={{ paddingHorizontal: 3 }}>{v}</Text>
                                </View>
                                <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '33%' }}>
                                  <Text style={{ paddingHorizontal: 3 }}>{val.quantity[k]}</Text>
                                </View>
                                <View style={{ borderLeftWidth: 1, borderBottomWidth: 1, width: '33%' }}>
                                  <Text style={{ paddingHorizontal: 3 }}>{val.alternateFood[k]}</Text>
                                </View>
                              </View>
                            )
                          })
                        }
                      </View>
                    </View>
                  )
                } else {
                  return (
                    <View key={key} style={{ flex: 1, width: '95%', alignSelf: 'center' }}>
                      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>{val.title}</Text>
                    </View>
                  )
                }
              })
            }
          </ScrollView> :
          <Text style={{ textAlign: 'center', marginTop: 15 }}>Sorry! No Diets to Show.</Text>
      }

    </View>
  )
}
export default CatogaryDetail;

const styles = StyleSheet.create({

})