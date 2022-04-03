import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, TextInput, StyleSheet, Image } from 'react-native';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Ionicons'
import userImg from '../../../images/user_icon.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Message from './Messages';

import { YellowBox } from 'react-native';
// ignoring warning
YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

class UserList extends React.Component {
  state = {
    user: {
      name: this.props.route.params.user.displayName,
      email: this.props.route.params.user.email,
      profilePic: this.props.route.params.user.photoURL,
      uid: this.props.route.params.user.uid
    },
    allUsers:'',
    message:'',
    recommendations:[],
    counter: -1
  }

  
  componentDidMount(){
    if(this.state.user.profilePic=='expert'){
      this.getMessages()
    }else if(this.state.user.profilePic=='user'){
      this.getAllUsers()
    }
  }


  sendMsg = () =>{
    database().ref('/').child(`recommendations/${this.state.user.uid}`).push({
      message: this.state.message,
      name: this.state.user.name,
      uid: this.state.user.uid
    })
    this.state.message=''
    // this.setState({
    //   message:''
    // })
  }

  getMessages = () => {
    database().ref('/').child(`recommendations/${this.state.user.uid}`).on('child_added', (m) => {
      this.state.recommendations.push(m.val())
      this.setState({
        recommendations: this.state.recommendations
      })
    })
  }

  getAllUsers = () => {
    let userList = []
    database().ref('/').child('users').on('child_added', (d) => {
      userList.push(d.val())
      this.setState({
        allUsers: userList
      })
    })
  }


  render() {
    // console.log(this.state.allUsers)
    return (
      <View style={styles.container}>
        {/* ======= header ========= */}
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={25}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />

          <Image style={styles.usrImg} source={userImg} />

          <Text
            ellipsizeMode='tail'
            numberOfLines={1}
            style={styles.headerTxt}>{this.state.user.name}</Text>
        </View>

        <ScrollView>
        {
          this.state.allUsers != "" && this.state.user.profilePic=='user' ?
          this.state.allUsers.map((val, key) => {
            if(val.uid != this.state.user.uid && val.profilePic=='expert'){
              this.state.counter = this.state.counter+1
              return (
                <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('Message',{'chatUser':val, 'crrUser':this.state.user})}
                  key={key} 
                  style={styles.userCard}>
                    <View style={{flexDirection:"row", alignItems:'center'}}>
                  <Image style={styles.usrImg} source={userImg} />
                  <Text style={{ marginLeft: 20, color: '#404040', }}>
                    Expert ({val.name})
                  </Text>
                  </View>
                  <Icon name="chevron-forward-circle" size={25} color="#469433" />
                </TouchableOpacity>
              )
            }
              
            })
            :
            null
        }

        {
          this.state.user.profilePic=='expert'?
          <Text style={{color:'gray', textAlign: 'center', fontSize:12}}>Type and Send Recommendations to all Users</Text>:
          null
        }
        
        {
            this.state.recommendations != [] && this.state.user.profilePic=='expert' ?
              this.state.recommendations.map((v, k) => {
                return (
                  <View style={styles.recommend} key={k}>
                    <Text style={styles.recommendTxt}>{v.message}</Text>
                  </View>
                )
              }) : null
          }
          </ScrollView>

        {
          this.state.user.profilePic=='expert'?
          <View style={styles.msgBox}>
          <TextInput
            placeholder="Type Recommendation Here..."
            style={styles.inputMsg}
            value={this.state.message}
            onChangeText={(t) => this.setState({
              message: t
            })}
          />
          <Icon onPress={() => this.sendMsg()} name="send" size={25} color="#007fcb" />
        </View>
        :
        null
        }

      </View>
    )
  }
}



const Stack = createNativeStackNavigator();
function Chats(props) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserList} initialParams={{'user': props.route.params.user}} options={{headerShown:false}}/>
        <Stack.Screen name="Message" component={Message} options={{headerShown:false}}/>
      </Stack.Navigator>
  );
}

export default Chats;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007fcb',
    height: 60,
    paddingLeft: 15,
    elevation: 8,
    marginBottom:10
  },
  usrImg: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 80,
    marginLeft: 10,
    tintColor: 'gray'
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    width: Dimensions.get('window').width,
    elevation: 3,
    marginVertical: 5
  },
  headerTxt: {
    color: '#fff',
    fontWeight: 'bold',
    width: '80%',
    fontSize: 17,
    marginLeft: 20
  },
  msgBox: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: "#d0d0d0",
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#007fcb'
  },
  inputMsg: {
    flex: 1,
    marginRight: 15
  },
  recommend: {
    backgroundColor: '#007fcb',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    width: '70%',
    alignSelf:'flex-end'
  },
  recommendTxt: {
    color: 'white',
  },

})

// #469433
// #007fcb

