import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputCompnent = (props) => {
    const {
      placeholder,
      lable,
      setValue,
      iconName,
      value,
      secureTextEntry = false,
      keyboardType,
      width="100%",
    } = props;
    const [inputStyle, setInputStyle] = useState({
      lable: {
        color: 'gray',
        fontSize: 14,
      },
      container: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
      },
    });
  return (
    <Input
      inputStyle={{fontSize: 13}}
      inputContainerStyle={{height: 40, ...inputStyle.container}}
      placeholder={placeholder}
      label={lable}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      // autoFocus
      value={value}
      labelStyle={inputStyle.lable}
      onChangeText={t => setValue(t)}
      onFocus={() =>
        setInputStyle({
          lable: {
            color: '#007fcb',
            fontSize: 14,
          },
          container: {borderBottomColor: '#007fcb', borderBottomWidth: 2},
        })
      }
      onBlur={() =>
        setInputStyle({
          lable: {
            color: 'gray',
            fontSize: 14,
          },
          container: {borderBottomColor: 'gray', borderBottomWidth: 1},
        })
      }
      containerStyle={{...styles.inputContainer, width}}
      rightIcon={<Icon name={iconName} size={24} color="#007fcb" />}
    />
  );};

const styles = StyleSheet.create({
  inputContainer: {
    height: 60,
    marginBottom: 40,
  },
});
export default InputCompnent;
