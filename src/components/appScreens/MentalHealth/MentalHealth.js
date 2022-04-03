import React from "react";
import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";

const MentalHealth = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:</Text>
        </View>


        {/* ============ Bullets ============ */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Biological factors, such as genes or brain chemistry</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Life experiences, such as trauma or abuse</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Family history of mental health problems</Text>
        </View>




        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Early Warning Signs:
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Over the course of your life, if you experience mental health problems, your thinking, mood, and behavior could be affected. Many factors contribute to mental health problems, including:</Text>
        </View>
        {/* ============== Bullets ================== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Eating or sleeping too much or too little</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Pulling away from people and usual activit</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Pulling away from people and usual activit</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Feeling numb or like nothing matters</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>5)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Having unexplained aches and pains</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>6)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Feeling helpless or hopeless</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>7)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Smoking, drinking, or using drugs more than usual</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>8)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Feeling unusually confused, forgetful, on edge, angry, upset, worried, or scared</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>9)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Yelling or fighting with family and friends</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>10)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Experiencing severe mood swings that cause problems in relationships</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>11)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Having persistent thoughts and memories you can't get out of your head</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>12)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Hearing voices or believing things that are not true</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>13)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Thinking of harming yourself or others</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>14)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Inability to perform daily tasks like taking care of your kids or getting to work or school</Text>
        </View>





        <Text style={{ textDecorationLine: 'underline', marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
          Mental Health and Wellness:
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Positive mental health allows people to:</Text>
        </View>
        {/* =========== Bullets ========== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Realize their full potential</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Cope with the stresses of life</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Work productively</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Make meaningful contributions to their communities</Text>
        </View>


        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 10, marginRight: 20, marginVertical: 3 }}>
          <Text style={{ fontSize: 10, marginTop: 3 }}>{'\u2B24'}</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Ways to maintain positive mental health include:</Text>
        </View>
        {/* ============== Bullets ================== */}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Getting professional help if you need it</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Connecting with others</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Staying positive</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Getting physically active</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>5)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Helping others</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>6)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Getting enough sleep</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 30, marginRight: 20, marginVertical: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>7)</Text>
          <Text style={{ textAlign: 'justify', marginLeft: 5 }}>Developing coping skills</Text>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginVertical: 10 }}>
          <View style={{ width: '80%', elevation: 3, padding: 30, borderRadius: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Meditation')} style={styles.btn}>
              <Text style={styles.btnTxt}>Meditation Techniques</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Quotes')} style={styles.btn}>
              <Text style={styles.btnTxt}>Quotes</Text>
            </TouchableOpacity>
          </View>
        </View>











      </ScrollView>
    </View>
  )
}

export default MentalHealth;


const styles = StyleSheet.create({
  
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