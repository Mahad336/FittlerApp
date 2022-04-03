import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ActivityCard from './ActivityCard';
import Header from './Header';
// gif images...
import Jump from '../../images/home/jumping_jacks.gif'
import Step from '../../images/home/high_step.gif'
import Abdominal from '../../images/home/abnormal_crunches.gif'
import TrianglePushup from '../../images/home/triange_Pushup.gif'
import Russian from '../../images/home/russian_twist.gif'
import Climber from '../../images/home/hill_climbe.gif'
import Bicycle from '../../images/home/bicycle_crunch.gif'
import Heel from '../../images/home/heel_touch.gif'
import Leg from '../../images/home/leg_raise.gif'
import Plank from '../../images/home/plank.gif'
import Cobra from '../../images/home/cobra_stretch.gif'
import Spine from '../../images/home/spine_twist.gif'
import SpiderPushup from '../../images/home/spiderman.gif'
import Squats from '../../images/home/squats.gif'

// Icons...
import IconJump from '../../images/home/jumping_jacks_icon.png'
import IconStep from '../../images/home/high_step_icon.png'
import IconAbdominal from '../../images/home/abnormal_crunches_icon.png'
import IconRussian from '../../images/home/russian_twist_icon.png'
import IconClimber from '../../images/home/hill_climbe_icon.png'
import IconBicycle from '../../images/home/bicycle_crunch_icon.png'
import IconHeel from '../../images/home/heel_touch_icon.png'
import IconLeg from '../../images/home/leg_raise_icon.png'
import IconPlank from '../../images/home/plank_icon.png'
import IconCobra from '../../images/home/cobra_stretch_icon.png'
import IconSpine from '../../images/home/spine_twist_icon.png'
import IconPushup from '../../images/home/pushup_icon.png'
import IconSquats from '../../images/home/squats_Icon.png'
// arrow icon name
const icon = 'chevron-forward-circle'

const Works = ({ navigation }) => {

  // data sheet...
  const [data, setData] = useState([
    [1, IconJump, "JUMPING JACKS", icon, Jump, 30, "time", "Start with your feet together and your arms by your sides, then jump up with your feet apart and your hands overhead."],
    [2, IconStep, "HIGH STEPPING", icon, Step, 20, "time", "Run in place while pulling your knees as high as possible with each step. Keep your upper body upright during this exercise"],
    [3, IconAbdominal, "ABDOMINAL CRUNCHES", icon, Abdominal, 30, "task", "Lie on your back with your knees bent and your arms stretched forward. Then lift your upper body off the floor."],
    [4, IconPushup, "TRIANGLE (DIAMOND) PUSH-UPS", icon, TrianglePushup, 35, "task", "Begin in a plank position, with your hands together and angled inward at 45 degrees so that your index fingers and thumbs touch to form a triangle (or diamond). Keep your elbows tight to your body and bend them to lower your chest toward the triangle. Reverse the movement to the starting position for one repetition. Keep the triangle directly below your chest throughout the movement."],
    [5, IconRussian, "RUSSIAN TWIST", icon, Russian, 40, "task", "Sit on the floor with your knees bent, feet lifted a little bit and back tilted backwards. Then hold your hands together and twist from side to side."],
    [6, IconClimber, "MOUNTAIN CLIMBER", icon, Climber, 30, "task", "Start in the Push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to the other."],
    [7, IconBicycle, "STANDING BICYCLE CRUNCHES", icon, Bicycle, 40, "task", "Stand with your feet shoulder width apart. Bring your knee to your opposite elbow. Return to the start position and repeat with the other side."],
    [8, IconHeel, "HEEL TOUCH", icon, Heel, 40, "task", "Lie on the ground with your legs bent and your arms by your sides. Slightly lift your upper body off the floor and make your hands alternately reach your heels."],
    [9, IconLeg, "LEG RAISES", icon, Leg, 30, "task", "Lie down on your back, and put your hands beneath your hips for support. Then lift your legs up until they form a right angle with the floor. Slowly bring your legs down and repeat the exercise"],
    [10, IconPlank, "PLANK", icon, Plank, 30, "time", "Lie on the floor with your toes and forearms on the ground. Keep your body straight and hold this position as long as you can."],
    [11, IconCobra, "COBRA STRETCH", icon, Cobra, 30, "time", "Lie down on your stomach and bend your elbows with your hands beneath your shoulders. Then push your chest up off the ground as for as possible"],
    [12, IconSpine, "SPINE LUMBAR TWIST", icon, Spine, 30, "time", "Lie on your back with your legs extended. Lift your left leg up and use your right hand to pull your left knee to the right, but keep your other arm extended to the side on the floor."],
    [13, IconPushup, "SPIDERMAN PUSH-UPS", icon, SpiderPushup, 35, "time", "Keeping your elbows in towards your ribs, bend at the elbows to lower your body towards the floor. At the same time as you lower into the push up, pick up your left foot and draw your left knee in towards your left elbow, without touching the left leg on the floor. Keeping your body tensed, to move it up away from the floor. Extend your left leg out behind you and place it down next to your right leg."],
    [14, IconSquats, "SQUAT", icon, Squats, 30, "time", "Stand up with your feet shoulder-width apart. Bend your knees, press your hips back and stop the movement once the hip joint is slightly lower than the knees. Press your heels into the floor to return to the initial position. Repeat until set is complete. Proper Form And Breathing Pattern."],
  ])



  return (
    <View style={{ flexDirection: 'column', flex: 1, backgroundColor: 'white' }}>

      <Header title="Daily Workouts for Home" nav={navigation.goBack} />

      <ImageBackground style={styles.background}
        source={require('../../images/home/slide.jpg')}
        resizeMode="cover"
        imageStyle={{
          backgroundColor: 'black',
          opacity: 0.5
        }}>
        <Text style={{
          color: 'white',
          position: 'absolute',
          bottom: 20, left: 20,
          fontWeight: 'bold',
          fontSize: 18
        }}>Daily Workouts</Text>
      </ImageBackground>




      <ScrollView >

        <View style={{ borderBottomWidth: 1, paddingVertical: 10, alignItems: 'center', borderBottomColor: '#469433', backgroundColor: 'white' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>25 mins, 14 workouts</Text>
        </View>


        {data.map((val) => {
          return (
            <ActivityCard
              key={val[0]}
              ActivityIcon={val[1]}
              txt={val[2]}
              icon={val[3]}
              img={val[4]}
              duration={val[5]}
              type={val[6]}
              description={val[7]}
              nav={navigation}
            />
          )
        })}

      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 200,
    marginBottom: 5
  }
});







// navigation....
import Description from './ActivityDescription';
import Activity from './Activity';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Workouts = () => {
  return (
    <Stack.Navigator initialRouteName="Works" >
      <Stack.Screen name="Works" component={Works} options={{ headerShown: false }} />
      <Stack.Screen name="Description" component={Description} options={{ headerShown: false }} />
      <Stack.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default Workouts;