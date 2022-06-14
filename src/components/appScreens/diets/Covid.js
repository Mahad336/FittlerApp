import React, { useState } from "react";
import { View, Text ,ScrollView} from 'react-native'
// import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header";

const Covid = ({ navigation, route }) => {
    const [data, setData] = useState(route.params.data)
    console.log(data)

    return (
        <View style={{ flex: 1 }}>
            <Header title={route.params.cat} nav={navigation.goBack} />

        {
            data != ""?
            <ScrollView>
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>
                Better food items to eat:
            </Text>
            {
                data.diets.map((v, k) => {
                    return (
                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 3 }} key={k}>
                            <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>{v}</Text>
                        </View>
                    )
                })
            }

            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>
                Note Other Necessary Things:
            </Text>
            {
                data.note.map((v, k) => {
                    return (
                        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 3 }} key={k}>
                            <Text style={{fontSize:10, marginTop:3}}>{'\u2B24'}</Text>
                            <Text style={{ fontSize: 16, marginLeft: 10 }}>{v}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>:
        <Text style={{textAlign:'center', marginTop:20}}>No Data Found, Please Check Your Internet.</Text>
        }
            
        </View>
    )
}

export default Covid;