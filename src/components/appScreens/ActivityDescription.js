import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'


const Description = (props) => {
  var data = props.route.params;

  return (
    <View
      style={{
        flexGrow: 1,
        backgroundColor: '#e0e0e0',
        position: 'absolute',
        zIndex: 1,
        top: 70, left: 20, right: 20, bottom: 100,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 15,
      }}>


      <Image source={data.im}
        style={{
          width: '100%',
          height: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10
        }} />


      <Text
        style={{
          fontSize: 14,
          color: 'black',
          margin: 15,
          textAlign: 'justify',
        }}>{data.des}</Text>



      <TouchableOpacity
        onPress={() => { props.navigation.navigate('Activity', { img: data.im, des: data.des, dur: data.dur, type: data.type, txt: data.tx }) }}
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#469433',
          width: '100%',
          height: 40,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{ color: 'white', fontSize: 16, fontWeight: 'bold', }}
        >Start</Text>
      </TouchableOpacity>


    </View>
  )
}

export default Description;