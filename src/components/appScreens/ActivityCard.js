import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'



const ActivityCard = ({ ActivityIcon, txt, icon, img, duration, type, description, nav }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate('Description', { im: img, des: description, dur: duration, tx: txt, type: type, })
      }}
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center',
        marginVertical: 5,
        paddingHorizontal: 8,
        backgroundColor: '#f0f0f0',
        elevation: 4
      }}>


      <Image source={ActivityIcon}
        style={{
          width: "18%",
          height: 70,
          resizeMode: 'contain',
          tintColor: '#007fcb'
        }} />


      <Text style={{
        fontSize: 13,
        width: '60%',
        fontWeight: 'bold',
        color: 'rgb(80, 80, 80)',
        marginLeft: 19
      }}>{txt}</Text>


      <Icon name={icon} size={25} color="#469433" style={{ position: 'absolute', right: 10 }} />

    </TouchableOpacity>
  )
}

export default ActivityCard;