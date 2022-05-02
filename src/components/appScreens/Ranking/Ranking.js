import { Text, View, FlatList } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import styles from './style'
import firestore from '@react-native-firebase/firestore'


const Ranking = () => {
  const [allUsers, setAllUsers] = useState([])

  const getRanking = async () => {
    try {
      const querySnap = await firestore().collection('users').orderBy('age', 'desc').limit(10).get();
      const ActiveUser = querySnap.docs
        .map((docsnap) => docsnap.data());
      setAllUsers(ActiveUser)
      console.log(ActiveUser)
    } catch (e) {
      alert("Please Check Your Internet Connection")
    }
  }
  const renderItem = ({ item, index }) => {
    return (
      <View style={{margin:10,justifyContent: 'center'}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-between',padding:10,backgroundColor: '#f0f0f0',height:60}}>
          <View style={{flexDirection: 'row',alignItems: 'center'}}>
            <Text style={{alignSelf: 'center',color:'grey',fontSize:16,paddingLeft:4}}>{index+1}.</Text>
            <Text style={{alignSelf: 'center',fontWeight: 'bold',color:'black',fontSize:16,paddingLeft:10}}>{item.name}</Text>
          </View>

          <Text style={{alignSelf: 'center',fontWeight: 'bold',color:'black',fontSize:18}}>{item.age}</Text>
        </View>

      </View>
    )
  }
  useEffect(() => {
    getRanking()
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={allUsers}
        renderItem={renderItem}
      />

    </View>
  )
}

export default Ranking
