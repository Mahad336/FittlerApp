import React from "react";
import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';
// import { ScrollView } from "react-native-gesture-handler";

const Quotes = () => {
  return (
    <View style={{ flex: 1, alignItems:'center' }}>
      <ScrollView>
        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “You don’t have to control your thoughts. You just have to stop letting them control you.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Dan Millman</Text>


        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Take your time healing, as long as you want. Nobody else knows what you’ve been through. How could they know how long it will take to heal you?”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Abertoli</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “One small crack does not mean that you are broken, it means that you were put to the test and you didn’t fall apart.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Linda Poindexter</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Sometimes you climb out of bed in the morning and you think, I’m not going to make it, but you laugh inside — remembering all the times you’ve felt that way.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Charles Bukowski</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “There is hope, even when your brain tells you there isn’t.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— John Green</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Kahlil Gibran</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Unknown</Text>



        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Let your story go. Allow yourself to be present with who you are right now.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Russ Kyle</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “My dark days made me strong. Or maybe I already was strong, and they made me prove it.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Emery Lord</Text>



        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “You can’t control everything. Sometimes you just need to relax and have faith that things will work out. Let go a little and just let life happen.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Kody Keplinger</Text>




        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Happiness can be found even in the darkest of times, if one only remembers to turn on the light.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Albus Dumbledore</Text>



        <Text style={{marginRight:10, fontStyle: 'italic', marginLeft: 10, fontSize: 14, fontWeight: 'bold', marginTop: 20 }}>
        “Emotional pain is not something that should be hidden away and never spoken about. There is truth in your pain, there is growth in your pain, but only if it’s first brought out into the open.”
        </Text>
        <Text style={{marginRight:10,textAlign:'right',fontStyle: 'italic'}}>— Steven Aitchison</Text>


      </ScrollView>
    </View>
  )
}

export default Quotes;