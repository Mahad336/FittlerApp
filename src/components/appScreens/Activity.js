import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Animated from 'react-native-reanimated';
import img from '../../images/home/jumping_jacks.gif'


const Activity = (props) => {
  var prop = props.route.params;
  console.log(prop)

  const renderTime = ({ remainingTime, elapsedTime }) => {
    return (
      <View>
        {
          count == 0 ?
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{remainingTime}</Text>
          :
          <View style={{ alignItems: 'center' }}>
              <Text>time remaining</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 20 }}>00:{remainingTime}</Text>
          </View>
        }
      </View>
    );
  };

  var words = prop.txt.split(" ")
  var name =words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1).toLowerCase(); 
    }).join(" ");


  const data = {
    type: "time",
    duration: prop.dur,
    photo: prop.img,
    title: name
  }


  const [count, setCount] = useState(1)
  const [start, setStart] = useState(true)
  const [time, setTime] = useState(data.duration)
  const [playing, setPlaying] = useState(true)



  return (
    <View style={{
      position: 'relative',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      alignItems: 'center'
    }}>

      <Image source={data.photo}
        style={{
          width: '100%',
          height: prop.txt=="SPIDERMAN PUSH-UPS" || prop.txt=="TRIANGLE (DIAMOND) PUSH-UPS"? '40%':'50%',
          // resizeMode:'contain'
        }}
      />


      <View style={{
        // flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>


        {count == 0 ?
          <View style={{ alignItems: 'center' }}>
            <Text style={{
              fontSize: 25, fontWeight: 'bold',
              color: '#007fcb',
              marginTop: 20
            }}>Ready To Go!</Text>

            <Text style={{
              fontSize: 22, fontWeight: 'bold',
              color: '#469433'
            }}>{data.title}</Text>
          </View>
          :
          count == 1 ?
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                fontSize: 22, fontWeight: 'bold',
                color: '#469433'
              }}>{data.title}</Text>
              <Text style={{
                fontSize: 18, fontWeight: 'bold',
                color: 'gray'
              }}>Time Started...</Text>
            </View>
            :
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                fontSize: 22, fontWeight: 'bold',
                color: '#469433'
              }}>{data.title}</Text>
              <Text style={{
                fontSize: 18, fontWeight: 'bold',
                color: 'gray'
              }}>Task Completed</Text>
            </View>
        }



        {
          count < 2 ?
            <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
              <CountdownCircleTimer
                onComplete={() => (setCount(count + 1), [start, 1000])}
                isPlaying={playing}
                // initialRemainingTime={10}
                duration={time}
                colors={[["#469433", 0.5], ["#007fcb"]]}
                size={150}
                strokeWidth={8}
                strokeLinecap="round"
                trailColor="#d9d9d9"
              >{renderTime}</CountdownCircleTimer>

              {
                count != 0 ?
                  <TouchableOpacity
                    onPress={() => {
                      playing ?
                        setPlaying(false) :
                        setPlaying(true)
                    }}
                    style={{ alignItems: 'center', backgroundColor: '#469433', paddingVertical: 8, width: "30%", borderRadius: 9 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{playing ? "Pause" : "Play"}</Text>
                  </TouchableOpacity> :
                  null
              }
            </View> :
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'rgb(80, 80, 80)' }}>Take rest for a few second ...</Text>
              <TouchableOpacity onPress={()=>{
                props.navigation.navigate('Works')
                console.log(props)
              }}>
                <Text style={{ color: '#007fcb', fontWeight: 'bold' }}>Go back and start next task </Text>
              </TouchableOpacity>
            </View>
        }


      </View>
    </View>
  )
}

export default Activity;