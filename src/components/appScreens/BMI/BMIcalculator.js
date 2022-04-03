import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Input } from 'react-native-elements';

const BMI = () => {
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState();

  // BMI calculation
  const cal = () => {
    if (feet == "" || inches == "" || weight == "") {
      alert("Invalid Input")
    } else {
      var ft = parseInt(feet) * 0.3048;
      var ich = parseInt(inches) * 0.0254;
      var mt = ft + ich;
      var mtSq = mt * mt;
      var BMI = parseInt(weight) / mtSq;
      setBmi(BMI.toFixed(1));
    }
  }

  const [feetStyle, setFeetStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })
  const [inchesStyle, setInchesStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })
  const [weightStyle, setWeightStyle] = useState({
    lable: {
      color: 'gray',
      fontSize: 14
    },
    container: {
      borderBottomColor: 'gray',
      borderBottomWidth: 1
    }
  })

  return (

    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center', }}>


        <View style={styles.form}>
          <View style={styles.HeigntContainer}>
            <Input
              value={feet}
              keyboardType='numeric'
              onChangeText={(t) => setFeet(t)}
              inputStyle={{ fontSize: 13 }}
              inputContainerStyle={{ height: 35, ...feetStyle.container }}
              placeholder='Feet'
              label="Input Your Height"
              labelStyle={feetStyle.lable}
              onFocus={() => setFeetStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
              onBlur={() => setFeetStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
              containerStyle={{ width: '50%', ...styles.inputContainer }}
            />

            <Input
              value={inches}
              keyboardType="numeric"
              onChangeText={(t) => setInches(t)}
              inputStyle={{ fontSize: 13 }}
              inputContainerStyle={{ height: 35, ...inchesStyle.container }}
              placeholder='Inches'
              labelStyle={inchesStyle.lable}
              onFocus={() => setInchesStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
              onBlur={() => setInchesStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
              containerStyle={{ width: '50%', ...styles.inputContainer }}
              rightIcon={
                <Icon
                  name='human-male-height'
                  size={28}
                  color='#007fcb'
                />
              }
            />
          </View>

          <Input
            value={weight}
            onChangeText={(t) => setWeight(t)}
            inputStyle={{ fontSize: 13, }}
            inputContainerStyle={{ height: 35, ...weightStyle.container }}
            placeholder="KG"
            keyboardType='numeric'
            label="Input Your Weight"
            labelStyle={weightStyle.lable}
            onFocus={() => setWeightStyle({ lable: { color: '#007fcb', fontSize: 14 }, container: { borderBottomColor: '#007fcb', borderBottomWidth: 2 } })}
            onBlur={() => setWeightStyle({ lable: { color: 'gray', fontSize: 14 }, container: { borderBottomColor: 'gray', borderBottomWidth: 1 } })}
            containerStyle={styles.inputContainer}
            rightIcon={
              <Icon
                name='weight-kilogram'
                size={28}
                color='#007fcb'
              />
            }
          />
        </View>

        <TouchableOpacity style={styles.btn} onPress={() => cal()}>
          <Text style={{ color: "#fff" }}> Calculate </Text>
        </TouchableOpacity>

        {
          isNaN(bmi) ?
            null :
            <View style={styles.div}>
              <Text style={{ fontWeight: 'bold', fontSize: 15 }}>BMI: {bmi}</Text>
            </View>
        }

        <Text style={{ fontWeight: 'bold', fontSize: 16, marginTop: 24, color: 'gray' }}>{
          bmi <= 18.4 ? "Under Weight" :
            bmi >= 18.5 && bmi <= 24.9 ? "Healthy Weight" :
              bmi >= 25 ? "Over Weight" : null
        }</Text>
      </View>
    </ScrollView>

  )
}

export default BMI

const styles = StyleSheet.create({
  form: {
    width: '90%'
  },
  HeigntContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },
  inputContainer: {
    height: 75,
    justifyContent: 'flex-end',
  },
  btn: {
    color: '#fff',
    backgroundColor: '#469433',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    margin: 10,
    elevation: 5
  },
  card: {
    height: 50,
    elevation: 4,
    backgroundColor: '#f0f0f0',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  div: {
    width: Dimensions.get('window').width - 30,
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
})