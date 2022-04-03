import React from 'react';
import { View, Text, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const Header = (props) => {
  return (
    <View>
      {/* ............header............. */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007fcb',
        height: 55,
        paddingLeft: 15,
        elevation: 8
      }}>
        <Icon
          name="arrow-back"
          size={25}
          color="white"
          onPress={() => props.nav()}
        />
        <Text
          ellipsizeMode='tail'
          numberOfLines={1}
          style={{
            color: '#fff',
            fontWeight: 'bold',
            width: '80%',
            fontSize: 17,
            marginLeft: 30
          }}>{props.title}</Text>
      </View>
    </View>
  )
}

export default Header